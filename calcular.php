<?php
$destino = $_POST['destino'];

if ($destino === 'urbano') {
    $peso = (int)$_POST['peso'];
    $zona = $_POST['zona'];

    // Definir tarifas base y costo por kg adicional
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

        echo "<body style='background-color:#0A1D37; color:white; font-family:Segoe UI; text-align:center; padding-top:50px;'>";
        echo "<h1>Resultado de la Tarifa</h1>";
        echo "<p>Destino: <strong>Urbano</strong></p>";
        echo "<p>Zona: <strong>$zona</strong></p>";
        echo "<p>Peso: <strong>$peso kg</strong></p>";
        echo "<p>Tarifa total: <strong>$ " . number_format($tarifa_total, 0, ',', '.') . "</strong></p>";
        echo "<a href='index.html' style='color:#4FC3F7;'>← Volver</a>";
        echo "</body>";
    } else {
        echo "Zona no válida.";
    }
} else {
    echo "<body style='background-color:#0A1D37; color:white; font-family:Segoe UI; text-align:center; padding-top:50px;'>";
    echo "<h1>🚧 En construcción</h1>";
    echo "<p>El cálculo de tarifas para destino <strong>$destino</strong> aún no está disponible.</p>";
    echo "<a href='index.html' style='color:#4FC3F7;'>← Volver</a>";
    echo "</body>";
}
?>
