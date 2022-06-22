// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  confirm("Do you want to use lowercase letters?")
  confirm("Do you want to use uppercase letters?")
  confirm("Do you want to use numbers?")
  confirm("Do you want to use special characters?")

  
 /* if (window.confirm) "Do you want to use lower case letters?"
  if (window.confirm) "Do you want to use uppercase letters?"
  if (window.confirm) "Do you want to use numbers?"
  if (window.confirm) "Do you want to use special characters?" */

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
