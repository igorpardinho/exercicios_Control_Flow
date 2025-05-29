import leia from 'readline-sync'


let nomeColaborador = leia.question('digite o nome do colaborador: ')



let cargo = leia.questionInt('digite o codigo do colaborador: ')


let salarioReal = leia.questionFloat('digite o salario: ')

let nomeCargo;

let reajuste;


switch (true) {

    case cargo == 1:
        nomeCargo = 'Gerente'
        reajuste = 0.10
        break
    case cargo == 2:
        nomeCargo = 'Vendedor'
        reajuste = 0.07
        break
    case cargo == 3:
        nomeCargo = 'Supervisor'
        reajuste = 0.09
        break
    case cargo == 4:
        nomeCargo = 'Motorista'
        reajuste = 0.06
        break
    case cargo == 5:
        nomeCargo = 'Estoquista'
        reajuste = 0.05
        break
    case cargo == 6:
        nomeCargo = 'Tecnico de TI'
        reajuste = 0.08
        break
}

let novoSalario = salarioReal + (reajuste * salarioReal)

const salarioFormatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}).format(novoSalario)

console.log(`Nome do colaborador: ${nomeColaborador}\t
    Cargo: ${nomeCargo}\t
    Salário: ${salarioFormatado}`)
