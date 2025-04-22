/* para obtener esta informacion ejecutar el siguiente query - tabla y grafica de pastel distribucion de frecuencias
lugar de nacimiento y trabajo 

WITH Datos AS (
    SELECT 
        pb.CURP,
        SUBSTRING(pb.CURP, 12, 2) AS clave_origen,
        COALESCE(ef.estado, 'Nacidos en el extranjero') AS estado_origen,
        nd.delegacion_nombre,
        ef2.estado AS estado_actual
    FROM 
        personalaps.plantillaordinario pb
    LEFT JOIN 
        personalaps.entidades_federativas ef
    ON 
        SUBSTRING(pb.CURP, 12, 2) = ef.clave
    LEFT JOIN 
        personalaps.normalizacion_delegaciones nd
    ON 
        pb.NUMDEL = nd.id_delegacion
    LEFT JOIN 
        personalaps.entidades_federativas ef2
    ON 
        nd.clave_estado = ef2.clave
    WHERE 
        pb.CURP IS NOT NULL
        AND pb.CURP != ''
        AND pb.QNA = '2024017' 
        AND pb.DESCRIP_CLASCATEG = '1.MÉDICOS'
        AND pb.NUMDEL = '27'
		AND pb.DELEGACION = 'Sonora'
)
SELECT 
    COUNT(*) AS 'TOTAL PERSONAL',
    SUM(CASE WHEN estado_origen = estado_actual THEN 1 ELSE 0 END) AS 'PERSONAL DENTRO DEL ORIGEN',
    SUM(CASE WHEN estado_origen != estado_actual THEN 1 ELSE 0 END) AS 'PERSONAL FUERA DEL ORIGEN',
    ROUND((SUM(CASE WHEN estado_origen = estado_actual THEN 1 ELSE 0 END) * 100.0) / COUNT(*), 2) AS 'PORCENTAJE DENTRO DEL ORIGEN',
    ROUND((SUM(CASE WHEN estado_origen != estado_actual THEN 1 ELSE 0 END) * 100.0) / COUNT(*), 2) AS 'PORCENTAJE FUERA DEL ORIGEN'
FROM 
    Datos;

*/

const Distribucionfrecuencias = [
	{
		"TOTAL PERSONAL" : 3045,
		"PERSONAL DENTRO DEL ORIGEN" : 1215,
		"PERSONAL FUERA DEL ORIGEN" : 1830,
		"PORCENTAJE DENTRO DEL ORIGEN" : 39.90,
		"PORCENTAJE FUERA DEL ORIGEN" : 60.10
	}
];