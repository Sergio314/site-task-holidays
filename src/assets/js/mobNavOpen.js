const mobNav = document.querySelector('.mobNav');
const nav = document.querySelector('.nav');
let isMobNavOpen = false;

mobNav.onclick = function() {
    toggleMenu();
};

mobNav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A'){
        toggleMenu();
    }
} );

function toggleMenu() {
    if (!isMobNavOpen) {
        isMobNavOpen = true;
        mobNav.classList.add('mobNavRotate');
        nav.classList.add('mobNavContainer');
        nav.classList.remove('nav');
    } else {
        isMobNavOpen = false;
        mobNav.classList.remove('mobNavRotate');
        nav.classList.remove('mobNavContainer');
        nav.classList.add('nav');
    }
}


