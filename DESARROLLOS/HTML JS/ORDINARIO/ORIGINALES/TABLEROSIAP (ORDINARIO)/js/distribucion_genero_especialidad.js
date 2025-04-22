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
		"hombres" : 70,
		"mujeres" : 89,
		"total" : 159,
		"porcentaje_hombres" : 44.03,
		"porcentaje_mujeres" : 55.97,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ALERGIA E INMUNOLOGIA CLINICA PEDIATRICA",
		"hombres" : 3,
		"mujeres" : 4,
		"total" : 7,
		"porcentaje_hombres" : 42.86,
		"porcentaje_mujeres" : 57.14,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ALMACEN",
		"hombres" : 4301,
		"mujeres" : 179,
		"total" : 4480,
		"porcentaje_hombres" : 96.00,
		"porcentaje_mujeres" : 4.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ANATOMIA PATOLOGICA Y LAB.DE CIT.EXFOL",
		"hombres" : 856,
		"mujeres" : 834,
		"total" : 1690,
		"porcentaje_hombres" : 50.65,
		"porcentaje_mujeres" : 49.35,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ANESTESIOLOGIA",
		"hombres" : 3405,
		"mujeres" : 5352,
		"total" : 8757,
		"porcentaje_hombres" : 38.88,
		"porcentaje_mujeres" : 61.12,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ANESTESIOLOGIA PEDIATRICA",
		"hombres" : 29,
		"mujeres" : 58,
		"total" : 87,
		"porcentaje_hombres" : 33.33,
		"porcentaje_mujeres" : 66.67,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ANGIOLOGIA",
		"hombres" : 208,
		"mujeres" : 91,
		"total" : 299,
		"porcentaje_hombres" : 69.57,
		"porcentaje_mujeres" : 30.43,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ASISTENTES MEDICAS",
		"hombres" : 90,
		"mujeres" : 28660,
		"total" : 28750,
		"porcentaje_hombres" : 0.31,
		"porcentaje_mujeres" : 99.69,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ATENCION Y ORIENTACION AL D.H.",
		"hombres" : 33,
		"mujeres" : 809,
		"total" : 842,
		"porcentaje_hombres" : 3.92,
		"porcentaje_mujeres" : 96.08,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ATENCION Y ORIENTACION AL DERECHOHABIENTE",
		"hombres" : 190,
		"mujeres" : 1174,
		"total" : 1364,
		"porcentaje_hombres" : 13.93,
		"porcentaje_mujeres" : 86.07,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "AUDIOLOGIA",
		"hombres" : 53,
		"mujeres" : 148,
		"total" : 201,
		"porcentaje_hombres" : 26.37,
		"porcentaje_mujeres" : 73.63,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "BECARIOS",
		"hombres" : 11,
		"mujeres" : 12,
		"total" : 23,
		"porcentaje_hombres" : 47.83,
		"porcentaje_mujeres" : 52.17,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "BIOLOGIA DE LA REPRODUCCION HUMANA",
		"hombres" : 5,
		"mujeres" : 9,
		"total" : 14,
		"porcentaje_hombres" : 35.71,
		"porcentaje_mujeres" : 64.29,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "CALIDAD DE LA  ATENCION CLINICA",
		"hombres" : 40,
		"mujeres" : 43,
		"total" : 83,
		"porcentaje_hombres" : 48.19,
		"porcentaje_mujeres" : 51.81,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "CARDIOLOGIA",
		"hombres" : 835,
		"mujeres" : 279,
		"total" : 1114,
		"porcentaje_hombres" : 74.96,
		"porcentaje_mujeres" : 25.04,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CARDIOLOGIA PEDIATRICA",
		"hombres" : 62,
		"mujeres" : 64,
		"total" : 126,
		"porcentaje_hombres" : 49.21,
		"porcentaje_mujeres" : 50.79,
		"predominio" : "Mujeres"
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
		"especialidad" : "CENTRO DE MEZCLAS",
		"hombres" : 71,
		"mujeres" : 93,
		"total" : 164,
		"porcentaje_hombres" : 43.29,
		"porcentaje_mujeres" : 56.71,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "CIRUGIA CARDIOVASCULAR TORACICA",
		"hombres" : 150,
		"mujeres" : 54,
		"total" : 204,
		"porcentaje_hombres" : 73.53,
		"porcentaje_mujeres" : 26.47,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA GENERAL",
		"hombres" : 4802,
		"mujeres" : 5724,
		"total" : 10526,
		"porcentaje_hombres" : 45.62,
		"porcentaje_mujeres" : 54.38,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "CIRUGIA MAXILOFACIAL",
		"hombres" : 146,
		"mujeres" : 74,
		"total" : 220,
		"porcentaje_hombres" : 66.36,
		"porcentaje_mujeres" : 33.64,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA PEDIATRICA",
		"hombres" : 293,
		"mujeres" : 176,
		"total" : 469,
		"porcentaje_hombres" : 62.47,
		"porcentaje_mujeres" : 37.53,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA PLASTICA Y RECONSTRUCTIVA",
		"hombres" : 259,
		"mujeres" : 83,
		"total" : 342,
		"porcentaje_hombres" : 75.73,
		"porcentaje_mujeres" : 24.27,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "COMUNICACIONES ELECTRICAS",
		"hombres" : 70,
		"mujeres" : 738,
		"total" : 808,
		"porcentaje_hombres" : 8.66,
		"porcentaje_mujeres" : 91.34,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "CONSERVACION",
		"hombres" : 9982,
		"mujeres" : 145,
		"total" : 10127,
		"porcentaje_hombres" : 98.57,
		"porcentaje_mujeres" : 1.43,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CONSTRUCTORES",
		"hombres" : 155,
		"mujeres" : 40,
		"total" : 195,
		"porcentaje_hombres" : 79.49,
		"porcentaje_mujeres" : 20.51,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CTRAL AUTO DE DISTRB INSUM TERAP (CADIT)",
		"hombres" : 89,
		"mujeres" : 43,
		"total" : 132,
		"porcentaje_hombres" : 67.42,
		"porcentaje_mujeres" : 32.58,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CTRL AUTO DISTRIB INSUM TERAP (CADIT)",
		"hombres" : 2,
		"mujeres" : 6,
		"total" : 8,
		"porcentaje_hombres" : 25.00,
		"porcentaje_mujeres" : 75.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "DERMATOLOGIA",
		"hombres" : 57,
		"mujeres" : 145,
		"total" : 202,
		"porcentaje_hombres" : 28.22,
		"porcentaje_mujeres" : 71.78,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "DIRECCION ADMINISTRATIVA",
		"hombres" : 2693,
		"mujeres" : 2889,
		"total" : 5582,
		"porcentaje_hombres" : 48.24,
		"porcentaje_mujeres" : 51.76,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "EDUCACION MEDICA (FORM.DE PROF.)",
		"hombres" : 290,
		"mujeres" : 434,
		"total" : 724,
		"porcentaje_hombres" : 40.06,
		"porcentaje_mujeres" : 59.94,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ELECTROENCEFALOGRAFIA",
		"hombres" : 1,
		"mujeres" : 1,
		"total" : 2,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "ELEVADORISTA",
		"hombres" : 8,
		"mujeres" : 12,
		"total" : 20,
		"porcentaje_hombres" : 40.00,
		"porcentaje_mujeres" : 60.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ENDOCRINOLOGIA",
		"hombres" : 95,
		"mujeres" : 137,
		"total" : 232,
		"porcentaje_hombres" : 40.95,
		"porcentaje_mujeres" : 59.05,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ENDOCRINOLOGIA PEDIATRICA",
		"hombres" : 14,
		"mujeres" : 50,
		"total" : 64,
		"porcentaje_hombres" : 21.88,
		"porcentaje_mujeres" : 78.13,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ENDOSCOPIA",
		"hombres" : 147,
		"mujeres" : 89,
		"total" : 236,
		"porcentaje_hombres" : 62.29,
		"porcentaje_mujeres" : 37.71,
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
		"hombres" : 34285,
		"mujeres" : 74975,
		"total" : 109260,
		"porcentaje_hombres" : 31.38,
		"porcentaje_mujeres" : 68.62,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ESTOMATOLOGIA",
		"hombres" : 889,
		"mujeres" : 1399,
		"total" : 2288,
		"porcentaje_hombres" : 38.85,
		"porcentaje_mujeres" : 61.15,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "FARMACIA",
		"hombres" : 4013,
		"mujeres" : 2153,
		"total" : 6166,
		"porcentaje_hombres" : 65.08,
		"porcentaje_mujeres" : 34.92,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "FISIOLOGIA CARDIOPULMONAR",
		"hombres" : 24,
		"mujeres" : 26,
		"total" : 50,
		"porcentaje_hombres" : 48.00,
		"porcentaje_mujeres" : 52.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "FOMENTO A LA SALUD",
		"hombres" : 235,
		"mujeres" : 366,
		"total" : 601,
		"porcentaje_hombres" : 39.10,
		"porcentaje_mujeres" : 60.90,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "GASTROENTEROLOGIA",
		"hombres" : 146,
		"mujeres" : 113,
		"total" : 259,
		"porcentaje_hombres" : 56.37,
		"porcentaje_mujeres" : 43.63,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "GASTROENTEROLOGIA PEDIATRICA",
		"hombres" : 14,
		"mujeres" : 41,
		"total" : 55,
		"porcentaje_hombres" : 25.45,
		"porcentaje_mujeres" : 74.55,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "GENETICA",
		"hombres" : 26,
		"mujeres" : 36,
		"total" : 62,
		"porcentaje_hombres" : 41.94,
		"porcentaje_mujeres" : 58.06,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "GERIATRIA",
		"hombres" : 497,
		"mujeres" : 802,
		"total" : 1299,
		"porcentaje_hombres" : 38.26,
		"porcentaje_mujeres" : 61.74,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "GINECOLOGIA ONCOLOGICA",
		"hombres" : 58,
		"mujeres" : 46,
		"total" : 104,
		"porcentaje_hombres" : 55.77,
		"porcentaje_mujeres" : 44.23,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "GINECOLOGIA Y OBSTETRICIA",
		"hombres" : 2391,
		"mujeres" : 3828,
		"total" : 6219,
		"porcentaje_hombres" : 38.45,
		"porcentaje_mujeres" : 61.55,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "HEMATOLOGIA",
		"hombres" : 160,
		"mujeres" : 220,
		"total" : 380,
		"porcentaje_hombres" : 42.11,
		"porcentaje_mujeres" : 57.89,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "HEMATOLOGIA PEDIATRICA",
		"hombres" : 23,
		"mujeres" : 61,
		"total" : 84,
		"porcentaje_hombres" : 27.38,
		"porcentaje_mujeres" : 72.62,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "HEMODINAMIA",
		"hombres" : 199,
		"mujeres" : 102,
		"total" : 301,
		"porcentaje_hombres" : 66.11,
		"porcentaje_mujeres" : 33.89,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "INFECTOLOGIA",
		"hombres" : 130,
		"mujeres" : 79,
		"total" : 209,
		"porcentaje_hombres" : 62.20,
		"porcentaje_mujeres" : 37.80,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "INFECTOLOGIA PEDIATRICA",
		"hombres" : 12,
		"mujeres" : 24,
		"total" : 36,
		"porcentaje_hombres" : 33.33,
		"porcentaje_mujeres" : 66.67,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "INHALOTERAPIA",
		"hombres" : 518,
		"mujeres" : 389,
		"total" : 907,
		"porcentaje_hombres" : 57.11,
		"porcentaje_mujeres" : 42.89,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "LABORATORIO DE ANALISIS CLINICOS",
		"hombres" : 4409,
		"mujeres" : 6963,
		"total" : 11372,
		"porcentaje_hombres" : 38.77,
		"porcentaje_mujeres" : 61.23,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "LAVANDERIA",
		"hombres" : 2639,
		"mujeres" : 470,
		"total" : 3109,
		"porcentaje_hombres" : 84.88,
		"porcentaje_mujeres" : 15.12,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDIC DEL ENFMO PEDIATR EN EDO CRITICO",
		"hombres" : 85,
		"mujeres" : 149,
		"total" : 234,
		"porcentaje_hombres" : 36.32,
		"porcentaje_mujeres" : 63.68,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA FAMILIAR",
		"hombres" : 0,
		"mujeres" : 2,
		"total" : 2,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA FAMILIAR (CONS.MEDICO)",
		"hombres" : 11188,
		"mujeres" : 19193,
		"total" : 30381,
		"porcentaje_hombres" : 36.83,
		"porcentaje_mujeres" : 63.17,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA FISICA Y REHABILITACION",
		"hombres" : 938,
		"mujeres" : 1478,
		"total" : 2416,
		"porcentaje_hombres" : 38.82,
		"porcentaje_mujeres" : 61.18,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA INTERNA",
		"hombres" : 3501,
		"mujeres" : 2415,
		"total" : 5916,
		"porcentaje_hombres" : 59.18,
		"porcentaje_mujeres" : 40.82,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICINA MATERNO FETAL",
		"hombres" : 34,
		"mujeres" : 48,
		"total" : 82,
		"porcentaje_hombres" : 41.46,
		"porcentaje_mujeres" : 58.54,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA NUCLEAR",
		"hombres" : 151,
		"mujeres" : 142,
		"total" : 293,
		"porcentaje_hombres" : 51.54,
		"porcentaje_mujeres" : 48.46,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICINA PALIATIVA",
		"hombres" : 19,
		"mujeres" : 38,
		"total" : 57,
		"porcentaje_hombres" : 33.33,
		"porcentaje_mujeres" : 66.67,
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
		"especialidad" : "MEDICO QUIRURGICO RURAL",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "N.CENT.REG.DELEG.SUBDELEG.DIR.ADMTV.U.OP",
		"hombres" : 14654,
		"mujeres" : 15176,
		"total" : 29830,
		"porcentaje_hombres" : 49.13,
		"porcentaje_mujeres" : 50.87,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "NEFROLOGIA",
		"hombres" : 600,
		"mujeres" : 542,
		"total" : 1142,
		"porcentaje_hombres" : 52.54,
		"porcentaje_mujeres" : 47.46,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEFROLOGIA PEDIATRICA",
		"hombres" : 18,
		"mujeres" : 46,
		"total" : 64,
		"porcentaje_hombres" : 28.13,
		"porcentaje_mujeres" : 71.88,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "NEONATOLOGIA",
		"hombres" : 277,
		"mujeres" : 656,
		"total" : 933,
		"porcentaje_hombres" : 29.69,
		"porcentaje_mujeres" : 70.31,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "NEUMOLOGIA",
		"hombres" : 288,
		"mujeres" : 284,
		"total" : 572,
		"porcentaje_hombres" : 50.35,
		"porcentaje_mujeres" : 49.65,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUMOLOGIA PEDIATRICA",
		"hombres" : 23,
		"mujeres" : 34,
		"total" : 57,
		"porcentaje_hombres" : 40.35,
		"porcentaje_mujeres" : 59.65,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "NEUROCIRUGIA",
		"hombres" : 457,
		"mujeres" : 68,
		"total" : 525,
		"porcentaje_hombres" : 87.05,
		"porcentaje_mujeres" : 12.95,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUROCIRUGIA PEDIATRICA",
		"hombres" : 4,
		"mujeres" : 0,
		"total" : 4,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUROFISIOLOGIA CLINICA",
		"hombres" : 2,
		"mujeres" : 3,
		"total" : 5,
		"porcentaje_hombres" : 40.00,
		"porcentaje_mujeres" : 60.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "NEUROLOGIA",
		"hombres" : 223,
		"mujeres" : 106,
		"total" : 329,
		"porcentaje_hombres" : 67.78,
		"porcentaje_mujeres" : 32.22,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUROLOGIA PEDIATRICA",
		"hombres" : 32,
		"mujeres" : 59,
		"total" : 91,
		"porcentaje_hombres" : 35.16,
		"porcentaje_mujeres" : 64.84,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "NUTRICION Y DIETETICA",
		"hombres" : 7395,
		"mujeres" : 6023,
		"total" : 13418,
		"porcentaje_hombres" : 55.11,
		"porcentaje_mujeres" : 44.89,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "OFTALMOLOGIA",
		"hombres" : 583,
		"mujeres" : 585,
		"total" : 1168,
		"porcentaje_hombres" : 49.91,
		"porcentaje_mujeres" : 50.09,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ONCOLOGIA MEDICA",
		"hombres" : 257,
		"mujeres" : 388,
		"total" : 645,
		"porcentaje_hombres" : 39.84,
		"porcentaje_mujeres" : 60.16,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ONCOLOGIA PEDIATRICA",
		"hombres" : 36,
		"mujeres" : 74,
		"total" : 110,
		"porcentaje_hombres" : 32.73,
		"porcentaje_mujeres" : 67.27,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ONCOLOGIA QUIRURGICA",
		"hombres" : 343,
		"mujeres" : 78,
		"total" : 421,
		"porcentaje_hombres" : 81.47,
		"porcentaje_mujeres" : 18.53,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "OTORRINOLARINGOLOGIA",
		"hombres" : 353,
		"mujeres" : 463,
		"total" : 816,
		"porcentaje_hombres" : 43.26,
		"porcentaje_mujeres" : 56.74,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "OTORRINOLARINGOLOGIA PEDIATRICA",
		"hombres" : 0,
		"mujeres" : 4,
		"total" : 4,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PAIDO PSIQUIATRIA",
		"hombres" : 16,
		"mujeres" : 11,
		"total" : 27,
		"porcentaje_hombres" : 59.26,
		"porcentaje_mujeres" : 40.74,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "PATOLOGIA CLINICA",
		"hombres" : 19,
		"mujeres" : 18,
		"total" : 37,
		"porcentaje_hombres" : 51.35,
		"porcentaje_mujeres" : 48.65,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "PATOLOGIA PEDIATRICA",
		"hombres" : 5,
		"mujeres" : 2,
		"total" : 7,
		"porcentaje_hombres" : 71.43,
		"porcentaje_mujeres" : 28.57,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "PEDIATRA EN SERVICIOS DE URGENCIAS",
		"hombres" : 134,
		"mujeres" : 253,
		"total" : 387,
		"porcentaje_hombres" : 34.63,
		"porcentaje_mujeres" : 65.37,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PEDIATRIA MEDICA",
		"hombres" : 1984,
		"mujeres" : 6267,
		"total" : 8251,
		"porcentaje_hombres" : 24.05,
		"porcentaje_mujeres" : 75.95,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PLANIFICACION FAMILIAR",
		"hombres" : 37,
		"mujeres" : 136,
		"total" : 173,
		"porcentaje_hombres" : 21.39,
		"porcentaje_mujeres" : 78.61,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PROCTOLOGIA",
		"hombres" : 101,
		"mujeres" : 37,
		"total" : 138,
		"porcentaje_hombres" : 73.19,
		"porcentaje_mujeres" : 26.81,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "PROTECCION CIVIL",
		"hombres" : 120,
		"mujeres" : 65,
		"total" : 185,
		"porcentaje_hombres" : 64.86,
		"porcentaje_mujeres" : 35.14,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "PSICOTERAPIA E HIGIENE MENTAL",
		"hombres" : 134,
		"mujeres" : 368,
		"total" : 502,
		"porcentaje_hombres" : 26.69,
		"porcentaje_mujeres" : 73.31,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PSIQUIATRIA",
		"hombres" : 4,
		"mujeres" : 0,
		"total" : 4,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "PSIQUIATRIA (TERAPIA PSICOLOGICA)",
		"hombres" : 320,
		"mujeres" : 358,
		"total" : 678,
		"porcentaje_hombres" : 47.20,
		"porcentaje_mujeres" : 52.80,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PUERICULTURA",
		"hombres" : 40,
		"mujeres" : 6202,
		"total" : 6242,
		"porcentaje_hombres" : 0.64,
		"porcentaje_mujeres" : 99.36,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "RADIODIAGNOSTICO",
		"hombres" : 5174,
		"mujeres" : 3103,
		"total" : 8277,
		"porcentaje_hombres" : 62.51,
		"porcentaje_mujeres" : 37.49,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "RADIOTERAPIA",
		"hombres" : 319,
		"mujeres" : 200,
		"total" : 519,
		"porcentaje_hombres" : 61.46,
		"porcentaje_mujeres" : 38.54,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "REUMATOLOGIA",
		"hombres" : 99,
		"mujeres" : 133,
		"total" : 232,
		"porcentaje_hombres" : 42.67,
		"porcentaje_mujeres" : 57.33,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "REUMATOLOGIA PEDIATRICA",
		"hombres" : 7,
		"mujeres" : 8,
		"total" : 15,
		"porcentaje_hombres" : 46.67,
		"porcentaje_mujeres" : 53.33,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ROPERIA",
		"hombres" : 192,
		"mujeres" : 16,
		"total" : 208,
		"porcentaje_hombres" : 92.31,
		"porcentaje_mujeres" : 7.69,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "SALUD COMUNITARIA",
		"hombres" : 1595,
		"mujeres" : 4458,
		"total" : 6053,
		"porcentaje_hombres" : 26.35,
		"porcentaje_mujeres" : 73.65,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "SALUD EN EL TRABAJO",
		"hombres" : 958,
		"mujeres" : 1160,
		"total" : 2118,
		"porcentaje_hombres" : 45.23,
		"porcentaje_mujeres" : 54.77,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "SALUD REPRODUCTIVA Y MAT INF",
		"hombres" : 18,
		"mujeres" : 188,
		"total" : 206,
		"porcentaje_hombres" : 8.74,
		"porcentaje_mujeres" : 91.26,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "SECTOR ADMINISTRATIVO Y DE PERSONAL",
		"hombres" : 11529,
		"mujeres" : 13895,
		"total" : 25424,
		"porcentaje_hombres" : 45.35,
		"porcentaje_mujeres" : 54.65,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "SECTOR ESTADISTICA",
		"hombres" : 3880,
		"mujeres" : 3845,
		"total" : 7725,
		"porcentaje_hombres" : 50.23,
		"porcentaje_mujeres" : 49.77,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "SECTOR PROCESAMIENTO DE DATOS",
		"hombres" : 1336,
		"mujeres" : 592,
		"total" : 1928,
		"porcentaje_hombres" : 69.29,
		"porcentaje_mujeres" : 30.71,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "SECTOR TECNICO",
		"hombres" : 3730,
		"mujeres" : 5256,
		"total" : 8986,
		"porcentaje_hombres" : 41.51,
		"porcentaje_mujeres" : 58.49,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "SERVICIOS BASICOS",
		"hombres" : 13930,
		"mujeres" : 12388,
		"total" : 26318,
		"porcentaje_hombres" : 52.93,
		"porcentaje_mujeres" : 47.07,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "SERVICIOS DE SANGRE",
		"hombres" : 489,
		"mujeres" : 751,
		"total" : 1240,
		"porcentaje_hombres" : 39.44,
		"porcentaje_mujeres" : 60.56,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "TECNICO MANEJO DE AP. ELECTROD. Y ELEC.",
		"hombres" : 236,
		"mujeres" : 125,
		"total" : 361,
		"porcentaje_hombres" : 65.37,
		"porcentaje_mujeres" : 34.63,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TERAPIA INTENSIVA",
		"hombres" : 2198,
		"mujeres" : 3771,
		"total" : 5969,
		"porcentaje_hombres" : 36.82,
		"porcentaje_mujeres" : 63.18,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "TOMOGRAFIA AXIAL COMPUTARIZADA",
		"hombres" : 8,
		"mujeres" : 7,
		"total" : 15,
		"porcentaje_hombres" : 53.33,
		"porcentaje_mujeres" : 46.67,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRABAJO SOCIAL MEDICO",
		"hombres" : 526,
		"mujeres" : 6139,
		"total" : 6665,
		"porcentaje_hombres" : 7.89,
		"porcentaje_mujeres" : 92.11,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "TRANSPORTES",
		"hombres" : 4011,
		"mujeres" : 17,
		"total" : 4028,
		"porcentaje_hombres" : 99.58,
		"porcentaje_mujeres" : 0.42,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRASLADO DE ENFERMOS",
		"hombres" : 1073,
		"mujeres" : 12,
		"total" : 1085,
		"porcentaje_hombres" : 98.89,
		"porcentaje_mujeres" : 1.11,
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
		"hombres" : 3487,
		"mujeres" : 675,
		"total" : 4162,
		"porcentaje_hombres" : 83.78,
		"porcentaje_mujeres" : 16.22,
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
		"hombres" : 7193,
		"mujeres" : 7010,
		"total" : 14203,
		"porcentaje_hombres" : 50.64,
		"porcentaje_mujeres" : 49.36,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "UROLOGIA",
		"hombres" : 819,
		"mujeres" : 90,
		"total" : 909,
		"porcentaje_hombres" : 90.10,
		"porcentaje_mujeres" : 9.90,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "UROLOGIA GINECOLOGICA",
		"hombres" : 4,
		"mujeres" : 16,
		"total" : 20,
		"porcentaje_hombres" : 20.00,
		"porcentaje_mujeres" : 80.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "Total General",
		"hombres" : 188128,
		"mujeres" : 267202,
		"total" : 455330,
		"porcentaje_hombres" : 41.32,
		"porcentaje_mujeres" : 58.68,
		"predominio" : "Mujeres"
	}
]; // Aquí colocas tu JSON