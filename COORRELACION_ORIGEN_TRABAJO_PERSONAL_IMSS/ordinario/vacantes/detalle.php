<?php
require_once '../../conexion/conexion.php';

// Obtener conexión
$conexion = obtenerConexionVacantes();

// Obtener el NUMDEL desde la URL
$numdel = isset($_GET['numdel']) ? $_GET['numdel'] : null;
$descripcionFiltro = isset($_GET['descripcion']) ? $_GET['descripcion'] : '';

// Validar NUMDEL
if (!$numdel) {
    echo "No se proporcionó una delegación válida.";
    exit;
}

// Obtener valores únicos de la columna "DESCRIPCIÓN"
$query_descripciones = "SELECT DISTINCT DESCRIPCION FROM procesado.plazas_vacantes_por_categoria WHERE NUMDEL = :numdel";
$stmt = $conexion->prepare($query_descripciones);
$stmt->bindParam(':numdel', $numdel, PDO::PARAM_INT);
$stmt->execute();
$descripciones = $stmt->fetchAll(PDO::FETCH_COLUMN);

// Construir la consulta de vacantes con filtro opcional
$query = "SELECT * FROM procesado.plazas_vacantes_por_categoria WHERE NUMDEL = :numdel";
if (!empty($descripcionFiltro)) {
    $query .= " AND DESCRIPCION = :descripcion";
}

$stmt = $conexion->prepare($query);
$stmt->bindParam(':numdel', $numdel, PDO::PARAM_INT);

if (!empty($descripcionFiltro)) {
    $stmt->bindParam(':descripcion', $descripcionFiltro, PDO::PARAM_STR);
}

$stmt->execute();
$resultados = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detalle de Plazas Vacantes</title>
    <link href="https://framework-gb.cdn.gob.mx/assets/styles/main.css" rel="stylesheet">
</head>
<body>
     <main class="page">
        <div class="container">
            <h2>Detalle de Plazas Vacantes</h2>
            <h3>Área de Medicina Computacional</h3>
            <hr class="red">
            
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-3"></div>
                <div class="col-md-3"></div>
                <div class="col-md-3">
                    <a class="btn btn-primary btn-sm btn-block" href="consultaVacantes.php">Regresar</a>
                </div>
            </div>


            <!-- Tabla de Vacantes -->
            <h4>Delegación: <?php echo htmlspecialchars($numdel); ?></h4>
            <table class="table table-bordered table-striped table-hover table-sm">
                <thead>
                    <tr>
                        <th>CLAVE</th>
                        <th>DELEGACION</th>
                        <th>CATEGORIA</th>
                        <th>
                             <!-- Filtro por Descripción -->
                            <form method="GET" action="">
                                <input type="hidden" name="numdel" value="<?php echo htmlspecialchars($numdel); ?>">
                                <select class="form-control" name="descripcion" id="descripcion" onchange="this.form.submit()">
                                    <option value="">DESCRIPCION</option>
                                    <?php foreach ($descripciones as $desc): ?>
                                        <option value="<?php echo htmlspecialchars($desc); ?>" 
                                            <?php echo ($descripcionFiltro == $desc) ? 'selected' : ''; ?>>
                                            <?php echo htmlspecialchars($desc); ?>
                                        </option>
                                    <?php endforeach; ?>
                                </select>
                            </form>
                        </th>
                        <th>VACANTES</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($resultados as $value): ?>
                    <tr>
                        <td><?php echo $value["NUMDEL"]; ?></td>
                        <td><?php echo $value["DELEGACION"]; ?></td>
                        <td><?php echo $value["CATEGORIA"]; ?></td>
                        <td><?php echo $value["DESCRIPCION"]; ?></td>
                        <td class="text-center"><?php echo $value["VACANTES"]; ?></td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </main>
    <script src="https://framework-gb.cdn.gob.mx/gobmx.js"></script>
</body>
</html>