document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.main-nav');
    if (!nav) return;

    const onScroll = () => {
        if (window.scrollY > 40) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
});
