import {
  dataStore,
  updateSubject,
  subscribe,
  unsubscribe,
} from "./dataStore.js";

import { averageDisplay, averageRemove } from "./average-module.js";

import { totalDisplay, totalRemove } from "./total-module.js";

const form = document.getElementById("marks-form");
const englishInput = document.getElementById("english");
const tamilInput = document.getElementById("tamil");
const mathsInput = document.getElementById("maths");
const computerScienceInput = document.getElementById("computer-science");
const physicsInput = document.getElementById("physics");

const subscribeTotal = document.getElementById("subscribe-total");
const subscribeAverage = document.getElementById("subscribe-average");

// subscribers
function updateTotalDisplay() {
  document.getElementById("total-value").textContent = dataStore.total;
}
function updateAverageDisplay() {
  document.getElementById("average-value").textContent =
    dataStore.average.toFixed(2);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

englishInput.addEventListener("input", () => {
  updateSubject("english", Number(englishInput.value));
});
tamilInput.addEventListener("input", () => {
  updateSubject("tamil", Number(tamilInput.value));
});
mathsInput.addEventListener("input", () => {
  updateSubject("maths", Number(mathsInput.value));
});
computerScienceInput.addEventListener("input", () => {
  updateSubject("computerScience", Number(computerScienceInput.value));
});
physicsInput.addEventListener("input", () => {
  updateSubject("physics", Number(physicsInput.value));
});

function handleSubscription1() {
  if (subscribeTotal.checked) {
    subscribe(updateTotalDisplay);
    totalDisplay();
    updateTotalDisplay();
    console.log(dataStore.subscribers);
  } else {
    unsubscribe(updateTotalDisplay);
    totalRemove();
    console.log(dataStore.subscribers);
  }
}
function handleSubscription2() {
  if (subscribeAverage.checked) {
    subscribe(updateAverageDisplay);
    averageDisplay();
    updateAverageDisplay();
    console.log(dataStore.subscribers);
  } else {
    unsubscribe(updateAverageDisplay);
    averageRemove();
    console.log(dataStore.subscribers);
  }
}

handleSubscription1();
handleSubscription2();

subscribeTotal.addEventListener("change", handleSubscription1);
subscribeAverage.addEventListener("change", handleSubscription2);
