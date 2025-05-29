


let listaNumeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]


console.log(`Elementos da Diagonal Principal: ${listaNumeros[0][0]} ${listaNumeros[1][1]} ${listaNumeros[2][2]}`)
console.log(`Elementos da Diagonal Secundario: ${listaNumeros[0][2]} ${listaNumeros[1][1]} ${listaNumeros[2][0]}`)


let valor = 0
let valor2 = 0
let valor3 = 0
let valor4 = 0
let valor5 = 0
let valor6 = 0

for (let i = 0; i < listaNumeros.length; i++) {
    for (let j = 0; j < listaNumeros[i].length; j++) {
        if (listaNumeros[i][j] === listaNumeros[0][0]) {
            valor = listaNumeros[i][j]
        } else if (listaNumeros[i][j] === listaNumeros[1][1]) {
            valor2 = listaNumeros[i][j]
        } else if (listaNumeros[i][j] === listaNumeros[2][2]) {
            valor3 = listaNumeros[i][j]
        }

        if (listaNumeros[i][j] === listaNumeros[0][2]) {
            valor4 = listaNumeros[i][j]
        }
        else if (listaNumeros[i][j] === listaNumeros[1][1]) {
            valor5 = listaNumeros[i][j]
        } else if (listaNumeros[i][j] === listaNumeros[2][0]) {
            valor6 = listaNumeros[i][j]
        }
    }
}

let resultadoDiagonalPrincipal = valor + valor2 + valor3
let resultadoDiagonalSecundaria = valor4 + valor5 + valor6

console.log(`Soma dos Elementos da Diagonal Principal: ${resultadoDiagonalPrincipal}`)
console.log(`Soma dos Elementos da Diagonal Secundária: ${resultadoDiagonalSecundaria}`)
