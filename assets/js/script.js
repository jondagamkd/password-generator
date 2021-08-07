// Assignment code here
//function generateRandomLetter() {
//  const alphabet = "abcdefghijklmnopqrstuvwxyz"
//
//  return alphabet[Math.floor(Math.random() * alphabet.length)]
//}

//var str = "tacos"
//var shuffled = str.split('').sort(function(){return 0.5-Math.random()}).join('');

/*
function shuffle(s) {
  var arr = s.split('');           // Convert String to array
  
  arr.sort(function() {
    return 0.5 - Math.random();
  });  
  
  s = arr.join('');                // Convert Array to string
  return s;                        // Return shuffled string
}

var s = 'ABCDEF';
s = shuffle(s);
console.log(s);

//fisher yates method https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * i)
  let k = points[i]
  points[i] = points[j]
  points[j] = k
} 
*/
//" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

var generatePassword = function() {

  while (!passString) {
    var passString = "";
    var userInput = false;
    var userValidateStr = "";
    var passLength = false;
    var pass = ""
    var userInput = confirm("Would you like the password to include lowercase letters?");
    if (userInput) {
      passString += "abcdefghijklmnopqrstuvwxyz";
      userValidateStr += "lowercase letters, ";
    }
    var userInput = confirm("Would you like the password to include uppercase letters?");
    if (userInput) {
      passString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      userValidateStr += "uppercase letters, ";
    }
    var userInput = confirm("Would you like the password to include numbers?");
    if (userInput) {
      passString += "0123456789";
      userValidateStr += "numbers, ";
    }
    var userInput = confirm("Would you like the password to include special characters?");
    if (userInput) {
      passString += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
      userValidateStr += "special characters, ";
    }
    while (!passLength) {
      var passLength = false;
      var userInput = prompt("How long would you like your password to be?\nPlease enter a number between 8 and 128.");
      var userInput = parseInt(userInput);
      if (typeof userInput === 'number' && userInput > 7 && userInput < 129) {
        passLength = userInput;
        userValidateStr += "and " + passLength + " characters long.";
      }
      else {
        alert("Please enter a valid number from 8 to 128.");
      }
    }
    if (passString) {
      var userInput = confirm("You have included the following options, would you like to proceed with these?\n" + userValidateStr);
      if (!userInput) {
        var passString = "";
      }
    }
    if (!passString) {
      alert("Please choose from within the following options.  Note that at least one option must be included.");
    }
  }

  for (let index = 0; index < passLength; index++) {
    pass += passString[Math.floor(Math.random() * passString.length)]
  }

  //Give the password a good shuffle.
  function shuffle(input) {
    // Convert string to array.
    var pstring = input.split('');        
    
    //Using the fisher yates method.
    //https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    for (let i = pstring.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * i)
      let k = pstring[i]
      pstring[i] = pstring[j]
      pstring[j] = k
    }   

    // Convert array to string.
    input = pstring.join('');

    // Return shuffled string.            
    return input;                        
  }

  console.log("The passString = " + passString)
  return shuffle(pass)
} 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
