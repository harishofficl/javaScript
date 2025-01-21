import homeDisplay from "./home.js";
import contactDisplay from "./contact.js";
import aboutDisplay from "./about.js";

const div = document.createElement('div');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

const a1 = document.createElement('a');
const a2 = document.createElement('a');
const a3 = document.createElement('a');

a1.textContent = 'Home';
a1.addEventListener("click", () => {
  homeDisplay();
});
a2.textContent = 'About';
a2.addEventListener("click", () => {
  aboutDisplay();
});
a3.textContent = 'Contact';
a3.addEventListener("click", () => {
  contactDisplay();
});

li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
nav.appendChild(ul);
div.appendChild(nav);

const divContent = document.createElement('div');
divContent.className = "container";
divContent.id = "container";

document.body.appendChild(div);
document.body.appendChild(divContent);
