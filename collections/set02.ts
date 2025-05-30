import readLine from "readline-sync";

const numeros: Set<number> = new Set<number>();

for (let i: number = 0; i < 10; i++) {
  let number: number = readLine.questionInt(
    `digite o ${i + 1} numero para adicionar ao array: `
  );
  numeros.add(number);
}

let continuar: boolean = true;

do {
  let numeroEncontrar: number = readLine.questionInt(
    "\ndigite o numero que voce quer encontrar: "
  );

  if (numeros.has(numeroEncontrar)) {
    console.log(` o numero ${numeroEncontrar} foi encontrado!`);
  } else {
    console.log(` o numero ${numeroEncontrar} não foi encontrado!`);
  }

  let resposta: boolean = readLine.keyInYNStrict(
    "\n deseja continuar?: (y) - sim (n) - nao"
  );
  if (!resposta) {
    continuar = false;
  }
} while (continuar);
