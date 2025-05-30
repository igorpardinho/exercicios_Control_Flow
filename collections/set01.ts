import readLine from "readline-sync";

const numeros: Set<number> = new Set<number>();

for (let i: number = 0; i < 10; i++) {
  let numero: number = readLine.questionInt(
    `digite o ${i + 1} numero nao repetido: `
  );
  numeros.add(numero);
}

console.log(numeros);
