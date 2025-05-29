import leia from 'readline-sync'






let contadorMulherCis = 0, contadorHomemCis = 0, contadorNaoBinario = 0
let contadorMulherTrans = 0, contadorHomemTrans = 0, contadorOutros = 0

let contadorBack = 0, contadorFront = 0, contadorMobile = 0, contadorFull = 0

let somaIdades = 0, contadorIdade = 0

let mulherCisTransFront = 0, homemCisTransMobile40 = 0, naoBinarioFullstack30 = 0

let mediaIdades = 0
let pararPrograma = false

while (!pararPrograma) {

    let identGenero = leia.questionInt('digite sua identidade de genero: ')
    contadorIdade++

    let idade = leia.questionInt('digite usa idade: ')
    somaIdades += idade

    switch (identGenero) {

        case 1:
            console.log('Mulher Cis')
            contadorMulherCis++
            break

        case 2:
            console.log('Homem Cis')
            contadorHomemCis++
            break
        case 3:
            console.log(' Não Binário')
            contadorNaoBinario++
            break
        case 4:
            console.log(' Mulher Trans')
            contadorMulherTrans++
            break
        case 5:
            console.log(' Homem Trans')
            contadorHomemTrans++
            break
        case 6:
            console.log('Outros')
            contadorOutros++
            break
        default:
            console.log('digito invalido')
    }

    let areadev = leia.questionInt('digite a area de desenvolvimento: ')

    switch (areadev) {
        case 1:
            contadorBack++
            break

        case 2:
            contadorFront++
            break

        case 3:
            contadorMobile++
            break

        case 4:
            contadorFull++
            break
    }

    let continuar = leia.keyInYNStrict('deseja adicionar um novo colaborador: ')



    if ((identGenero === 1 || identGenero === 4) && areadev === 2) {
        mulherCisTransFront++
    }

    if ((identGenero === 2 || identGenero === 5) && areadev === 3 && idade > 40) {
        homemCisTransMobile40++
    }

    if ((identGenero === 3 && areadev === 4) && idade < 30) {
        naoBinarioFullstack30++
    }

    if (!continuar) {
        pararPrograma = true
        break
    }

    mediaIdades = (somaIdades / contadorIdade)



}

console.log(`Número de devs Backend: ${contadorBack}`)
console.log(`Número de Mulheres Cis e Trans na área de Frontend: ${mulherCisTransFront}`)
console.log(`Número de Homens Cis e Trans com mais de 40 anos na área de Mobile: ${homemCisTransMobile40}`)
console.log(`Número de pessoas Não Binárias com menos de 30 anos na área FullStack: ${naoBinarioFullstack30}`)
console.log(`Média de idades: ${mediaIdades.toFixed(2)}`)