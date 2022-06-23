// Assignment Code

const lowChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","UV","W","X","Y","Z"]
const numbers = ["0","1","2","3","4","5","6","7","8","9"]
const symbols = ["!","@","#","$","%","^","&","*","(",")","[","]"]

var generateBtn = document.querySelector("#generate");

//Generate Password function

function generatePassword() {
  
  var confirmLength = prompt("Choose a password length.")
    if (confirmLength < 8) {
      return alert("Password must be between 8 and 128 characters.");
    } else if (confirmLength > 128) {
      return alert("Password must be between 8 and 128 characters.");
    } else if (confirmLength >= 8 <= 128) {
      var confirmLow = confirm("Do you want to use lowercase letters?")
      var confirmUp = confirm("Do you want to use uppercase letters?")
      var confirmNum = confirm("Do you want to use numbers?")
      var confirmSym = confirm("Do you want to use special characters?")
        if (!(confirmLow || confirmUp || confirmNum || confirmSym)) {
          return alert("You must select at least one character set!");
            }
        const confirms = [confirmLow, confirmUp, confirmNum, confirmSym]
        if (confirms(!confirmLow)) {
          var noLow = upperChar.concat(numbers, symbols);
          console.log(noLow)
        } 
    }
      /* const confirms = [confirmLow, confirmUp, confirmNum, confirmSym] */
      /* var selections = confirms */

     /*  if (confirms(!confirmLow)) {
        var noLow = upperChar.concat(numbers, symbols);
        console.log(noLow)
      }  */
      /* 
      if (confirms(!confirmUp)) {
        var noUp = lowerChar.concat(numbers, symbols);
        
        
      } 

      if (confirms(!confirmNum)) {
        var noNum = lowerChar.concat(upperChar, symbols);
        
        
      } 
      
      if (confirms(!confirmSym)) {
        var noSym = lowerChar.concat(upperChar, numbers);
        
        
      } 
 */
}

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Create function expressions

// Explore parameter placeholders

// Explore callback functions

// Push array for passwords

// Object Strings

// Activity 03.20 README arrays into new array, indexof method

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
