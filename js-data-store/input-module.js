import resultDisplay from './result-module.js';
import subscribeDisplay from './subscribe-module.js';

const container = document.createElement('div');
container.id = 'container';
container.className = 'container';

const h1 = document.createElement('h1');
h1.textContent = 'Subject Marks Input';

const form = document.createElement('form');
form.id = 'marks-form';

const subjects = ['english', 'tamil', 'maths', 'computer-science', 'physics'];
subjects.forEach(subject => {
    const label = document.createElement('label');
    label.htmlFor = subject;
    label.textContent = subject.charAt(0).toUpperCase() + subject.slice(1) + ':';

    const input = document.createElement('input');
    input.type = 'number';
    input.id = subject;
    input.placeholder = 'Enter marks';

    form.appendChild(label);
    form.appendChild(input);
});

container.appendChild(h1);
container.appendChild(form);

document.body.appendChild(container);

resultDisplay();
subscribeDisplay();