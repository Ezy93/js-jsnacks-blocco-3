/* creo un'altra funzione che controlla che la somma di due numeri x e y sia pari
*
* sommaPari(24214, 12451241) ==> true se la somma mi dà un numero pari
*                            ==> false se la somma mi dà un numero dispari
*/

function oddOEven(firstNumber, secondNumber){
    let sum = firstNumber + secondNumber

    if(sum % 2 == 0){
        return "la somma dei due numeri e pari"
        
    }else{
        return "la somma dei due numeri e dispari"      
    }
}

console.log(oddOEven(2, 10));                                 