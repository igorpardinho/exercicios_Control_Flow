import leia from 'readline-sync'


let nomeDoador = leia.question('digite o nome do doador: ')

let idadeDoador = leia.questionInt('digite a idade do doador: ')

let primeiraDoacao = leia.keyInYNStrict('primeria doacao de sangue?: ')

let podeDoar;



if(idadeDoador >= 18 && idadeDoador <= 69){
    if(idadeDoador >= 60 && idadeDoador <= 69 && primeiraDoacao == true){
        podeDoar = false;
    }else{
        podeDoar = true
    }
}

if(podeDoar){
    console.log(`${nomeDoador} está apto para doar sangue!`)
}else{
    console.log(`${nomeDoador} não está apto para doar sangue!`)
}