let prompt = require ("prompt-sync") ();

let numero = parseInt (prompt("Digite o numero "))


for(let contador =  0; contador <=10; contador ++ ){
    console.log(numero+"x"+contador+"="+numero * contador)
}