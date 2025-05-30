import readLine from "readline-sync";

const cores: Array<string> = new Array<string>();

let valor: string = "s";

while (valor != "n") {
  let cor: string = readLine.question(
    "digite o nome da cor que deseja adicionar (ou 'n' - para sair): "
  );
  valor = cor;

  if (cor != "s" && cor != "n") {
    cores.push(cor);
  }
}

console.log(`Lista das cores: ${cores}\n`);

console.log(`Lista das cores ordenadas: ${cores.sort()}`);
