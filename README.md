# 🌐 David Vargas — Web Developer Portfolio

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![EmailJS](https://img.shields.io/badge/EmailJS-FF6C37?style=for-the-badge&logo=mail.ru&logoColor=white)](https://www.emailjs.com/)

A modern, fully responsive personal portfolio website showcasing web development projects, technical skills, and background information. Built with modern web technologies, multi-layered parallax visual effects, internationalization (ES/EN) support, and an active contact form integration powered by EmailJS.

---

## 📌 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Configuration](#-configuration)
- [Contact & Links](#-contact--links)
- [License](#-license)

---

## ✨ Features

* **Multi-Language Support (i18n):** Real-time language toggle switching between **Spanish** and **English** with persistent selection saved in `localStorage`.
* **Interactive Contact Form:** Direct message submission via **EmailJS** API without page reloads or external redirections.
* **Responsive & Adaptive Design:** Optimized across mobile, tablet, and desktop viewports with tailored navigation controls.
* **Multi-layer Parallax Hero:** Layered visual aesthetics creating depth on scroll/load.
* **Modular Codebase:** Organized file structure separating layout, presentation, and script logic.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Flexbox, CSS Grid, Custom Properties)
* **Scripting:** Vanilla JavaScript (ES6+)
* **Icons & UI:** FontAwesome 6.5.1
* **Email Service:** EmailJS SDK Integration
* **Hosting / Deployment:** GitHub Pages Compatible

---

## 📁 Project Structure

```text
.
├── assets/
│   ├── logos/             # Dark and light brand logo variants
│   └── contac/            # Parallax hero background layers
├── css/
│   ├── about.css          # Main stylesheet and dynamic layouts
│   └── contact.css        # Specific contact card and form styles
├── js/
│   ├── about.js           # Shared interface scripts
│   └── contac.js          # Contact form logic, i18n dictionary & EmailJS handling
├── index.html             # Landing page
├── about.html             # About me page
├── portafolio.html        # Projects showcase page
├── contac.html            # Contact page with interactive form
└── README.md              # Project documentation
