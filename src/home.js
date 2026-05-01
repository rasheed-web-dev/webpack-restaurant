const loadHome = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const headerText = document.createElement('h1');
    headerText.innerText = 'Welcome to a Delicious Experience!';
    const description = document.createElement('p');
    description.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil doloribus voluptas tempora in officiis et incidunt vel eos optio, soluta dicta pariatur facere culpa placeat, quis nulla quibusdam, temporibus iste.';

    content.appendChild(headerText);
    content.appendChild(description);
}

export default loadHome;