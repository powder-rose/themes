let changeTheme = () => {
    let themeColor = document.getElementById('theme').value;
    let themeBackground = document.getElementById('bckg');
    let headerColor = document.getElementById('header');
    let listColor = document.getElementById('listColor');

    switch (themeColor) {
        case 'dark': themeBackground.style.backgroundColor = '#5e5e5e'; headerColor.style.color = '#fff'; listColor.style.color = '#fff'; break;
        case 'pastel': themeBackground.style.backgroundColor = '#fccfcf'; headerColor.style.color = '#363636'; listColor.style.color = '#363636'; break;
        default: themeBackground.style.backgroundColor = '#fff'; headerColor.style.color = '#000'; listColor.style.color = '#000'; break;
    }
}