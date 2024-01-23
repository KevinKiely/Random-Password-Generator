
// Get references to the #generate element

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);
var finalPassword = document.querySelector("#password");


var passLength = document.querySelector("#passwordLength");
var passUpper = document.querySelector("#upperCheck");
var passLower = document.querySelector("#lowerCheck");
var passNumbers = document.querySelector("#numbersCheck");
var passSpecial = document.querySelector("#specialCheck");




var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwyz";
var numbers = "0123456789";
var special = "!@#$%^&*()_+=<>?/";


function generatePassword () {
  var password = "";
  var length = passLength.value;
  var chars = "";

  chars += passUpper.checked ? upperCase : "";
  chars += passLower.checked ? lowerCase : "";
  chars += passNumbers.checked ? numbers : "";
  chars += passSpecial.checked ? special : "";

  for (let i = 0; i <=length; i++) {
    let rand = Math.floor(Math.random() * chars.length);
    password += chars.substring(rand,rand + 1);
  }

  finalPassword.value = password;

}

 

/*
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
   
 var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button

*/
