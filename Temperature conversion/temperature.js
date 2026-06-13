const textbox=document.getElementById("textbox");
const result=document.getElementById("result");
const toFarenheight=document.getElementById("toFarenheight");
const toCelcius=document.getElementById("toCelcius");

let temp;

function convert(){
    
    if(toFarenheight.checked){
        result.textContent="Converting to Farenheight";
        temp=(Number(textbox.value)*(9/5))+32;
        result.textContent= temp + "°F";
    }
    else if(toCelcius.checked){
        result.textContent="Converting to Celcius";
        temp=(Number(textbox.value)-32)/(9/5);
        result.textContent= temp + "°C";
    }
    else{
        result.textContent="Select a unit";
    }
}