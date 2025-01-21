export default function homeDisplay() {
  const divObj = document.createElement("div");
  const img = document.createElement("img");
  img.src = "./images/home.jpeg";
  img.alt = "Home";
  divObj.appendChild(img);
  document.getElementById("container").replaceChildren(divObj);
}
