document.addEventListener("DOMContentLoaded", () => {

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
            proj_toro_title: "Plataforma E-commerce B2C & Catálogo Digital",
            proj_adiona_title: "Sistema Web de Gestión Operativa & Métricas CX",
            proj_view_btn: "Ver Proyecto →",
            footer_cta: "¡CONSTRUYAMOS ALGO ESCALABLE!",
            footer_rights: "Todos los derechos reservados - 2026"
        },
        en: {
            nav_inicio: "Home",
            nav_sobre_mi: "About Me",
            nav_portafolio: "Portfolio",
            nav_contacto: "Contact Me",
            port_title: "Portfolio",
            port_subtitle: "Featured projects showcasing scalable code solutions, frontend architecture, and user experience optimization.",
            proj_toro_title: "B2C E-commerce Platform & Digital Catalog",
            proj_adiona_title: "Operational Management & CX Metrics Web System",
            proj_view_btn: "View Project →",
            footer_cta: "LET'S BUILD SOMETHING SCALABLE!",
            footer_rights: "All rights reserved - 2026"
        }
    };

    // ==========================================
    // 2. ELEMENTOS DEL DOM Y ESTADO
    // ==========================================
    const langToggleBtn = document.getElementById("lang-toggle");
    const langEsBtn = document.getElementById("lang-es");
    const langEnBtn = document.getElementById("lang-en");

    // Leer el idioma guardado previamente o usar 'es' por defecto
    let currentLang = localStorage.getItem("preferredLang") || "es";

    // Función principal para cambiar el idioma de la interfaz
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem("preferredLang", lang);
        document.documentElement.lang = lang;

        // Traducir todos los elementos con el atributo data-i18n
        const elementsToTranslate = document.querySelectorAll("[data-i18n]");
        elementsToTranslate.forEach((element) => {
            const key = element.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Actualizar el texto del botón principal del nav
        if (langToggleBtn) {
            langToggleBtn.textContent = lang === "es" ? "ENGLISH" : "ESPAÑOL";
        }
    }

    // Inicializar idioma al cargar la página
    setLanguage(currentLang);

    // ==========================================
    // 3. LISTENERS DE EVENTOS (BOTONES)
    // ==========================================

    // Botón principal en el Header
    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            const newLang = currentLang === "es" ? "en" : "es";
            setLanguage(newLang);
        });
    }

    // Enlace "Español" en el Footer
    if (langEsBtn) {
        langEsBtn.addEventListener("click", (e) => {
            e.preventDefault();
            setLanguage("es");
        });
    }

    // Enlace "Inglés" en el Footer
    if (langEnBtn) {
        langEnBtn.addEventListener("click", (e) => {
            e.preventDefault();
            setLanguage("en");
        });
    }

    // ==========================================
    // 4. NAVEGACIÓN MÓVIL (MENÚ HAMBURGUESA)
    // ==========================================
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const headerContainer = document.querySelector(".header-container");

    if (mobileMenuBtn && headerContainer) {
        mobileMenuBtn.addEventListener("click", () => {
            headerContainer.classList.toggle("nav-active");
        });
    }

    // ==========================================
    // 5. EFECTO PARALLAX DE PORTADA
    // ==========================================
    const parallaxLayers = document.querySelectorAll(".parallax-layer");

    if (parallaxLayers.length > 0) {
        window.addEventListener("scroll", () => {
            const scrollValue = window.scrollY;
            parallaxLayers.forEach((layer, index) => {
                const speed = (index + 1) * 0.12;
                layer.style.transform = `translateY(${scrollValue * speed}px)`;
            });
        });
    }
});