let userNumberList = [];
let somma = 0;




while(somma < 200){
    userNumberList.push(parseInt(prompt("inserisci un  numero")));
    somma+= userNumberList[userNumberList.length - 1];

    console.log("la somma degli elementi è: " + somma)
    
}



