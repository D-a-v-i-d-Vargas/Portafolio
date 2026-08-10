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
        footer_rights: "All rights reserved - 2026"
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

        // A. Traducir contenido interno de texto (HTML / TextContent)
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
                
                if (element.hasAttribute('data-text')) {
                    element.setAttribute('data-text', translations[lang][key]);
                }
            }
        });

        // B. Traducir los atributos placeholder de los Inputs y Textareas
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

    // Cargar idioma guardado o predeterminado
    setLanguage(localStorage.getItem('preferred_lang') || 'es');

    // ---------------- 2. CARRUSEL DE HERRAMIENTAS ----------------
    const track = document.getElementById('tools-track');
    const prevBtn = document.getElementById('tools-prev');
    const nextBtn = document.getElementById('tools-next');

    if (track && prevBtn && nextBtn) {
        const scrollAmount = 320;
        nextBtn.addEventListener('click', () => track.scrollBy({ left: scrollAmount, behavior: 'smooth' }));
        prevBtn.addEventListener('click', () => track.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
    }

    // ---------------- 3. ANIMACIÓN DE APARICIÓN EN SCROLL MULTIDIRECCIONAL ----------------
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

    // ---------------- 4. NAVEGACIÓN MÓVIL (MENÚ HAMBURGUESA) ----------------
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