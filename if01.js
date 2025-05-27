import leia from 'readline-sync'



let A = leia.questionInt('digite o primeiro numero ')
let B =leia.questionInt('digite o segundo numero ')
let C = leia.questionInt('digite o terceiro numero ')

let soma = A + B

if(soma > C){
    console.log(`A Soma de ${A} + ${B} = ${soma} é maior do que ${C}`)
}else{
    console.log(`A Soma de ${A} + ${B} = ${soma} é menor que ${C}`)
}




