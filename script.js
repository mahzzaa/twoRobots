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
});
