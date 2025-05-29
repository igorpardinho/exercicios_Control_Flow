import leia from 'readline-sync'


let numero1 = leia.questionFloat('digite o primeiro numero: ')

let numero2 = leia.questionFloat('digite o segundo numero: ')

let operacao = leia.questionInt('digite a operacao desejada: ')

let resultado;
switch (operacao) {

    case 1:
        resultado = numero1 + numero2
        console.log(`${numero1} + ${numero2} = ${resultado}`)
        break

    case 2:
        resultado = numero1 - numero2
        console.log(`${numero1} - ${numero2} = ${resultado}`)
        break

    case 3:
        resultado = numero1 * numero2
        console.log(`${numero1} X ${numero2} = ${resultado}`)
        break

    case 4:
        resultado = numero1 / numero2
        console.log(`${numero1} / ${numero2} = ${resultado}`)
        break

    default:
        console.log('Operação Inválida - digite um valor entre 1 e 4')

}

