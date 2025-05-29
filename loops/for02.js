
import leia from 'readline-sync'



let countPar = 0
let countImpar = 0

for(let i = 1; i <= 10; i++){

    let numero = leia.questionInt(`digite o ${i} numero: `)

    if(numero % 2 == 0){
        countPar++
    }else{
        countImpar++
    }
}

console.log(`Pares ${countPar} e Impares ${countImpar}`)