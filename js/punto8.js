const triangulos = parseInt(
  prompt("¿Las medidas de cuantos triangulos vas a ingresar?")
);
let Mayor = 0;

for (i = 0; i < triangulos; i++) {
  const base = parseInt(prompt("Ingrese el valor de la base"));
  const altura = parseInt(prompt("Ingrese el valor de la altura"));
  const superficie = (base * altura) / 2;
  alert(
    `La base del triangulo es de: ${base}, la altura es de: ${altura}, y la superficie es de: ${superficie}`
  );
  if (superficie > 12) {
    Mayor++;
  }
}
alert(`Los triangulos con la superficie mayor a 12 son: ${Mayor}`);
