function calcular() {
  let tickets = Number(document.getElementById("tickets").value);
  let consultas = Number(document.getElementById("consultas").value);
  let tokensIn = Number(document.getElementById("tokensIn").value);
  let tokensOut = Number(document.getElementById("tokensOut").value);
  let tiempoActual = Number(document.getElementById("tiempoActual").value);
  let tiempoIA = Number(document.getElementById("tiempoIA").value);
  let costeHora = Number(document.getElementById("costeHora").value);

  let consultasTotales = tickets * consultas;
  let tokensEntrada = consultasTotales * tokensIn;
  let tokensSalida = consultasTotales * tokensOut;

  let minutosAhorrados = (tiempoActual - tiempoIA) * tickets;
  let horasAhorradas = minutosAhorrados / 60;
  let ahorro = horasAhorradas * costeHora;

  document.getElementById("res").innerText =
    "Consultas: " + consultasTotales +
    " | Tokens entrada: " + tokensEntrada +
    " | Tokens salida: " + tokensSalida +
    " | Ahorro (€): " + ahorro.toFixed(2);
}

function generarResumen() {
  let res = document.getElementById("res").innerText;
  let raid = document.getElementById("raid").value;
  let decision = document.getElementById("decision").value;

  document.getElementById("resumen").value =
    "RESULTADOS:\n" + res +
    "\n\nRAID:\n" + raid +
    "\n\nDECISIÓN:\n" + decision;
}
