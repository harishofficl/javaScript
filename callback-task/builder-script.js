import { subjects, results, elements } from "./dataStore.js";

function htmlBuilder(elements, parentId) {
  if (parentId === undefined) parentId = "body";
  elements.forEach((element) => {
    const tagObject = document.createElement(element.tag);
    if (parentId === "body") {
      document.body.appendChild(tagObject);
    } else {
      document.getElementById(parentId).appendChild(tagObject);
    }
    const entries = Object.entries(element);
    entries.forEach((entry) => {
      if (entry[0] === "class") {
        tagObject.className = entry[1];
      } else if (entry[0] === "text") {
        tagObject.innerHTML = entry[1];
      } else if (entry[0] === "style") {
        const styles = Object.entries(element.style);
        styles.forEach((sty) => {
          tagObject.style[sty[0]] = sty[1];
        });
      } else if (entry[0] === "attributes") {
        const attributeObj = Object.entries(entry[1]);
        attributeObj.forEach((attribute) => {
          tagObject.setAttribute(attribute[0], attribute[1]);
        });
      } else if (entry[0] === "children") {
        htmlBuilder(element.children, element.attributes?.id || parentId);
      }
    });
  });
}

htmlBuilder(elements, "body");

// ----------------------------------------------------------------------------------

const english = document.getElementById("english");
const tamil = document.getElementById("tamil");
const maths = document.getElementById("maths");
const computerScience = document.getElementById("computer-science");
const physics = document.getElementById("physics");

const total = document.getElementById("total-value");
const average = document.getElementById("average-value");
const percentage = document.getElementById("percentage-value");

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  subjects.english = parseInt(english.value) || 0;
  subjects.tamil = parseInt(tamil.value) || 0;
  subjects.maths = parseInt(maths.value) || 0;
  subjects["computer science"] = parseInt(computerScience.value) || 0;
  subjects.physics = parseInt(physics.value) || 0;

  updateResults(callBackQueue, 0);
});

function totalMarks() {
  results.total = Object.values(subjects).reduce((acc, curr) => acc + curr);
  total.innerHTML = results.total;
  return results.total;
}

function averageMarks() {
  results.average = results.total / Object.keys(subjects).length;
  average.innerHTML = results.average;
  return results.average;
}

function percentageMarks() {
  results.percentage = (results.total / 500) * 100;
  percentage.innerHTML = results.percentage;
  return results.percentage;
}

const callBackQueue = [];
callBackQueue.push(totalMarks);
callBackQueue.push(averageMarks);
callBackQueue.push(percentageMarks);

function updateResults(callBackQueue, index) {
  // recursive
  if (callBackQueue.length === index) return;
  callBackQueue[index]();
  updateResults(callBackQueue, index + 1);
}
