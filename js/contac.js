document.addEventListener('DOMContentLoaded', () => {
    
    // Diccionario de traducciones mapeado a tus atributos data-i18n
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
            form_email: "Ingresa tu correo electrónico",
            form_subject: "Asunto",
            form_message: "Escribe tu mensaje",
            form_submit: "Contáctame",
            footer_cta: "¡CONSTRUYAMOS ALGO ESCALABLE!",
            footer_rights: "Todos los derechos reservados - 2026"
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
            form_email: "Your email address",
            form_subject: "Subject",
            form_message: "Write me a message",
            form_submit: "Contact me",
            footer_cta: "LET'S BUILD SOMETHING SCALABLE!",
            footer_rights: "All rights reserved - 2026"
        }
    };

    // Selección de elementos
    const langToggleBtn = document.getElementById('lang-toggle');
    const langEsBtn = document.getElementById('lang-es');
    const langEnBtn = document.getElementById('lang-en');

    /**
     * Aplica la traducción correspondiente al idioma seleccionado
     * @param {string} lang - 'es' o 'en'
     */
    function setLanguage(lang) {
        // Guardar preferencia local y actualizar atributo HTML
        localStorage.setItem('preferredLang', lang);
        document.documentElement.lang = lang;

        // Actualizar todos los elementos con data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Actualizar el texto del botón principal del header
        if (langToggleBtn) {
            if (lang === 'es') {
                langToggleBtn.textContent = 'ENGLISH';
                langToggleBtn.setAttribute('data-lang', 'es');
            } else {
                langToggleBtn.textContent = 'ESPAÑOL';
                langToggleBtn.setAttribute('data-lang', 'en');
            }
        }
    }

    // Evento: Botón alternador del Header
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const currentLang = localStorage.getItem('preferredLang') || 'es';
            const newLang = currentLang === 'es' ? 'en' : 'es';
            setLanguage(newLang);
        });
    }

    // Evento: Opción Español del Footer
    if (langEsBtn) {
        langEsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage('es');
        });
    }

    // Evento: Opción Inglés del Footer
    if (langEnBtn) {
        langEnBtn.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage('en');
        });
    }

    // Inicialización: Cargar idioma guardado o español por defecto
    const savedLang = localStorage.getItem('preferredLang') || 'es';
    setLanguage(savedLang);
});

// Manejo del envío del formulario con EmailJS
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Cambiar texto del botón a "Enviando..."
        const submitBtn = this.querySelector('.contact-submit-btn span');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';

        emailjs.sendForm('service_vbxb515', 'template_yxy2lo5', this)
            .then(() => {
                alert('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.');
                contactForm.reset(); // Limpiar campos
                submitBtn.textContent = originalText;
            }, (error) => {
                alert('Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.');
                console.error('EmailJS Error:', error);
                submitBtn.textContent = originalText;
            });
    });
}