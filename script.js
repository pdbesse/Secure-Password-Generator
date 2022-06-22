// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowChar = "abcdefghijklmnopqrstuvwxyz"
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var symbols = "!@#$%^&*()[]"

// Write password to the #password input
function writePassword() {
  var confirmLength = prompt("Choose a password length.")
    if (confirmLength < 8) {
      return alert("Password must be between 8 and 128 characters.");
    } else if (confirmLength > 128) {
      return alert("Password must be between 8 and 128 characters.");
    } else if (confirmLength >= 8 <= 128) {
      var confirmLow = confirm("Do you want to use lowercase letters?")
      var confrimUp = confirm("Do you want to use uppercase letters?")
      var confirmNum = confirm("Do you want to use numbers?")
      var confirmSym = confirm("Do you want to use special characters?")
      if (!(lowChar || upperChar || numbers || symbol)) {
        return alert("You must select at least one character set");
       /*  return writePassword() */
      }
    }
    
  /* var confirmLow = confirm("Do you want to use lowercase letters?")
  var confrimUp = confirm("Do you want to use uppercase letters?")
  var confirmNum = confirm("Do you want to use numbers?")
  var confirmSym = confirm("Do you want to use special characters?")
  if (!(lowChar || upperChar || numbers || symbol)) {
    alert("You must select at least one character set");
    return writePassword()
  } */

  
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
