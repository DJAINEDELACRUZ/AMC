/* el query para extraer la informacion de la tabla relacion origen trabajo: frecuencia y porcentaje

SELECT 
    ef.estado AS estado_nacimiento,
    COUNT(pb.CURP) AS total_nacidos,

    -- Total de personas que trabajan en el mismo estado
    SUM(CASE WHEN ef.clave = nd.clave_estado THEN 1 ELSE 0 END) AS trabajan_en_mismo_estado,

    -- Total de personas que trabajan en otro estado
    SUM(CASE WHEN ef.clave != nd.clave_estado THEN 1 ELSE 0 END) AS trabajan_en_otro_estado,

    -- Porcentaje de los que trabajan en el mismo estado
    CONCAT(
        ROUND(
            SUM(CASE WHEN ef.clave = nd.clave_estado THEN 1 ELSE 0 END) * 100.0 / COUNT(pb.CURP), 2
        ), '%'
    ) AS porcentaje_mismo_estado,

    -- Porcentaje de los que trabajan en otro estado
    CONCAT(
        ROUND(
            SUM(CASE WHEN ef.clave != nd.clave_estado THEN 1 ELSE 0 END) * 100.0 / COUNT(pb.CURP), 2
        ), '%'
    ) AS porcentaje_otro_estado

FROM 
    personalaps.plantillaordinario pb
JOIN 
    personalaps.entidades_federativas ef
    ON SUBSTR(pb.CURP, 12, 2) = ef.clave
JOIN 
    personalaps.normalizacion_delegaciones nd
    ON pb.NUMDEL = nd.id_delegacion
WHERE 
    pb.QNA = '2024017' 
    AND pb.DESCRIP_CLASCATEG = '1.MÉDICOS'
    AND pb.NUMDEL = '27'
	AND pb.DELEGACION = 'Sonora'
GROUP BY 
    ef.estado
ORDER BY 
    estado_nacimiento ASC; -- Ordenado por el total de nacidos, de mayor a menor
*/

const relacionOrigenTrabajo = [
	{
		"estado_nacimiento" : "Aguascalientes",
		"total_nacidos" : 3,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 3,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Baja California",
		"total_nacidos" : 71,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 71,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Baja California Sur",
		"total_nacidos" : 25,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 25,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Campeche",
		"total_nacidos" : 3,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 3,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Chiapas",
		"total_nacidos" : 17,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 17,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Chihuahua",
		"total_nacidos" : 25,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 25,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Ciudad de México",
		"total_nacidos" : 244,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 244,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Coahuila",
		"total_nacidos" : 18,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 18,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Colima",
		"total_nacidos" : 9,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 9,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Durango",
		"total_nacidos" : 21,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 21,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Estado de México",
		"total_nacidos" : 37,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 37,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Guanajuato",
		"total_nacidos" : 22,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 22,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Guerrero",
		"total_nacidos" : 54,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 54,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Hidalgo",
		"total_nacidos" : 9,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 9,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Jalisco",
		"total_nacidos" : 137,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 137,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Michoacán",
		"total_nacidos" : 62,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 62,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Morelos",
		"total_nacidos" : 8,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 8,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Nayarit",
		"total_nacidos" : 62,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 62,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Nuevo León",
		"total_nacidos" : 20,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 20,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Oaxaca",
		"total_nacidos" : 49,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 49,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Puebla",
		"total_nacidos" : 47,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 47,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Querétaro",
		"total_nacidos" : 5,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 5,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Quintana Roo",
		"total_nacidos" : 1,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 1,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "San Luis Potosí",
		"total_nacidos" : 14,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 14,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Sinaloa",
		"total_nacidos" : 749,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 749,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Sonora",
		"total_nacidos" : 1215,
		"trabajan_en_mismo_estado" : 1215,
		"trabajan_en_otro_estado" : 0,
		"porcentaje_mismo_estado" : "100.00%",
		"porcentaje_otro_estado" : "0.00%"
	},
	{
		"estado_nacimiento" : "Tabasco",
		"total_nacidos" : 9,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 9,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Tamaulipas",
		"total_nacidos" : 21,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 21,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Tlaxcala",
		"total_nacidos" : 14,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 14,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Veracruz",
		"total_nacidos" : 39,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 39,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Yucatán",
		"total_nacidos" : 7,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 7,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Zacatecas",
		"total_nacidos" : 10,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 10,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	}
];
