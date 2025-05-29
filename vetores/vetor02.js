import leia from 'readline-sync'



let listaNumeros = []
let media = 0
let count = 0
let listaImpares = []
for (let i = 0; i < 10; i++) {

    let numero = leia.questionInt(`digite o ${i + 1} numero: `)

    listaNumeros.push(numero)
    count++

}

let pares = listaNumeros.filter(n => n % 2 == 0)


let soma = listaNumeros.reduce((acc, n) => acc + n, 0)


listaNumeros.forEach((n, i) => {
    if (i % 2 !== 0) {
        listaImpares.push(n)
    }
})

media = soma / count

console.log(`elementos nos indices impares ${listaImpares}`)
console.log(`elementos pares: ${pares}`)
console.log(`soma: ${soma}`)
console.log(`média: ${media}`)







