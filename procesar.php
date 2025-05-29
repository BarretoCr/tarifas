<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Resultado de la Tarifa</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <div class="container">
<?php
$destino = $_POST['destino'];

if ($destino == "urbano") {
    $peso = (int)$_POST['peso'];
    $zona = $_POST['zona'];

    $tarifas = [
        "0" => ["minimo" => 15122, "adicional" => 25],
        "1" => ["minimo" => 23488, "adicional" => 30],
        "2" => ["minimo" => 34936, "adicional" => 43],
        "3" => ["minimo" => 15122, "adicional" => 46]
    ];

    $minimo = $tarifas[$zona]["minimo"];
    $adicional = $tarifas[$zona]["adicional"];

    $tarifa = ($peso <= 750) ? $minimo : $minimo + (($peso - 750) * $adicional);

    echo "<h2>Resultado de la Tarifa</h2>";
    echo "<p><strong>Destino:</strong> Urbano</p>";
    echo "<p><strong>Zona:</strong> $zona</p>";
    echo "<p><strong>Peso:</strong> {$peso} kg</p>";
    echo "<p><strong>Tarifa Calculada:</strong> $" . number_format($tarifa, 0, ',', '.') . "</p>";
} else {
    echo "<h2>Próximamente disponible</h2>";
    echo "<p>Los cálculos para el destino <strong>'$destino'</strong> aún no han sido implementados.</p>";
}
?>
    </div>
</body>
</html>
