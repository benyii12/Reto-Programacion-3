let alturas = [];

let i = 1;
while (i < 4) {
  const medidas = Number(prompt("agregar alturas"));
  alturas.push(medidas);
  i++;
}

const sumaMedidas = alturas.reduce((valor1, valor2) => {
  return valor1 + valor2;
});

const promedio = Math.round(sumaMedidas / alturas.length);
alert(`El promedio de la suma de las alturas es: ${promedio}`);
