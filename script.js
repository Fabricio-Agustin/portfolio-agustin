const DOM = {
    themeBtn: document.getElementById('theme-toggle'),
    body: document.body
};

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    
    setupThemeHandler();
});

const setupThemeHandler = () => {
    if (!DOM.themeBtn) return;

    DOM.themeBtn.addEventListener('click', () => {
        const isLight = DOM.body.classList.toggle('light-theme');
        
        const iconName = isLight ? 'moon' : 'sun';
        DOM.themeBtn.innerHTML = `<i data-lucide="${iconName}"></i>`;
        
        lucide.createIcons();
        
        localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
    });

    checkSavedTheme();
};

const checkSavedTheme = () => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
        DOM.body.classList.add('light-theme');
        DOM.themeBtn.innerHTML = `<i data-lucide="moon"></i>`;
        lucide.createIcons();
    }
};