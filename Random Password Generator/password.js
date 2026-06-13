function passwordGenerator(length, includelowercase, includeuppercase, includenumbers, includesymbols){

    const lowercasechars="abcdefghijklmnopqrstuvwxyz";
    const uppercasechars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars="0123456789";
    const symbolchars="@_#";

    let allowedchars="";
    let password="";

    allowedchars += includelowercase ? lowercasechars : "";
    allowedchars += includeuppercase ? uppercasechars : "";
    allowedchars += includenumbers ? numberchars : "";
    allowedchars += includesymbols ? symbolchars : "";

    if(length<=0){
        return "enter atleast one character";
    }

    for (let i=0; i<length; i++){
        const randomIndex= Math.floor(Math.random()*allowedchars.length);
        password += allowedchars[randomIndex];
    }

    return password;
}
    const passlength= 12;
    const includelowercase= true;
    const includeuppercase= true;
    const includenumbers=true;
    const includesymbols=true;
    const password= passwordGenerator(passlength, includelowercase, includeuppercase, includenumbers, includesymbols);
    
    console.log(password);