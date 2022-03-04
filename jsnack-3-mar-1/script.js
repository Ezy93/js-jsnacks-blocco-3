/**
 *
 *
Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l'altro di verde.
Partendo da un array di numeri, creo una funzione che controlla se siano pari o dispari.
Se sono pari li stampo nell'div "rosso",
se sono dispari li stampo nell'div "verde".
 *
 */


   let numberArray = [10 ,23, 30, 47 , 50 , 69 , 104];

   function oddOEven(array){
      for(let i = 0; i < array.length ; i++){
         if(array[i] % 2 == 0){
            document.getElementById("red").innerHTML += array[i];
         }else{
            document.getElementById("green").innerHTML += array[i];
         }
      }
   }

   oddOEven(numberArray);