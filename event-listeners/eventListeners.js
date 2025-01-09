// syntax: element.addEventListener(event*, function*, useCapture);

/*
useCapture: 
false - The handler is executed in the "bubbling" phase.
true - The handler is executed in the "capturing" phase.
*/

//--------------------------------------------------------------------------
// DOMContentLoaded
// window.addEventListener("DOMContentLoaded", alertMessage);
// function alertMessage() {
//   alert("Page Loaded!");
// }

//--------------------------------------------------------------------------
// resize
window.addEventListener("resize", function () {
  document.getElementById("resize").innerHTML = "Resized";
});

//--------------------------------------------------------------------------
// click
document.getElementById("myBtn").addEventListener("click", getDate);

function getDate() {
  document.getElementById("date").innerHTML = Date();
}
//--------------------------------------------------------------------------
// contextmenu
document
  .getElementById("myBtn")
  .addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("Right Click Disabled!");
  });
//--------------------------------------------------------------------------
// dblclick
document.getElementById("myBtn2").addEventListener("dblclick", function () {
  alert("Double click is Not allowed!");
});
//--------------------------------------------------------------------------
// mouseover, mouseout, mousedown, mouseup
const hov = document.getElementById("mouse");

hov.addEventListener("mouseover", respondMouseOver);
hov.addEventListener("mouseout", respondMouseOut);
hov.addEventListener("mousedown", respondMouseDown);
hov.addEventListener("mouseup", respondMouseUp);

function respondMouseOver() {
  hov.style.backgroundColor = "yellow";
  console.log("Mouse Over");
}
function respondMouseOut() {
  hov.style.backgroundColor = "white";
  console.log("Mouse Out");
}
function respondMouseDown() {
  hov.style.backgroundColor = "red";
  console.log("Mouse Down");
}
function respondMouseUp() {
  hov.style.backgroundColor = "green";
  console.log("Mouse Up");
}
//--------------------------------------------------------------------------
// scroll
const scrollObj = document.getElementById("scroll-container");
scrollObj.addEventListener("scroll", scrollFunction);
let x = 0;
function scrollFunction() {
  document.getElementById("scroll").innerHTML = x += 1;
}
//--------------------------------------------------------------------------
// keydown, keyup, keypress

const fname = document.getElementById("fname");
fname.addEventListener("keydown", respondKeyDown);
fname.addEventListener("keyup", respondKeyUp);
fname.addEventListener("keypress", respondKeyPress);

function respondKeyDown() {
  console.log("Key pressed inside input field");
}
function respondKeyUp() {
  console.log("key released");
}
function respondKeyPress() {
  console.log("key pressed");
}
//--------------------------------------------------------------------------
// focus, blur
const focusObj = document.getElementById("fname");
focusObj.addEventListener("focus", respondFocus);
focusObj.addEventListener("blur", respondBlur);

function respondBlur() {
  focusObj.value = focusObj.value.toUpperCase();
}

function respondFocus() {
  focusObj.value =
    focusObj.value.charAt(0).toUpperCase() +
    focusObj.value.slice(1).toLowerCase();
}
//--------------------------------------------------------------------------
// change
const selectObj = document.getElementById("carSelect");
selectObj.addEventListener("change", respondChange);

function respondChange() {
  const carName = selectObj.value;
  document.getElementById("carImage").src = `images/${carName}.png`;
}
//--------------------------------------------------------------------------
// reset
const formObj = document.getElementById("myForm");
formObj.addEventListener("reset", respondReset);

function respondReset() {
  console.log("Reset complete");
}
//--------------------------------------------------------------------------

// bubbling and capturing example
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");

div1.id = "div1";
div2.id = "div2";
div3.id = "div3";

div1.style.cssText = "width: 100px; height: 100px; background-color: red;";
div2.style.cssText = "width: 100px; height: 100px; background-color: green;";
div3.style.cssText = "width: 100px; height: 100px; background-color: blue;";

document.body.appendChild(div1);
document.body.appendChild(div2);
document.body.appendChild(div3);

div1.addEventListener("click", function () {
  console.log("div1 clicked");
});
div2.addEventListener("click", function () {
  console.log("div2 clicked");
});
div3.addEventListener("click", function () {
  console.log("div3 clicked");
});

// bubbling
document.body.addEventListener("click", function () {
  console.log("body clicked");
});
// capturing
document.body.addEventListener(
  "click",
  function () {
    console.log("body clicked", true);
  },
  true
);
//--------------------------------------------------------------------------
