// Advanced beA4Outlook Website JavaScript - AnwaltSoft.de inspired

// Language translations with extended vocabulary
const translations = {
    de: {
        "Startseite": "Startseite",
        "Über uns": "Über uns", 
        "Leistungen": "Leistungen",
        "Kontakt": "Kontakt",
        "Willkommen bei ": "Willkommen bei ",
        "Die All-in-One E-Mail-Lösung, speziell entwickelt für Anwälte": "Die All-in-One E-Mail-Lösung, speziell entwickelt für Anwälte",
        "Kostenlose Testversion starten": "Kostenlose Testversion starten",
        "Kontakt aufnehmen": "Kontakt aufnehmen",
        "Live Demo ansehen": "Live Demo ansehen",
        "Zufriedene Kunden": "Zufriedene Kunden",
        "% Verfügbarkeit": "% Verfügbarkeit",
        "/7 Support": "/7 Support",
        "beA-Integration": "beA-Integration",
        "Direkter Zugriff auf Ihr beA-Postfach von jedem Gerät aus. Nahtlose Integration in Ihren Arbeitsalltag.": "Direkter Zugriff auf Ihr beA-Postfach von jedem Gerät aus. Nahtlose Integration in Ihren Arbeitsalltag.",
        "Datenschutz": "Datenschutz",
        "Höchste Sicherheitsstandards für sensible Anwaltskommunikation. DSGVO-konform und verschlüsselt.": "Höchste Sicherheitsstandards für sensible Anwaltskommunikation. DSGVO-konform und verschlüsselt.",
        "Synchronisation": "Synchronisation",
        "Automatische Synchronisation aller E-Mails und Anhänge zwischen allen Ihren Geräten.": "Automatische Synchronisation aller E-Mails und Anhänge zwischen allen Ihren Geräten.",
        "Mobilität": "Mobilität",
        "Vollständige Funktionalität auf Smartphone, Tablet und Desktop. Überall einsatzbereit.": "Vollständige Funktionalität auf Smartphone, Tablet und Desktop. Überall einsatzbereit.",
        "beA4Outlook ist Teil des anwaltsoft Datenmanagementsystems und voll integriert in alle Kanzleiprozesse.": "beA4Outlook ist Teil des anwaltsoft Datenmanagementsystems und voll integriert in alle Kanzleiprozesse.",
        "Mehr zu anwaltsoft": "Mehr zu anwaltsoft",
        "Unsere Lösungen": "Unsere Lösungen",
        "E-Mail": "E-Mail",
        "Sicherheit": "Sicherheit",
        "Integration": "Integration",
        "Analytics": "Analytics",
        "Intelligentes E-Mail-Management": "Intelligentes E-Mail-Management",
        "Automatische Sortierung und Kategorisierung": "Automatische Sortierung und Kategorisierung",
        "KI-basierte Prioritätserkennung": "KI-basierte Prioritätserkennung",
        "Smart Reply Vorschläge": "Smart Reply Vorschläge",
        "Erweiterte Suchfunktionen": "Erweiterte Suchfunktionen",
        "Mehr erfahren": "Mehr erfahren",
        "Höchste Sicherheitsstandards": "Höchste Sicherheitsstandards",
        "Ende-zu-Ende Verschlüsselung": "Ende-zu-Ende Verschlüsselung",
        "Zwei-Faktor-Authentifizierung": "Zwei-Faktor-Authentifizierung",
        "DSGVO-konforme Datenverarbeitung": "DSGVO-konforme Datenverarbeitung",
        "Regelmäßige Sicherheitsaudits": "Regelmäßige Sicherheitsaudits",
        "Sicherheit prüfen": "Sicherheit prüfen",
        "Nahtlose Integration": "Nahtlose Integration",
        "Vollständige anwaltsoft Integration": "Vollständige anwaltsoft Integration",
        "API-Schnittstellen für Drittsysteme": "API-Schnittstellen für Drittsysteme",
        "Kalendersynchronisation": "Kalendersynchronisation",
        "Dokumentenmanagement-Integration": "Dokumentenmanagement-Integration",
        "Integration testen": "Integration testen",
        "Intelligente Analytics": "Intelligente Analytics",
        "E-Mail Performance Tracking": "E-Mail Performance Tracking",
        "Arbeitszeit-Optimierung": "Arbeitszeit-Optimierung",
        "Mandanten-Kommunikations-Analyse": "Mandanten-Kommunikations-Analyse",
        "Custom Reports und Dashboards": "Custom Reports und Dashboards",
        "Dashboard ansehen": "Dashboard ansehen",
        "Schnellsuche": "Schnellsuche",
        "Suche auf der Website...": "Suche auf der Website...",
        "Name *": "Name *",
        "E-Mail *": "E-Mail *",
        "Unternehmen": "Unternehmen",
        "Betreff *": "Betreff *",
        "Bitte wählen...": "Bitte wählen...",
        "Demo anfragen": "Demo anfragen",
        "Support": "Support",
        "Vertrieb": "Vertrieb",
        "Partnerschaft": "Partnerschaft",
        "Nachricht *": "Nachricht *",
        "Beschreiben Sie Ihr Anliegen...": "Beschreiben Sie Ihr Anliegen...",
        "Zeichen": "Zeichen",
        "Ich akzeptiere die Datenschutzbestimmungen": "Ich akzeptiere die Datenschutzbestimmungen",
        "Ich möchte den Newsletter erhalten": "Ich möchte den Newsletter erhalten",
        "Nachricht senden": "Nachricht senden",
        "Nachricht gesendet!": "Nachricht gesendet!",
        "Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze bei Ihnen.": "Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze bei Ihnen.",
        "Diese Website verwendet Cookies, um Ihnen die bestmögliche Erfahrung zu bieten.": "Diese Website verwendet Cookies, um Ihnen die bestmögliche Erfahrung zu bieten.",
        "Einstellungen": "Einstellungen",
        "Alle akzeptieren": "Alle akzeptieren",
        "Cookie-Einstellungen": "Cookie-Einstellungen",
        "Notwendige Cookies": "Notwendige Cookies",
        "Diese Cookies sind für das Funktionieren der Website erforderlich.": "Diese Cookies sind für das Funktionieren der Website erforderlich.",
        "Analyse-Cookies": "Analyse-Cookies",
        "Diese Cookies helfen uns, die Website zu verbessern.": "Diese Cookies helfen uns, die Website zu verbessern.",
        "Marketing-Cookies": "Marketing-Cookies",
        "Diese Cookies werden für personalisierte Werbung verwendet.": "Diese Cookies werden für personalisierte Werbung verwendet.",
        "Alle ablehnen": "Alle ablehnen",
        "Einstellungen speichern": "Einstellungen speichern",
        "Professionelle E-Mail-Lösung für Rechtsanwälte": "Professionelle E-Mail-Lösung für Rechtsanwälte",
        "Links": "Links",
        "anwaltsoft Hauptseite": "anwaltsoft Hauptseite",
        "Impressum": "Impressum",
        "Entwickelt von": "Entwickelt von",
        "Angaben gemäß § 5 TMG": "Angaben gemäß § 5 TMG",
        "Registereintrag": "Registereintrag",
        "Steuernummer": "Steuernummer",
        "Verantwortlich für den Inhalt": "Verantwortlich für den Inhalt",
        "Haftungsausschluss": "Haftungsausschluss",
        "Wir übernehmen keine Haftung für die Inhalte externer Links.": "Wir übernehmen keine Haftung für die Inhalte externer Links.",
        "Wird geladen...": "Wird geladen...",
        "Wird gesendet...": "Wird gesendet...",
        "Bitte füllen Sie alle Pflichtfelder aus.": "Bitte füllen Sie alle Pflichtfelder aus.",
        "Bitte geben Sie eine gültige E-Mail-Adresse ein.": "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        "Bitte akzeptieren Sie die Datenschutzbestimmungen.": "Bitte akzeptieren Sie die Datenschutzbestimmungen."
    },
    en: {
        "Startseite": "Home",
        "Über uns": "About us",
        "Leistungen": "Solutions", 
        "Kontakt": "Contact",
        "Willkommen bei ": "Welcome to ",
        "Die All-in-One E-Mail-Lösung, speziell entwickelt für Anwälte": "The All-in-One Email Solution, specifically developed for lawyers",
        "Kostenlose Testversion starten": "Start Free Trial",
        "Kontakt aufnehmen": "Get in Touch",
        "Live Demo ansehen": "Watch Live Demo",
        "Zufriedene Kunden": "Happy Customers",
        "% Verfügbarkeit": "% Uptime",
        "/7 Support": "/7 Support",
        "beA-Integration": "beA Integration",
        "Direkter Zugriff auf Ihr beA-Postfach von jedem Gerät aus. Nahtlose Integration in Ihren Arbeitsalltag.": "Direct access to your beA mailbox from any device. Seamless integration into your daily workflow.",
        "Datenschutz": "Data Protection",
        "Höchste Sicherheitsstandards für sensible Anwaltskommunikation. DSGVO-konform und verschlüsselt.": "Highest security standards for sensitive legal communication. GDPR compliant and encrypted.",
        "Synchronisation": "Synchronization",
        "Automatische Synchronisation aller E-Mails und Anhänge zwischen allen Ihren Geräten.": "Automatic synchronization of all emails and attachments between all your devices.",
        "Mobilität": "Mobility",
        "Vollständige Funktionalität auf Smartphone, Tablet und Desktop. Überall einsatzbereit.": "Full functionality on smartphone, tablet and desktop. Ready for use everywhere.",
        "beA4Outlook ist Teil des anwaltsoft Datenmanagementsystems und voll integriert in alle Kanzleiprozesse.": "beA4Outlook is part of the anwaltsoft data management system and fully integrated into all law firm processes.",
        "Mehr zu anwaltsoft": "More about anwaltsoft",
        "Unsere Lösungen": "Our Solutions",
        "E-Mail": "Email",
        "Sicherheit": "Security",
        "Integration": "Integration",
        "Analytics": "Analytics",
        "Intelligentes E-Mail-Management": "Intelligent Email Management",
        "Automatische Sortierung und Kategorisierung": "Automatic sorting and categorization",
        "KI-basierte Prioritätserkennung": "AI-based priority recognition",
        "Smart Reply Vorschläge": "Smart Reply suggestions",
        "Erweiterte Suchfunktionen": "Advanced search functions",
        "Mehr erfahren": "Learn More",
        "Höchste Sicherheitsstandards": "Highest Security Standards",
        "Ende-zu-Ende Verschlüsselung": "End-to-end encryption",
        "Zwei-Faktor-Authentifizierung": "Two-factor authentication",
        "DSGVO-konforme Datenverarbeitung": "GDPR compliant data processing",
        "Regelmäßige Sicherheitsaudits": "Regular security audits",
        "Sicherheit prüfen": "Check Security",
        "Nahtlose Integration": "Seamless Integration",
        "Vollständige anwaltsoft Integration": "Complete anwaltsoft integration",
        "API-Schnittstellen für Drittsysteme": "API interfaces for third-party systems",
        "Kalendersynchronisation": "Calendar synchronization",
        "Dokumentenmanagement-Integration": "Document management integration",
        "Integration testen": "Test Integration",
        "Intelligente Analytics": "Intelligent Analytics",
        "E-Mail Performance Tracking": "Email performance tracking",
        "Arbeitszeit-Optimierung": "Working time optimization",
        "Mandanten-Kommunikations-Analyse": "Client communication analysis",
        "Custom Reports und Dashboards": "Custom reports and dashboards",
        "Dashboard ansehen": "View Dashboard",
        "Schnellsuche": "Quick Search",
        "Suche auf der Website...": "Search the website...",
        "Name *": "Name *",
        "E-Mail *": "Email *",
        "Unternehmen": "Company",
        "Betreff *": "Subject *",
        "Bitte wählen...": "Please select...",
        "Demo anfragen": "Request Demo",
        "Support": "Support",
        "Vertrieb": "Sales",
        "Partnerschaft": "Partnership",
        "Nachricht *": "Message *",
        "Beschreiben Sie Ihr Anliegen...": "Describe your request...",
        "Zeichen": "characters",
        "Ich akzeptiere die Datenschutzbestimmungen": "I accept the privacy policy",
        "Ich möchte den Newsletter erhalten": "I want to receive the newsletter",
        "Nachricht senden": "Send Message",
        "Nachricht gesendet!": "Message sent!",
        "Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze bei Ihnen.": "Thank you for your message. We will get back to you shortly.",
        "Diese Website verwendet Cookies, um Ihnen die bestmögliche Erfahrung zu bieten.": "This website uses cookies to provide you with the best possible experience.",
        "Einstellungen": "Settings",
        "Alle akzeptieren": "Accept All",
        "Cookie-Einstellungen": "Cookie Settings",
        "Notwendige Cookies": "Essential Cookies",
        "Diese Cookies sind für das Funktionieren der Website erforderlich.": "These cookies are required for the website to function.",
        "Analyse-Cookies": "Analytics Cookies",
        "Diese Cookies helfen uns, die Website zu verbessern.": "These cookies help us improve the website.",
        "Marketing-Cookies": "Marketing Cookies",
        "Diese Cookies werden für personalisierte Werbung verwendet.": "These cookies are used for personalized advertising.",
        "Alle ablehnen": "Reject All",
        "Einstellungen speichern": "Save Settings",
        "Professionelle E-Mail-Lösung für Rechtsanwälte": "Professional email solution for lawyers",
        "Links": "Links",
        "anwaltsoft Hauptseite": "anwaltsoft Main Page",
        "Impressum": "Legal Notice",
        "Entwickelt von": "Developed by",
        "Angaben gemäß § 5 TMG": "Information according to § 5 TMG",
        "Registereintrag": "Register Entry",
        "Steuernummer": "Tax Number",
        "Verantwortlich für den Inhalt": "Responsible for content",
        "Haftungsausschluss": "Disclaimer",
        "Wir übernehmen keine Haftung für die Inhalte externer Links.": "We accept no liability for the content of external links.",
        "Wird geladen...": "Loading...",
        "Wird gesendet...": "Sending...",
        "Bitte füllen Sie alle Pflichtfelder aus.": "Please fill out all required fields.",
        "Bitte geben Sie eine gültige E-Mail-Adresse ein.": "Please enter a valid email address.",
        "Bitte akzeptieren Sie die Datenschutzbestimmungen.": "Please accept the privacy policy."
    }
};

// Current language
let currentLanguage = 'de';

// Site search data
const searchData = [
    {
        title: "beA4Outlook Features",
        excerpt: "Intelligentes E-Mail-Management, KI-basierte Prioritätserkennung, Smart Reply",
        url: "#solutions"
    },
    {
        title: "Sicherheit und Datenschutz", 
        excerpt: "Ende-zu-Ende Verschlüsselung, Zwei-Faktor-Authentifizierung, DSGVO-konform",
        url: "#solutions"
    },
    {
        title: "Integration in anwaltsoft",
        excerpt: "Vollständige Integration in das anwaltsoft Datenmanagementsystem",
        url: "#about"
    },
    {
        title: "Kontakt und Support",
        excerpt: "24/7 Support, kostenlose Testversion, persönliche Beratung",
        url: "#contact"
    }
];

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePreloader();
    initializeScrollProgress();
    initializeTheme();
    initializeLanguage();
    initializeNavigation();
    initializeTypingAnimation();
    initializeCountUpAnimations();
    initializeTabs();
    initializeAdvancedForm();
    initializeSearch();
    initializeCookieConsent();
    initializeBackToTop();
    initializeModal();
    initializeSmoothScrolling();
    initializeAnimations();
    loadSavedPreferences();
});

// Preloader
function initializePreloader() {
    const preloader = document.getElementById('preloader');
    document.body.classList.add('loading');
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.classList.remove('loading');
            
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 800);
    });
}

// Scroll Progress Bar
function initializeScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Theme Toggle
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    const savedTheme = localStorage.getItem('bea4outlook-theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('bea4outlook-theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add transition effect
        body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    });
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    if (theme === 'dark') {
        icon.className = 'fas fa-moon';
    } else {
        icon.className = 'fas fa-sun';
    }
}

// Language Toggle
function initializeLanguage() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetLang = this.getAttribute('data-lang');
            if (targetLang !== currentLanguage) {
                switchLanguage(targetLang);
                
                langButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
}

function switchLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;
    
    // Update all translatable elements
    const elementsToTranslate = document.querySelectorAll('[data-de], [data-en]');
    
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute(`data-${language}`);
        if (key && translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        } else if (key) {
            element.textContent = key;
        }
    });
    
    // Update placeholder texts
    const placeholderElements = document.querySelectorAll('[data-de-placeholder], [data-en-placeholder]');
    placeholderElements.forEach(element => {
        const placeholder = element.getAttribute(`data-${language}-placeholder`);
        if (placeholder) {
            element.placeholder = placeholder;
        }
    });
    
    // Update select options
    const selectOptions = document.querySelectorAll('option[data-de], option[data-en]');
    selectOptions.forEach(option => {
        const key = option.getAttribute(`data-${language}`);
        if (key && translations[language] && translations[language][key]) {
            option.textContent = translations[language][key];
        } else if (key) {
            option.textContent = key;
        }
    });
    
    localStorage.setItem('bea4outlook-language', language);
}

// Navigation
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    window.addEventListener('scroll', debounce(updateActiveNavLink, 100));
    window.addEventListener('scroll', debounce(handleNavbarScroll, 100));
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    let currentSection = '';
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Typing Animation
function initializeTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    const cursor = document.querySelector('.typing-cursor');
    
    if (!typingElement || !cursor) return;
    
    const germanText = "Die All-in-One E-Mail-Lösung, speziell entwickelt für Anwälte";
    const englishText = "The All-in-One Email Solution, specifically developed for lawyers";
    
    let currentText = currentLanguage === 'de' ? germanText : englishText;
    let charIndex = 0;
    let isDeleting = false;
    let isWaiting = false;
    
    function typeWriter() {
        const currentFullText = currentLanguage === 'de' ? germanText : englishText;
        
        if (currentFullText !== currentText) {
            currentText = currentFullText;
            isDeleting = true;
        }
        
        if (isWaiting) {
            setTimeout(() => {
                isWaiting = false;
                typeWriter();
            }, 2000);
            return;
        }
        
        if (isDeleting) {
            charIndex--;
            typingElement.textContent = currentText.substring(0, charIndex);
            
            if (charIndex === 0) {
                isDeleting = false;
                currentText = currentFullText;
            }
        } else {
            charIndex++;
            typingElement.textContent = currentText.substring(0, charIndex);
            
            if (charIndex === currentText.length) {
                isWaiting = true;
            }
        }
        
        const typingSpeed = isDeleting ? 50 : 100;
        setTimeout(typeWriter, typingSpeed);
    }
    
    setTimeout(typeWriter, 1000);
}

// Count Up Animations
function initializeCountUpAnimations() {
    const counters = document.querySelectorAll('[data-count]');
    let hasAnimated = false;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                counters.forEach(counter => {
                    animateCountUp(counter);
                });
            }
        });
    });
    
    if (counters.length > 0) {
        observer.observe(counters[0].closest('.hero-stats'));
    }
}

function animateCountUp(element) {
    const target = parseFloat(element.getAttribute('data-count'));
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (target % 1 !== 0) {
            element.textContent = current.toFixed(1);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, duration / steps);
}

// Tab System
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Update active states
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Add animation effect
            const activePane = document.getElementById(targetTab);
            activePane.style.opacity = '0';
            setTimeout(() => {
                activePane.style.opacity = '1';
            }, 50);
        });
    });
}

// Advanced Form Handling
function initializeAdvancedForm() {
    const form = document.getElementById('advancedContactForm');
    const successMessage = document.getElementById('formSuccess');
    
    if (!form) return;
    
    // Form validation
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
    
    // Character counter for textarea
    const messageTextarea = form.querySelector('textarea[name="message"]');
    const charCounter = document.querySelector('.char-counter');
    
    if (messageTextarea && charCounter) {
        messageTextarea.addEventListener('input', updateCharCounter);
    }
    
    // Form submission
    form.addEventListener('submit', handleFormSubmit);
}

function validateField(event) {
    const field = event.target;
    const errorElement = field.parentNode.querySelector('.error-message');
    let isValid = true;
    let errorMessage = '';
    
    // Clear previous error
    field.classList.remove('error');
    if (errorElement) errorElement.textContent = '';
    
    // Required field validation
    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
        errorMessage = translations[currentLanguage]['Bitte füllen Sie alle Pflichtfelder aus.'];
    }
    
    // Email validation
    if (field.type === 'email' && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            isValid = false;
            errorMessage = translations[currentLanguage]['Bitte geben Sie eine gültige E-Mail-Adresse ein.'];
        }
    }
    
    // Checkbox validation
    if (field.type === 'checkbox' && field.hasAttribute('required') && !field.checked) {
        isValid = false;
        errorMessage = translations[currentLanguage]['Bitte akzeptieren Sie die Datenschutzbestimmungen.'];
    }
    
    if (!isValid) {
        field.classList.add('error');
        if (errorElement) errorElement.textContent = errorMessage;
    }
    
    return isValid;
}

function clearFieldError(event) {
    const field = event.target;
    const errorElement = field.parentNode.querySelector('.error-message');
    
    field.classList.remove('error');
    if (errorElement) errorElement.textContent = '';
}

function updateCharCounter() {
    const textarea = document.querySelector('textarea[name="message"]');
    const counter = document.querySelector('.char-counter');
    const current = counter.querySelector('.current');
    
    if (textarea && current) {
        const length = textarea.value.length;
        current.textContent = length;
        
        counter.classList.remove('warning', 'error');
        if (length > 400) {
            counter.classList.add('warning');
        }
        if (length > 500) {
            counter.classList.add('error');
        }
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const inputs = form.querySelectorAll('input, textarea, select');
    const submitBtn = form.querySelector('button[type="submit"]');
    const successMessage = document.getElementById('formSuccess');
    
    // Validate all fields
    let isFormValid = true;
    inputs.forEach(input => {
        if (!validateField({ target: input })) {
            isFormValid = false;
        }
    });
    
    if (!isFormValid) return;
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Hide form and show success message
        form.style.display = 'none';
        successMessage.classList.add('show');
        
        // Reset form after delay
        setTimeout(() => {
            form.reset();
            form.style.display = 'block';
            successMessage.classList.remove('show');
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            updateCharCounter();
        }, 5000);
    }, 2000);
}

// Site Search
function initializeSearch() {
    const searchInput = document.getElementById('siteSearch');
    const searchResults = document.getElementById('searchResults');
    const searchBtn = document.querySelector('.search-btn');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', debounce(performSearch, 300));
    searchBtn.addEventListener('click', () => performSearch());
    
    // Hide results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-widget')) {
            searchResults.innerHTML = '';
        }
    });
}

function performSearch() {
    const searchInput = document.getElementById('siteSearch');
    const searchResults = document.getElementById('searchResults');
    const query = searchInput.value.toLowerCase().trim();
    
    if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
    }
    
    const results = searchData.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.excerpt.toLowerCase().includes(query)
    );
    
    if (results.length > 0) {
        const resultsHTML = results.map(result => `
            <div class="search-result" onclick="navigateToResult('${result.url}')">
                <div class="search-result-title">${result.title}</div>
                <div class="search-result-excerpt">${result.excerpt}</div>
            </div>
        `).join('');
        
        searchResults.innerHTML = resultsHTML;
    } else {
        searchResults.innerHTML = `
            <div class="search-result">
                <div class="search-result-title">Keine Ergebnisse gefunden</div>
                <div class="search-result-excerpt">Versuchen Sie andere Suchbegriffe</div>
            </div>
        `;
    }
}

function navigateToResult(url) {
    document.getElementById('searchResults').innerHTML = '';
    document.getElementById('siteSearch').value = '';
    
    if (url.startsWith('#')) {
        const target = document.querySelector(url);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } else {
        window.location.href = url;
    }
}

// Cookie Consent
function initializeCookieConsent() {
    const cookieConsent = document.getElementById('cookieConsent');
    const cookieModal = document.getElementById('cookieModal');
    const acceptBtn = document.getElementById('acceptCookies');
    const settingsBtn = document.getElementById('cookieSettings');
    const closeModalBtn = document.getElementById('closeCookieModal');
    const saveSettingsBtn = document.getElementById('saveCookieSettings');
    const rejectAllBtn = document.getElementById('rejectAll');
    
    // Check if user has already made a choice
    const cookiePreference = localStorage.getItem('bea4outlook-cookies');
    if (!cookiePreference) {
        setTimeout(() => {
            cookieConsent.classList.add('show');
        }, 2000);
    }
    
    // Accept all cookies
    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('bea4outlook-cookies', 'accepted');
        localStorage.setItem('bea4outlook-analytics', 'true');
        localStorage.setItem('bea4outlook-marketing', 'true');
        cookieConsent.classList.remove('show');
    });
    
    // Show cookie settings
    settingsBtn.addEventListener('click', () => {
        cookieModal.style.display = 'block';
        loadCookieSettings();
    });
    
    // Close cookie modal
    closeModalBtn.addEventListener('click', () => {
        cookieModal.style.display = 'none';
    });
    
    // Save cookie settings
    saveSettingsBtn.addEventListener('click', () => {
        saveCookieSettings();
        cookieModal.style.display = 'none';
        cookieConsent.classList.remove('show');
    });
    
    // Reject all cookies
    rejectAllBtn.addEventListener('click', () => {
        localStorage.setItem('bea4outlook-cookies', 'rejected');
        localStorage.setItem('bea4outlook-analytics', 'false');
        localStorage.setItem('bea4outlook-marketing', 'false');
        cookieModal.style.display = 'none';
        cookieConsent.classList.remove('show');
    });
    
    // Close modal when clicking outside
    cookieModal.addEventListener('click', (e) => {
        if (e.target === cookieModal) {
            cookieModal.style.display = 'none';
        }
    });
}

function loadCookieSettings() {
    const analyticsCheckbox = document.getElementById('analyticsCookies');
    const marketingCheckbox = document.getElementById('marketingCookies');
    
    analyticsCheckbox.checked = localStorage.getItem('bea4outlook-analytics') === 'true';
    marketingCheckbox.checked = localStorage.getItem('bea4outlook-marketing') === 'true';
}

function saveCookieSettings() {
    const analyticsCheckbox = document.getElementById('analyticsCookies');
    const marketingCheckbox = document.getElementById('marketingCookies');
    
    localStorage.setItem('bea4outlook-cookies', 'customized');
    localStorage.setItem('bea4outlook-analytics', analyticsCheckbox.checked.toString());
    localStorage.setItem('bea4outlook-marketing', marketingCheckbox.checked.toString());
}

// Back to Top Button
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Modal System
function initializeModal() {
    const modals = document.querySelectorAll('.modal');
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const closeBtns = document.querySelectorAll('.close');
    
    // Open modal
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Impressum link
    const impressumLink = document.querySelector('a[href="#impressum"]');
    const impressumModal = document.getElementById('impressum');
    
    if (impressumLink && impressumModal) {
        impressumLink.addEventListener('click', (e) => {
            e.preventDefault();
            impressumModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close modal
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Close on outside click
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.style.display === 'block') {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        }
    });
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Intersection Observer Animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Special animations for specific elements
                if (entry.target.classList.contains('feature-demo')) {
                    setTimeout(() => {
                        entry.target.classList.add('fade-in');
                    }, 200);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.about-card, .solution-card, .contact-form, .anwaltsoft-integration, .feature-demo').forEach(el => {
        observer.observe(el);
    });
}

// Load Saved Preferences
function loadSavedPreferences() {
    const savedLanguage = localStorage.getItem('bea4outlook-language') || 'de';
    if (savedLanguage !== currentLanguage) {
        const langButton = document.querySelector(`.lang-btn[data-lang="${savedLanguage}"]`);
        if (langButton) {
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            langButton.classList.add('active');
            switchLanguage(savedLanguage);
        }
    }
}

// CTA Button Handlers
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    ctaButtons.forEach(button => {
        if (button.textContent.includes('Testversion') || button.textContent.includes('Trial')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        } else if (button.textContent.includes('Demo') || button.textContent.includes('demo')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                // Could open a demo modal or redirect to demo page
                alert(currentLanguage === 'de' ? 
                    'Demo wird vorbereitet... Bitte kontaktieren Sie uns für eine persönliche Vorführung.' : 
                    'Demo is being prepared... Please contact us for a personal demonstration.');
            });
        } else if (button.textContent.includes('Kontakt') || button.textContent.includes('Touch')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        }
    });
});

// Performance Utilities
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Error Handling
window.addEventListener('error', function(e) {
    console.warn('beA4Outlook: An error occurred:', e.error);
    // Could send error to analytics service
});

// Performance Monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData) {
                console.log(`beA4Outlook: Page loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
            }
        }, 0);
    });
}