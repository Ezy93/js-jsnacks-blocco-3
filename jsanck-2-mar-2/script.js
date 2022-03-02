let userInput = parseInt(prompt("inserisci un numero:"));





for(let i = 0;i < userInput;i++){
    let temporaryArray = [];
    while (temporaryArray.length < 10){
        temporaryArray.push(Math.floor(Math.random()*4528) + 4)
    };
    console.log(temporaryArray)
    
}                              