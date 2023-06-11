
//Characters
var possible = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789!@#$%^&*()';
var numbers = "0123456789";
var specialchars = "!@#$%^&*()";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



function writePassword() {

  //Questions

  var pwlength = window.prompt("How many characters do you want your password to be? Choose a number between 8-128")

  if (pwlength < 8 || pwlength > 128) {
    var tryAgain = window.confirm("Sorry - password length must be between 8-128 characters. Try again?")
  } if ((tryAgain)) {
    var pwlength = window.prompt("How many characters do you want your password to be? Choose a number between 8-128")
  } if ((pwlength < 8 || pwlength > 128) & (!tryAgain)) {
    return
  }

  var includeNumbers = window.confirm("Do you want to include numbers")

  var includeCapitalLetters = window.confirm("Do you want to include capital letters")

  var includeLowerCase = window.confirm("Do you want to include lowercase letters?")

  var includeSpecial = window.confirm("Do you want to include special characters")


  if ((!includeNumbers) & (!includeCapitalLetters) & (!includeLowerCase) & (!includeSpecial)) {
    var tryPreferencesAgain = window.confirm("Sorry, you must choose at least one character type. Try again?")
  } if ((tryPreferencesAgain)) {
    var includeNumbers = window.confirm("Do you want to include numbers")

    var includeCapitalLetters = window.confirm("Do you want to include capital letters")

    var includeLowerCase = window.confirm("Do you want to include lowercase letters?")

    var includeSpecial = window.confirm("Do you want to include special characters")
  }

  //Password Generation

  function displaypass(length) {
    let result = ' ';
    if (pwlength > 8 & pwlength < 128 & (includeNumbers) & (includeCapitalLetters) & (includeLowerCase) & (includeSpecial)) {
      charactersLength = possible.length
      for (let i = 0; i < length; i++) {
        result += possible.charAt(Math.floor(Math.random() * charactersLength))
      }
    }
    // Numbers Only
    if (pwlength > 8 & pwlength < 128 & (includeNumbers) & (!includeCapitalLetters) & (!includeLowerCase) & (!includeSpecial)) {
      charactersLength = numbers.length
      for (let i = 0; i < length; i++) {
        result += numbers.charAt(Math.floor(Math.random() * charactersLength))
      }
    }
    // Capitals only
    if (pwlength > 8 & pwlength < 128 & (!includeNumbers) & (includeCapitalLetters) & (!includeLowerCase) & (!includeSpecial)) {
      charactersLength = uppercase.length
      for (let i = 0; i < length; i++) {
        result += uppercase.charAt(Math.floor(Math.random() * charactersLength))
      }
    }
    // Lowercase Only
    if (pwlength > 8 & pwlength < 128 & (!includeNumbers) & (!includeCapitalLetters) & (includeLowerCase) & (!includeSpecial)) {
      charactersLength = lowercase.length
      for (let i = 0; i < length; i++) {
        result += lowercase.charAt(Math.floor(Math.random() * charactersLength))
      }
    }
    // Special Characters Only
    if (pwlength > 8 & pwlength < 128 & (!includeNumbers) & (!includeCapitalLetters) & (!includeLowerCase) & (includeSpecial)) {
      charactersLength = specialchars.length
      for (let i = 0; i < length; i++) {
        result += specialchars.charAt(Math.floor(Math.random() * charactersLength))
      }
    }
    //Numbers & Capitals
    if (pwlength > 8 & pwlength < 128 & (includeNumbers) & (includeCapitalLetters) & (!includeLowerCase) & (!includeSpecial)) {
      charactersLength = (numbers + uppercase).length
      for (let i = 0; i < length; i++) {
        result += numbers.charAt(Math.floor(Math.random() * charactersLength)) + uppercase.charAt(Math.floor(Math.random() * charactersLength))
      }
    }
    //Numbers & Lowercase
    if (pwlength > 8 & pwlength < 128 & (includeNumbers) & (!includeCapitalLetters) & (includeLowerCase) & (!includeSpecial)) {
      charactersLength = (numbers + lowercase).length
      for (let i = 0; i < length; i++) {
        result += numbers.charAt(Math.floor(Math.random() * charactersLength)) + lowercase.charAt(Math.floor(Math.random() * charactersLength))
      }
    }
    //Numbers & Special Characters
    if (pwlength > 8 & pwlength < 128 & (includeNumbers) & (!includeCapitalLetters) & (!includeLowerCase) & (includeSpecial)) {
      charactersLength = (numbers + specialchars).length
      for (let i = 0; i < length; i++) {
        result += numbers.charAt(Math.floor(Math.random() * charactersLength)) + specialchars.charAt(Math.floor(Math.random() * charactersLength))
      }
    }
    //Capitals & Lowercase
    if (pwlength > 8 & pwlength < 128 & (!includeNumbers) & (includeCapitalLetters) & (includeLowerCase) & (!includeSpecial)) {
      charactersLength = (uppercase + lowercase).length
      for (let i = 0; i < length; i++) {
        result += uppercase.charAt(Math.floor(Math.random() * charactersLength)) + lowercase.charAt(Math.floor(Math.random() * charactersLength))
      }
    }
    //Capitals & Special Characters
    if (pwlength > 8 & pwlength < 128 & (!includeNumbers) & (includeCapitalLetters) & (!includeLowerCase) & (includeSpecial)) {
      charactersLength = (uppercase + specialchars).length
      for (let i = 0; i < length; i++) {
        result += uppercase.charAt(Math.floor(Math.random() * charactersLength)) + specialchars.charAt(Math.floor(Math.random() * charactersLength))
      }
    }
    //Lowercase & Special Characters
    if (pwlength > 8 & pwlength < 128 & (!includeNumbers) & (!includeCapitalLetters) & (includeLowerCase) & (includeSpecial)) {
      charactersLength = (lowercase + specialchars).length
      for (let i = 0; i < length; i++) {
        result += lowercase.charAt(Math.floor(Math.random() * charactersLength)) + specialchars.charAt(Math.floor(Math.random() * charactersLength))
      }
    }
    //Numbers, Capitals & Lowercase
    if (pwlength > 8 & pwlength < 128 & (includeNumbers) & (includeCapitalLetters) & (includeLowerCase) & (!includeSpecial)) {
      charactersLength = (numbers + uppercase + lowercase).length
      for (let i = 0; i < length; i++) {
        result += numbers.charAt(Math.floor(Math.random() * charactersLength)) + uppercase.charAt(Math.floor(Math.random() * charactersLength)) + lowercase.charAt(Math.floor(Math.random() * charactersLength))
      }
    }
    //Numbers, Capitals & Specials
    if (pwlength > 8 & pwlength < 128 & (includeNumbers) & (includeCapitalLetters) & (!includeLowerCase) & (includeSpecial)) {
      charactersLength = (numbers + uppercase + specialchars).length
      for (let i = 0; i < length; i++) {
        result += numbers.charAt(Math.floor(Math.random() * charactersLength)) + uppercase.charAt(Math.floor(Math.random() * charactersLength)) + specialchars.charAt(Math.floor(Math.random() * charactersLength))

      }
    }
    //Numbers, Lowercase & Specials 
    if (pwlength > 8 & pwlength < 128 & (includeNumbers) & (!includeCapitalLetters) & (includeLowerCase) & (includeSpecial)) {
      charactersLength = (numbers + lowercase + specialchars).length
      for (let i = 0; i < length; i++) {
        result += numbers.charAt(Math.floor(Math.random() * charactersLength)) + lowercase.charAt(Math.floor(Math.random() * charactersLength)) + specialchars.charAt(Math.floor(Math.random() * charactersLength))

      }
    }
    //Capitals, Lowercase & Specials
    if (pwlength > 8 & pwlength < 128 & (!includeNumbers) & (includeCapitalLetters) & (includeLowerCase) & (includeSpecial)) {
      charactersLength = (uppercase + lowercase + specialchars).length
      for (let i = 0; i < length; i++) {
        result += uppercase.charAt(Math.floor(Math.random() * charactersLength)) + lowercase.charAt(Math.floor(Math.random() * charactersLength)) + specialchars.charAt(Math.floor(Math.random() * charactersLength))

      }
    }
    return result;
  }

  //Display Password
  var password = displaypass(pwlength);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return;
}



//Button Listener

let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);



