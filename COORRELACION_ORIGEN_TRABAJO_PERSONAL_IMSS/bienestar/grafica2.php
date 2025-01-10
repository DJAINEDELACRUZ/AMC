<?php
require_once '../conexion/conexion.php';

try {
    // Obtener la conexión
    $conexion = obtenerConexion();

    // Configurar la conexión para usar UTF-8
    $conexion->exec("SET NAMES 'utf8'");
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Nueva consulta
    $consulta = "SELECT * FROM personalaps.tbl_relacion_origen_trabajo_frecuencia_porcentaje_bienestar;";

    $stmt = $conexion->prepare($consulta);
    $stmt->execute();
    $resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Configurar la salida JSON con UTF-8
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($resultado, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    die("Error: " . $e->getMessage());
}
?>

