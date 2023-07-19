document.addEventListener('DOMContentLoaded', () => {
    let Nav = document.querySelector('nav');
    let open = document.querySelector('.open');
    let close = document.querySelector('.close');
    let navlink = document.querySelector('.nav-link');

    window.addEventListener('scroll', () => {
        Nav.classList.toggle('nav-bg', window.scrollY > 0);
    });

    open.addEventListener('click', () => {
        open.style.display = 'none';
        close.style.display = 'inline-block';
        navlink.style.left = '0';
    });

    close.addEventListener('click', () => {
        open.style.display = 'inline-block';
        close.style.display = 'none';
        navlink.style.left = '-100%';
    });

    // Check scroll position on page load
    if (window.scrollY > 0) {
        Nav.classList.add('nav-bg');
    }


    // accordion

    const accordionItems = document.querySelectorAll('[data-accordion="collapse"] [data-accordion-target]');

    accordionItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = document.querySelector(item.getAttribute('data-accordion-target'));
            target.classList.toggle('hidden');
            const expanded = target.getAttribute('aria-expanded') === 'true';
            target.setAttribute('aria-expanded', !expanded);
        });
    });


    // smoot scroll
    function scrollToSection(sectionId) {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }


});
