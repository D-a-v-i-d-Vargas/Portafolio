/* ================= DICCIONARIO DE TRADUCCIONES ================= */
const translations = {
    es: {
        nav_inicio: "Inicio",
        nav_sobre_mi: "Sobre Mí",
        nav_portafolio: "Portafolio",
        nav_contacto: "Contáctame",
        contact_title: "Trabajemos juntos",
        contact_subtitle: "¡Contacta conmigo!",
        contact_desc: "¿Tienes un proyecto en mente o quieres crear algo escalable? Envíame un mensaje y nos pondremos en contacto a la brevedad.",
        form_name: "Ingresa tu nombre",
        placeholder_name: "Tu nombre",
        form_email: "Ingresa tu correo electrónico",
        placeholder_email: "tu@email.com",
        form_subject: "Asunto",
        placeholder_subject: "Asunto del mensaje",
        form_message: "Escribe tu mensaje",
        placeholder_message: "Escribe tu mensaje...",
        form_submit: "Contáctame",
        footer_cta: "¡CONSTRUYAMOS ALGO ESCALABLE!",
        footer_text: "¡Hablemos de tu proyecto, enviame un email!",
        footer_pages: "PÁGINAS",
        footer_languages: "IDIOMAS",
        footer_lang_es: "Español",
        footer_lang_en: "Inglés",
        footer_rights: "Todos los derechos reservados - 2026",
        /* Nuevas traducciones para las alertas */
        alert_success: "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo lo antes posible.",
        alert_error: "Hubo un error al enviar tu mensaje. Por favor, inténtalo nuevamente."
    },
    en: {
        nav_inicio: "Home",
        nav_sobre_mi: "About Me",
        nav_portafolio: "Portfolio",
        nav_contacto: "Contact Me",
        contact_title: "Let's work together",
        contact_subtitle: "Get in touch with me!",
        contact_desc: "Do you have a project in mind or want to create something scalable? Send me a message and I'll get in touch shortly.",
        form_name: "Enter your name",
        placeholder_name: "Your name",
        form_email: "Your email address",
        placeholder_email: "your@email.com",
        form_subject: "Subject",
        placeholder_subject: "Message subject",
        form_message: "Write me a message",
        placeholder_message: "Write your message...",
        form_submit: "Contact me",
        footer_cta: "LET'S BUILD SOMETHING SCALABLE!",
        footer_text: "Let’s talk about your project, send me an email!",
        footer_pages: "PAGES",
        footer_languages: "LANGUAGES",
        footer_lang_es: "Spanish",
        footer_lang_en: "English",
        footer_rights: "All rights reserved - 2026",
        /* Nuevas traducciones para las alertas */
        alert_success: "Message sent successfully! We will get in touch with you as soon as possible.",
        alert_error: "There was an error sending your message. Please try again."
    }
};

/* ================= LÓGICA PRINCIPAL ================= */
document.addEventListener('DOMContentLoaded', () => {

    document.body.classList.add('js-enabled');

    // ---------------- 1. SISTEMA DE TRADUCCIÓN E IDIOMA (i18n) ----------------
    const langToggleBtn = document.getElementById('lang-toggle');
    const btnEs = document.getElementById('lang-es');
    const btnEn = document.getElementById('lang-en');

    function setLanguage(lang) {
        if (!translations[lang]) return;

        // A. Traducir contenido interno de texto
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
                
                if (element.hasAttribute('data-text')) {
                    element.setAttribute('data-text', translations[lang][key]);
                }
            }
        });

        // B. Traducir los atributos placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        if (langToggleBtn) {
            langToggleBtn.textContent = lang === 'es' ? 'ENGLISH' : 'ESPAÑOL';
        }
        localStorage.setItem('preferred_lang', lang);
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const currentLang = localStorage.getItem('preferred_lang') || 'es';
            setLanguage(currentLang === 'es' ? 'en' : 'es');
        });
    }

    if (btnEs) btnEs.addEventListener('click', (e) => { e.preventDefault(); setLanguage('es'); });
    if (btnEn) btnEn.addEventListener('click', (e) => { e.preventDefault(); setLanguage('en'); });

    setLanguage(localStorage.getItem('preferred_lang') || 'es');

    // ---------------- 2. ANIMACIÓN DE APARICIÓN EN SCROLL MULTIDIRECCIONAL ----------------
    const revealElements = document.querySelectorAll('.reveal, .reveal-down, .reveal-left, .reveal-right');

    if ('IntersectionObserver' in window && revealElements.length > 0) {
        const observerOptions = { threshold: 0.15 };
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('active'));
    }

    // ---------------- 3. NAVEGACIÓN MÓVIL (MENÚ HAMBURGUESA) ----------------
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLeft = document.querySelector('.nav-left');
    const navRight = document.querySelector('.nav-right');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('open');
            if (navLeft) navLeft.classList.toggle('active');
            if (navRight) navRight.classList.toggle('active');
        });
    }

    // ---------------- 4. MANEJO DEL FORMULARIO Y ALERTA (TOAST) ----------------
    const contactForm = document.getElementById('contact-form');
    const customAlert = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    const alertIcon = document.getElementById('alert-icon');
    const submitBtn = contactForm ? contactForm.querySelector('button[type="submit"]') : null;

    function showCustomAlert(type) {
        // Obtener el idioma actual para mostrar el mensaje correcto
        const currentLang = localStorage.getItem('preferred_lang') || 'es';
        const messageKey = type === 'success' ? 'alert_success' : 'alert_error';

        // Inyectar el texto traducido
        alertMessage.textContent = translations[currentLang][messageKey];
        
        // Cambiar estilos de la tarjeta dependiendo del resultado
        customAlert.className = `custom-alert show ${type}`;
        
        if (type === 'success') {
            alertIcon.className = 'fas fa-check-circle';
        } else {
            alertIcon.className = 'fas fa-exclamation-triangle';
        }

        // Ocultar automáticamente después de 5 segundos
        setTimeout(() => {
            customAlert.classList.remove('show');
        }, 5000);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que la página se recargue

            // Cambiar estado visual del botón a "Cargando..."
            const originalBtnContent = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right: 8px;"></i> Enviando...';
            submitBtn.disabled = true;

            // =================================================================
            // INYECCIÓN EMAILJS: Descomenta esto cuando tengas tus IDs reales
            // =================================================================
            /*
            emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', this)
                .then(() => {
                    showCustomAlert('success');
                    contactForm.reset();
                }, (error) => {
                    console.error('Error de EmailJS:', error);
                    showCustomAlert('error');
                })
                .finally(() => {
                    // Restaurar el botón independientemente del resultado
                    submitBtn.innerHTML = originalBtnContent;
                    submitBtn.disabled = false;
                });
            */

            // =================================================================
            // SIMULACIÓN (Borra este bloque setTimeout cuando uses el código real de arriba)
            // =================================================================
            setTimeout(() => {
                showCustomAlert('success'); // Cambia a 'error' para probar la alerta de fallo
                contactForm.reset();
                submitBtn.innerHTML = originalBtnContent;
                submitBtn.disabled = false;
            }, 1500); 
        });
    }

});

// ---------------- 5. EFECTO FOCO DINÁMICO (RADIAL GLOW SPOTLIGHT) ----------------
const glowSections = document.querySelectorAll('.radial-glow');

glowSections.forEach(section => {
    section.addEventListener('mousemove', (e) => {
        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        section.style.setProperty('--mouse-x', `${x}px`);
        section.style.setProperty('--mouse-y', `${y}px`);
    });
});