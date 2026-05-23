(function () {
    function showLoader() {
        const loader = document.querySelector('.loader-container');
        if (loader) {
            loader.style.display = 'flex';
            loader.classList.remove('fade-out');
        }
    }

    function hideLoader() {
        const loader = document.querySelector('.loader-container');
        if (loader) {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 800);
        }
    }

    if (!localStorage.getItem('hasVisited')) {
        showLoader();
        localStorage.setItem('hasVisited', 'true');
        setTimeout(hideLoader, 3000);
    } else {
        const loader = document.querySelector('.loader-container');
        if (loader) loader.style.display = 'none';
    }
})();
