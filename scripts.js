document.addEventListener('DOMContentLoaded', function() {
    const switchModeButton = document.querySelector('.switch-mode');
    const switchModeButtonOffset = switchModeButton.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > switchModeButtonOffset) {
            switchModeButton.classList.add('fixed');
        } else {
            switchModeButton.classList.remove('fixed');
        }
    });

    const body = document.body;
    const icon = switchModeButton.querySelector('i');
    const logoImg = document.querySelector('.logo-nav img');
    const footerImg = document.querySelector('.contact-left-footer img');

    switchModeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            logoImg.src = 'dir/images/logo-white.png';
            footerImg.src = 'dir/images/logo-white.png';
        } else {
            logoImg.src = 'dir/images/logo.png';
            footerImg.src = 'dir/images/logo.png';
        }

        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });
});
