// firstName
const firstName = document.getElementById("first-name");
firstName.addEventListener("keypress", aplhaSpace);
firstName.addEventListener("blur", capitalizeFirstLetter);
firstName.addEventListener("paste", preventPaste);
firstName.addEventListener("blur", isRequired);

// lastName
const lastName = document.getElementById("last-name");
lastName.addEventListener("keypress", aplhaSpace);
lastName.addEventListener("blur", capitalizeFirstLetter);
lastName.addEventListener("paste", preventPaste);
lastName.addEventListener("blur", isRequired);

// age
const age = document.getElementById("age");
age.addEventListener("keypress", ageValidation);
age.addEventListener("paste", preventPaste);

// phone number
const phone = document.getElementById("phone-number");
phone.addEventListener("keypress", numberOnly);
phone.addEventListener("paste", preventPaste);
phone.addEventListener("blur", lengthCheck);

// email
const email = document.getElementById("email-input");
email.addEventListener("keypress", alphaNumericSpecial);
email.addEventListener("paste", preventPaste);
email.addEventListener("blur", validateEmail);

// submit
const submit = document.getElementById("submit-button");
submit.addEventListener("click", submitForm);

// submit form
function submitForm(event) {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const age = document.getElementById("age");
  const phone = document.getElementById("phone-number");
  const email = document.getElementById("email-input");

  if (
    firstName.style.border === "1px solid red" ||
    lastName.style.border === "1px solid red" ||
    age.style.border === "1px solid red" ||
    phone.style.border === "1px solid red" ||
    email.style.border === "1px solid red"
  ) {
    console.log("Invalid form !");
    event.preventDefault();
    return;
  }

  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.value,
    phone: phone.value,
    email: email.value,
  };
  console.log(formData);
}

// required
function isRequired(event) {
  const tag = event.target;
  if (tag.value === "") {
    tag.style.border = "1px solid red";
  } else {
    tag.style.border = "1px solid #ccc";
  }
}

// prevent paste
function preventPaste(event) {
  const tag = event.target;
  // firstName & Last Name
  if (tag.id === "first-name" || tag.id === "last-name") {
    // check paste length exceeds 20
    const pasteValue = event.clipboardData.getData("text");
    const totalValue = tag.value + pasteValue;
    if (totalValue.length > 20) {
      event.preventDefault();
    } else {
      const pasteArray = pasteValue.split("");
      console.log(pasteArray);
      pasteArray.forEach((ch) => {
        if (
          (ch >= "a" && ch <= "z") ||
          (ch >= "A" && ch <= "Z") ||
          ch === " "
        ) {
          // pass
        } else {
          event.preventDefault();
          console.log("Invalid paste !");
          return;
        }
      });
    }
  }
  // age
  if (tag.id === "age") {
    const pasteValue = event.clipboardData.getData("text");
    const totalValue = tag.value + pasteValue;
    if (totalValue.length > 3) {
      event.preventDefault();
    } else {
      const pasteArray = pasteValue.split("");
      console.log(pasteArray);
      pasteArray.forEach((ch) => {
        if (ch >= "0" && ch <= "9") {
          // pass
        } else {
          event.preventDefault();
          // change border bg to red

          console.log("Invalid paste !");
          return;
        }
      });
    }
  }

  // phone number
  if (tag.id === "phone-number") {
    const pasteValue = event.clipboardData.getData("text");
    const totalValue = tag.value + pasteValue;
    if (totalValue.length > 10) {
      event.preventDefault();
    } else {
      const pasteArray = pasteValue.split("");
      // console.log(pasteArray);
      pasteArray.forEach((ch) => {
        if (ch >= "0" && ch <= "9") {
          // pass
        } else {
          event.preventDefault();
          console.log("Invalid phone number !");
          return;
        }
      });
    }
  }
}

// alpha + space (b/w text only) [ max_len: 20 ] restrict them to 20 characters.
function aplhaSpace(event) {
  const charCode = event.keyCode;
  const tag = event.target;
  if (tag.value.length >= 20) {
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

// capitalize first letter of each word
function capitalizeFirstLetter(event) {
  const tag = event.target;
  const inputArray = tag.value.split(" ");
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
  tag.value = finalString.slice(0, -1);
}

// age validation {max 3 digits}
function ageValidation(event) {
  const charCode = event.keyCode;
  if (event.target.value.length === 0 && charCode === 48) {
    event.preventDefault();
    console.log("No zero at first place.");
  }
  if (event.target.value.length >= 3) {
    console.log("Maximum 3 characters.");
    event.preventDefault();
  }
  if (charCode > 47 && charCode < 58) {
    console.log(charCode);
  } else {
    event.preventDefault();
  }
}

// phone number validation {max 10 digits}
function numberOnly(event) {
  const charCode = event.keyCode;
  if (event.target.value.length === 0) {
    if (charCode < 54 || charCode > 57) {
      console.log("Number should start with 6, 7, 8 or 9.");
      event.preventDefault();
      return;
    }
  }
  //length
  if (event.target.value.length >= 10) {
    console.log("Maximum 10 characters.");
    event.preventDefault();
    return;
  }
  if (charCode > 47 && charCode < 58) {
    console.log(charCode);
  } else {
    event.preventDefault();
  }
}
// phone number length check
function lengthCheck(event) {
  const tag = event.target;
  if (tag.value.length === 0 || tag.value.length < 10) {
    console.log("Invalid phone number !");
    tag.style.border = "1px solid red";
  } else {
    tag.style.border = "1px solid #ccc";
  }
}
// email validation
function alphaNumericSpecial(event) {
  const charCode = event.keyCode;
  if (
    (charCode > 64 && charCode < 91) ||
    (charCode > 96 && charCode < 123) ||
    (charCode > 47 && charCode < 58) ||
    charCode === 64 ||
    charCode === 46 ||
    charCode === 95
  ) {
    console.log(charCode);
  } else {
    event.preventDefault();
  }
}
function validateEmail(event) {
  const tag = event.target;
  const email = tag.value;
  if (email.length === 0) {
    console.log("Email is required !");
    tag.style.border = "1px solid red";
    return;
  } else {
    tag.style.border = "1px solid #ccc";
  }
  // regex
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    console.log("Invalid email !");
    tag.style.border = "1px solid red";
  } else {
    tag.style.border = "1px solid #ccc";
  }
}
