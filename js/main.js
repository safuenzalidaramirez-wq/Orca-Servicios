// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Envío de cotización por WhatsApp
const enviarBtn = document.getElementById('enviarBtn');

enviarBtn.addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const servicio = document.getElementById('servicio').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Validación
    if (!nombre || !email || !telefono) {
        alert('Por favor completa todos los campos obligatorios');
        return;
    }
    
    // Crear mensaje para WhatsApp
    const textoWA = `🔧 Nueva Cotización

Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono}
Servicio: ${servicio}

Mensaje:
${mensaje}`;
    
    // IMPORTANTE: Cambia este número por el tuyo
    const numeroWhatsApp = '56984174739'; // <-- TU NÚMERO AQUÍ
    
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWA)}`;
    
    // Abrir WhatsApp
    window.open(urlWhatsApp, '_blank');
    
    // Mensaje de confirmación
    alert('¡Gracias! Serás redirigido a WhatsApp');
    
    // Limpiar formulario
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('servicio').selectedIndex = 0;
    document.getElementById('mensaje').value = '';
});

// Animaciones al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});
