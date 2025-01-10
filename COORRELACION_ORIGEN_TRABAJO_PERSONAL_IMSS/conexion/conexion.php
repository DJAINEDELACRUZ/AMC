<?php
require_once 'configuracion.php';

function obtenerConexion($identificador = 'default')
{
    global $configuraciones;

    if (!isset($configuraciones[$identificador])) {
        die("Error: Configuración no encontrada para '$identificador'");
    }

    $config = $configuraciones[$identificador];

    try {
        $conexion = new PDO($config['dsn'], $config['usuario'], $config['contraseña'], [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
        return $conexion;
    } catch (PDOException $e) {
        die('Falló la conexión: ' . $e->getMessage());
    }
}
