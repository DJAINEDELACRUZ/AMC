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
		"total_nacidos" : 5592,
		"trabajan_en_mismo_estado" : 5003,
		"trabajan_en_otro_estado" : 589,
		"porcentaje_mismo_estado" : "89.47%",
		"porcentaje_otro_estado" : "10.53%"
	},
	{
		"estado_nacimiento" : "Baja California",
		"total_nacidos" : 7959,
		"trabajan_en_mismo_estado" : 6732,
		"trabajan_en_otro_estado" : 1227,
		"porcentaje_mismo_estado" : "84.58%",
		"porcentaje_otro_estado" : "15.42%"
	},
	{
		"estado_nacimiento" : "Baja California Sur",
		"total_nacidos" : 2627,
		"trabajan_en_mismo_estado" : 2162,
		"trabajan_en_otro_estado" : 465,
		"porcentaje_mismo_estado" : "82.30%",
		"porcentaje_otro_estado" : "17.70%"
	},
	{
		"estado_nacimiento" : "Campeche",
		"total_nacidos" : 3062,
		"trabajan_en_mismo_estado" : 2341,
		"trabajan_en_otro_estado" : 721,
		"porcentaje_mismo_estado" : "76.45%",
		"porcentaje_otro_estado" : "23.55%"
	},
	{
		"estado_nacimiento" : "Chiapas",
		"total_nacidos" : 8188,
		"trabajan_en_mismo_estado" : 5558,
		"trabajan_en_otro_estado" : 2630,
		"porcentaje_mismo_estado" : "67.88%",
		"porcentaje_otro_estado" : "32.12%"
	},
	{
		"estado_nacimiento" : "Chihuahua",
		"total_nacidos" : 14587,
		"trabajan_en_mismo_estado" : 13339,
		"trabajan_en_otro_estado" : 1248,
		"porcentaje_mismo_estado" : "91.44%",
		"porcentaje_otro_estado" : "8.56%"
	},
	{
		"estado_nacimiento" : "Ciudad de México",
		"total_nacidos" : 101269,
		"trabajan_en_mismo_estado" : 67094,
		"trabajan_en_otro_estado" : 34175,
		"porcentaje_mismo_estado" : "66.25%",
		"porcentaje_otro_estado" : "33.75%"
	},
	{
		"estado_nacimiento" : "Coahuila",
		"total_nacidos" : 17512,
		"trabajan_en_mismo_estado" : 13910,
		"trabajan_en_otro_estado" : 3602,
		"porcentaje_mismo_estado" : "79.43%",
		"porcentaje_otro_estado" : "20.57%"
	},
	{
		"estado_nacimiento" : "Colima",
		"total_nacidos" : 3605,
		"trabajan_en_mismo_estado" : 2898,
		"trabajan_en_otro_estado" : 707,
		"porcentaje_mismo_estado" : "80.39%",
		"porcentaje_otro_estado" : "19.61%"
	},
	{
		"estado_nacimiento" : "Durango",
		"total_nacidos" : 7025,
		"trabajan_en_mismo_estado" : 4743,
		"trabajan_en_otro_estado" : 2282,
		"porcentaje_mismo_estado" : "67.52%",
		"porcentaje_otro_estado" : "32.48%"
	},
	{
		"estado_nacimiento" : "Estado de México",
		"total_nacidos" : 30526,
		"trabajan_en_mismo_estado" : 17237,
		"trabajan_en_otro_estado" : 13289,
		"porcentaje_mismo_estado" : "56.47%",
		"porcentaje_otro_estado" : "43.53%"
	},
	{
		"estado_nacimiento" : "Guanajuato",
		"total_nacidos" : 14391,
		"trabajan_en_mismo_estado" : 11816,
		"trabajan_en_otro_estado" : 2575,
		"porcentaje_mismo_estado" : "82.11%",
		"porcentaje_otro_estado" : "17.89%"
	},
	{
		"estado_nacimiento" : "Guerrero",
		"total_nacidos" : 10196,
		"trabajan_en_mismo_estado" : 5347,
		"trabajan_en_otro_estado" : 4849,
		"porcentaje_mismo_estado" : "52.44%",
		"porcentaje_otro_estado" : "47.56%"
	},
	{
		"estado_nacimiento" : "Hidalgo",
		"total_nacidos" : 7216,
		"trabajan_en_mismo_estado" : 4771,
		"trabajan_en_otro_estado" : 2445,
		"porcentaje_mismo_estado" : "66.12%",
		"porcentaje_otro_estado" : "33.88%"
	},
	{
		"estado_nacimiento" : "Jalisco",
		"total_nacidos" : 34057,
		"trabajan_en_mismo_estado" : 28467,
		"trabajan_en_otro_estado" : 5590,
		"porcentaje_mismo_estado" : "83.59%",
		"porcentaje_otro_estado" : "16.41%"
	},
	{
		"estado_nacimiento" : "Michoacán",
		"total_nacidos" : 14091,
		"trabajan_en_mismo_estado" : 8916,
		"trabajan_en_otro_estado" : 5175,
		"porcentaje_mismo_estado" : "63.27%",
		"porcentaje_otro_estado" : "36.73%"
	},
	{
		"estado_nacimiento" : "Morelos",
		"total_nacidos" : 6749,
		"trabajan_en_mismo_estado" : 4981,
		"trabajan_en_otro_estado" : 1768,
		"porcentaje_mismo_estado" : "73.80%",
		"porcentaje_otro_estado" : "26.20%"
	},
	{
		"estado_nacimiento" : "Nayarit",
		"total_nacidos" : 7242,
		"trabajan_en_mismo_estado" : 4688,
		"trabajan_en_otro_estado" : 2554,
		"porcentaje_mismo_estado" : "64.73%",
		"porcentaje_otro_estado" : "35.27%"
	},
	{
		"estado_nacimiento" : "Nuevo León",
		"total_nacidos" : 23110,
		"trabajan_en_mismo_estado" : 21589,
		"trabajan_en_otro_estado" : 1521,
		"porcentaje_mismo_estado" : "93.42%",
		"porcentaje_otro_estado" : "6.58%"
	},
	{
		"estado_nacimiento" : "Oaxaca",
		"total_nacidos" : 8291,
		"trabajan_en_mismo_estado" : 4057,
		"trabajan_en_otro_estado" : 4234,
		"porcentaje_mismo_estado" : "48.93%",
		"porcentaje_otro_estado" : "51.07%"
	},
	{
		"estado_nacimiento" : "Puebla",
		"total_nacidos" : 15837,
		"trabajan_en_mismo_estado" : 10539,
		"trabajan_en_otro_estado" : 5298,
		"porcentaje_mismo_estado" : "66.55%",
		"porcentaje_otro_estado" : "33.45%"
	},
	{
		"estado_nacimiento" : "Querétaro",
		"total_nacidos" : 3979,
		"trabajan_en_mismo_estado" : 3480,
		"trabajan_en_otro_estado" : 499,
		"porcentaje_mismo_estado" : "87.46%",
		"porcentaje_otro_estado" : "12.54%"
	},
	{
		"estado_nacimiento" : "Quintana Roo",
		"total_nacidos" : 2213,
		"trabajan_en_mismo_estado" : 1718,
		"trabajan_en_otro_estado" : 495,
		"porcentaje_mismo_estado" : "77.63%",
		"porcentaje_otro_estado" : "22.37%"
	},
	{
		"estado_nacimiento" : "San Luis Potosí",
		"total_nacidos" : 7746,
		"trabajan_en_mismo_estado" : 6160,
		"trabajan_en_otro_estado" : 1586,
		"porcentaje_mismo_estado" : "79.52%",
		"porcentaje_otro_estado" : "20.48%"
	},
	{
		"estado_nacimiento" : "Sinaloa",
		"total_nacidos" : 19229,
		"trabajan_en_mismo_estado" : 10819,
		"trabajan_en_otro_estado" : 8410,
		"porcentaje_mismo_estado" : "56.26%",
		"porcentaje_otro_estado" : "43.74%"
	},
	{
		"estado_nacimiento" : "Sonora",
		"total_nacidos" : 14996,
		"trabajan_en_mismo_estado" : 12364,
		"trabajan_en_otro_estado" : 2632,
		"porcentaje_mismo_estado" : "82.45%",
		"porcentaje_otro_estado" : "17.55%"
	},
	{
		"estado_nacimiento" : "Tabasco",
		"total_nacidos" : 5843,
		"trabajan_en_mismo_estado" : 4091,
		"trabajan_en_otro_estado" : 1752,
		"porcentaje_mismo_estado" : "70.02%",
		"porcentaje_otro_estado" : "29.98%"
	},
	{
		"estado_nacimiento" : "Tamaulipas",
		"total_nacidos" : 14923,
		"trabajan_en_mismo_estado" : 11324,
		"trabajan_en_otro_estado" : 3599,
		"porcentaje_mismo_estado" : "75.88%",
		"porcentaje_otro_estado" : "24.12%"
	},
	{
		"estado_nacimiento" : "Tlaxcala",
		"total_nacidos" : 3696,
		"trabajan_en_mismo_estado" : 2078,
		"trabajan_en_otro_estado" : 1618,
		"porcentaje_mismo_estado" : "56.22%",
		"porcentaje_otro_estado" : "43.78%"
	},
	{
		"estado_nacimiento" : "Veracruz",
		"total_nacidos" : 25184,
		"trabajan_en_mismo_estado" : 18078,
		"trabajan_en_otro_estado" : 7106,
		"porcentaje_mismo_estado" : "71.78%",
		"porcentaje_otro_estado" : "28.22%"
	},
	{
		"estado_nacimiento" : "Yucatán",
		"total_nacidos" : 8158,
		"trabajan_en_mismo_estado" : 6764,
		"trabajan_en_otro_estado" : 1394,
		"porcentaje_mismo_estado" : "82.91%",
		"porcentaje_otro_estado" : "17.09%"
	},
	{
		"estado_nacimiento" : "Zacatecas",
		"total_nacidos" : 5114,
		"trabajan_en_mismo_estado" : 3496,
		"trabajan_en_otro_estado" : 1618,
		"porcentaje_mismo_estado" : "68.36%",
		"porcentaje_otro_estado" : "31.64%"
	}
];
