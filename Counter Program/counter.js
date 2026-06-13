const increase=document.getElementById("increase");
const decrease=document.getElementById("decrease");
const reset=document.getElementById("reset");
const count=document.getElementById("count");
let counter=0;

increase.onclick=function(){
    counter++;
    count.textContent=counter;
}

reset.onclick=function(){
    counter=0;
    count.textContent=counter;
}

decrease.onclick=function(){
    counter--;
    count.textContent=counter;
}

//coolll!
