const passwordBox = document.getElementById("password");
const length= 11;
const upperCase = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
const lowerCase = "abcdefghijklmnopqrstuvwxy";
const number = "1234567890";
const symbol= "!@#$%^&*()";
const allChars= upperCase + lowerCase + number + symbol;

function createPassword(){
    let password= "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length>password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];

    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
   
}