import { Stack } from "./stack.ts";
import readLine from "readline-sync";
let listaLivros: Stack<string> = new Stack<string>();

while (true) {
  let opcao = readLine.questionInt(`digite a opcao desejada:\t
    1 - Adicionar Livro na Pilha\t
    2 - Listar todos os Livros\t
    3 - Retirar Livro da Pilha\t
    0 - Sair\n`);

  if (opcao === 0) {
    break;
  }
  switch (opcao) {
    case 1:
      let nomeCliente = readLine.question("digite o nome do livro: ");
      listaLivros.push(nomeCliente);
      console.log("livro adicionado\n");
      break;
    case 2:
      console.log(listaLivros.getAll());
      break;
    case 3:
      if (listaLivros.size() !== 0) {
        listaLivros.pop();
        console.log("livro removido\n");
      } else {
        console.log("lista está vazia\n");
      }

      break;
    default:
      console.log("digite uma opção válida\n");
  }
}
