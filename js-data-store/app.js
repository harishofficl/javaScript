import {
  dataStore,
  updateSubject,
  subscribe,
  unsubscribe,
} from "./dataStore.js";

const form = document.getElementById("marks-form");
const englishInput = document.getElementById("english");
const tamilInput = document.getElementById("tamil");
const mathsInput = document.getElementById("maths");
const computerScienceInput = document.getElementById("computer-science");
const physicsInput = document.getElementById("physics");

const totalValue = document.getElementById("total-value");
const averageValue = document.getElementById("average-value");
const subscribeTotal = document.getElementById("subscribe-total");
const subscribeAverage = document.getElementById("subscribe-average");

function updateTotalDisplay() {
  totalValue.textContent = dataStore.total;
}
function updateAverageDisplay() {
  averageValue.textContent = dataStore.average.toFixed(2);
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
    console.log(dataStore.subscribers);
  } else {
    unsubscribe(updateTotalDisplay);
    console.log(dataStore.subscribers);
  }
}
function handleSubscription2() {
  if (subscribeAverage.checked) {
    subscribe(updateAverageDisplay);
    console.log(dataStore.subscribers);
  } else {
    unsubscribe(updateAverageDisplay);
    console.log(dataStore.subscribers);
  }
}
handleSubscription1();
handleSubscription2();

subscribeTotal.addEventListener("change", handleSubscription1);
subscribeAverage.addEventListener("change", handleSubscription2);
