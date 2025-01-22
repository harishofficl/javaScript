export function homeDisplay() {
  const divObj = document.createElement("div");
  const img = document.createElement("img");
  img.src = "../module/images/home.jpeg";
  img.alt = "Home";
  divObj.appendChild(img);
  document.getElementById("content-container").replaceChildren(divObj);
}
