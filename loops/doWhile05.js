import leia from 'readline-sync'


let soma = 0;
let resultado = 0;
let numero = 0;
do {
    numero = leia.questionInt('digite um numero: ')


    if (numero > 0) {
        resultado = soma += numero
    }


} while (numero != 0)

console.log(`A soma dos números positivos é: ${resultado}`)