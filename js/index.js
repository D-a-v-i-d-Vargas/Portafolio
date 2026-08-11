// =======================================================================
// 1. DICCIONARIO DE DATOS (Mantenimiento centralizado de i18n)
// =======================================================================
const translations = {
    es: {
        // Navegación y Botones Globales
        nav_inicio: "Inicio",
        nav_sobre_mi: "Sobre Mí",
        nav_portafolio: "Portafolio",
        nav_contacto: "Contáctame",
        nav_habilidades: "Habilidades",
        btn_idioma: "English",
        
        // Sección: Hero
        hero_btn: "VER MIS PROYECTOS",
        
        // Sección: Sobre Mí
        about_label: "SOBRE MÍ",
        about_heading: "Transformando Operaciones y CX en Software Escalable",
        about_desc1: "El mejor servicio al cliente es un producto digital que no presenta fallos. Tras dominar la gestión de operaciones y el ciclo de vida del usuario, mi enfoque en la ingeniería de software radica en construir sistemas robustos y aplicaciones SaaS que revolucionen la interacción digital. No solo escribo código; arquitecto soluciones centradas en minimizar la fricción cognitiva y maximizar la retención.",
        about_link: "Más sobre mí",
        stat_years: "Años <br>optimizando CX",
        stat_focus: "Enfoque en<br>Escalabilidad",
        about_desc2: "Especializado en ecosistemas Java y JavaScript, desarrollo plataformas B2C y arquitecturas backend seguras. Mi objetivo es cerrar la brecha entre bases de datos relacionales eficientes e interfaces intuitivas de alto rendimiento.",
        
        // Sección: Habilidades
        skills_label: "COMPETENCIAS FUNDAMENTALES",
        skills_heading: "Pila tecnológica y enfoque de ingeniería",
        skill_1_title: "Java y Arquitectura de Backend",
        skill_1_desc: "Desarrollar sistemas y API del lado del servidor robustos y escalables, utilizando principios orientados a objetos para garantizar una alta disponibilidad y eficiencia lógica.",
        skill_2_title: "Ingeniería de JavaScript e Interfaz de usuario",
        skill_2_desc: "Diseño de experiencias dinámicas y fluidas del lado del cliente. Implementación de manipulaciones del DOM e integraciones seguras de API para minimizar la carga cognitiva.",
        skill_3_title: "SQL y Modelado de datos",
        skill_3_desc: "Diseñar bases de datos relacionales, ejecutar consultas complejas y garantizar la integridad de los datos para el análisis operativo y las plataformas transaccionales.",
        skill_4_title: "Control de calidad y Desarrollo seguro",
        skill_4_desc: "Realizar pruebas de estrés técnicas, depurar flujos de trabajo complejos y aplicar prácticas básicas de ciberseguridad para crear arquitecturas impenetrables.",
        
        // Sección: Portafolio
        portfolio_label: "MI PORTAFOLIO",
        portfolio_heading: "Echa un vistazo a los últimos proyectos que he construido",
        portfolio_link: "Explorar mi GitHub",
        tag_fullstack: "Full Stack Java",
        tag_ecommerce: "Comercio Electrónico",
        tag_hackaton: "Hackaton",
        port_1_title: "El Toro Forrajero: Plataforma E-Commerce B2C",
        port_2_title: "Punto Adiona: Desarrollo Ágil en Hackaton",
        btn_repo: "Ver Repositorio",
        port_1_client: "Plataforma B2C",
        port_2_client: "Prototipado rápido",
        
        // Sección: Footer
        footer_cta_title: "¿ESTÁS LISTO<br>PARA EMPEZAR?",
        footer_cta_text: "¡Hablemos de tu proyecto!",
        footer_cta_link: "Contáctame",
        footer_sub_text: "Explora mis repositorios:",
        footer_sub_link1: "Proyectos Open Source",
        footer_sub_link2: "Librerías",
        footer_pages_title: "PÁGINAS",
        footer_lang_title: "IDIOMAS",
        footer_lang_es: "Español",
        footer_lang_en: "Inglés",
        footer_copyright: "Todos los derechos reservados - 2026"
    },
    en: {
        // Navigation & Global Buttons
        nav_inicio: "Home",
        nav_sobre_mi: "About Me",
        nav_portafolio: "Portfolio",
        nav_contacto: "Contact",
        nav_habilidades: "Skills",
        btn_idioma: "Español",
        
        // Section: Hero
        hero_btn: "VIEW MY PROJECTS",
        
        // Section: About Me
        about_label: "ABOUT ME",
        about_heading: "Transforming Operations and CX into Scalable Software",
        about_desc1: "Great customer service begins with software that doesn't frustrate the user. Bridging my operational background with modern web technologies, my focus in software engineering is building robust systems and SaaS applications that revolutionize digital interaction. I don't just write code; I architect solutions centered on minimizing cognitive load and maximizing retention.",
        about_link: "More about me",
        stat_years: "Years <br>optimizing CX",
        stat_focus: "Focus on<br>Scalability",
        about_desc2: "Specializing in Java and JavaScript ecosystems, I develop B2C platforms and secure backend architectures. My goal is to bridge the gap between efficient relational databases and intuitive, high-performance interfaces.",
        
        // Section: Skills
        skills_label: "CORE COMPETENCIES",
        skills_heading: "Tech stack & engineering approach",
        skill_1_title: "Java & Backend Architecture",
        skill_1_desc: "Develop robust and scalable server-side systems and APIs, utilizing object-oriented principles to ensure high availability and logical efficiency.",
        skill_2_title: "JavaScript Engineering & UI",
        skill_2_desc: "Design dynamic and seamless client-side experiences. Implement DOM manipulations and secure API integrations to minimize cognitive load.",
        skill_3_title: "SQL & Data Modeling",
        skill_3_desc: "Design relational databases, execute complex queries, and ensure data integrity for operational analysis and transactional platforms.",
        skill_4_title: "QA & Secure Development",
        skill_4_desc: "Conduct technical stress testing, debug complex workflows, and apply foundational cybersecurity practices to build impenetrable architectures.",
        
        portfolio_label: "MY PORTFOLIO",
        portfolio_heading: "Take a look at the latest projects I've built",
        portfolio_link: "Explore my GitHub",
        tag_fullstack: "Full Stack Java",
        tag_ecommerce: "E-Commerce",
        tag_hackaton: "Hackathon",
        port_1_title: "El Toro Forrajero: B2C E-Commerce Platform",
        port_2_title: "Punto Adiona: Agile Hackathon Development",
        btn_repo: "View Repository",
        port_1_client: "B2C Platform",
        port_2_client: "Rapid Prototyping",
        
        // Section: Footer
        footer_cta_title: "READY TO<br>GET STARTED?",
        footer_cta_text: "Let's talk about your project!",
        footer_cta_link: "Contact me",
        footer_sub_text: "Explore my repositories:",
        footer_sub_link1: "Open Source Projects",
        footer_sub_link2: "Libraries",
        footer_pages_title: "PAGES",
        footer_lang_title: "LANGUAGES",
        footer_lang_es: "Spanish",
        footer_lang_en: "English",
        footer_copyright: "All rights reserved - 2026"
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
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
                
                /* Inyecté esta línea clave: si el elemento tiene un atributo "data-text"
                (usado por nuestro nuevo botón animado en CSS), también lo actualiza 
                dinámicamente para que la animación CSS muestre el idioma correcto.*/
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

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const currentLang = localStorage.getItem('preferred_lang') || 'es';
            setLanguage(currentLang === 'es' ? 'en' : 'es');
        });
    }

    if (btnEs) btnEs.addEventListener('click', (e) => { e.preventDefault(); setLanguage('es'); });
    if (btnEn) btnEn.addEventListener('click', (e) => { e.preventDefault(); setLanguage('en'); });

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