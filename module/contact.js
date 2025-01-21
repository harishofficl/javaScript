export default function contactDisplay() {
  const divObj = document.createElement("div");
  const img = document.createElement("img");
  const email = document.createElement("p");
  email.textContent = "Email: hareeshseen@gmail.com";
  img.src = "./images/contact.png";
  img.alt = "Contact";
  divObj.appendChild(img);
  divObj.appendChild(email);
  document.getElementById("container").replaceChildren(divObj);
}
