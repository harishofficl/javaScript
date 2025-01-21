export default function aboutDisplay() {
  const divObj = document.createElement("div");
  const img = document.createElement("img");
  img.src = "./images/about.jpeg";
  img.alt = "About";
  divObj.appendChild(img);
  document.getElementById("container").replaceChildren(divObj);
}
