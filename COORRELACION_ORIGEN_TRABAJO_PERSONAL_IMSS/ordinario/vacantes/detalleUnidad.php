<?php
require_once '../../conexion/conexion.php';

// Obtener conexión
$conexion = obtenerConexion();

// Obtener parámetros desde la URL
$numdel = isset($_GET['numdel']) ? $_GET['numdel'] : null;
$cveuni = isset($_GET['cveuni']) ? $_GET['cveuni'] : null;

// Validar los parámetros
if (!$numdel || !$cveuni) {
    echo "No se proporcionaron los datos necesarios.";
    exit;
}

// Obtener las vacantes por categoría según unidad médica
$query = "SELECT 
                NUMDEL,
                DELEGACION,
                DEPENDENCIA AS UNIDAD_MEDICA,
                CATEGORIA
            FROM personalaps.plantillaordinario
            WHERE PLZVAC = 1 
            AND DESCRIP_CLASCATEG = '1.MÉDICOS' 
            AND NUMDEL = :numdel 
            AND DEPENDENCIA = :cveuni;";
$stmt = $conexion->prepare($query);
$stmt->bindParam(':numdel', $numdel, PDO::PARAM_INT);
$stmt->bindParam(':cveuni', $cveuni, PDO::PARAM_STR);
$stmt->execute();
$resultados = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detalle de Vacantes por Categoría</title>
    <link href="https://framework-gb.cdn.gob.mx/assets/styles/main.css" rel="stylesheet">
    <nav class="navbar navbar-inverse sub-navbar navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#subenlaces">
                <span class="sr-only">Interruptor de Navegación</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Unidad de Educación e Investigación</a>
            </div>
            <div class="collapse navbar-collapse" id="subenlaces">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="consultaVacantes.php">Regresar</a></li>
                <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Desplegable <span class="caret"></span></a>
                <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Acción</a></li>
                    <li><a href="#">Otra acción</a></li>
                    <li><a href="#">Algo más aquí</a></li>
                    <li class="divider"></li>
                    <li><a href="#">Enlace separado</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</head>
<body>
    <main class="page">
        <div class="container">
            <hr>
            <br>
            <h3>Área de Medicina Computacional <button class="btn btn-success btn-sm" onclick="window.print()">Imprimir esta página</button></h3>
            <h4>Unidad Médica: <?php echo htmlspecialchars($cveuni); ?></h4>
            <h4>Delegación: <?php echo htmlspecialchars($numdel); ?></h4>
            <hr class="red">

            <p>DETALLE DE VACANTES POR CATEGORÍA</p>
            <table class="table table-bordered table-striped table-hover table-sm">
                <thead>
                    <tr>
                        <th>ID DELEGACION</th>
                        <th>DELEGACION</th>
                        <th>UNIDAD MEDICA</th>
                        <th>CATEGORÍA</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($resultados as $value): ?>
                    <tr>
                        <td><?php echo htmlspecialchars($value["NUMDEL"]); ?></td>
                        <td><?php echo htmlspecialchars($value["DELEGACION"]); ?></td>
                        <td><?php echo htmlspecialchars($value["UNIDAD_MEDICA"]); ?></td>
                        <td class="text-center"><?php echo htmlspecialchars($value["CATEGORIA"]); ?></td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </main>
    <script src="https://framework-gb.cdn.gob.mx/gobmx.js"></script>
</body>
</html>