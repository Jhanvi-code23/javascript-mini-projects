//number guessing game

//firatly we need the min and max values

const min=1;
const max=100;
//generating a random number between min and max
//const answer= Math.random()*(max-min+1); //gives a between 0 and 100 with decimal
//therefore we use math.floor to round it off to the nearest whole number

const answer=Math.floor(Math.random()*(max-min+1));
console.log(answer); //to check the answer in console

let attempts=0; //to count the number of attempts
let guess;
let running=true; //so we can control the game loop

while(running==true){
    guess=window.prompt(`Enter a guess between ${min} and ${max}:`); //to take input from user
    guess=Number(guess); //convert string to number
    
    if(isNaN(guess)){
        window.alert("Please enter a valid number.");
        continue; //to skip the rest of the loop and start again
    }
    else if(guess<min || guess>max){
        window.alert(`Please enter a number between ${min} and ${max}.`);
        continue;
    }
    else{
        attempts++; //increment attempts only for valid guesses
        if (guess<answer){
            window.alert("Too low! Try again.");
        }
        else if(guess>answer){
            window.alert("Too high! Try again.");
        }
        else{
            window.alert(`Congratulations! You guessed the number ${answer} in ${attempts} attempts.`);
            running=false; //to end the game loop
        }
    }
}