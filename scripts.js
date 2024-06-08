
document.addEventListener('DOMContentLoaded', () => {
    const colorSwitcher = document.getElementById('colorSwitcher');
    const currentTheme = localStorage.getItem('theme') || 'light-theme';

    document.body.classList.add(currentTheme);

    colorSwitcher.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');

        const newTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
        localStorage.setItem('theme', newTheme);
    });
});

