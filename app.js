function mostrarFormulario() {
  const destino = document.getElementById("destino").value;
  const formulario = document.getElementById("formularioUrbano");
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (destino === "urbano") {
    formulario.classList.remove("oculto");
  } else {
    formulario.classList.add("oculto");
    alert("Cálculos para 'Metropolitano' y 'Nacional' aún no están disponibles.");
  }
}

function calcularTarifa() {
  const peso = parseFloat(document.getElementById("peso").value);
  const zona = parseInt(document.getElementById("zona").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(peso) || peso <= 0) {
    resultado.innerHTML = "❗ Ingresa un peso válido.";
    return;
  }

  let tarifaBase = 0;
  let adicional = 0;

  switch (zona) {
    case 0:
      tarifaBase = 15122;
      adicional = 25;
      break;
    case 1:
      tarifaBase = 23488;
      adicional = 30;
      break;
    case 2:
      tarifaBase = 34936;
      adicional = 43;
      break;
    case 3:
      tarifaBase = 15122;
      adicional = 46;
      break;
    default:
      resultado.innerHTML = "❗ Zona no válida.";
      return;
  }

  let total = tarifaBase;
  if (peso > 750) {
    total += (peso - 750) * adicional;
  }

  resultado.innerHTML = `✅ La tarifa calculada es: <strong>$${total.toFixed(0)}</strong>`;
}
