<?php
require_once '../../conexion/conexion.php';

// Obtener conexión
$conexion = obtenerConexionVacantes();

$query2 = "SELECT * FROM procesado.plazas_vacantes_por_estado pvpe;";

// Ejecutar la consulta y obtener los datos
$stmt = $conexion->query($query2);
$resultados2 = $stmt->fetchAll();

/*$query3 = "select * from personalaps.tbl_relacion_origen_trabajo_frecuencia_porcentaje;";

// Ejecutar la consulta y obtener los datos
$stmt = $conexion->query($query3);
$resultados3 = $stmt->fetchAll();*/
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Retorno al origen</title>
    <link href="https://framework-gb.cdn.gob.mx/assets/styles/main.css" rel="stylesheet">

    <!-- Respond.js soporte de media queries para Internet Explorer 8 -->
    <!-- ie8.js EventTarget para cada nodo en Internet Explorer 8 -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/ie8/0.2.2/ie8.js"></script>
    <![endif]-->
    
</head>
<body>
    <!-- Contenido -->
    <main class="page">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>Unidad de Educación e Investigación</h2>
                    <h3>Área de Medicina Computacional</h3>
                </div>
            </div>
            <hr class="red">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-3"></div>
                <div class="col-md-3"></div>
                <div class="col-md-3"><a class="btn btn-primary btn-sm btn-block" href="../../index.php">Regresar a Inicio</a></div>
            </div>
            <div class="row">
                <!-- Tabla comparativa -->
                <div class="col-md-6">
                    <h4>Plazas Vacantes Totales por Estado</h4>
                    <table class="table table-bordered table-striped table-hover table-sm">
                        <thead>
                            <tr>
                                <th>CLAVE</th>
                                <th>OOAD - DELEGACION</th>
                                <th>VACANTES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($resultados2 as $value): ?>
                            <tr>
                                <td><?php echo $value["NUMDEL"]; ?></td>
                                <td>
                                    <a href="detalle.php?numdel=<?php echo $value["NUMDEL"]; ?>" style="text-decoration: none; color: inherit;">
                                        <?php echo $value["DELEGACION"]; ?>
                                    </a>
                                </td>
                                <td class="text-center">
                                    <a href="detalle.php?numdel=<?php echo $value["NUMDEL"]; ?>" style="text-decoration: none; color: inherit;">
                                        <?php echo $value["VACANTES"]; ?>
                                    </a>
                                </td>
                            </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-6">
                
    <canvas id="grafico" width="400" height="200"></canvas>

    <script>
        // Datos de ejemplo (edad, total)
        const datos = [
            { edad: 124, total: 1 },
            { edad: 93, total: 1 },
            { edad: 86, total: 1 },
            { edad: 85, total: 1 },
            { edad: 16, total: 1 },
            { edad: 17, total: 3 }
        ];

        const canvas = document.getElementById("grafico");
        const ctx = canvas.getContext("2d");

        // Configuración del gráfico
        const anchoBarra = 50;
        const espacioEntreBarras = 20;
        const maxTotal = Math.max(...datos.map(d => d.total));
        const escala = (canvas.height - 20) / maxTotal; // Escala para ajustar altura

        datos.forEach((dato, i) => {
            const x = i * (anchoBarra + espacioEntreBarras) + 20;
            const altura = dato.total * escala;
            const y = canvas.height - altura;

            // Dibujar barra
            ctx.fillStyle = "skyblue";
            ctx.fillRect(x, y, anchoBarra, altura);

            // Etiqueta de edad
            ctx.fillStyle = "black";
            ctx.fillText(dato.edad, x + 10, canvas.height - 5);

            // Etiqueta de total
            ctx.fillText(dato.total, x + 20, y - 5);
        });
    </script>

                </div>
            </div>
        </div>
    </main>
  
    <script src="https://framework-gb.cdn.gob.mx/gobmx.js"></script>   
</body>
</html>
