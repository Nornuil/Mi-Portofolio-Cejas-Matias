// (function() {

    let openMenu = document.querySelector('#openMenu');
    let closeMenu = document.querySelector('#closeMenu');
    let menuPantalla = document.querySelector('.menuPantalla');


    openMenu.addEventListener('click', showMenu);
    closeMenu.addEventListener('click', hideMenu);


    function showMenu() {
        menuPantalla.style.display = 'flex';
    }

    function hideMenu() {
        menuPantalla.style.display = 'none';
    }
// }())