function mostrarFormulario() {
  const destino = document.getElementById("destino").value;
  const formularioUrbano = document.getElementById("formularioUrbano");
  const formularioMetro = document.getElementById("formularioMetropolitano");
  const formularioNacional = document.getElementById("formularioNacional");
  const resultado = document.getElementById("resultado");

  formularioUrbano.classList.add("oculto");
  formularioMetro.classList.add("oculto");
  formularioNacional.classList.add("oculto");
  resultado.innerHTML = "";

  if (destino === "urbano") {
    formularioUrbano.classList.remove("oculto");
  } else if (destino === "metropolitano") {
    formularioMetro.classList.remove("oculto");
  } else if (destino === "nacional") {
    formularioNacional.classList.remove("oculto");
  }
}

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
      tarifaBase = 41544;
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

function calcularTarifaMetropolitano() {
  const destinoMetro = document.getElementById("metroDestino").value;
  const pesoMetro = parseFloat(document.getElementById("pesoMetro").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(pesoMetro) || pesoMetro <= 0) {
    resultado.innerHTML = "❗ Ingresa un peso válido.";
    return;
  }

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

function calcularTarifaNacional() {
  const destino = document.getElementById("nacionalDestino").value;
  const tipoVehiculo = document.getElementById("tipoVehiculo").value;
  const resultado = document.getElementById("resultado");

  const tarifasNacional = {
    "FLORENCIA": {
      "1.5": 718599,
      "2": 737426,
      "3.5": 793907,
      "4.5": 831562,
      "7": 526180
    },
    "GARZON": {
      "2": 492623,
      "3.5": 307137,
      "4.5": 400405
    },
    "LA PLATA": {
      "1.5": 539915,
      "2": 304136,
      "3.5": 449473,
      "4.5": 598815
    },
    "PITALITO": {
      "1.5": 377249,
      "2": 377249,
      "3.5": 622326,
      "4.5": 669655
    },
    "YAGUARA": {
      "1.5": 116910,
      "2": 151106,
      "3.5": 253698,
      "4.5": 322091
    },
    "ACEVEDO": {
      "1.5": 336771,
      "2": 392023,
      "3.5": 557782,
      "4.5": 668288,
      "10": 1236768
    },
    "AGRADO": {
      "1.5": 255399,
      "2": 302199,
      "3.5": 442607,
      "4.5": 536213
    },
    "ALGECIRAS": {
      "1.5": 118991,
      "2": 151495,
      "3.5": 248999,
      "4.5": 314002,
      "7": 497996
    },
    "ALPUJARRA": {
      "1.5": 263843,
      "2": 278144,
      "3.5": 321046
      // Puedes seguir agregando más si lo deseas
    }
  };

  if (!tarifasNacional[destino] || !tarifasNacional[destino][tipoVehiculo]) {
    resultado.innerHTML = "❗ Combinación de destino y tipo de vehículo no válida.";
    return;
  }

  const tarifa = tarifasNacional[destino][tipoVehiculo];
  resultado.innerHTML = `✅ Tarifa Nacional para ${destino} con vehículo tipo ${tipoVehiculo}: $${tarifa.toLocaleString()}`;
}
