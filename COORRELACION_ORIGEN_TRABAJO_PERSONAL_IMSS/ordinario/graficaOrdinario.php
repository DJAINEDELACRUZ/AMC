<?php
require_once '../conexion/conexion.php';

try {
    // Obtener la conexión
    $conexion = obtenerConexion();

    // Ejecutar la consulta
    $consulta = "select * from personalaps.tbl_distribucion_frecuencias_lugar_nacimiento_trabajo;";

    $stmt = $conexion->prepare($consulta);
    $stmt->execute();
    $resultado = $stmt->fetch(PDO::FETCH_ASSOC);

    // Enviar los datos al frontend en formato JSON
    echo json_encode($resultado);
} catch (PDOException $e) {
    die("Error: " . $e->getMessage());
}
