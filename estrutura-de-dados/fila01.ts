import { Queue } from "./queue.ts";
import readLine from "readline-sync";
let listaClientes: Queue<string> = new Queue<string>();

while (true) {
  let opcao = readLine.questionInt(`digite a opcao desejada:\t
    1 - Adicionar Cliente na Fila\t
    2 - Listar todos os Clientes\t
    3 - Retirar Cliente da Fila\t
    0 - Sair\n`);

  if (opcao === 0) {
    break;
  }
  switch (opcao) {
    case 1:
      let nomeCliente = readLine.question("digite o nome do cliente: ");
      listaClientes.enqueue(nomeCliente);
      console.log("cliente adicionado\n");
      break;
    case 2:
      console.log(listaClientes.getAll());
      break;
    case 3:
      if (listaClientes.size() !== 0) {
        listaClientes.dequeue();
        console.log("cliente removido\n");
      } else {
        console.log("lista está vazia\n");
      }

      break;
    default:
      console.log("digite uma opção válida\n");
  }
}
