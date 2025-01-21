function averageDisplay() {
    const pAverage = document.createElement("p");
    pAverage.id = "average";
    const span = document.createElement("span");
    span.id = "average-value";
    span.textContent = "0";
    pAverage.textContent = "Average: ";
    pAverage.appendChild(span);
  
    const resultsDiv = document.getElementById("results");
    resultsDiv.appendChild(pAverage);
  }
  
  function averageRemove() {
    const pAverage = document.getElementById("average");
    pAverage.parentElement.removeChild(pAverage);
  }
  
  export { averageDisplay, averageRemove };