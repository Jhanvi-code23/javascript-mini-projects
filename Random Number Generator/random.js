//Random number generator

// let randomNum= Math.random();
// console.log(randomNum);

//say i want to get a random number between 0 and 10, toh i can do this by multiplying the random number by 10 i.e, Math.random()*10
//this will give me a number between 0 and 10 but it can be a decimal number so to get a whole number we can use Math.floor() to round it down to the nearest whole number.

//lets generate a random number on a throw of the dice.

//let randomNumber=Math.floor(Math.random()*6)+1; //adding 1 because Math.random()*6 will give us a number between 0 and 5
/* can also write like this if i want a number between a max and min value...
const min=50;
const max=100;
let randomNumber=Math.floor(Math.random()* (max-min))+min;
*/

let result1=document.getElementById("result1");
let result2=document.getElementById("result2");
let result3=document.getElementById("result3");
let roll=document.getElementById("roll");
let randomNum;

roll.onclick=function(){
    randomNum=Math.floor(Math.random()*6)+1;
    result1.textContent="die 1: "+randomNum;
    randomNum=Math.floor(Math.random()*6)+1;
    result2.textContent="die 2: "+randomNum;
    randomNum=Math.floor(Math.random()*6)+1;
    result3.textContent="die 3: "+randomNum;
}