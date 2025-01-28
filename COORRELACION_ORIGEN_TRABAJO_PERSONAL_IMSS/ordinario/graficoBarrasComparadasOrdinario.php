<?php
require_once '../conexion/conexion.php';

// Obtener conexión
$conexion = obtenerConexion();

$query2 = "select * from personalaps.tbl_distribucion_frecuencias_lugar_nacimiento_trabajo;";

// Ejecutar la consulta y obtener los datos
$stmt = $conexion->query($query2);
$resultados2 = $stmt->fetchAll();

$query3 = "select * from personalaps.tbl_relacion_origen_trabajo_frecuencia_porcentaje;";

// Ejecutar la consulta y obtener los datos
$stmt = $conexion->query($query3);
$resultados3 = $stmt->fetchAll();
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

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    
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
                <div class="col-md-3"><a class="btn btn-primary btn-sm btn-block" href="vacantes/consultaVacantes.php">Análisis de Personal y Servicios</a></div>
                <div class="col-md-3"></div>
                <div class="col-md-3"></div>
                <div class="col-md-3"><button class="btn btn-success btn-sm btn-block" onclick="window.print()">Imprimir esta página</button></div>
            </div>
            <div class="row">
                <!-- Tabla comparativa -->
                <div class="col-md-12">
                    <h4>Distribución de Frecuencias por Lugar de Nacimiento y Trabajo</h4>
                    <table class="table table-bordered table-striped table-hover table-sm">
                        <thead>
                            <tr>
                                <th>TOTAL PERSONAL BIENESTAR</th>
                                <th>PERSONAL DENTRO DEL ORIGEN</th>
                                <th>PERSONAL FUERA DEL ORIGEN</th>
                                <th>PORCENTAJE DENTRO DEL ORIGEN</th>
                                <th>PORCENTAJE FUERA DEL ORIGEN</th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <?php foreach ($resultados2 as $value): ?>
                            <tr>
                                <td><?php echo $value["total_personas"]; ?></td>
                                <td><?php echo $value["personas_en_su_estado"]; ?></td>
                                <td><?php echo $value["personas_fuera_de_su_estado"]; ?></td>
                                <td><?php echo $value["porcentaje_en_su_estado"] . "%"; ?></td>
                                <td><?php echo $value["porcentaje_fuera_de_su_estado"] . "%"; ?></td>
                            </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>  
                
                <div class="col-md-3"></div>
                <!-- Primera gráfica -->
                <div class="col-md-6">
                    <h5>Grafica de Distribución de Frecuencias por Lugar de Nacimiento y Trabajo</h5>
                    <canvas id="myChart" width="400" height="200"></canvas>
                </div>
            </div>

            <hr class="red">

            <div class="row">
                <div class="col-md-12">
                    <h4>Relación Origen-Trabajo: Frecuencia y Porcentaje</h4>
                    <table class="table table-bordered table-striped table-hover table-sm">
                        <thead>
                            <tr>
                                <th>LUGAR DE ORIGEN</th>
                                <th>TOTAL DE NACIDOS</th>
                                <th>TRABAJAN EN EL MISMO ESTADO</th>
                                <th>TRABAJAN EN OTRO ESTADO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($resultados3 as $value): ?>
                            <tr>
                                <td><?php echo $value["estado_nacimiento"]; ?></td>
                                <td><?php echo $value["total_nacidos"]; ?></td>
                                <td><?php echo $value["trabajan_en_mismo_estado"]; ?></td>
                                <td><?php echo $value["trabajan_en_otro_estado"]; ?></td>
                            </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
                <!-- Segunda gráfica -->
                <div class="col-md-12">
                    <h5>Gráfico Relación Origen-Trabajo: Frecuencia y Porcentaje</h5>
                    <canvas id="barChart" width="800" height="400"></canvas>
                </div>
            </div>
        </div>
    </main>
    <script>
        // Llamar a la API PHP para obtener los datos
        fetch('graficaOrdinario.php')
            .then(response => response.json())
            .then(data => {
                const ctx = document.getElementById('myChart').getContext('2d');

                // Configuración de la gráfica
                new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: [
                            `En su estado (${data.porcentaje_en_su_estado}%)`, 
                            `Fuera de su estado (${data.porcentaje_fuera_de_su_estado}%)`
                        ],
                        datasets: [{
                            label: 'Distribución',
                            data: [
                                data.personas_en_su_estado, 
                                data.personas_fuera_de_su_estado
                            ],
                            backgroundColor: ['#36A2EB', '#FF6384'],
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            tooltip: {
                                callbacks: {
                                    // Mostrar el porcentaje en los tooltips
                                    label: function(tooltipItem) {
                                        const value = tooltipItem.raw;
                                        const total = data.personas_en_su_estado + data.personas_fuera_de_su_estado;
                                        const percentage = ((value / total) * 100).toFixed(2);
                                        return `${tooltipItem.label}: ${value} (${percentage}%)`;
                                    }
                                }
                            }
                        }
                    }
                });
            })
            .catch(error => console.error('Error al obtener los datos:', error));
    </script>
    <script>
        // Llamar a la API PHP para obtener los datos
        fetch('graficaOrdinario2.php')
            .then(response => response.json())
            .then(data => {
                // Extraer datos para la gráfica
                const estados = data.map(item => item.estado_nacimiento);
                const totalNacidos = data.map(item => item.total_nacidos);
                const trabajanMismoEstado = data.map(item => item.trabajan_en_mismo_estado);
                const trabajanOtroEstado = data.map(item => item.trabajan_en_otro_estado);

                // Configuración de la gráfica
                const ctx = document.getElementById('barChart').getContext('2d');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: estados,
                        datasets: [
                            {
                                label: 'Total Nacidos',
                                data: totalNacidos,
                                backgroundColor: '#36A2EB',
                            },
                            {
                                label: 'Trabajan en Mismo Estado',
                                data: trabajanMismoEstado,
                                backgroundColor: '#4BC0C0',
                            },
                            {
                                label: 'Trabajan en Otro Estado',
                                data: trabajanOtroEstado,
                                backgroundColor: '#FF6384',
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            tooltip: {
                                callbacks: {
                                    // Mostrar número exacto en los tooltips
                                    label: function(tooltipItem) {
                                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                                    }
                                }
                            }
                        },
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'Estado de Nacimiento',
                                }
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: 'Número de Personas',
                                },
                                beginAtZero: true
                            }
                        }
                    }
                });
            })
            .catch(error => console.error('Error al obtener los datos:', error));
    </script>
    <!-- JS -->
    <script src="https://framework-gb.cdn.gob.mx/gobmx.js"></script>   
</body>
</html>
