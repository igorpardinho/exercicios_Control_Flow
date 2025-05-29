import leia from 'readline-sync'



let primeiroNumero = leia.questionInt('digite o primeiro numero do intervalo: ')
let segundoNumero = leia.questionInt('digite o segundo numero do intervalo: ')


if (primeiroNumero > segundoNumero) {
    console.log('intervalo inválido!')

} else {
    for (let i = primeiroNumero; i < segundoNumero; i++) {


        if (i % 3 == 0 && i % 5 == 0) {
            console.log(`${i} é multiplo de 3 e 5`)
        }
    }
}

