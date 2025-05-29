import leia from 'readline-sync'

let listaNumeros = []

let valor = 1;

let numero = 0;
for (let i = 0; i < 10; i++) {
    numero = leia.questionInt(`digite o ${i +1} numero para preencher o array: `)
    listaNumeros.push(numero)
}

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


