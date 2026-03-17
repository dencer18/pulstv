document.addEventListener('DOMContentLoaded', () => {
    // 1. Мобильное меню
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('nav-open');
    });

    // Закрыть меню при клике на ссылку
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('nav-open');
        });
    });

    // 2. Темная тема (системная)
    const body = document.body;
    const headerLogo = document.getElementById('header-logo');
    
    const checkColorScheme = (isDark) => {
        if (isDark) {
            body.classList.add('dark-mode');
            headerLogo.src = 'pulseTvLogoDark.svg';
        } else {
            body.classList.remove('dark-mode');
            headerLogo.src = 'pulseTvLogo.svg';
        }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    checkColorScheme(mediaQuery.matches);

    mediaQuery.addEventListener('change', (e) => {
        checkColorScheme(e.matches);
    });

    // 3. Год в футере
    document.getElementById('year').textContent = new Date().getFullYear();

    // 4. Отправка формы (EmailJS)
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const serviceID = 'service_k73sev1'; // Замените на свой ID сервиса
        const templateID = 'template_mvcftc7'; // Замените на свой ID шаблона

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert('Сообщение отправлено! Спасибо за обращение.');
                contactForm.reset();
            }, (err) => {
                alert('Ошибка отправки. Попробуйте позже.');
                console.log(JSON.stringify(err));
            });
    });
});