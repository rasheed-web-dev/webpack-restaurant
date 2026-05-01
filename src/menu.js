const loadMenu = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const headerText = document.createElement('h1');
    headerText.innerText = 'This is the menu';
    const description = document.createElement('p');
    description.innerText = 'just a test \n another test \n yo \n hi';

    content.appendChild(headerText);
    content.appendChild(description);
}

export default loadMenu;