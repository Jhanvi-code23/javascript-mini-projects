function tossCoins(){
    const numCoins=document.getElementById("total_coins").value;
    const result=document.getElementById("result");
    const coinImages=document.getElementById("coinImages");
    const values =[];
    const images= [];

    //if i toss 2 coins, I would want to run the loop 2 times and get 2 random result heads or tails

    for(let i=0; i<numCoins; i++){
        const randomNumber=Math.floor(Math.random()*2); //this will give us either 0 or 1, where 0 can represent heads and 1 can represent tails
        if(randomNumber === 0){
            values.push("Heads");
            images.push(`<img src="images_coin/head.png">`);
        }
        else{
            values.push("Tails");
            images.push(`<img src="images_coin/tails.png">`);
        }
    }

    result.textContent= values.join(", "); //this will display the results as "Heads, Tails, Heads" if we tossed 3 coins and got those results
    coinImages.innerHTML= images.join(" "); //this will display the corresponding images for heads and tails

}