(function () {
    'use strict';

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const symbolChars = ['∑', 'π', '∞', 'Δ', 'Ω', '∫', '√'];
    let container = document.querySelector('.background-symbols');

    if (!container) {
        container = document.createElement('div');
        container.className = 'background-symbols';
        container.setAttribute('aria-hidden', 'true');
        document.body.insertBefore(container, document.body.firstChild);
    }

    if (container.children.length > 0 || container.dataset.initialized === 'true') return;
    container.dataset.initialized = 'true';

    const count = window.innerWidth < 768 ? 12 : 20;

    for (let i = 0; i < count; i++) {
        const symbol = document.createElement('span');
        symbol.className = 'bg-symbol';
        symbol.textContent = symbolChars[Math.floor(Math.random() * symbolChars.length)];
        symbol.style.left = `${Math.random() * 90 + 5}%`;
        symbol.style.top = `${Math.random() * 90 + 5}%`;
        symbol.style.fontSize = `${(Math.random() * 1.2 + 0.9).toFixed(2)}rem`;
        symbol.style.opacity = `${(Math.random() * 0.04 + 0.05).toFixed(2)}`;
        symbol.style.animationDuration = `${12 + Math.random() * 18}s`;
        symbol.style.animationDelay = `${Math.random() * 8}s`;
        container.appendChild(symbol);
    }
})();
