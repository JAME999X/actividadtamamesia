function calcular() {
  let campos = ["tickets","consultas","tokensIn","tokensOut","tiempoActual","tiempoIA","costeHora"];
  
  for (let c of campos) {
    if (!document.getElementById(c).value) {
      document.getElementById("error").innerText = "Faltan datos";
      return;
    }
  }

  let tickets = Number(tickets.value);
  let consultas = Number(consultas.value);
  let tokensIn = Number(tokensIn.value);
  let tokensOut = Number(tokensOut.value);
  let tAct = Number(tiempoActual.value);
  let tIA = Number(tiempoIA.value);
  let coste = Number(costeHora.value);

  let consultasTot = tickets * consultas;
  let tokensEntrada = consultasTot * tokensIn;
  let tokensSalida = consultasTot * tokensOut;

  let ahorroMin = (tAct - tIA) * tickets;
  let ahorroHoras = ahorroMin / 60;
  let ahorro = ahorroHoras * coste;

  document.getElementById("resultados").innerHTML = `
    Consultas: ${consultasTot}<br>
    Tokens entrada: ${tokensEntrada}<br>
    Tokens salida: ${tokensSalida}<br>
    Ahorro horas: ${ahorroHoras.toFixed(2)}<br>
    Ahorro €: ${ahorro.toFixed(2)}
  `;
}

function generarResumen() {
  resumen.value =
    resultados.innerText +
    "\n\nRAID:\n" + raid.value +
    "\n\nDECISIÓN:\n" + decision.value;
}
