import leia from 'readline-sync'

let saldo = 10000.00

let operacao = leia.questionInt('digite a operacao desejada: ')

let valor


const saque = (valor) => {
    if (valor > saldo) {
        return 'saldo insuficiente'
    }
    return saldo -= valor
}

const deposito = (valor) => {
    return saldo += valor
}

const valorFormatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})


switch (operacao) {

    case 1:
        console.log(`Operação - Saldo\n Saldo: ${valorFormatado.format(saldo)}`)
        break

    case 2:
        valor = leia.questionFloat('digite o valor para saque: ')
        saque(valor)
        console.log(`Operação - Saque\n Novo Saldo: ${valorFormatado.format(saldo)}`)
        break
    case 3:
        valor = leia.questionFloat('digite o valor para deposito: ')
        deposito(valor)
        console.log(`Operação - Depósito\n Novo Saldo: ${valorFormatado.format(saldo)}`)
        break
    default:
        console.log('Operação inválida!')


}




