// Assignment Code

var lowChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var symbols = ["!","@","#","$","%","^","&","*","(",")","[","]"]
var allChar = [lowChar, upperChar, numbers, symbols]
var preRandPW = []

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
        if ((!confirmLow && !confirmUp && !confirmNum && !confirmSym)) {
          return alert("You must select at least one character set!");
            }
          var confirms = [confirmLow, confirmUp, confirmNum, confirmSym] 
          for (var i = confirms.length - 1; i >= 0; i--) {  
            if (confirms[i] == true) {
               (confirms[i] = allChar[i])
            } else confirms.splice (i,1)
                preRandPW = confirms[0] 
                if (confirms.length != 1) {
                for (var i = 1; i < confirms.length; i++) {
                  preRandPW = preRandPW.concat(confirms[i])
                  }}
                  
                    console.log(preRandPW)
            }
            
            }


          
            /* for (var i = 0; i = confirmLength;) {
              var genPassword = Math.floor(Math.random() * confirmLength)
            } */
            
            /* console.log(confirms); */

            // for loop new array for n, pull random index #s

            /* if (i = true) {newArr = charSelections
            console.log(charSelections);
          } */

      }
        // If we iterate through array, do work if one is true
        // For loop to iterate 
        // How to create a connection between for example confirmLow and lowChar?

        /* if (confirms(!confirmLow)) {
          var noLow = upperChar.concat(numbers, symbols);
          console.log(noLow) */
    
    
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