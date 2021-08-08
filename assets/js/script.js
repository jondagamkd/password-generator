// Assignment code here
var generatePassword = function() {

  //Generate all available characters based on user input.  If user does not enter at least one option, repeat.
  while (!passString) {
    //Declare needed variables
    var passString = "";
    var userInput = false;
    var userValidateStr = "";
    var passLength = false;
    var pass = ""
    var options = {'lower':"", 'upper':"", 'number':"", "special":""}

    //Ask user if they want lowercase
    var userInput = confirm("Would you like the password to include lowercase letters?");
    if (userInput) {
      passString += "abcdefghijklmnopqrstuvwxyz";
      userValidateStr += "lowercase letters, ";
      options.lower = "abcdefghijklmnopqrstuvwxyz";
    }

    //Ask user if they want uppercase
    var userInput = confirm("Would you like the password to include uppercase letters?");
    if (userInput) {
      passString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      userValidateStr += "uppercase letters, ";
      options.upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    //Ask user if they want numbers
    var userInput = confirm("Would you like the password to include numbers?");
    if (userInput) {
      passString += "0123456789";
      userValidateStr += "numbers, ";
      options.number = "0123456789";
    }

    //Ask user if they want special characters
    var userInput = confirm("Would you like the password to include special characters?");
    if (userInput) {
      passString += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
      userValidateStr += "special characters, ";
      options.special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }

    //Ask user how long the password should be.  If cancel or other non-numeric answer is given, repeat.
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

    //Verify what options the user has asked for.  If they are not correct, return to beginning.
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

  //Generate password from available options and make sure all options are included.
  var needsOption = false;
  while (!needsOption) {
    var pass = ""
    //Start generating password one character at a time depending on available characters.
    for (let index = 0; index < passLength; index++) {
      pass += passString[Math.floor(Math.random() * passString.length)];
    }

    //Check each option to make sure they are included in the final password.  If not, re-roll.
    //Check lowercase
    if (options.lower) {
      if (pass.split('').filter(x => options.lower.split('').includes(x)).length) {
        var lowerCheck = 1;
        console.log("has lowercase");
      }
      else {
        var lowerCheck = 0;
        console.log("Did not include lowercase.");
      } 
    }
    else {var lowerCheck = 1;}

    //Check uppercase
    if (options.upper) {
      if (pass.split('').filter(x => options.upper.split('').includes(x)).length) {
        var upperCheck = 1;
        console.log("has uppercase");
      }
      else {
        var upperCheck = 0;
        console.log("Did not include uppercase.");
      }   
    }
    else {var upperCheck = 1;}

    //Check number
    if (options.number) {
      if (pass.split('').filter(x => options.number.split('').includes(x)).length) {
        var numberCheck = 1;
        console.log("has number");
      }
      else {
        var numberCheck = 0;
        console.log("Did not include numbers.");
      }   
    }
    else {var numberCheck = 1;}

    //Check special characters
    if (options.special) {
      if (pass.split('').filter(x => options.special.split('').includes(x)).length) {
        var specialCheck = 1;
        console.log("has special");
      }
      else {
        var specialCheck = 0;
        console.log("Did not include special characters.");
      }   
    }
    else {var specialCheck = 1;}

    if (lowerCheck && upperCheck && numberCheck && specialCheck) {
      needsOption = true;
    }
  }

  //Give the password a good shuffle for extra security.
  function shuffle(input) {
    // Convert string to array.
    var pstring = input.split('');        
    
    //Using the fisher yates method.
    //https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    for (let i = pstring.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let k = pstring[i];
      pstring[i] = pstring[j];
      pstring[j] = k;
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
