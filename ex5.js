
    let antes = 0;
    let atual = 1;
    let novo;
    console.log(antes)
    console.log(atual)
    for (let contador = 2; contador <=10; contador ++){
        novo =antes + atual 
        antes = atual
        atual = novo
        console.log(antes)
    }