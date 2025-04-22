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
		"especialidad" : "ALERGIA E INMUNOLOGIA (LABORATORIO)",
		"hombres" : 61,
		"mujeres" : 68,
		"total" : 129,
		"porcentaje_hombres" : 47.29,
		"porcentaje_mujeres" : 52.71,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ALERGIA E INMUNOLOGIA CLINICA PEDIATRICA",
		"hombres" : 2,
		"mujeres" : 2,
		"total" : 4,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "ANATOMIA PATOLOGICA Y LAB.DE CIT.EXFOL",
		"hombres" : 230,
		"mujeres" : 304,
		"total" : 534,
		"porcentaje_hombres" : 43.07,
		"porcentaje_mujeres" : 56.93,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ANESTESIOLOGIA",
		"hombres" : 2500,
		"mujeres" : 3949,
		"total" : 6449,
		"porcentaje_hombres" : 38.77,
		"porcentaje_mujeres" : 61.23,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ANESTESIOLOGIA PEDIATRICA",
		"hombres" : 17,
		"mujeres" : 36,
		"total" : 53,
		"porcentaje_hombres" : 32.08,
		"porcentaje_mujeres" : 67.92,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ANGIOLOGIA",
		"hombres" : 154,
		"mujeres" : 60,
		"total" : 214,
		"porcentaje_hombres" : 71.96,
		"porcentaje_mujeres" : 28.04,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ATENCION Y ORIENTACION AL D.H.",
		"hombres" : 2,
		"mujeres" : 7,
		"total" : 9,
		"porcentaje_hombres" : 22.22,
		"porcentaje_mujeres" : 77.78,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "AUDIOLOGIA",
		"hombres" : 37,
		"mujeres" : 93,
		"total" : 130,
		"porcentaje_hombres" : 28.46,
		"porcentaje_mujeres" : 71.54,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "BECARIOS",
		"hombres" : 6,
		"mujeres" : 2,
		"total" : 8,
		"porcentaje_hombres" : 75.00,
		"porcentaje_mujeres" : 25.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CALIDAD DE LA  ATENCION CLINICA",
		"hombres" : 20,
		"mujeres" : 5,
		"total" : 25,
		"porcentaje_hombres" : 80.00,
		"porcentaje_mujeres" : 20.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CARDIOLOGIA",
		"hombres" : 595,
		"mujeres" : 196,
		"total" : 791,
		"porcentaje_hombres" : 75.22,
		"porcentaje_mujeres" : 24.78,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CARDIOLOGIA PEDIATRICA",
		"hombres" : 43,
		"mujeres" : 40,
		"total" : 83,
		"porcentaje_hombres" : 51.81,
		"porcentaje_mujeres" : 48.19,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CENTRO DE COLECTA",
		"hombres" : 37,
		"mujeres" : 30,
		"total" : 67,
		"porcentaje_hombres" : 55.22,
		"porcentaje_mujeres" : 44.78,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA CARDIOVASCULAR TORACICA",
		"hombres" : 109,
		"mujeres" : 34,
		"total" : 143,
		"porcentaje_hombres" : 76.22,
		"porcentaje_mujeres" : 23.78,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA GENERAL",
		"hombres" : 2612,
		"mujeres" : 923,
		"total" : 3535,
		"porcentaje_hombres" : 73.89,
		"porcentaje_mujeres" : 26.11,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA MAXILOFACIAL",
		"hombres" : 5,
		"mujeres" : 5,
		"total" : 10,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "CIRUGIA PEDIATRICA",
		"hombres" : 252,
		"mujeres" : 126,
		"total" : 378,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA PLASTICA Y RECONSTRUCTIVA",
		"hombres" : 160,
		"mujeres" : 51,
		"total" : 211,
		"porcentaje_hombres" : 75.83,
		"porcentaje_mujeres" : 24.17,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "DERMATOLOGIA",
		"hombres" : 45,
		"mujeres" : 114,
		"total" : 159,
		"porcentaje_hombres" : 28.30,
		"porcentaje_mujeres" : 71.70,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "DIRECCION ADMINISTRATIVA",
		"hombres" : 26,
		"mujeres" : 28,
		"total" : 54,
		"porcentaje_hombres" : 48.15,
		"porcentaje_mujeres" : 51.85,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "EDUCACION MEDICA (FORM.DE PROF.)",
		"hombres" : 168,
		"mujeres" : 251,
		"total" : 419,
		"porcentaje_hombres" : 40.10,
		"porcentaje_mujeres" : 59.90,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ENDOCRINOLOGIA",
		"hombres" : 79,
		"mujeres" : 87,
		"total" : 166,
		"porcentaje_hombres" : 47.59,
		"porcentaje_mujeres" : 52.41,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ENDOCRINOLOGIA PEDIATRICA",
		"hombres" : 9,
		"mujeres" : 34,
		"total" : 43,
		"porcentaje_hombres" : 20.93,
		"porcentaje_mujeres" : 79.07,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ENDOSCOPIA",
		"hombres" : 143,
		"mujeres" : 75,
		"total" : 218,
		"porcentaje_hombres" : 65.60,
		"porcentaje_mujeres" : 34.40,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ENDOSCOPIA INTERVENCIONISTA",
		"hombres" : 0,
		"mujeres" : 1,
		"total" : 1,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ENFERMERIA",
		"hombres" : 1,
		"mujeres" : 1,
		"total" : 2,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "FISIOLOGIA CARDIOPULMONAR",
		"hombres" : 8,
		"mujeres" : 4,
		"total" : 12,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "FOMENTO A LA SALUD",
		"hombres" : 178,
		"mujeres" : 227,
		"total" : 405,
		"porcentaje_hombres" : 43.95,
		"porcentaje_mujeres" : 56.05,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "GASTROENTEROLOGIA",
		"hombres" : 93,
		"mujeres" : 85,
		"total" : 178,
		"porcentaje_hombres" : 52.25,
		"porcentaje_mujeres" : 47.75,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "GASTROENTEROLOGIA PEDIATRICA",
		"hombres" : 11,
		"mujeres" : 23,
		"total" : 34,
		"porcentaje_hombres" : 32.35,
		"porcentaje_mujeres" : 67.65,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "GENETICA",
		"hombres" : 12,
		"mujeres" : 14,
		"total" : 26,
		"porcentaje_hombres" : 46.15,
		"porcentaje_mujeres" : 53.85,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "GERIATRIA",
		"hombres" : 244,
		"mujeres" : 256,
		"total" : 500,
		"porcentaje_hombres" : 48.80,
		"porcentaje_mujeres" : 51.20,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "GINECOLOGIA ONCOLOGICA",
		"hombres" : 30,
		"mujeres" : 22,
		"total" : 52,
		"porcentaje_hombres" : 57.69,
		"porcentaje_mujeres" : 42.31,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "GINECOLOGIA Y OBSTETRICIA",
		"hombres" : 1977,
		"mujeres" : 2564,
		"total" : 4541,
		"porcentaje_hombres" : 43.54,
		"porcentaje_mujeres" : 56.46,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "HEMATOLOGIA",
		"hombres" : 117,
		"mujeres" : 147,
		"total" : 264,
		"porcentaje_hombres" : 44.32,
		"porcentaje_mujeres" : 55.68,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "HEMATOLOGIA PEDIATRICA",
		"hombres" : 19,
		"mujeres" : 49,
		"total" : 68,
		"porcentaje_hombres" : 27.94,
		"porcentaje_mujeres" : 72.06,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "HEMODINAMIA",
		"hombres" : 156,
		"mujeres" : 17,
		"total" : 173,
		"porcentaje_hombres" : 90.17,
		"porcentaje_mujeres" : 9.83,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "INFECTOLOGIA",
		"hombres" : 97,
		"mujeres" : 55,
		"total" : 152,
		"porcentaje_hombres" : 63.82,
		"porcentaje_mujeres" : 36.18,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "INFECTOLOGIA PEDIATRICA",
		"hombres" : 7,
		"mujeres" : 15,
		"total" : 22,
		"porcentaje_hombres" : 31.82,
		"porcentaje_mujeres" : 68.18,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "INHALOTERAPIA",
		"hombres" : 2,
		"mujeres" : 1,
		"total" : 3,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "LABORATORIO DE ANALISIS CLINICOS",
		"hombres" : 67,
		"mujeres" : 93,
		"total" : 160,
		"porcentaje_hombres" : 41.88,
		"porcentaje_mujeres" : 58.13,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDIC DEL ENFMO PEDIATR EN EDO CRITICO",
		"hombres" : 71,
		"mujeres" : 111,
		"total" : 182,
		"porcentaje_hombres" : 39.01,
		"porcentaje_mujeres" : 60.99,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA FAMILIAR (CONS.MEDICO)",
		"hombres" : 9186,
		"mujeres" : 13331,
		"total" : 22517,
		"porcentaje_hombres" : 40.80,
		"porcentaje_mujeres" : 59.20,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA FISICA Y REHABILITACION",
		"hombres" : 178,
		"mujeres" : 391,
		"total" : 569,
		"porcentaje_hombres" : 31.28,
		"porcentaje_mujeres" : 68.72,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA INTERNA",
		"hombres" : 2158,
		"mujeres" : 1250,
		"total" : 3408,
		"porcentaje_hombres" : 63.32,
		"porcentaje_mujeres" : 36.68,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICINA MATERNO FETAL",
		"hombres" : 27,
		"mujeres" : 23,
		"total" : 50,
		"porcentaje_hombres" : 54.00,
		"porcentaje_mujeres" : 46.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICINA NUCLEAR",
		"hombres" : 62,
		"mujeres" : 31,
		"total" : 93,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICINA PALIATIVA",
		"hombres" : 10,
		"mujeres" : 26,
		"total" : 36,
		"porcentaje_hombres" : 27.78,
		"porcentaje_mujeres" : 72.22,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICO EN ANESTESIA RURAL",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICO GENERAL EN GUARDERIA",
		"hombres" : 56,
		"mujeres" : 68,
		"total" : 124,
		"porcentaje_hombres" : 45.16,
		"porcentaje_mujeres" : 54.84,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICO GENERAL EN SALUD EN EL TRABAJO",
		"hombres" : 131,
		"mujeres" : 148,
		"total" : 279,
		"porcentaje_hombres" : 46.95,
		"porcentaje_mujeres" : 53.05,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "N.CENT.REG.DELEG.SUBDELEG.DIR.ADMTV.U.OP",
		"hombres" : 2169,
		"mujeres" : 1622,
		"total" : 3791,
		"porcentaje_hombres" : 57.21,
		"porcentaje_mujeres" : 42.79,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEFROLOGIA",
		"hombres" : 413,
		"mujeres" : 263,
		"total" : 676,
		"porcentaje_hombres" : 61.09,
		"porcentaje_mujeres" : 38.91,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEFROLOGIA PEDIATRICA",
		"hombres" : 15,
		"mujeres" : 35,
		"total" : 50,
		"porcentaje_hombres" : 30.00,
		"porcentaje_mujeres" : 70.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "NEONATOLOGIA",
		"hombres" : 265,
		"mujeres" : 609,
		"total" : 874,
		"porcentaje_hombres" : 30.32,
		"porcentaje_mujeres" : 69.68,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "NEUMOLOGIA",
		"hombres" : 160,
		"mujeres" : 102,
		"total" : 262,
		"porcentaje_hombres" : 61.07,
		"porcentaje_mujeres" : 38.93,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUMOLOGIA PEDIATRICA",
		"hombres" : 12,
		"mujeres" : 19,
		"total" : 31,
		"porcentaje_hombres" : 38.71,
		"porcentaje_mujeres" : 61.29,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "NEUROCIRUGIA",
		"hombres" : 328,
		"mujeres" : 38,
		"total" : 366,
		"porcentaje_hombres" : 89.62,
		"porcentaje_mujeres" : 10.38,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUROCIRUGIA PEDIATRICA",
		"hombres" : 3,
		"mujeres" : 0,
		"total" : 3,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUROLOGIA",
		"hombres" : 157,
		"mujeres" : 81,
		"total" : 238,
		"porcentaje_hombres" : 65.97,
		"porcentaje_mujeres" : 34.03,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUROLOGIA PEDIATRICA",
		"hombres" : 24,
		"mujeres" : 51,
		"total" : 75,
		"porcentaje_hombres" : 32.00,
		"porcentaje_mujeres" : 68.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "NUTRICION Y DIETETICA",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "OFTALMOLOGIA",
		"hombres" : 383,
		"mujeres" : 430,
		"total" : 813,
		"porcentaje_hombres" : 47.11,
		"porcentaje_mujeres" : 52.89,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ONCOLOGIA MEDICA",
		"hombres" : 153,
		"mujeres" : 111,
		"total" : 264,
		"porcentaje_hombres" : 57.95,
		"porcentaje_mujeres" : 42.05,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ONCOLOGIA PEDIATRICA",
		"hombres" : 33,
		"mujeres" : 63,
		"total" : 96,
		"porcentaje_hombres" : 34.38,
		"porcentaje_mujeres" : 65.63,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ONCOLOGIA QUIRURGICA",
		"hombres" : 254,
		"mujeres" : 53,
		"total" : 307,
		"porcentaje_hombres" : 82.74,
		"porcentaje_mujeres" : 17.26,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "OTORRINOLARINGOLOGIA",
		"hombres" : 262,
		"mujeres" : 326,
		"total" : 588,
		"porcentaje_hombres" : 44.56,
		"porcentaje_mujeres" : 55.44,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "OTORRINOLARINGOLOGIA PEDIATRICA",
		"hombres" : 0,
		"mujeres" : 1,
		"total" : 1,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PAIDO PSIQUIATRIA",
		"hombres" : 13,
		"mujeres" : 6,
		"total" : 19,
		"porcentaje_hombres" : 68.42,
		"porcentaje_mujeres" : 31.58,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "PATOLOGIA CLINICA",
		"hombres" : 5,
		"mujeres" : 5,
		"total" : 10,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "PATOLOGIA PEDIATRICA",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "PEDIATRA EN SERVICIOS DE URGENCIAS",
		"hombres" : 119,
		"mujeres" : 215,
		"total" : 334,
		"porcentaje_hombres" : 35.63,
		"porcentaje_mujeres" : 64.37,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PEDIATRIA MEDICA",
		"hombres" : 1417,
		"mujeres" : 2474,
		"total" : 3891,
		"porcentaje_hombres" : 36.42,
		"porcentaje_mujeres" : 63.58,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PLANIFICACION FAMILIAR",
		"hombres" : 19,
		"mujeres" : 16,
		"total" : 35,
		"porcentaje_hombres" : 54.29,
		"porcentaje_mujeres" : 45.71,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "PROCTOLOGIA",
		"hombres" : 75,
		"mujeres" : 30,
		"total" : 105,
		"porcentaje_hombres" : 71.43,
		"porcentaje_mujeres" : 28.57,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "PSICOTERAPIA E HIGIENE MENTAL",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	/*{
		"especialidad" : "PSIQUIATRIA",
		"hombres" : 0,
		"mujeres" : 0,
		"total" : 0,
		"porcentaje_hombres" : null,
		"porcentaje_mujeres" : null,
		"predominio" : "Igualdad"
	},*/
	{
		"especialidad" : "PSIQUIATRIA (TERAPIA PSICOLOGICA)",
		"hombres" : 215,
		"mujeres" : 191,
		"total" : 406,
		"porcentaje_hombres" : 52.96,
		"porcentaje_mujeres" : 47.04,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "RADIODIAGNOSTICO",
		"hombres" : 1260,
		"mujeres" : 1100,
		"total" : 2360,
		"porcentaje_hombres" : 53.39,
		"porcentaje_mujeres" : 46.61,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "RADIOTERAPIA",
		"hombres" : 76,
		"mujeres" : 36,
		"total" : 112,
		"porcentaje_hombres" : 67.86,
		"porcentaje_mujeres" : 32.14,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "REUMATOLOGIA",
		"hombres" : 86,
		"mujeres" : 111,
		"total" : 197,
		"porcentaje_hombres" : 43.65,
		"porcentaje_mujeres" : 56.35,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "REUMATOLOGIA PEDIATRICA",
		"hombres" : 2,
		"mujeres" : 3,
		"total" : 5,
		"porcentaje_hombres" : 40.00,
		"porcentaje_mujeres" : 60.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "SALUD COMUNITARIA",
		"hombres" : 312,
		"mujeres" : 386,
		"total" : 698,
		"porcentaje_hombres" : 44.70,
		"porcentaje_mujeres" : 55.30,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "SALUD EN EL TRABAJO",
		"hombres" : 508,
		"mujeres" : 696,
		"total" : 1204,
		"porcentaje_hombres" : 42.19,
		"porcentaje_mujeres" : 57.81,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "SALUD REPRODUCTIVA Y MAT INF",
		"hombres" : 10,
		"mujeres" : 18,
		"total" : 28,
		"porcentaje_hombres" : 35.71,
		"porcentaje_mujeres" : 64.29,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "SECTOR ADMINISTRATIVO Y DE PERSONAL",
		"hombres" : 3,
		"mujeres" : 2,
		"total" : 5,
		"porcentaje_hombres" : 60.00,
		"porcentaje_mujeres" : 40.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "SERVICIOS DE SANGRE",
		"hombres" : 151,
		"mujeres" : 228,
		"total" : 379,
		"porcentaje_hombres" : 39.84,
		"porcentaje_mujeres" : 60.16,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "TECNICO MANEJO DE AP. ELECTROD. Y ELEC.",
		"hombres" : 0,
		"mujeres" : 2,
		"total" : 2,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "TERAPIA INTENSIVA",
		"hombres" : 927,
		"mujeres" : 498,
		"total" : 1425,
		"porcentaje_hombres" : 65.05,
		"porcentaje_mujeres" : 34.95,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRANSPORTES",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRASLADO DE ENFERMOS",
		"hombres" : 4,
		"mujeres" : 2,
		"total" : 6,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRASPLANTE DE CORAZON",
		"hombres" : 4,
		"mujeres" : 2,
		"total" : 6,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRASPLANTE DE CORNEA",
		"hombres" : 6,
		"mujeres" : 12,
		"total" : 18,
		"porcentaje_hombres" : 33.33,
		"porcentaje_mujeres" : 66.67,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "TRASPLANTE DE MEDULA OSEA",
		"hombres" : 6,
		"mujeres" : 9,
		"total" : 15,
		"porcentaje_hombres" : 40.00,
		"porcentaje_mujeres" : 60.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "TRASPLANTE DE ORGANOS INTRABDOMINALES",
		"hombres" : 87,
		"mujeres" : 43,
		"total" : 130,
		"porcentaje_hombres" : 66.92,
		"porcentaje_mujeres" : 33.08,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRAUMATOLOGIA Y ORTOPEDIA",
		"hombres" : 2244,
		"mujeres" : 286,
		"total" : 2530,
		"porcentaje_hombres" : 88.70,
		"porcentaje_mujeres" : 11.30,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRIAGE",
		"hombres" : 430,
		"mujeres" : 432,
		"total" : 862,
		"porcentaje_hombres" : 49.88,
		"porcentaje_mujeres" : 50.12,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "URGENCIAS",
		"hombres" : 5814,
		"mujeres" : 5598,
		"total" : 11412,
		"porcentaje_hombres" : 50.95,
		"porcentaje_mujeres" : 49.05,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "UROLOGIA",
		"hombres" : 566,
		"mujeres" : 43,
		"total" : 609,
		"porcentaje_hombres" : 92.94,
		"porcentaje_mujeres" : 7.06,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "UROLOGIA GINECOLOGICA",
		"hombres" : 2,
		"mujeres" : 2,
		"total" : 4,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "Total General",
		"hombres" : 41207,
		"mujeres" : 41723,
		"total" : 82930,
		"porcentaje_hombres" : 49.69,
		"porcentaje_mujeres" : 50.31,
		"predominio" : "Mujeres"
	}
]; // Aquí colocas tu JSON