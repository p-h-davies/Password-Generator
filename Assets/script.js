


//Characters
var possible = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789!@#$%^&*()';
var numbers = "0123456789";
var specialchars = "!@#$%^&*()";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";






function writePassword() {
  const pwlength = window.prompt("How many characters do you want your password to be? Choose a number between 8-128")

  // If desired length is too short or long

  if (pwlength < 8 || pwlength > 128) {
    const tryagain = window.confirm("Sorry - password length must be between 8-128 characters. Try again?")
  }

  const includeNumbers = window.confirm("Do you want to include numbers")

  const includeCapitalLetters = window.confirm("Do you want to include capital letters")

  const includeLowerCase = window.confirm("Do you want to include lowercase letters?")

  const includeSpecial = window.confirm("Do you want to include special characters")


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
        var password = (result)
      }
    }
    // Capitals only
    if (pwlength > 8 & pwlength < 128 & (!includeNumbers) & (includeCapitalLetters) & (!includeLowerCase) & (!includeSpecial)) {
      charactersLength = uppercase.length
      for (let i = 0; i < length; i++) {
        result += uppercase.charAt(Math.floor(Math.random() * charactersLength))
        var password = (result)
      }
    }
    // Lowercase Only
    if (pwlength > 8 & pwlength < 128 & (!includeNumbers) & (!includeCapitalLetters) & (includeLowerCase) & (!includeSpecial)) {
      charactersLength = lowercase.length
      for (let i = 0; i < length; i++) {
        result += lowercase.charAt(Math.floor(Math.random() * charactersLength))
        var password = (result)
      }
    }
    // Special Characters Only
    if (pwlength > 8 & pwlength < 128 & (!includeNumbers) & (!includeCapitalLetters) & (!includeLowerCase) & (includeSpecial)) {
      charactersLength = specialchars.length
      for (let i = 0; i < length; i++) {
        result += specialchars.charAt(Math.floor(Math.random() * charactersLength))
        var password = (result)
      }
    }
    //Numbers & Capitals
    if (pwlength > 8 & pwlength < 128 & (includeNumbers) & (includeCapitalLetters) & (!includeLowerCase) & (!includeSpecial)) {
      charactersLength = (numbers + uppercase).length
      for (let i = 0; i < length; i++) {
        result += numbers.charAt(Math.floor(Math.random() * charactersLength)) + uppercase.charAt(Math.floor(Math.random() * charactersLength))
        var password = (result)
      }
    }
    //Numbers & Lowercase
    if (pwlength > 8 & pwlength < 128 & (includeNumbers) & (!includeCapitalLetters) & (includeLowerCase) & (!includeSpecial)) {
      charactersLength = (numbers + lowercase).length
      for (let i = 0; i < length; i++) {
        result += numbers.charAt(Math.floor(Math.random() * charactersLength)) + lowercase.charAt(Math.floor(Math.random() * charactersLength))
        var password = (result)
      }
    }
    //Numbers & Special Characters
    if (pwlength > 8 & pwlength < 128 & (includeNumbers) & (!includeCapitalLetters) & (!includeLowerCase) & (includeSpecial)) {
      charactersLength = (numbers + specialchars).length
      for (let i = 0; i < length; i++) {
        result += numbers.charAt(Math.floor(Math.random() * charactersLength)) + specialchars.charAt(Math.floor(Math.random() * charactersLength))
        var password = (result)
      }
    }
    //Capitals & Lowercase
    if (pwlength > 8 & pwlength < 128 & (!includeNumbers) & (includeCapitalLetters) & (includeLowerCase) & (!includeSpecial)) {
      charactersLength = (uppercase + lowercase).length
      for (let i = 0; i < length; i++) {
        result += uppercase.charAt(Math.floor(Math.random() * charactersLength)) + lowercase.charAt(Math.floor(Math.random() * charactersLength))
        var password = (result)
      }
    }
    //Capitals & Special Characters
    if (pwlength > 8 & pwlength < 128 & (!includeNumbers) & (includeCapitalLetters) & (!includeLowerCase) & (includeSpecial)) {
      charactersLength = (uppercase + specialchars).length
      for (let i = 0; i < length; i++) {
        result += uppercase.charAt(Math.floor(Math.random() * charactersLength)) + specialchars.charAt(Math.floor(Math.random() * charactersLength))
        var password = (result)
      }
    }
    //Lowercase & Special Characters
    if (pwlength > 8 & pwlength < 128 & (!includeNumbers) & (!includeCapitalLetters) & (includeLowerCase) & (includeSpecial)) {
      charactersLength = (lowercase + specialchars).length
      for (let i = 0; i < length; i++) {
        result += lowercase.charAt(Math.floor(Math.random() * charactersLength)) + specialchars.charAt(Math.floor(Math.random() * charactersLength))
        var password = (result)
      }
    }
    //Numbers, Capitals & Lowercase
    if (pwlength > 8 & pwlength < 128 & (includeNumbers) & (includeCapitalLetters) & (includeLowerCase) & (!includeSpecial)) {
      charactersLength = (numbers + uppercase + lowercase).length
      for (let i = 0; i < length; i++) {
        result += number.charAt(Math.floor(Math.random() * charactersLength)) + uppercase.charAt(Math.floor(Math.random() * charactersLength)) + lowercase.charAt(Math.floor(Math.random() * charactersLength))
        var password = (result)
      }
    }
    //Numbers, Capitals & Specials
    if (pwlength > 8 & pwlength < 128 & (includeNumbers) & (includeCapitalLetters) & (!includeLowerCase) & (includeSpecial)) {
      charactersLength = (numbers + uppercase + specialchars).length
      for (let i = 0; i < length; i++) {
        result += number.charAt(Math.floor(Math.random() * charactersLength)) + uppercase.charAt(Math.floor(Math.random() * charactersLength)) + specialchars.charAt(Math.floor(Math.random() * charactersLength))
        var password = (result)
      }
    }
    //Numbers, Lowercase & Specials 
    if (pwlength > 8 & pwlength < 128 & (includeNumbers) & (!includeCapitalLetters) & (includeLowerCase) & (includeSpecial)) {
      charactersLength = (numbers + lowercase + specialchars).length
      for (let i = 0; i < length; i++) {
        result += number.charAt(Math.floor(Math.random() * charactersLength)) + lowercase.charAt(Math.floor(Math.random() * charactersLength)) + specialchars.charAt(Math.floor(Math.random() * charactersLength))

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
  window.confirm(displaypass(pwlength))
  return;
}



// Button Listener

let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);



