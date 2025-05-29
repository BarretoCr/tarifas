<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Calculadora de Tarifa de Transporte</title>
  <style>
    body {
      background-color: #0A1D37;
      color: #ffffff;
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .container {
      background-color: #102A43;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 0 20px #1E3A5F;
      width: 400px;
    }

    h2, h1 {
      text-align: center;
      color: #4FC3F7;
    }

    label {
      display: block;
      margin-top: 15px;
    }

    select, input[type="number"], button {
      width: 100%;
      padding: 10px;
      margin-top: 8px;
      border: none;
      border-radius: 8px;
    }

    button {
      background-color: #4FC3F7;
      color: #0A1D37;
      font-weight: bold;
      cursor: pointer;
      margin-top: 20px;
    }

    button:hover {
      background-color: #29B6F6;
    }

    .resultado {
      margin-top: 20px;
      background-color: #1A3B5D;
      padding: 15px;
      border-radius: 10px;
    }

    a {
      color: #4FC3F7;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Tarifas de Transporte</h2>
    <form method="POST">
      <label for="destino">Destino del vehículo:</label>
      <select name="destino" id="destino" required onchange="toggleUrbanoFields(this.value)">
        <option value="">Seleccione...</option>
        <option value="urbano" <?= (isset($_POST['destino']) && $_POST['destino'] === 'urbano') ? 'selected' : '' ?>>Urbano</option>
        <option value="metropolitano" <?= (isset($_POST['destino']) && $_POST['destino'] === 'metropolitano') ? 'selected' : '' ?>>Metropolitano</option>
        <option value="nacional" <?= (isset($_POST['destino']) && $_POST['destino'] === 'nacional') ? 'selected' : '' ?>>Nacional</option>
      </select>

      <div id="urbanoFields" style="display:none;">
        <label for="peso">Peso de la carga (kg):</label>
        <input type="number" name="peso" id="peso" min="1" value="<?= $_POST['peso'] ?? '' ?>">

        <label for="zona">Zona:</label>
        <select name="zona" id="zona">
          <option value="0" <?= (isset($_POST['zona']) && $_POST['zona'] == '0') ? 'selected' : '' ?>>Zona 0</option>
          <option value="1" <?= (isset($_POST['zona']) && $_POST['zona'] == '1') ? 'selected' : '' ?>>Zona 1</option>
          <option value="2" <?= (isset($_POST['zona']) && $_POST['zona'] == '2') ? 'selected' : '' ?>>Zona 2</option>
          <option value="3" <?= (isset($_POST['zona']) && $_POST['zona'] == '3') ? 'selected' : '' ?>>Zona 3</option>
        </select>
      </div>

      <button type="submit">Calcular Tarifa</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
      $destino = $_POST['destino'];

      if ($destino === 'urbano') {
        $peso = (int)$_POST['peso'];
        $zona = $_POST['zona'];

        $tarifas = [
          "0" => ["minima" => 15122, "adicional" => 25],
          "1" => ["minima" => 23488, "adicional" => 30],
          "2" => ["minima" => 34936, "adicional" => 43],
          "3" => ["minima" => 15122, "adicional" => 46],
        ];

        if (isset($tarifas[$zona])) {
          $tarifa = $tarifas[$zona];
          $tarifa_total = $tarifa["minima"];
          if ($peso > 750) {
            $extra_kg = $peso - 750;
            $tarifa_total += $extra_kg * $tarifa["adicional"];
          }

          echo "<div class='resultado'>";
          echo "<h1>Tarifa Calculada</h1>";
          echo "<p>Destino: <strong>Urbano</strong></p>";
          echo "<p>Zona: <strong>$zona</strong></p>";
          echo "<p>Peso: <strong>$peso kg</strong></p>";
          echo "<p>Tarifa total: <strong>$ " . number_format($tarifa_total, 0, ',', '.') . "</strong></p>";
          echo "</div>";
        }
      } else {
        echo "<div class='resultado'>";
        echo "<h1>🚧 En construcción</h1>";
        echo "<p>El cálculo para el destino <strong>$destino</strong> aún no está disponible.</p>";
        echo "</div>";
      }
    }
    ?>
  </div>

  <script>
    function toggleUrbanoFields(value) {
      document.getElementById('urbanoFields').style.display = (value === 'urbano') ? 'block' : 'none';
    }

    // Mostrar los campos si ya se envió el formulario con destino urbano
    window.onload = function() {
      const destino = document.getElementById('destino').value;
      toggleUrbanoFields(destino);
    };
  </script>
</body>
</html>
