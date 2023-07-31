let prompt = require ("prompt-sync") ();

let idade = parseInt (prompt("Digite sua idade: "))

while( idade <18){
    idade = parseInt (prompt("Digite sua idade: "))
}

console.log("Voce é maior de idade. Tem: " + idade + " anos")