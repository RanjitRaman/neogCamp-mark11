var birthDate = document.querySelector("#birth-date");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-lucky");
var outputMessage = document.querySelector("#output-message");

outputMessage.style.display = "none";
function checkBirthDateIsLucky() {
  outputMessage.style.display = "block";
  let sum = 0;
  if (birthDate.value == 0 || luckyNumber.value == 0) {
    outputMessage.innerText = "Enter details correctly ❌";
  } else {
    var newBirthDate = convertDatetoString(birthDate.value);

    for (i = 0; i < newBirthDate.length; i++) {
      sum = sum + Number(newBirthDate[i]);
    }
    if (sum % luckyNumber.value == 0) {
      outputMessage.innerText = "Your birthday is lucky ✨";
    } else {
      outputMessage.innerText = "Your birthday is not lucky 😐";
    }
  }
}

function convertDatetoString(DOB) {
  return DOB.replaceAll("-", "");
}
checkButton.addEventListener("click", checkBirthDateIsLucky);
