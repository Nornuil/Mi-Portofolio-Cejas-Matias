// (function() {

    let openMenu = document.querySelector('#openMenu');
    let closeMenu = document.querySelector('#closeMenu');
    let menuPantalla = document.querySelector('.menuPantalla');
    let body = document.querySelector('#body');


    openMenu.addEventListener('click', showMenu);
    closeMenu.addEventListener('click', hideMenu);


    function showMenu() {
        menuPantalla.style.display = 'flex';
        body.style.overflow = 'hidden';
    }

    function hideMenu() {
        menuPantalla.style.display = 'none';
        body.style.overflow = 'auto';
    }
// }())