const loadAbout = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const headerText = document.createElement('h1');
    headerText.innerText = 'This is the about section';
    const description = document.createElement('p');
    description.innerText = 'There really isn\'t a lot to talk about...';

    content.appendChild(headerText);
    content.appendChild(description);
}

export default loadAbout;