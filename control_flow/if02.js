import leia from 'readline-sync'



let numero = leia.questionInt('digite o numero ')


if (numero == 0) {
    console.log('O número é zero');
} else if (numero % 2 === 0 && numero > 0) {
    console.log(`O número ${numero} é par e positivo`);
} else if (numero % 2 === 0 && numero < 0) {
    console.log(`O número ${numero} é par e negativo`);
} else if (numero % 2 !== 0 && numero > 0) {
    console.log(`O número ${numero} é ímpar e positivo`);
} else if (numero % 2 !== 0 && numero < 0) {
    console.log(`O número ${numero} é ímpar e negativo`);
}