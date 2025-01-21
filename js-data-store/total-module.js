function totalDisplay() {
  const pTotal = document.createElement("p");
  pTotal.id = "totalmarks";
  const spanTotalValue = document.createElement("span");
  spanTotalValue.id = "total-value";
  spanTotalValue.textContent = "0";
  pTotal.textContent = "Total: ";
  pTotal.appendChild(spanTotalValue);

  const resultsDiv = document.getElementById("results");
  resultsDiv.appendChild(pTotal);
}

function totalRemove() {
  const pTotal = document.getElementById("totalmarks");
  pTotal.parentElement.removeChild(pTotal);
}

export { totalDisplay, totalRemove };
