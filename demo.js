const inputElement = document.createElement('input');
inputElement.type = 'text';
inputElement.placeholder = 'Enter text here';


const pElement = document.createElement('p');
pElement.textContent = '';

document.body.appendChild(inputElement);
document.body.appendChild(pElement);


inputElement.addEventListener("keyup",onChange);

function onChange(){
    pElement.textContent = inputElement.value;
}