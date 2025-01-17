const themeSelector = document.querySelector('#theme-selector');

function changeTheme() {
    const selectedTheme = themeSelector.value;
    const body = document.body;
    const logo = document.querySelector('.logo');

    if (selectedTheme === 'dark') {
        body.classList.add('dark');
        body.classList.remove('light');
        logo.src = 'byui-logo_white.png';
    } else {
        body.classList.add('light');
        body.classList.remove('dark');
        logo.src = 'byui-logo_blue.png';
    }
}

themeSelector.addEventListener('change', changeTheme);
