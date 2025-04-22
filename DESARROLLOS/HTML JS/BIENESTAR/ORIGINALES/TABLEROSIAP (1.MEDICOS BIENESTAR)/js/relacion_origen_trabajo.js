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
		"total_nacidos" : 8,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 8,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Baja California",
		"total_nacidos" : 16,
		"trabajan_en_mismo_estado" : 12,
		"trabajan_en_otro_estado" : 4,
		"porcentaje_mismo_estado" : "75.00%",
		"porcentaje_otro_estado" : "25.00%"
	},
	{
		"estado_nacimiento" : "Baja California Sur",
		"total_nacidos" : 4,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 4,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Campeche",
		"total_nacidos" : 34,
		"trabajan_en_mismo_estado" : 24,
		"trabajan_en_otro_estado" : 10,
		"porcentaje_mismo_estado" : "70.59%",
		"porcentaje_otro_estado" : "29.41%"
	},
	{
		"estado_nacimiento" : "Chiapas",
		"total_nacidos" : 670,
		"trabajan_en_mismo_estado" : 596,
		"trabajan_en_otro_estado" : 74,
		"porcentaje_mismo_estado" : "88.96%",
		"porcentaje_otro_estado" : "11.04%"
	},
	{
		"estado_nacimiento" : "Chihuahua",
		"total_nacidos" : 24,
		"trabajan_en_mismo_estado" : 21,
		"trabajan_en_otro_estado" : 3,
		"porcentaje_mismo_estado" : "87.50%",
		"porcentaje_otro_estado" : "12.50%"
	},
	{
		"estado_nacimiento" : "Ciudad de México",
		"total_nacidos" : 323,
		"trabajan_en_mismo_estado" : 10,
		"trabajan_en_otro_estado" : 313,
		"porcentaje_mismo_estado" : "3.10%",
		"porcentaje_otro_estado" : "96.90%"
	},
	{
		"estado_nacimiento" : "Coahuila",
		"total_nacidos" : 69,
		"trabajan_en_mismo_estado" : 52,
		"trabajan_en_otro_estado" : 17,
		"porcentaje_mismo_estado" : "75.36%",
		"porcentaje_otro_estado" : "24.64%"
	},
	{
		"estado_nacimiento" : "Colima",
		"total_nacidos" : 21,
		"trabajan_en_mismo_estado" : 19,
		"trabajan_en_otro_estado" : 2,
		"porcentaje_mismo_estado" : "90.48%",
		"porcentaje_otro_estado" : "9.52%"
	},
	{
		"estado_nacimiento" : "Durango",
		"total_nacidos" : 96,
		"trabajan_en_mismo_estado" : 76,
		"trabajan_en_otro_estado" : 20,
		"porcentaje_mismo_estado" : "79.17%",
		"porcentaje_otro_estado" : "20.83%"
	},
	{
		"estado_nacimiento" : "Estado de México",
		"total_nacidos" : 88,
		"trabajan_en_mismo_estado" : 19,
		"trabajan_en_otro_estado" : 69,
		"porcentaje_mismo_estado" : "21.59%",
		"porcentaje_otro_estado" : "78.41%"
	},
	{
		"estado_nacimiento" : "Guanajuato",
		"total_nacidos" : 20,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 20,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Guerrero",
		"total_nacidos" : 137,
		"trabajan_en_mismo_estado" : 36,
		"trabajan_en_otro_estado" : 101,
		"porcentaje_mismo_estado" : "26.28%",
		"porcentaje_otro_estado" : "73.72%"
	},
	{
		"estado_nacimiento" : "Hidalgo",
		"total_nacidos" : 163,
		"trabajan_en_mismo_estado" : 120,
		"trabajan_en_otro_estado" : 43,
		"porcentaje_mismo_estado" : "73.62%",
		"porcentaje_otro_estado" : "26.38%"
	},
	{
		"estado_nacimiento" : "Jalisco",
		"total_nacidos" : 33,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 33,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Michoacán",
		"total_nacidos" : 275,
		"trabajan_en_mismo_estado" : 219,
		"trabajan_en_otro_estado" : 56,
		"porcentaje_mismo_estado" : "79.64%",
		"porcentaje_otro_estado" : "20.36%"
	},
	{
		"estado_nacimiento" : "Morelos",
		"total_nacidos" : 26,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 26,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Nayarit",
		"total_nacidos" : 194,
		"trabajan_en_mismo_estado" : 177,
		"trabajan_en_otro_estado" : 17,
		"porcentaje_mismo_estado" : "91.24%",
		"porcentaje_otro_estado" : "8.76%"
	},
	{
		"estado_nacimiento" : "Nuevo León",
		"total_nacidos" : 14,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 14,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Oaxaca",
		"total_nacidos" : 800,
		"trabajan_en_mismo_estado" : 679,
		"trabajan_en_otro_estado" : 121,
		"porcentaje_mismo_estado" : "84.88%",
		"porcentaje_otro_estado" : "15.13%"
	},
	{
		"estado_nacimiento" : "Puebla",
		"total_nacidos" : 342,
		"trabajan_en_mismo_estado" : 203,
		"trabajan_en_otro_estado" : 139,
		"porcentaje_mismo_estado" : "59.36%",
		"porcentaje_otro_estado" : "40.64%"
	},
	{
		"estado_nacimiento" : "Querétaro",
		"total_nacidos" : 7,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 7,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Quintana Roo",
		"total_nacidos" : 5,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 5,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "San Luis Potosí",
		"total_nacidos" : 84,
		"trabajan_en_mismo_estado" : 71,
		"trabajan_en_otro_estado" : 13,
		"porcentaje_mismo_estado" : "84.52%",
		"porcentaje_otro_estado" : "15.48%"
	},
	{
		"estado_nacimiento" : "Sinaloa",
		"total_nacidos" : 136,
		"trabajan_en_mismo_estado" : 95,
		"trabajan_en_otro_estado" : 41,
		"porcentaje_mismo_estado" : "69.85%",
		"porcentaje_otro_estado" : "30.15%"
	},
	{
		"estado_nacimiento" : "Sonora",
		"total_nacidos" : 11,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 11,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Tabasco",
		"total_nacidos" : 64,
		"trabajan_en_mismo_estado" : 0,
		"trabajan_en_otro_estado" : 64,
		"porcentaje_mismo_estado" : "0.00%",
		"porcentaje_otro_estado" : "100.00%"
	},
	{
		"estado_nacimiento" : "Tamaulipas",
		"total_nacidos" : 115,
		"trabajan_en_mismo_estado" : 55,
		"trabajan_en_otro_estado" : 60,
		"porcentaje_mismo_estado" : "47.83%",
		"porcentaje_otro_estado" : "52.17%"
	},
	{
		"estado_nacimiento" : "Tlaxcala",
		"total_nacidos" : 231,
		"trabajan_en_mismo_estado" : 189,
		"trabajan_en_otro_estado" : 42,
		"porcentaje_mismo_estado" : "81.82%",
		"porcentaje_otro_estado" : "18.18%"
	},
	{
		"estado_nacimiento" : "Veracruz",
		"total_nacidos" : 562,
		"trabajan_en_mismo_estado" : 418,
		"trabajan_en_otro_estado" : 144,
		"porcentaje_mismo_estado" : "74.38%",
		"porcentaje_otro_estado" : "25.62%"
	},
	{
		"estado_nacimiento" : "Yucatán",
		"total_nacidos" : 66,
		"trabajan_en_mismo_estado" : 60,
		"trabajan_en_otro_estado" : 6,
		"porcentaje_mismo_estado" : "90.91%",
		"porcentaje_otro_estado" : "9.09%"
	},
	{
		"estado_nacimiento" : "Zacatecas",
		"total_nacidos" : 184,
		"trabajan_en_mismo_estado" : 165,
		"trabajan_en_otro_estado" : 19,
		"porcentaje_mismo_estado" : "89.67%",
		"porcentaje_otro_estado" : "10.33%"
	}
];
