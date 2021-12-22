const listadoNotas = [];
let i = 1;

while (i <= 10) {
  const nota = parseInt(prompt("Ingrese una nota"));
  listadoNotas.push(nota);
  i++;
}
let j = 0;
let cantMayor = 0;
let cantMenores = 0;
while (j < listadoNotas.length) {
  if (listadoNotas[j] >= 7) {
    cantMayor++;
  } else {
    cantMenores++;
  }
  j++;
}
alert(
  `la cantidad de mayor a 7 es ${cantMayor} y la cantidad de menores es ${cantMenores}`
);
