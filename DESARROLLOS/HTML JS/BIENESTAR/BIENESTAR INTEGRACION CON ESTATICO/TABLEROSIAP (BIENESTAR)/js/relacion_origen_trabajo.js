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
GROUP BY 
    ef.estado
ORDER BY 
    estado_nacimiento ASC; -- Ordenado por el total de nacidos, de mayor a menor
*/

const relacionOrigenTrabajo = [
	{
		"estado_nacimiento" : "Aguascalientes",
		"total_nacidos" : 35,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 35,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Baja California",
		"total_nacidos" : 150,
		"trabajan_en_mismo_estado" : 130,
		"trabajan_en_otro_estado" : 20,
		"porcentaje_mismo_estado" : "86.67%",
		"porcentaje_otro_estado" : "13.33%"
	},
	{
		"estado_nacimiento" : "Baja California Sur",
		"total_nacidos" : 10,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 10,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Campeche",
		"total_nacidos" : 313,
		"trabajan_en_mismo_estado" : 262,
		"trabajan_en_otro_estado" : 51,
		"porcentaje_mismo_estado" : "83.71%",
		"porcentaje_otro_estado" : "16.29%"
	},
	{
		"estado_nacimiento" : "Chiapas",
		"total_nacidos" : 2350,
		"trabajan_en_mismo_estado" : 2230,
		"trabajan_en_otro_estado" : 120,
		"porcentaje_mismo_estado" : "94.89%",
		"porcentaje_otro_estado" : "5.11%"
	},
	{
		"estado_nacimiento" : "Chihuahua",
		"total_nacidos" : 505,
		"trabajan_en_mismo_estado" : 475,
		"trabajan_en_otro_estado" : 30,
		"porcentaje_mismo_estado" : "94.06%",
		"porcentaje_otro_estado" : "5.94%"
	},
	{
		"estado_nacimiento" : "Ciudad de México",
		"total_nacidos" : 865,
		"trabajan_en_mismo_estado" : 142,
		"trabajan_en_otro_estado" : 723,
		"porcentaje_mismo_estado" : "16.42%",
		"porcentaje_otro_estado" : "83.58%"
	},
	{
		"estado_nacimiento" : "Coahuila",
		"total_nacidos" : 589,
		"trabajan_en_mismo_estado" : 494,
		"trabajan_en_otro_estado" : 95,
		"porcentaje_mismo_estado" : "83.87%",
		"porcentaje_otro_estado" : "16.13%"
	},
	{
		"estado_nacimiento" : "Colima",
		"total_nacidos" : 91,
		"trabajan_en_mismo_estado" : 81,
		"trabajan_en_otro_estado" : 10,
		"porcentaje_mismo_estado" : "89.01%",
		"porcentaje_otro_estado" : "10.99%"
	},
	{
		"estado_nacimiento" : "Durango",
		"total_nacidos" : 560,
		"trabajan_en_mismo_estado" : 507,
		"trabajan_en_otro_estado" : 53,
		"porcentaje_mismo_estado" : "90.54%",
		"porcentaje_otro_estado" : "9.46%"
	},
	{
		"estado_nacimiento" : "Estado de México",
		"total_nacidos" : 434,
		"trabajan_en_mismo_estado" : 230,
		"trabajan_en_otro_estado" : 204,
		"porcentaje_mismo_estado" : "53.00%",
		"porcentaje_otro_estado" : "47.00%"
	},
	{
		"estado_nacimiento" : "Guanajuato",
		"total_nacidos" : 46,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 46,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Guerrero",
		"total_nacidos" : 296,
		"trabajan_en_mismo_estado" : 132,
		"trabajan_en_otro_estado" : 164,
		"porcentaje_mismo_estado" : "44.59%",
		"porcentaje_otro_estado" : "55.41%"
	},
	{
		"estado_nacimiento" : "Hidalgo",
		"total_nacidos" : 966,
		"trabajan_en_mismo_estado" : 866,
		"trabajan_en_otro_estado" : 100,
		"porcentaje_mismo_estado" : "89.65%",
		"porcentaje_otro_estado" : "10.35%"
	},
	{
		"estado_nacimiento" : "Jalisco",
		"total_nacidos" : 92,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 92,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Michoacán",
		"total_nacidos" : 1370,
		"trabajan_en_mismo_estado" : 1230,
		"trabajan_en_otro_estado" : 140,
		"porcentaje_mismo_estado" : "89.78%",
		"porcentaje_otro_estado" : "10.22%"
	},
	{
		"estado_nacimiento" : "Morelos",
		"total_nacidos" : 48,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 48,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Nayarit",
		"total_nacidos" : 808,
		"trabajan_en_mismo_estado" : 777,
		"trabajan_en_otro_estado" : 31,
		"porcentaje_mismo_estado" : "96.16%",
		"porcentaje_otro_estado" : "3.84%"
	},
	{
		"estado_nacimiento" : "Nuevo León",
		"total_nacidos" : 52,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 52,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Oaxaca",
		"total_nacidos" : 2527,
		"trabajan_en_mismo_estado" : 2314,
		"trabajan_en_otro_estado" : 213,
		"porcentaje_mismo_estado" : "91.57%",
		"porcentaje_otro_estado" : "8.43%"
	},
	{
		"estado_nacimiento" : "Puebla",
		"total_nacidos" : 1519,
		"trabajan_en_mismo_estado" : 1239,
		"trabajan_en_otro_estado" : 280,
		"porcentaje_mismo_estado" : "81.57%",
		"porcentaje_otro_estado" : "18.43%"
	},
	{
		"estado_nacimiento" : "Querétaro",
		"total_nacidos" : 16,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 16,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Quintana Roo",
		"total_nacidos" : 16,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 16,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "San Luis Potosí",
		"total_nacidos" : 876,
		"trabajan_en_mismo_estado" : 811,
		"trabajan_en_otro_estado" : 65,
		"porcentaje_mismo_estado" : "92.58%",
		"porcentaje_otro_estado" : "7.42%"
	},
	{
		"estado_nacimiento" : "Sinaloa",
		"total_nacidos" : 580,
		"trabajan_en_mismo_estado" : 476,
		"trabajan_en_otro_estado" : 104,
		"porcentaje_mismo_estado" : "82.07%",
		"porcentaje_otro_estado" : "17.93%"
	},
	{
		"estado_nacimiento" : "Sonora",
		"total_nacidos" : 29,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 29,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Tabasco",
		"total_nacidos" : 104,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 104,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Tamaulipas",
		"total_nacidos" : 593,
		"trabajan_en_mismo_estado" : 492,
		"trabajan_en_otro_estado" : 101,
		"porcentaje_mismo_estado" : "82.97%",
		"porcentaje_otro_estado" : "17.03%"
	},
	{
		"estado_nacimiento" : "Tlaxcala",
		"total_nacidos" : 787,
		"trabajan_en_mismo_estado" : 729,
		"trabajan_en_otro_estado" : 58,
		"porcentaje_mismo_estado" : "92.63%",
		"porcentaje_otro_estado" : "7.37%"
	},
	{
		"estado_nacimiento" : "Veracruz",
		"total_nacidos" : 2009,
		"trabajan_en_mismo_estado" : 1666,
		"trabajan_en_otro_estado" : 343,
		"porcentaje_mismo_estado" : "82.93%",
		"porcentaje_otro_estado" : "17.07%"
	},
	{
		"estado_nacimiento" : "Yucatán",
		"total_nacidos" : 608,
		"trabajan_en_mismo_estado" : 588,
		"trabajan_en_otro_estado" : 20,
		"porcentaje_mismo_estado" : "96.71%",
		"porcentaje_otro_estado" : "3.29%"
	},
	{
		"estado_nacimiento" : "Zacatecas",
		"total_nacidos" : 991,
		"trabajan_en_mismo_estado" : 929,
		"trabajan_en_otro_estado" : 62,
		"porcentaje_mismo_estado" : "93.74%",
		"porcentaje_otro_estado" : "6.26%"
	}
];
