/* query para extraer la informacion de la tabla de distribucion de genero por área de responsabilidad
SELECT *
FROM (
    SELECT 
        COALESCE(NOMBREAR, 'Total General') AS especialidad,
        SUM(CASE WHEN SEXO = 'H' THEN 1 ELSE 0 END) AS hombres,
        SUM(CASE WHEN SEXO = 'M' THEN 1 ELSE 0 END) AS mujeres,
        -- Contar solo filas donde SEXO es válido (H o M)
        SUM(CASE WHEN SEXO IN ('H', 'M') THEN 1 ELSE 0 END) AS total,
        -- Cálculo de porcentaje basado en el total filtrado
        ROUND(SUM(CASE WHEN SEXO = 'H' THEN 1 ELSE 0 END) * 100.0 / 
            NULLIF(SUM(CASE WHEN SEXO IN ('H', 'M') THEN 1 ELSE 0 END), 0), 2) AS porcentaje_hombres,
        ROUND(SUM(CASE WHEN SEXO = 'M' THEN 1 ELSE 0 END) * 100.0 / 
            NULLIF(SUM(CASE WHEN SEXO IN ('H', 'M') THEN 1 ELSE 0 END), 0), 2) AS porcentaje_mujeres,
        CASE 
            WHEN SUM(CASE WHEN SEXO = 'H' THEN 1 ELSE 0 END) > SUM(CASE WHEN SEXO = 'M' THEN 1 ELSE 0 END) THEN 'Hombres'
            WHEN SUM(CASE WHEN SEXO = 'H' THEN 1 ELSE 0 END) < SUM(CASE WHEN SEXO = 'M' THEN 1 ELSE 0 END) THEN 'Mujeres'
            ELSE 'Igualdad'
        END AS predominio
    FROM personalaps.plantillaordinario
    WHERE DESCRIP_CLASCATEG = '1.MÉDICOS'
    AND QNA = '2024017'
    AND SEXO IN ('H', 'M')  -- 🔥 Agregado para eliminar registros sin sexo
    GROUP BY NOMBREAR WITH ROLLUP
) AS resultados
ORDER BY 
    especialidad = 'Total General', -- Mover la fila Total General al final
    especialidad;
*/

const dataDisctribucion = [
	{
		"especialidad" : "ALMACEN",
		"hombres" : 163,
		"mujeres" : 67,
		"total" : 230,
		"porcentaje_hombres" : 70.87,
		"porcentaje_mujeres" : 29.13,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ANATOMIA PATOLOGICA Y LAB.DE CIT.EXFOL",
		"hombres" : 60,
		"mujeres" : 37,
		"total" : 97,
		"porcentaje_hombres" : 61.86,
		"porcentaje_mujeres" : 38.14,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ANESTESIOLOGIA",
		"hombres" : 52,
		"mujeres" : 35,
		"total" : 87,
		"porcentaje_hombres" : 59.77,
		"porcentaje_mujeres" : 40.23,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "AUDIOLOGIA",
		"hombres" : 0,
		"mujeres" : 1,
		"total" : 1,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "BECARIOS",
		"hombres" : 18,
		"mujeres" : 32,
		"total" : 50,
		"porcentaje_hombres" : 36.00,
		"porcentaje_mujeres" : 64.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "CIRUGIA CARDIOVASCULAR TORACICA",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA GENERAL",
		"hombres" : 34,
		"mujeres" : 6,
		"total" : 40,
		"porcentaje_hombres" : 85.00,
		"porcentaje_mujeres" : 15.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA PEDIATRICA",
		"hombres" : 0,
		"mujeres" : 1,
		"total" : 1,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "CONSERVACION",
		"hombres" : 491,
		"mujeres" : 14,
		"total" : 505,
		"porcentaje_hombres" : 97.23,
		"porcentaje_mujeres" : 2.77,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "DIRECCION ADMINISTRATIVA",
		"hombres" : 170,
		"mujeres" : 141,
		"total" : 311,
		"porcentaje_hombres" : 54.66,
		"porcentaje_mujeres" : 45.34,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ENFERMERIA",
		"hombres" : 1120,
		"mujeres" : 7114,
		"total" : 8234,
		"porcentaje_hombres" : 13.60,
		"porcentaje_mujeres" : 86.40,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ESTOMATOLOGIA",
		"hombres" : 94,
		"mujeres" : 120,
		"total" : 214,
		"porcentaje_hombres" : 43.93,
		"porcentaje_mujeres" : 56.07,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "FARMACIA",
		"hombres" : 80,
		"mujeres" : 76,
		"total" : 156,
		"porcentaje_hombres" : 51.28,
		"porcentaje_mujeres" : 48.72,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "GINECOLOGIA Y OBSTETRICIA",
		"hombres" : 101,
		"mujeres" : 157,
		"total" : 258,
		"porcentaje_hombres" : 39.15,
		"porcentaje_mujeres" : 60.85,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "LABORATORIA DE ANALISIS CLINICOS",
		"hombres" : 3,
		"mujeres" : 1,
		"total" : 4,
		"porcentaje_hombres" : 75.00,
		"porcentaje_mujeres" : 25.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "LABORATORIO DE ANALISIS CLINICOS",
		"hombres" : 124,
		"mujeres" : 266,
		"total" : 390,
		"porcentaje_hombres" : 31.79,
		"porcentaje_mujeres" : 68.21,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "LAVANDERIA",
		"hombres" : 189,
		"mujeres" : 11,
		"total" : 200,
		"porcentaje_hombres" : 94.50,
		"porcentaje_mujeres" : 5.50,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICINA FAMILIAR",
		"hombres" : 18,
		"mujeres" : 17,
		"total" : 35,
		"porcentaje_hombres" : 51.43,
		"porcentaje_mujeres" : 48.57,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICINA FAMILIAR (CONS.MEDICO)",
		"hombres" : 1944,
		"mujeres" : 2208,
		"total" : 4152,
		"porcentaje_hombres" : 46.82,
		"porcentaje_mujeres" : 53.18,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA FISICA Y REHABILITACION",
		"hombres" : 1,
		"mujeres" : 1,
		"total" : 2,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "MEDICINA INTERNA",
		"hombres" : 24,
		"mujeres" : 7,
		"total" : 31,
		"porcentaje_hombres" : 77.42,
		"porcentaje_mujeres" : 22.58,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICINA RURAL DEL NIÑO Y ADULTO",
		"hombres" : 71,
		"mujeres" : 64,
		"total" : 135,
		"porcentaje_hombres" : 52.59,
		"porcentaje_mujeres" : 47.41,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICO EN ANESTESIA RURAL",
		"hombres" : 158,
		"mujeres" : 121,
		"total" : 279,
		"porcentaje_hombres" : 56.63,
		"porcentaje_mujeres" : 43.37,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICO QUIRURGICO RURAL",
		"hombres" : 182,
		"mujeres" : 56,
		"total" : 238,
		"porcentaje_hombres" : 76.47,
		"porcentaje_mujeres" : 23.53,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "N.CENT.REG.DELEG.SUBDELEG.DIR.ADMTV.U.OP",
		"hombres" : 329,
		"mujeres" : 280,
		"total" : 609,
		"porcentaje_hombres" : 54.02,
		"porcentaje_mujeres" : 45.98,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEONATOLOGIA",
		"hombres" : 0,
		"mujeres" : 2,
		"total" : 2,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "NUTRICION Y DIETETICA",
		"hombres" : 337,
		"mujeres" : 116,
		"total" : 453,
		"porcentaje_hombres" : 74.39,
		"porcentaje_mujeres" : 25.61,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "OTORRINOLARINGOLOGIA",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "PEDIATRIA MEDICA",
		"hombres" : 49,
		"mujeres" : 63,
		"total" : 112,
		"porcentaje_hombres" : 43.75,
		"porcentaje_mujeres" : 56.25,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PSICOTERAPIA E HIGIENE MENTAL",
		"hombres" : 13,
		"mujeres" : 62,
		"total" : 75,
		"porcentaje_hombres" : 17.33,
		"porcentaje_mujeres" : 82.67,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "RADIODIAGNOSTICO",
		"hombres" : 88,
		"mujeres" : 27,
		"total" : 115,
		"porcentaje_hombres" : 76.52,
		"porcentaje_mujeres" : 23.48,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "SALUD COMUNITARIA",
		"hombres" : 252,
		"mujeres" : 77,
		"total" : 329,
		"porcentaje_hombres" : 76.60,
		"porcentaje_mujeres" : 23.40,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "SECTOR ADMINISTRATIVO Y DE PERSONAL",
		"hombres" : 228,
		"mujeres" : 393,
		"total" : 621,
		"porcentaje_hombres" : 36.71,
		"porcentaje_mujeres" : 63.29,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "SECTOR ESTADISTICA",
		"hombres" : 185,
		"mujeres" : 165,
		"total" : 350,
		"porcentaje_hombres" : 52.86,
		"porcentaje_mujeres" : 47.14,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "SERVICIOS BASICOS",
		"hombres" : 1029,
		"mujeres" : 92,
		"total" : 1121,
		"porcentaje_hombres" : 91.79,
		"porcentaje_mujeres" : 8.21,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRABAJO SOCIAL MEDICO",
		"hombres" : 1,
		"mujeres" : 5,
		"total" : 6,
		"porcentaje_hombres" : 16.67,
		"porcentaje_mujeres" : 83.33,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "TRANSPORTES",
		"hombres" : 402,
		"mujeres" : 9,
		"total" : 411,
		"porcentaje_hombres" : 97.81,
		"porcentaje_mujeres" : 2.19,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRAUMATOLOGIA Y ORTOPEDIA",
		"hombres" : 8,
		"mujeres" : 0,
		"total" : 8,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "URGENCIAS",
		"hombres" : 209,
		"mujeres" : 193,
		"total" : 402,
		"porcentaje_hombres" : 51.99,
		"porcentaje_mujeres" : 48.01,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "Total General",
		"hombres" : 8229,
		"mujeres" : 12037,
		"total" : 20266,
		"porcentaje_hombres" : 40.60,
		"porcentaje_mujeres" : 59.40,
		"predominio" : "Mujeres"
	}
]; // Aquí colocas tu JSON