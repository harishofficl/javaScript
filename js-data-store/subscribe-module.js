export default function subscribeDisplay() {

  const container = document.getElementById("container");

  const subscriptionDiv = document.createElement("div");
  subscriptionDiv.className = "subscription";

  const h2Subscription = document.createElement("h2");
  h2Subscription.textContent = "Subscribe to Updates";

  const labelTotal = document.createElement("label");
  labelTotal.className = "label-total";
  const inputTotal = document.createElement("input");
  inputTotal.type = "checkbox";
  inputTotal.id = "subscribe-total";
  inputTotal.checked = true;
  labelTotal.appendChild(inputTotal);
  labelTotal.appendChild(document.createTextNode(" Total"));

  const labelAverage = document.createElement("label");
  labelAverage.className = "label-average";
  const inputAverage = document.createElement("input");
  inputAverage.type = "checkbox";
  inputAverage.id = "subscribe-average";
  inputAverage.checked = true;
  labelAverage.appendChild(inputAverage);
  labelAverage.appendChild(document.createTextNode(" Average"));

  subscriptionDiv.appendChild(h2Subscription);
  subscriptionDiv.appendChild(labelTotal);
  subscriptionDiv.appendChild(labelAverage);

  container.appendChild(subscriptionDiv);
}
