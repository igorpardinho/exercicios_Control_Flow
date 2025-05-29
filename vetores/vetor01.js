import leia from 'readline-sync'

let listaNumeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]

let valor = 1;


while (valor > 0) {

    valor = leia.questionInt('digite o numero que quer encontrar: ')
    if (valor === 0) {
        break
    }

    let encontrado = false
    for (let i = 0; i < listaNumeros.length; i++) {
        if (valor === listaNumeros[i]) {
            console.log(`o número ${valor} está na posição ${i}`)
            encontrado = true
            break
        }

    }

    if (!encontrado) {
        console.log(`O número ${valor} não foi encontrado`)
    }




}


