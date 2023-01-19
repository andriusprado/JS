// tipo Number
// const = Constantes

const primeiroNumero = 2;
const segundoNumero = 25;

const operacaoMatematica = primeiroNumero - segundoNumero;

console.log("Parte I - Primeiro cálculo");
console.log(primeiroNumero, segundoNumero);
console.log(operacaoMatematica);

// Floating Point

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = 0.5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log("Parte II - Floating Point");
console.log(numeroPontoFlutuante, pontoFlutuanteSemZero);
console.log(novaOperacao);

// Infinity Result

var a = 10;
var b = 0;
console.log("Parte III - Retorno Infinity");
console.log(a / b);

// Function Math.PI

console.log("Parte IV - Função Math.PI");
console.log(Math.PI);

var c = 0;
var d = 0;
console.log("Parte V - Not a Number");
console.log(c / d); // NaN

// Extra content

//Step 1: Calculate without rounding

function ganhoPorHora(salario, horasTrabalhadasNoMes) {
  const salarioHora = salario / horasTrabalhadasNoMes;

  return salarioHora;
}
console.log("Parte VI - Sem Arredondamento");
console.log(ganhoPorHora(3000, 176));

//Step 2: Calculate with rounding

function ganhoPorHora1(salario1, horasTrabalhadasNoMes1) {
  const salarioHora1 = salario1 / horasTrabalhadasNoMes1;

  return Math.round(salarioHora1);
}

console.log("Parte VII - Arredondamento via Round");
console.log(ganhoPorHora1(3000, 176));

//Step 3: Calculate with rounding using toFixed()

function ganhoPorHora2(salario2, horasTrabalhadasNoMes2) {
  const salarioHora2 = (salario2 / horasTrabalhadasNoMes2).toFixed(2);

  const total_fixed = salarioHora2.fixed(2);

  return total_fixed;
}
console.log("Parte VIII - Arredondamento via toFixed");
console.log(ganhoPorHora2(3000, 17));

//Step 4: Calculate with currencies

function ganhoPorHora3(salario3, horasTrabalhadasNoMes3) {
  const salarioHora3 = salario3 / horasTrabalhadasNoMes3;

  const formatado = salarioHora3.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formatado;
}
console.log("Parte IX - Moeda");
console.log(ganhoPorHora3(3000, 17));

//Step 5: Upper and lower rounding

console.log("Parte X - Arredondamento para cima e para baixo");
console.log(Math.ceil(11.123));
console.log(Math.floor(12.123));

//Step 6: Ordering with sort()

var lista = [10, 5, 15, 1, 8, 2, 7, 4, 55]
lista.sort();
console.log("Parte XI - Ordenações incorretas com sort");
console.log(lista);

function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }
lista.sort(comparaNumeros);
console.log("Parte XII - Ordenações corretas com sort")
console.log(lista);