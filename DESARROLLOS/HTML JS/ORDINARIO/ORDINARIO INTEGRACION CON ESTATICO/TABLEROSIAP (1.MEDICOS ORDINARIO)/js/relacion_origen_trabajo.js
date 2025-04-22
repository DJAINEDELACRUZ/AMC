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
		"total_nacidos" : 698,
		"trabajan_en_mismo_estado" : 510,
		"trabajan_en_otro_estado" : 188,
		"porcentaje_mismo_estado" : "73.07%",
		"porcentaje_otro_estado" : "26.93%"
	},
	{
		"estado_nacimiento" : "Baja California",
		"total_nacidos" : 1357,
		"trabajan_en_mismo_estado" : 1020,
		"trabajan_en_otro_estado" : 337,
		"porcentaje_mismo_estado" : "75.17%",
		"porcentaje_otro_estado" : "24.83%"
	},
	{
		"estado_nacimiento" : "Baja California Sur",
		"total_nacidos" : 308,
		"trabajan_en_mismo_estado" : 187,
		"trabajan_en_otro_estado" : 121,
		"porcentaje_mismo_estado" : "60.71%",
		"porcentaje_otro_estado" : "39.29%"
	},
	{
		"estado_nacimiento" : "Campeche",
		"total_nacidos" : 469,
		"trabajan_en_mismo_estado" : 279,
		"trabajan_en_otro_estado" : 190,
		"porcentaje_mismo_estado" : "59.49%",
		"porcentaje_otro_estado" : "40.51%"
	},
	{
		"estado_nacimiento" : "Chiapas",
		"total_nacidos" : 1840,
		"trabajan_en_mismo_estado" : 974,
		"trabajan_en_otro_estado" : 866,
		"porcentaje_mismo_estado" : "52.93%",
		"porcentaje_otro_estado" : "47.07%"
	},
	{
		"estado_nacimiento" : "Chihuahua",
		"total_nacidos" : 2023,
		"trabajan_en_mismo_estado" : 1660,
		"trabajan_en_otro_estado" : 363,
		"porcentaje_mismo_estado" : "82.06%",
		"porcentaje_otro_estado" : "17.94%"
	},
	{
		"estado_nacimiento" : "Ciudad de México",
		"total_nacidos" : 16951,
		"trabajan_en_mismo_estado" : 7840,
		"trabajan_en_otro_estado" : 9111,
		"porcentaje_mismo_estado" : "46.25%",
		"porcentaje_otro_estado" : "53.75%"
	},
	{
		"estado_nacimiento" : "Coahuila",
		"total_nacidos" : 2501,
		"trabajan_en_mismo_estado" : 1483,
		"trabajan_en_otro_estado" : 1018,
		"porcentaje_mismo_estado" : "59.30%",
		"porcentaje_otro_estado" : "40.70%"
	},
	{
		"estado_nacimiento" : "Colima",
		"total_nacidos" : 666,
		"trabajan_en_mismo_estado" : 397,
		"trabajan_en_otro_estado" : 269,
		"porcentaje_mismo_estado" : "59.61%",
		"porcentaje_otro_estado" : "40.39%"
	},
	{
		"estado_nacimiento" : "Durango",
		"total_nacidos" : 1507,
		"trabajan_en_mismo_estado" : 743,
		"trabajan_en_otro_estado" : 764,
		"porcentaje_mismo_estado" : "49.30%",
		"porcentaje_otro_estado" : "50.70%"
	},
	{
		"estado_nacimiento" : "Estado de México",
		"total_nacidos" : 4022,
		"trabajan_en_mismo_estado" : 2106,
		"trabajan_en_otro_estado" : 1916,
		"porcentaje_mismo_estado" : "52.36%",
		"porcentaje_otro_estado" : "47.64%"
	},
	{
		"estado_nacimiento" : "Guanajuato",
		"total_nacidos" : 2111,
		"trabajan_en_mismo_estado" : 1216,
		"trabajan_en_otro_estado" : 895,
		"porcentaje_mismo_estado" : "57.60%",
		"porcentaje_otro_estado" : "42.40%"
	},
	{
		"estado_nacimiento" : "Guerrero",
		"total_nacidos" : 2786,
		"trabajan_en_mismo_estado" : 932,
		"trabajan_en_otro_estado" : 1854,
		"porcentaje_mismo_estado" : "33.45%",
		"porcentaje_otro_estado" : "66.55%"
	},
	{
		"estado_nacimiento" : "Hidalgo",
		"total_nacidos" : 1550,
		"trabajan_en_mismo_estado" : 773,
		"trabajan_en_otro_estado" : 777,
		"porcentaje_mismo_estado" : "49.87%",
		"porcentaje_otro_estado" : "50.13%"
	},
	{
		"estado_nacimiento" : "Jalisco",
		"total_nacidos" : 7028,
		"trabajan_en_mismo_estado" : 4750,
		"trabajan_en_otro_estado" : 2278,
		"porcentaje_mismo_estado" : "67.59%",
		"porcentaje_otro_estado" : "32.41%"
	},
	{
		"estado_nacimiento" : "Michoacán",
		"total_nacidos" : 3829,
		"trabajan_en_mismo_estado" : 1642,
		"trabajan_en_otro_estado" : 2187,
		"porcentaje_mismo_estado" : "42.88%",
		"porcentaje_otro_estado" : "57.12%"
	},
	{
		"estado_nacimiento" : "Morelos",
		"total_nacidos" : 1304,
		"trabajan_en_mismo_estado" : 678,
		"trabajan_en_otro_estado" : 626,
		"porcentaje_mismo_estado" : "51.99%",
		"porcentaje_otro_estado" : "48.01%"
	},
	{
		"estado_nacimiento" : "Nayarit",
		"total_nacidos" : 1486,
		"trabajan_en_mismo_estado" : 728,
		"trabajan_en_otro_estado" : 758,
		"porcentaje_mismo_estado" : "48.99%",
		"porcentaje_otro_estado" : "51.01%"
	},
	{
		"estado_nacimiento" : "Nuevo León",
		"total_nacidos" : 3029,
		"trabajan_en_mismo_estado" : 2477,
		"trabajan_en_otro_estado" : 552,
		"porcentaje_mismo_estado" : "81.78%",
		"porcentaje_otro_estado" : "18.22%"
	},
	{
		"estado_nacimiento" : "Oaxaca",
		"total_nacidos" : 2687,
		"trabajan_en_mismo_estado" : 875,
		"trabajan_en_otro_estado" : 1812,
		"porcentaje_mismo_estado" : "32.56%",
		"porcentaje_otro_estado" : "67.44%"
	},
	{
		"estado_nacimiento" : "Puebla",
		"total_nacidos" : 3703,
		"trabajan_en_mismo_estado" : 1625,
		"trabajan_en_otro_estado" : 2078,
		"porcentaje_mismo_estado" : "43.88%",
		"porcentaje_otro_estado" : "56.12%"
	},
	{
		"estado_nacimiento" : "Querétaro",
		"total_nacidos" : 351,
		"trabajan_en_mismo_estado" : 190,
		"trabajan_en_otro_estado" : 161,
		"porcentaje_mismo_estado" : "54.13%",
		"porcentaje_otro_estado" : "45.87%"
	},
	{
		"estado_nacimiento" : "Quintana Roo",
		"total_nacidos" : 187,
		"trabajan_en_mismo_estado" : 89,
		"trabajan_en_otro_estado" : 98,
		"porcentaje_mismo_estado" : "47.59%",
		"porcentaje_otro_estado" : "52.41%"
	},
	{
		"estado_nacimiento" : "San Luis Potosí",
		"total_nacidos" : 1237,
		"trabajan_en_mismo_estado" : 741,
		"trabajan_en_otro_estado" : 496,
		"porcentaje_mismo_estado" : "59.90%",
		"porcentaje_otro_estado" : "40.10%"
	},
	{
		"estado_nacimiento" : "Sinaloa",
		"total_nacidos" : 4395,
		"trabajan_en_mismo_estado" : 1914,
		"trabajan_en_otro_estado" : 2481,
		"porcentaje_mismo_estado" : "43.55%",
		"porcentaje_otro_estado" : "56.45%"
	},
	{
		"estado_nacimiento" : "Sonora",
		"total_nacidos" : 1765,
		"trabajan_en_mismo_estado" : 1215,
		"trabajan_en_otro_estado" : 550,
		"porcentaje_mismo_estado" : "68.84%",
		"porcentaje_otro_estado" : "31.16%"
	},
	{
		"estado_nacimiento" : "Tabasco",
		"total_nacidos" : 1205,
		"trabajan_en_mismo_estado" : 611,
		"trabajan_en_otro_estado" : 594,
		"porcentaje_mismo_estado" : "50.71%",
		"porcentaje_otro_estado" : "49.29%"
	},
	{
		"estado_nacimiento" : "Tamaulipas",
		"total_nacidos" : 3072,
		"trabajan_en_mismo_estado" : 1749,
		"trabajan_en_otro_estado" : 1323,
		"porcentaje_mismo_estado" : "56.93%",
		"porcentaje_otro_estado" : "43.07%"
	},
	{
		"estado_nacimiento" : "Tlaxcala",
		"total_nacidos" : 941,
		"trabajan_en_mismo_estado" : 285,
		"trabajan_en_otro_estado" : 656,
		"porcentaje_mismo_estado" : "30.29%",
		"porcentaje_otro_estado" : "69.71%"
	},
	{
		"estado_nacimiento" : "Veracruz",
		"total_nacidos" : 4715,
		"trabajan_en_mismo_estado" : 2768,
		"trabajan_en_otro_estado" : 1947,
		"porcentaje_mismo_estado" : "58.71%",
		"porcentaje_otro_estado" : "41.29%"
	},
	{
		"estado_nacimiento" : "Yucatán",
		"total_nacidos" : 1154,
		"trabajan_en_mismo_estado" : 871,
		"trabajan_en_otro_estado" : 283,
		"porcentaje_mismo_estado" : "75.48%",
		"porcentaje_otro_estado" : "24.52%"
	},
	{
		"estado_nacimiento" : "Zacatecas",
		"total_nacidos" : 1367,
		"trabajan_en_mismo_estado" : 650,
		"trabajan_en_otro_estado" : 717,
		"porcentaje_mismo_estado" : "47.55%",
		"porcentaje_otro_estado" : "52.45%"
	}
];
