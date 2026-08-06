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
        localStorage.setItem('preferredLang', lang);
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

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

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const currentLang = localStorage.getItem('preferredLang') || 'es';
            const newLang = currentLang === 'es' ? 'en' : 'es';
            setLanguage(newLang);
        });
    }

    if (langEsBtn) {
        langEsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage('es');
        });
    }

    if (langEnBtn) {
        langEnBtn.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage('en');
        });
    }

    const savedLang = localStorage.getItem('preferredLang') || 'es';
    setLanguage(savedLang);

    // ==========================================
    // NUEVO: Efecto Radial Glow Mouse Tracker
    // ==========================================
    const radialGlow = document.querySelector('.radial-glow');
    if(radialGlow) {
        document.addEventListener('mousemove', (e) => {
            const rect = radialGlow.getBoundingClientRect();
            // Calcular la posición relativa del ratón respecto al contenedor
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Inyectar las variables CSS
            radialGlow.style.setProperty('--mouse-x', `${x}px`);
            radialGlow.style.setProperty('--mouse-y', `${y}px`);
        });
    }

    // ==========================================
    // Animación Reveal al hacer Scroll
    // ==========================================
    const reveals = document.querySelectorAll('.reveal');
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        
        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Llamar una vez al cargar
});

// Manejo del envío del formulario con EmailJS
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = this.querySelector('.contact-submit-btn span');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';

        emailjs.sendForm('service_vbxb515', 'template_yxy2lo5', this)
            .then(() => {
                alert('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.');
                contactForm.reset();
                submitBtn.textContent = originalText;
            }, (error) => {
                alert('Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.');
                console.error('EmailJS Error:', error);
                submitBtn.textContent = originalText;
            });
    });
}