

const passwordBox = document.getElementById("password");
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password="";
    //ye 4 isi;iye bana rahe taki ek ek sabke aaye baki ek me karte toh koi aaye ya na aaye (kisi me symbol hi nahi aata )
    password+=upperCase[Math.floor(Math.random()*upperCase.length)]
    //math random -> 0 se 1 tk random no.
    //math.random()uppercase.length -> random no. from 0 to 26-1
    //math.floor=round off
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)]

    password+=number[Math.floor(Math.random()*number.length)]

    password+=symbol[Math.floor(Math.random()*symbol.length)];

    //ab tk bus 4 hi length ka password aayaa hai next ke liye aage

    while(length>password.length)
    {
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    //agar kisi box me kuch bharna hai toh humlog .value use karke bhar skte hai

    passwordBox.value=password;
}


//older method

function copyPassword()
{
    passwordBox.select()
    document.execCommand("copy");
}



