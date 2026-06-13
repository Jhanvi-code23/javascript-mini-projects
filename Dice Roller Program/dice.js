function rolldice(){
    const numofDice=document.getElementById("numofDice").value;
    const result=document.getElementById("result");
    const diceimages=document.getElementById("diceimages");
    const values =[];
    const images= [];

    //if i roll 3 dice, i want to run the for loop 3 times and get 3 random numbers between 1 and 6

    for(let i=1; i<=numofDice; i++){
        const randomNumber=Math.floor(Math.random()*6)+1;
        values.push(randomNumber);
        
        images.push(`<img src="dice_images/${randomNumber}.png">`); //images are named as their number on the dice, so if randomNumber is 4, it will look for 4.png in the dice_images folder
    }

    result.textContent= values.join(", ");
    diceimages.innerHTML= images.join(" ");
}