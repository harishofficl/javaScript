// 1st task: alpha + space(b/w text only) [ max_len: 20 ] restrict them to 20 characters, first-letter caps.

const textBox = document.getElementById("task-1");
textBox.addEventListener("keypress", validKeyPress);
textBox.addEventListener("blur", capitalizeFirstLetter);

function validKeyPress(event) {
  const charCode = event.keyCode;
  if (textBox.value.length >= 20) {
    console.log("Maximum 20 characters.");
    event.preventDefault();
  }
  if (
    (charCode > 64 && charCode < 91) ||
    (charCode > 96 && charCode < 123) ||
    charCode === 32
  ) {
    console.log(charCode);
  } else {
    event.preventDefault();
  }
}

function capitalizeFirstLetter() {
  const inputArray = textBox.value.split(" ");
  console.log(inputArray);
  let finalString = "";
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === "") {
      continue;
    }
    finalString +=
      inputArray[i].charAt(0).toUpperCase() +
      inputArray[i].slice(1).toLowerCase() +
      " ";
  }
  textBox.value = finalString.slice(0, -1);
}

// 2nd task: alpha-no space, first-letter caps

const textBox2 = document.getElementById("task-2");
textBox2.addEventListener("keypress", validKeyPress2);
textBox2.addEventListener("blur", capitalizeFirstLetter2);

function validKeyPress2(event) {
  const charCode = event.keyCode;
  if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
    console.log(charCode);
  } else {
    event.preventDefault();
  }
}

function capitalizeFirstLetter2() {
  textBox2.value =
    textBox2.value.charAt(0).toUpperCase() +
    textBox2.value.slice(1).toLowerCase();
}

// 3rd task: only numerical (only 2 decimal precision) //48-57 //46

const textBox3 = document.getElementById("task-3");
textBox3.addEventListener("keypress", validKeyPress3);

function validKeyPress3(event) {
  const charCode = event.keyCode;

  const decimal = textBox3.value;
  const decimalArray = decimal.split("");

  if (charCode === 46) {
    decimalArray.forEach((e) => {
      if (e === ".") {
        event.preventDefault();
        return;
      }
    });
  }

  if (decimalArray[decimalArray.length - 3] === ".") {
    event.preventDefault();
    return;
  }
  if (charCode > 47 && charCode < 58) {
    console.log(charCode);
  } else if (charCode === 46 && textBox3.value.length != 0) {
    console.log(charCode);
  } else {
    event.preventDefault();
  }
}

// 4th task: alpha-numerics

const textBox4 = document.getElementById("task-4");
textBox4.addEventListener("keypress", validKeyPress4);

function validKeyPress4(event) {
  const charCode = event.keyCode;

  if (textBox4.value.length >= 20) {
    event.preventDefault();
    return;
  }

  if (textBox4.value.length === 0 && charCode > 47 && charCode < 58) {
    event.preventDefault();
    return;
  }

  if (
    (charCode > 64 && charCode < 91) ||
    (charCode > 96 && charCode < 123) ||
    (charCode > 47 && charCode < 58)
  ) {
    console.log(charCode);
  } else {
    event.preventDefault();
  }
}