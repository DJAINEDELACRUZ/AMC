<?php
require_once '../../conexion/conexion.php';

// Obtener conexión
$conexion = obtenerConexionARSA('servidor_secundario');

// Ejecutar la consulta
$query = "
    SELECT 
        NOMBREAR AS especialidad,
        SUM(CASE WHEN SEXO = 'H' THEN 1 ELSE 0 END) AS hombres,
        SUM(CASE WHEN SEXO = 'M' THEN 1 ELSE 0 END) AS mujeres,
        COUNT(*) AS total,
        ROUND(SUM(CASE WHEN SEXO = 'H' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS porcentaje_hombres,
        ROUND(SUM(CASE WHEN SEXO = 'M' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS porcentaje_mujeres
    FROM amc.plantillaordinario
    WHERE DESCRIP_CLASCATEG = '1.MÉDICOS'
    GROUP BY NOMBREAR
    ORDER BY NOMBREAR;
";

try {
    $stmt = $conexion->prepare($query); // Preparar la consulta
    $stmt->execute(); // Ejecutar la consulta
    $datos = $stmt->fetchAll(); // Obtener todos los resultados como array asociativo
} catch (PDOException $e) {
    die('Error en la consulta: ' . $e->getMessage());
}

// Devolver los datos en formato JSON
header('Content-Type: application/json');
echo json_encode($datos);