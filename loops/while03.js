import leia from 'readline-sync'


let idade = 0

let contadorMenores = 0
let contadoresMaiores = 0
while(idade >= 0){
    idade = leia.questionInt('digite a idade: ')

    if(idade < 21 && idade > 0){
        contadorMenores++
    }
    if(idade > 50){
        contadoresMaiores++
    }

}

console.log(`Total de pessoas menores de 21 anos: ${contadorMenores}\n
    Total de pessoas maiores de 50 anos: ${contadoresMaiores}`)