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
    "FLORENCIA": { "1.5": 718599, "2": 737426, "3.5": 793907, "4.5": 831562, "7": 526180 },
    "GARZON": { "2": 492623, "3.5": 307137, "4.5": 400405 },
    "LA PLATA": { "1.5": 539915, "2": 304136, "3.5": 449473, "4.5": 598815 },
    "PITALITO": { "1.5": 377249, "2": 377249, "3.5": 622326, "4.5": 744864 },
    "YAGUARA": { "1.5": 116910, "2": 151106, "3.5": 253698, "4.5": 322091 },
    "ACEVEDO": { "1.5": 336771, "2": 392023, "3.5": 557782, "4.5": 668288, "10": 1236768 },
    "AGRADO": { "1.5": 255399, "2": 302199, "3.5": 442607, "4.5": 536213 },
    "ALGECIRAS": { "1.5": 118991, "2": 151495, "3.5": 248999, "4.5": 314002, "7": 497996 },
    "ALPUJARRA": { "1.5": 263843, "2": 278144, "3.5": 321046, "4.5": 349647 },
    "ALTAMIRA": { "1.5": 267721, "2": 315824, "3.5": 460131, "4.5": 556335 },
    "BOGOTA": { "4.5": 1218330, "34": 3574531 },
    "CALI": { "1.5": 1998371, "2": 1998371, "4.5": 2497965, "10": 3746947 },
    "COLOMBIA": { "1.5": 202063, "2": 243014, "3.5": 365871, "4.5": 447776 },
    "EL PATA": { "1.5": 226412, "2": 240714, "3.5": 283615, "4.5": 312215 },
    "ELIAS": { "1.5": 315516, "2": 368169, "3.5": 526125, "4.5": 631431 },
    "GIGANTE": { "1.5": 546363, "2": 377249, "3.5": 622326, "4.5": 744864 },
    "GIRARDOT": { "1.5": 377249, "4.5": 669655 },
    "GUADALUPE": { "1.5": 116910, "2": 151106, "3.5": 253698, "4.5": 322091 },
    "HOBO": { "1.5": 164768, "2": 179068, "3.5": 221971, "4.5": 250573 },
    "IBAGUE": { "1.5": 585590 },
    "IQUIRA": { "1.5": 141295, "2": 175746, "3.5": 279101, "4.5": 348004 },
    "ISNOS": { "1.5": 418145, "2": 481846, "3.5": 672958, "4.5": 800363 },
    "LA ARGENTINA": { "1.5": 286629, "2": 336683, "3.5": 486839, "4.5": 586944 },
    "MOCOA": { "1.5": 1012470, "2": 1026771, "3.5": 1069674, "4.5": 1098276 },
    "NATAGA": { "1.5": 229902, "2": 274105, "3.5": 406711, "4.5": 495115 },
    "NATAGAIMA": { "2": 268735, "4.5": 471497, "10": 917572 },
    "OPORAPA": { "1.5": 373090, "2": 431594, "3.5": 607102, "4.5": 724108 },
    "PAICOL": { "1.5": 208648, "2": 250251, "3.5": 375055, "4.5": 458260 },
    "PAICOL - VEREDA EL CARMEN": { "2": 393142, "4.5": 851403 },
    "PALESTINA": { "1.5": 376286, "2": 435439, "3.5": 612896, "4.5": 731203 },
    "PALMIRA": { "1.5": 1012708 },
    "PEREIRA": { "1.5": 961134 },
    "PITAL": { "1.5": 262833, "2": 310283, "3.5": 452639, "4.5": 547545 },
    "PUERTO ASIS": { "2": 1074938, "4.5": 1409646, "10": 1935615 },
    "SALADO BLANCO": { "1.5": 341859, "2": 397110, "3.5": 562869, "4.5": 673375 },
    "SAN AGUSTIN": { "1.5": 414951, "2": 478006, "3.5": 667164, "4.5": 793271 },
    "SAN ANDRES DE TELLO": { "1.5": 153625, "2": 187348, "3.5": 288516, "4.5": 355960 },
    "SAN ANTONIO": { "1.5": 153625, "2": 187348, "3.5": 288516, "4.5": 355960 },
    "SAN VICENTE DEL CAGUAN": { "2": 1028938, "4.5": 1815774, "10": 2178929 },
    "SANAGUSTIN": { "2": 414951 },
    "SANTAMARIA": { "1.5": 114951, "2": 146802, "3.5": 242359, "4.5": 306061 },
    "SANTANDER DE QUILICHAO": { "4.5": 1031459 },
    "SUAZA": { "1.5": 290021, "2": 340074, "3.5": 490233, "4.5": 590336 },
    "TARQUI": { "1.5": 288327, "2": 338378, "3.5": 488535, "4.5": 588642 },
    "TERUEL": { "1.5": 112406, "2": 144259, "3.5": 239814, "4.5": 303518 },
    "TESALIA": { "1.5": 186346, "2": 225999, "3.5": 344956, "4.5": 424260 },
    "TIMANA": { "1.5": 298953, "2": 350305, "3.5": 504363, "4.5": 607068 }
  };

  if (!tarifasNacional[destino] || !tarifasNacional[destino][tipoVehiculo]) {
    resultado.innerHTML = "❗ Combinación de destino y tipo de vehículo no válida.";
    return;
  }

  const tarifa = tarifasNacional[destino][tipoVehiculo];
  resultado.innerHTML = `✅ Tarifa Nacional para ${destino} con vehículo tipo ${tipoVehiculo}: $${tarifa.toLocaleString()}`;
}
