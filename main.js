// Janeiro
salario1 = 3000;
aluguel1 = 1000;
contaDeLuz1 = 200;
contaDeAgua1 = 100;
internet1 = 100;
transporte1 = 300;
lazer1 = 300;
alimentacao1 = 500;

saldo1 =
  salario1 -
  aluguel1 -
  contaDeLuz1 -
  contaDeAgua1 -
  internet1 -
  transporte1 -
  lazer1 -
  alimentacao1;

console.log("Janeiro");
console.log(saldo1);

// Boolean
estaNegativo1 = saldo1 < 0;

if (estaNegativo1) {
  console.log("Juros de janeiro");

  juros1 = saldo1 * 0.1;

  console.log(juros1);

  saldo1 = saldo1 + juros1;
} else {
  console.log("Rendimentos de janeiro");

  rendimentos1 = saldo1 * 0.005;

  console.log(rendimentos1);

  saldo1 = saldo1 + rendimentos1;
}

console.log(saldo1);

// Fevereiro
salario2 = 3000;
aluguel2 = 1200;
contaDeLuz2 = 250;
contaDeAgua2 = 100;
internet2 = 100;
transporte2 = 500;
lazer2 = 0;
alimentacao2 = 1000;

saldo2 =
  salario2 -
  aluguel2 -
  contaDeLuz2 -
  contaDeAgua2 -
  internet2 -
  transporte2 -
  lazer2 -
  alimentacao2;

console.log("Fevereiro");

console.log(saldo2);

// Boolean
estaNegativo2 = saldo2 < 0;

if (estaNegativo2) {
  console.log("Juros de fevereiro");

  juros2 = saldo2 * 0.1;

  console.log(juros2);

  saldo2 = saldo2 + juros2;
} else {
  console.log("Rendimentos de fevereiro");

  rendimentos2 = saldo2 * 0.005;

  console.log(rendimentos2);

  saldo2 = saldo2 + rendimentos2;
}

console.log(saldo2);

acumuladoAno = saldo1 + saldo2;

// Acumulado no ano
console.log("Ano");

console.log(acumuladoAno);
