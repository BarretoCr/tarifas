// Función para mostrar el formulario según el destino seleccionado
function mostrarFormulario() {
  const destino = document.getElementById("destino").value;
  const formularioUrbano = document.getElementById("formularioUrbano");
  const formularioMetro = document.getElementById("formularioMetropolitano");
  const mensajeNacional = document.getElementById("mensajeNacional");
  const resultado = document.getElementById("resultado");
  
  // Se ocultan todos los formularios/mensajes
  formularioUrbano.classList.add("oculto");
  formularioMetro.classList.add("oculto");
  mensajeNacional.classList.add("oculto");
  resultado.innerHTML = "";
  
  if (destino === "urbano") {
    formularioUrbano.classList.remove("oculto");
  } else if (destino === "metropolitano") {
    formularioMetro.classList.remove("oculto");
  } else if (destino === "nacional") {
    mensajeNacional.classList.remove("oculto");
  }
}

// Cálculo para destinos urbanos
function calcularTarifaUrbano() {
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

  resultado.innerHTML = `✅ Tarifa Urbana: $${total.toFixed(0)}`;
}

// Cálculo para destinos metropolitanos
function calcularTarifaMetropolitano() {
  const destinoMetro = document.getElementById("metroDestino").value;
  const pesoMetro = parseFloat(document.getElementById("pesoMetro").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(pesoMetro) || pesoMetro <= 0) {
    resultado.innerHTML = "❗ Ingresa un peso válido.";
    return;
  }

  // Tabla de tarifas para destinos metropolitanos
  const tarifasMetro = {
    "CAMPOALEGRE": { base: 96837, adicional: 51 },
    "PALERMO": { base: 75344, adicional: 51 },
    "RIVERA": { base: 75344, adicional: 49 },
    "VILLAVIEJA": { base: 75344, adicional: 57 },
    "AIPE": { base: 96837, adicional: 53 },
    "FORTALECILLAS": { base: 75344, adicional: 27 },
    "BARAYA": { base: 53976, adicional: 57 },
    "CAGUAN": { base: 45920, adicional: 27 },
    "EL JUNCAL": { base: 46726, adicional: 53 },
    "LAULLOA": { base: 47847, adicional: 49 },
    "TELLO": { base: 41085, adicional: 51 },
    "TRIUNFO": { base: 45920, adicional: 27 },
    "SAN ANDRES TELLO": { base: 113916, adicional: 63 },
    "SAN ANTONIO": { base: 113916, adicional: 63 }
  };

  if (!tarifasMetro[destinoMetro]) {
    resultado.innerHTML = "❗ Destino metropolitano no válido.";
    return;
  }

  const tarifa = tarifasMetro[destinoMetro];
  let total = tarifa.base;
  
  if (pesoMetro > 1000) {
    total += (pesoMetro - 1000) * tarifa.adicional;
  }
  
  resultado.innerHTML = `✅ Tarifa Metropolitano para ${destinoMetro}: $${total.toFixed(0)}`;
}
