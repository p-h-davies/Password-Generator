
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input

const makepassword = window.confirm("Do you want to make a password?")

const pwlength = window.prompt("How many characters do you want your password to be? Choose a number between 8-128")

const includeNumbers = window.confirm("Do you want to include numbers")

const includeCapitalLetters = window.confirm("Do you want to include capital letters")

const includeLowerCase = window.confirm("Do you want to include lowercase letters?")

const includeSpecial = window.confirm("Do you want to include special characters")



var possible = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789!@#$%^&*()';
var numbers = "0123456789";
var specialchars = "!@#$%^&*()";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";





function writePassword(length) {
  let result = ' ';
  // Numbers Only
  if (pwlength > 8 & pwlength < 180 & (includeNumbers) & (!includeCapitalLetters) & (!includeLowerCase) & (!includeSpecial)) {
    charactersLength = numbers.length
    for (let i = 0; i < length; i++) {
      result += numbers.charAt(Math.floor(Math.random() * charactersLength))
    }
  }
  // Capitals only
  if (pwlength > 8 & pwlength < 180 & (!includeNumbers) & (includeCapitalLetters) & (!includeLowerCase) & (!includeSpecial)) {
    charactersLength = uppercase.length
    for (let i = 0; i < length; i++) {
      result += uppercase.charAt(Math.floor(Math.random() * charactersLength))
    }
  }
  // Lowercase Only
  if (pwlength > 8 & pwlength < 180 & (!includeNumbers) & (!includeCapitalLetters) & (includeLowerCase) & (!includeSpecial)) {
    charactersLength = lowercase.length
    for (let i = 0; i < length; i++) {
      result += lowercase.charAt(Math.floor(Math.random() * charactersLength))
    }
  }
  // Special Characters Only
  if (pwlength > 8 & pwlength < 180 & (!includeNumbers) & (!includeCapitalLetters) & (!includeLowerCase) & (includeSpecial)) {
    charactersLength = specialchars.length
    for (let i = 0; i < length; i++) {
      result += specialchars.charAt(Math.floor(Math.random() * charactersLength))
    }
  }




  //Numbers & Capitals
  //Numbers & Lowercase
  //Numbers & Special Characters
  //Numbers, Capitals & Lowercase
  //Numbers, Capitals & Special
  //Numbers, Lowercase & Special
  //Uppercase & lowercase
  //Uppercase & Special
  //Uppercase, Lowercase & Special

  return result;
}

console.log(writePassword(length = pwlength));











var passwordText = document.querySelector("#password");
passwordText = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
