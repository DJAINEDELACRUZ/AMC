<?php
require_once '../../conexion/conexion.php';





// Obtener conexión
$conexionV = obtenerConexionVacantes();

$query2 = "SELECT * FROM procesado.plazas_vacantes_por_estado pvpe;";

// Ejecutar la consulta y obtener los datos
$stmt = $conexionV->query($query2);
$resultados2 = $stmt->fetchAll();





//Query que extrae de la tabla procesada vacantes  plazas ocupadas y derechohabientes
$densidadPoblacion = "SELECT 
    DELEGACION,
    DERECHOHABIENTES,
    PLAZAS_OCUPADAS,
    PLAZAS_VACANTES,
    ROUND(DERECHOHABIENTES / PLAZAS_OCUPADAS, 2) AS DH_por_plaza_ocupada, -- cuántas personas están respaldadas por cada plaza ocupada.
    ROUND(DERECHOHABIENTES / PLAZAS_VACANTES, 2) AS Cantidad_DH_Beneficiados_cubriendo_vacantes, -- cuántas personas podrían beneficiarse si se ocuparan las vacantes.
    ROUND((DERECHOHABIENTES / PLAZAS_OCUPADAS) / (DERECHOHABIENTES / PLAZAS_VACANTES), 2) AS Necesidad_vacantes -- qué tan crítica es la necesidad de más vacantes en relación con las plazas ocupadas.
FROM 
    procesado.vacantes_estado_densidad_poblacional_agrupado
WHERE 
    PLAZAS_OCUPADAS > 0 AND PLAZAS_VACANTES > 0
ORDER BY 
    Necesidad_vacantes ASC;";

// Ejecutar la consulta y obtener los datos
$pdo = $conexionV->query($densidadPoblacion);
$resultados3 = $pdo->fetchAll();




// Obtener conexión
$conexion = obtenerConexion();

// Ejecutar la consulta
$query = "
    SELECT *
FROM (
    SELECT 
        COALESCE(NOMBREAR, 'Total General') AS especialidad,
        SUM(CASE WHEN SEXO = 'H' THEN 1 ELSE 0 END) AS hombres,
        SUM(CASE WHEN SEXO = 'M' THEN 1 ELSE 0 END) AS mujeres,
        COUNT(*) AS total,
        ROUND(SUM(CASE WHEN SEXO = 'H' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS porcentaje_hombres,
        ROUND(SUM(CASE WHEN SEXO = 'M' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS porcentaje_mujeres,
        CASE 
            WHEN SUM(CASE WHEN SEXO = 'H' THEN 1 ELSE 0 END) > SUM(CASE WHEN SEXO = 'M' THEN 1 ELSE 0 END) THEN 'Hombres'
            WHEN SUM(CASE WHEN SEXO = 'H' THEN 1 ELSE 0 END) < SUM(CASE WHEN SEXO = 'M' THEN 1 ELSE 0 END) THEN 'Mujeres'
            ELSE 'Igualdad'
        END AS predominio
    FROM personalaps.plantillaordinario
    WHERE DESCRIP_CLASCATEG = '1.MÉDICOS'
    GROUP BY NOMBREAR WITH ROLLUP
) AS resultados
ORDER BY 
    especialidad = 'Total General', -- Mover la fila Total General al final
    especialidad;
";

$resultado = $conexion->query($query);
$tablaDistribucion = $resultado->fetchAll();

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Retorno al origen</title>
    <link href="https://framework-gb.cdn.gob.mx/assets/styles/main.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <!-- DataTables CSS -->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <!-- DataTables JS -->
    <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>

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
                <li><a href="../../index.php">Regresar</a></li>
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
            <hr class="red">
            <div class="row">
                <div class="col-md-6">
                    <p>GRAFICA POR RÉGIMEN DE JUBILACIONES Y PENSIONES</p>
                    <canvas id="graficaDona1"></canvas>
                </div>
                <div class="col-md-6">
                    <!-- query para extraer la tabla en base de datos
                        SELECT COUNT(*) AS total_vacantes
                        FROM personalaps.plantillaordinario
                        WHERE DEPENDENCIA = 'HOSPITAL GENERAL DE ZONA 1'
                        AND DESCRIP_CLASCATEG = "1.MÉDICOS"
                        AND PLZOCU = 0;
                    -->
                    <p>PLAZAS OCUPADAS Y VACANTES POR NIVEL DE ATENCIÓN</p>
                    <table class="table table-bordered table-striped table-hover table-sm">
                        <thead>
                            <tr>
                                <th>Clasificacion de Unidad</th>
                                <th>Plazas Ocupadas</th>
                                <th>Plazas Vacantes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>02 Segundo Nivel</td><td>44,288</td><td>4,484</td></tr>
                            <tr><td>01 Primer Nivel</td><td>25,082</td><td>1,874</td></tr>
                            <tr><td>03 Tercer Nivel UMAE</td><td>8,680</td><td>722</td></tr>
                            <tr><td>14 Sede Delegacional</td><td>1,939</td><td>163</td></tr>
                            <tr><td>04 Tercer Nivel</td><td>549</td><td>27</td></tr>
                            <tr><td>13 Sede Nivel Central</td><td>387</td><td>39</td></tr>
                            <tr><td>15 Unidades Prestaciones Médicas</td><td>280</td><td>58</td></tr>
                            <tr><td>05 Guarderías</td><td>125</td><td>14</td></tr>
                            <tr><td>17 Unidades Apoyo Operativo</td><td>11</td><td>2</td></tr>
                            <tr><td>16 Unidades Prestaciones Económicas</td><td>7</td><td>0</td></tr>
                            <tr><td>06 SubDelegaciones</td><td>2</td><td>0</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <hr class="red">
            
            <div class="row">
                <div class="col-md-12">
                    <p>DISTRIBUCIÓN DE GENERO POR ESPECIALIDAD</p>
                    <table id="tablaDistribucion" class="table table-bordered table-striped table-hover table-sm">
                        <thead>
                            <tr>
                                <th>Especialidad</th>
                                <th>Hombres</th>
                                <th>Mujeres</th>
                                <th>Total</th>
                                <th>H%</th>
                                <th>M%</th>
                                <th>Predominancia</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($tablaDistribucion as $VAL): ?>
                                <?php if ($VAL["especialidad"] !== "Total General"): ?>
                                    <tr>
                                        <td><?php echo $VAL["especialidad"]; ?></td>
                                        <td><?php echo number_format($VAL["hombres"]); ?></td>
                                        <td><?php echo number_format($VAL["mujeres"]); ?></td>
                                        <td><?php echo number_format($VAL["total"]); ?></td>
                                        <td><?php echo $VAL["porcentaje_hombres"] . '%'; ?></td>
                                        <td><?php echo $VAL["porcentaje_mujeres"] . '%'; ?></td>
                                        <td><?php echo $VAL["predominio"]; ?></td>
                                    </tr>
                                <?php endif; ?>
                            <?php endforeach; ?>
                        </tbody>
                        <tfoot>
                            <?php foreach ($tablaDistribucion as $VAL): ?>
                                <?php if ($VAL["especialidad"] === "Total General"): ?>
                                    <tr style="font-weight: bold;">
                                        <td><?php echo $VAL["especialidad"]; ?></td>
                                        <td><?php echo number_format($VAL["hombres"]); ?></td>
                                        <td><?php echo number_format($VAL["mujeres"]); ?></td>
                                        <td><?php echo number_format($VAL["total"]); ?></td>
                                        <td><?php echo $VAL["porcentaje_hombres"] . '%'; ?></td>
                                        <td><?php echo $VAL["porcentaje_mujeres"] . '%'; ?></td>
                                        <td><?php echo $VAL["predominio"]; ?></td>
                                    </tr>
                                <?php endif; ?>
                            <?php endforeach; ?>
                        </tfoot>
                    </table>
                </div>
                <div class="col-md-5">
                    <canvas id="graficaPastel" width="300" height="300"></canvas>
                </div>
                <div class="col-md-7">
                    <hr class="red">
                    <p>PLAZAS VACANTES TOTALES POR OOAD</p>
                    <table id="tablaEstado" class="table table-bordered table-striped table-hover table-sm">
                        <thead>
                            <tr>
                                <th>Clave</th>
                                <th>Delegación</th>
                                <th>Total Unidades</th>
                                <th>Plazas Ocupadas</th>
                                <th>Vacantes</th>
                            </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($resultados2 as $value): ?>
                            <tr onclick="window.location.href='detalle.php?numdel=<?php echo $value['NUMDEL']; ?>'" style="cursor: pointer;">
                                <td><?php echo $value["NUMDEL"]; ?></td>
                                <td><?php echo $value["DELEGACION"]; ?></td>
                                <td class="text-center"><?php echo number_format($value['TOTAL_UNIDADES']); ?></td>
                                <td class="text-center"><?php echo number_format($value["OCUPADAS"]);?></td>
                                <td class="text-center"><?php echo $value["VACANTES"]; ?></td>
                            </tr>
                        <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            </div>

            <hr class="red">

            <div class="row">
                <div class="col-md-12">
                <p>ESTADOS CON DÉFICIT CRÍTICO EN PLAZAS CON RESPECTO A DENSIDAD POBLACIONAL. <br>
                Población con afiliación al servicio de salud por entidad federativa en el Instituto Mexicano de Seguridad Social, 2020. <br>
                Instituto Nacional de Estadística y Geografía (INEGI)
                <br>
                <br>
                -- <b>Valores cercanos a 1.0:</b> Indican que la relación entre plazas ocupadas y vacantes es equilibrada. <br>
                -- <b>Valores menores a 1.0:</b> Sugiere una fuerte necesidad de cubrir vacantes. <br>
                -- <b>Valores muy pequeños (por ejemplo, 0.03):</b> Indican un déficit crítico de vacantes.</p> <!-- Hay muchos derechohabientes dependiendo de muy pocas plazas disponibles. -->
                    <table class="table table-bordered table-striped table-hover table-sm">
                        <thead>
                            <tr>
                                <th>Estado</th>
                                <th>Derechohabientes</th>
                                <th>Plazas Ocupadas</th>
                                <th>Plazas Vacantes</th>
                                <td>Cuántas personas están respaldadas por cada plaza ocupada.</td>
                                <td>Cuántas personas podrían beneficiarse si se ocuparan las vacantes.</td>
                                <td>Qué tan crítica es la necesidad de más vacantes en relación con las plazas ocupadas.</td>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($resultados3 as $dis): ?>
                                <tr>
                                    <td><?php echo $dis["DELEGACION"]; ?></td>
                                    <td class="text-center"><?php echo number_format($dis["DERECHOHABIENTES"]); ?></td>
                                    <td class="text-center"><?php echo number_format($dis["PLAZAS_OCUPADAS"]); ?></td>
                                    <td class="text-center"><?php echo number_format($dis["PLAZAS_VACANTES"]); ?></td>
                                    <td class="text-center"><?php echo number_format($dis["DH_por_plaza_ocupada"]); ?></td>
                                    <td class="text-center"><?php echo number_format($dis["Cantidad_DH_Beneficiados_cubriendo_vacantes"]); ?></td>
                                    <td class="text-center"><?php echo number_format($dis["Necesidad_vacantes"], 2); ?></td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>

    <script>
        /* para sacar esa informacion es necesario aplicar la siguiente consulta en base de datos
            
            SELECT 
                CASE 
                    WHEN RJP = 'C108' THEN 'CUOTA SINDICAL'
                    WHEN RJP = 'C111' THEN 'APORTACIÓN COMPLEMENTARIA AFORE'
                    WHEN RJP = 'C152' THEN 'FONDO DE JUBILACIÓN'
                    WHEN RJP = 'C152 Y C10' THEN 'FONDO DE JUBILACIÓN + NIVELACIÓN A PLAZA SUPERIOR'
                    WHEN RJP = 'ESTATUTO' THEN 'ESTATUTO'
                    WHEN RJP = 'SIN RJP' THEN 'SIN RÉGIMEN DE JUBILACIONES Y PENSIONES'
                    ELSE RJP
                END AS RJP_DESCRIPCION,
                COUNT(*) AS cantidad
            FROM personalaps.plantillaordinario
            WHERE DESCRIP_CLASCATEG = "1.MÉDICOS" AND PLZOCU = 1
            GROUP BY RJP_DESCRIPCION
            ORDER BY cantidad DESC;
        
        */
        var ctxDona1 = document.getElementById('graficaDona1').getContext('2d');

        var labels = [
            "APORTACIÓN COMPLEMENTARIA AFORE",
            "FONDO DE JUBILACIÓN + NIVELACIÓN A PLAZA SUPERIOR",
            "CUOTA SINDICAL",
            "SIN RÉGIMEN DE JUBILACIONES Y PENSIONES",
            "ESTATUTO",
            "FONDO DE JUBILACIÓN"
        ];
        var data = [52900, 19446, 8823, 116, 53, 12];

        var graficaDona1 = new Chart(ctxDona1, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: ['#00543D','#611232', '#a57f2c', '#000000', '#6F7271', '#DDDDDD']
                }]
            },
            options: {
                responsive: true
            }
        });
    </script>

    <script>
        // Datos de la gráfica
        const data2 = {
            labels: ['Hombres', 'Mujeres'],
            datasets: [{
                data: [45.80, 45.88], // Porcentajes de hombres y mujeres
                backgroundColor: ['#00543D', '#a57f2c'], // Verde para hombres, Dorado para mujeres
                borderColor: ['#003926', '#8B7041'], // Bordes oscuros
                borderWidth: 1
            }]
        };

        // Total general
        const total = 40642 + 40708; // Suma de hombres y mujeres

        // Configuración de la gráfica
        const config = {
            type: 'pie', // Tipo de gráfica: pastel
            data: data2,
            options: {
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            generateLabels: function(chart) {
                                const data = chart.data.datasets[0].data;
                                const labels = chart.data.labels;
                                return labels.map((label, index) => ({
                                    text: `${label}: ${data[index]}% (${Math.round(data[index] * total / 100)} personas)`,
                                    fillStyle: chart.data.datasets[0].backgroundColor[index],
                                    strokeStyle: chart.data.datasets[0].borderColor[index],
                                    hidden: false,
                                    index: index
                                }));
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const percentage = context.raw; // Porcentaje
                                const count = Math.round(percentage * total / 100); // Cálculo del total
                                return `${context.label}: ${percentage}% (${count} personas)`;
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Distribución Total de Género'
                    }
                }
            }
        };

        // Renderizar la gráfica
        const ctx = document.getElementById('graficaPastel').getContext('2d');
        new Chart(ctx, config);
    </script>
    
    <script>
        $(document).ready(function() {
            $('#tablaDistribucion').DataTable({
                paging: true,
                searching: true,
                ordering: true,
                language: {
                    url: "//cdn.datatables.net/plug-ins/1.13.4/i18n/es-MX.json"
                },
                footerCallback: function(row, data, start, end, display) {
                    // Este callback permite manipular el footer si es necesario (por ejemplo, cálculos dinámicos)
                }
            });
            $('#tablaEstado').DataTable({
                paging: true,
                searching: true,
                ordering: true,
                language: {
                    url: "//cdn.datatables.net/plug-ins/1.13.4/i18n/es-MX.json"
                },
                footerCallback: function(row, data, start, end, display) {
                    // Este callback permite manipular el footer si es necesario (por ejemplo, cálculos dinámicos)
                }
            });
        });
    </script>
    <script src="https://framework-gb.cdn.gob.mx/gobmx.js"></script>   
</body>
</html>
