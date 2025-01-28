<?php
require_once 'conexion/conexion.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($_POST['ip'])) {
    $ip = $_POST['ip'];
    
    $conexion = obtenerConexion();
    $sql = "SELECT MATRICULA, IP FROM personalaps.plantillaordinario WHERE IP = :ip AND MATRICULA <> '0' LIMIT 1";
    $stmt = $conexion->prepare($sql);
    $stmt->bindParam(':ip', $ip, PDO::PARAM_STR);
    $stmt->execute();
    $resultado = $stmt->fetch();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($_POST['nueva_ip']) && !empty($_POST['ip_actual'])) {
    $ip_actual = $_POST['ip_actual'];
    $nueva_ip = $_POST['nueva_ip'];
    
    $conexion = obtenerConexion();
    $sql_update = "UPDATE personalaps.plantillaordinario SET IP = :nueva_ip WHERE IP = :ip_actual";
    $stmt_update = $conexion->prepare($sql_update);
    $stmt_update->bindParam(':nueva_ip', $nueva_ip, PDO::PARAM_STR);
    $stmt_update->bindParam(':ip_actual', $ip_actual, PDO::PARAM_STR);
    $stmt_update->execute();
    $mensaje = "IP actualizada correctamente.";
}

$conexion = obtenerConexion();
$sql_ips = "SELECT IP, COUNT(*) as cantidad FROM personalaps.plantillaordinario WHERE IP LIKE '%E+%' OR IP LIKE '%e+%' GROUP BY IP ORDER BY cantidad DESC";
$stmt_ips = $conexion->query($sql_ips);
$ips_erroneas = $stmt_ips->fetchAll();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buscar y Actualizar IP</title>
    <style>
        .container {
            display: flex;
        }
        .left {
            flex: 1;
            padding: 20px;
        }
        .right {
            flex: 1;
            padding: 20px;
            border-left: 1px solid #ccc;
        }
    </style>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll("td").forEach(cell => {
                cell.addEventListener("click", function () {
                    const range = document.createRange();
                    range.selectNodeContents(this);
                    const selection = window.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);
                });
            });
        });
    </script>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            // Función para seleccionar el texto al hacer clic
            function seleccionarTexto(elemento) {
                const range = document.createRange();
                range.selectNodeContents(elemento);
                const selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
            }

            // Aplicar selección a todas las celdas de la tabla de IPs
            document.querySelectorAll("td").forEach(cell => {
                cell.addEventListener("click", function () {
                    seleccionarTexto(this);
                });
            });

            // Aplicar selección a la matrícula mostrada en el resultado
            const matriculaElement = document.getElementById("matricula_resultado");
            if (matriculaElement) {
                matriculaElement.addEventListener("click", function () {
                    seleccionarTexto(this);
                });
            }
        });

        matriculaElement.addEventListener("click", function () {
            seleccionarTexto(this);
            navigator.clipboard.writeText(this.innerText).then(() => {
                alert("Matrícula copiada: " + this.innerText);
            }).catch(err => console.error("Error al copiar:", err));
        });
    </script>
</head>
<body>
    <div class="container">
        <div class="left">
            <h2>Buscar Clave Presupuestal (IP)</h2>
            <form method="post">
                <label for="ip">Ingrese IP:</label>
                <input type="text" id="ip" name="ip" required>
                <button type="submit">Buscar</button>
            </form>

            <?php if (isset($resultado) && $resultado): ?>
                <h3>Resultado:</h3>
                <p><strong>Matrícula:</strong> <span id="matricula_resultado"><?php echo htmlspecialchars($resultado['MATRICULA']); ?></span></p>
                <p><strong>IP:</strong> <?php echo htmlspecialchars($resultado['IP']); ?></p>

                <h3>Actualizar IP</h3>
                <form method="post">
                    <input type="hidden" name="ip_actual" value="<?php echo htmlspecialchars($resultado['IP']); ?>">
                    <label for="nueva_ip">Nueva IP:</label>
                    <input type="text" id="nueva_ip" name="nueva_ip" required>
                    <button type="submit">Actualizar</button>
                </form>
            <?php elseif ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['ip'])): ?>
                <p>No se encontró ninguna matrícula asociada a esta IP.</p>
            <?php endif; ?>

            <?php if (isset($mensaje)): ?>
                <p><strong><?php echo $mensaje; ?></strong></p>
            <?php endif; ?>
        </div>
        <div class="right">
            <h2>IPs en Notación Científica</h2>
            <table border="1">
                <tr>
                    <th>IP</th>
                    <th>Cantidad</th>
                </tr>
                <?php foreach ($ips_erroneas as $fila): ?>
                    <tr>
                        <td><?php echo htmlspecialchars($fila['IP']); ?></td>
                        <td><?php echo htmlspecialchars($fila['cantidad']); ?></td>
                    </tr>
                <?php endforeach; ?>
            </table>
        </div>
    </div>
</body>
</html>