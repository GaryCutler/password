// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var checkUpper;
var checkLower;
var checkNumber;
var checkCharacter;
var userInupt;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generate password function
function generatePassword(){
  passwordLength=prompt("choose between 8 and 128 characters");
  console.log("password length " + passwordLength);

  if(!passwordLength) {
    alert("all set");
    
  } 
  else if (passwordLength < 8 || passwordLength> 128){
    passwordLength = prompt ("Invalid selection: please choose between 8 and 128")}
    

  else  {
    checkUpper = confirm("uppercase letters?");
    checkLower = confirm("Lowercase letters?");
    checkNumber = confirm("any numbers?");
    checkCharacter = confirm("any special characters?");
  };  
}
