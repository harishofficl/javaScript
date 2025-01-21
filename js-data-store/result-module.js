export default function resultDisplay() {
  const container = document.getElementById("container");

  const resultsDiv = document.createElement("div");
  resultsDiv.className = "results";
  resultsDiv.id = "results";

  const h2Results = document.createElement("h2");
  h2Results.textContent = "Results";

  resultsDiv.appendChild(h2Results);

  container.appendChild(resultsDiv);
}
