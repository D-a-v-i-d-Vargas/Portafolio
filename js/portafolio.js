// ==========================================
// 1. DICCIONARIO DE TRADUCCIONES (i18n)
// ==========================================
const translations = {
    es: {
        nav_inicio: "Inicio",
        nav_sobre_mi: "Sobre Mí",
        nav_portafolio: "Portafolio",
        nav_contacto: "Contáctame",
        
        port_title: "Portafolio",
        port_subtitle: "Proyectos destacados donde he aplicado soluciones de código escalable, arquitectura frontend y optimización de experiencia de usuario.",
        
        /* Etiquetas y Títulos de Proyectos */
        tag_js: "JavaScript",
        tag_ecommerce: "E-Commerce",
        tag_java: "Java Full Stack",
        tag_sql: "SQL & Dashboard",
        proj_toro_title: "Plataforma E-commerce B2C & Catálogo Digital",
        proj_adiona_title: "Sistema Web de Gestión Operativa & Métricas CX",
        proj_view_btn: "Ver Proyecto →",
        
        /* Footer */
        footer_cta: "¡CONSTRUYAMOS ALGO ESCALABLE!",
        footer_text: "¡Hablemos de tu proyecto, enviame un email!",
        footer_pages: "PÁGINAS",
        footer_langs: "IDIOMAS",
        footer_rights: "Todos los derechos reservados - 2026"
    },
    en: {
        nav_inicio: "Home",
        nav_sobre_mi: "About Me",
        nav_portafolio: "Portfolio",
        nav_contacto: "Contact Me",
        
        port_title: "Portfolio",
        port_subtitle: "Featured projects showcasing scalable code solutions, frontend architecture, and user experience optimization.",
        
        /* Etiquetas y Títulos de Proyectos */
        tag_js: "JavaScript",
        tag_ecommerce: "E-Commerce",
        tag_java: "Java Full Stack",
        tag_sql: "SQL & Dashboard",
        proj_toro_title: "B2C E-commerce Platform & Digital Catalog",
        proj_adiona_title: "Operational Management & CX Metrics Web System",
        proj_view_btn: "View Project →",
        
        /* Footer */
        footer_cta: "LET'S BUILD SOMETHING SCALABLE!",
        footer_text: "Let's talk about your project, send me an email!",
        footer_pages: "PAGES",
        footer_langs: "LANGUAGES",
        footer_rights: "All rights reserved - 2026"
    }
};

/* ================= LÓGICA PRINCIPAL ================= */
document.addEventListener('DOMContentLoaded', () => {

    // Agregar clase para animaciones de reveal solo si JS está habilitado
    document.body.classList.add('js-enabled');

    // ---------------- 1. SISTEMA DE TRADUCCIÓN E IDIOMA (i18n) ----------------
    const langToggleBtn = document.getElementById('lang-toggle');
    const btnEs = document.getElementById('lang-es');
    const btnEn = document.getElementById('lang-en');

    function setLanguage(lang) {
        if (!translations[lang]) return;
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
                
                // Actualización para atributos data-text (usados en animaciones CSS complejas)
                if (element.hasAttribute('data-text')) {
                    element.setAttribute('data-text', translations[lang][key]);
                }
            }
        });

        if (langToggleBtn) {
            langToggleBtn.textContent = lang === 'es' ? 'ENGLISH' : 'ESPAÑOL';
        }
        localStorage.setItem('preferred_lang', lang);
    }

    // Toggle principal (Botón del header)
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const currentLang = localStorage.getItem('preferred_lang') || 'es';
            setLanguage(currentLang === 'es' ? 'en' : 'es');
        });
    }

    // Enlaces del footer
    if (btnEs) btnEs.addEventListener('click', (e) => { e.preventDefault(); setLanguage('es'); });
    if (btnEn) btnEn.addEventListener('click', (e) => { e.preventDefault(); setLanguage('en'); });

    // Carga inicial
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
});

// ---------------- 4. EFECTO FOCO DINÁMICO (RADIAL GLOW SPOTLIGHT) ----------------
// Se aplica al contenedor 'main' que tiene la clase
const glowSections = document.querySelectorAll('main.radial-glow');

glowSections.forEach(section => {
    section.addEventListener('mousemove', (e) => {
        // Se calcula basándose estrictamente en el contenedor <main>
        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        section.style.setProperty('--mouse-x', `${x}px`);
        section.style.setProperty('--mouse-y', `${y}px`);
    });
});