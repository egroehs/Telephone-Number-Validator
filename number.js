const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const result = document.getElementById("results-div");
const clear = document.getElementById("clear-btn");

const regex = /^(1\s?-?)?((\(\d{3}\))|(\d{3}))\s?-?\d{3}-?\s?\)?\d{4}$/;

function testNumber() {
  if (input.value === "") {
    alert("Please provide a phone number");
  } else if (regex.test(input.value) === true) {
    return (result.innerText = `Valid US number: ${input.value}`);
  } else {
    return (result.innerHTML = `Invalid US number: ${input.value}`);
  }
}

function clearFunc() {
  result.innerText = "";
}

check.addEventListener("click", testNumber);

clear.addEventListener("click", clearFunc);
