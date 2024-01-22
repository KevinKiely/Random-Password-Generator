
// Get references to the #generate element

/*
var generateBtn = document.querySelector("#generate");
var passLength = document.querySelector('#length');
var passUpper = document.querySelector('#Upper');
var passLower = document.querySelector('#Lower');
var passNumbers = document.querySelector('#Numbers');
var passSpecial = document.querySelector('#Special');
*/

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCaseArray = upperCase.split("");
var lowerCase = "abcdefghijklmnopqrstuvwyz";
var lowerCaseArray = lowerCase.split("");
var numbers = "0123456789";
var numbersArray = numbers.split("");
var special = "!@#$%^&*()_+=<>?/";
var specialArray = special.split("");


/* let length = passLength.value;  */


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  


  ar passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

