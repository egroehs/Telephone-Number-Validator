const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const result = document.getElementById("results-text");
const clear = document.getElementById("clear-btn");


const regex = /^(1\s?-?)?((\(\d{3}\))|(\d{3}))\s?-?\d{3}-?\s?\)?\d{4}$/;
  check.addEventListener("click", testPhone);

function testPhone() {
if(input.value === "") {
    alert("Please provide a phone number")
} else if (regex.test(input.value) === true) {
    return result.innerText = `Valid US number: ${input.value}`
 } else {
    return result.innerText = `Invalid US number: ${input.value}`
 }
}

