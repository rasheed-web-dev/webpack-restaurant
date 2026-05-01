import load from './load.js';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';
import './styles.css';


const run = (() => {
    load();
    const navbuttons = document.querySelectorAll('nav button');
    navbuttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.innerText === 'Home') {
                loadHome();
            } else if (button.innerText === 'Menu') {
                loadMenu();
            } else {
                loadAbout();
            }
        })
    })
})()