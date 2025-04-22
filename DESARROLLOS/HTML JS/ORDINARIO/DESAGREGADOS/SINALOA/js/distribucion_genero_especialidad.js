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
    WHERE QNA = '2024017'
    AND SEXO IN ('H', 'M')  -- 🔥 Agregado para eliminar registros sin sexo
    AND NUMDEL = '26'
	AND DELEGACION = 'Sinaloa'
    GROUP BY NOMBREAR WITH ROLLUP
) AS resultados
ORDER BY 
    especialidad = 'Total General', -- Mover la fila Total General al final
    especialidad;
*/

const dataDisctribucion = [
	{
		"especialidad" : "ALERGIA E INMUNOLOGIA (LABORATORIO)",
		"hombres" : 2,
		"mujeres" : 1,
		"total" : 3,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ALMACEN",
		"hombres" : 98,
		"mujeres" : 7,
		"total" : 105,
		"porcentaje_hombres" : 93.33,
		"porcentaje_mujeres" : 6.67,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ANATOMIA PATOLOGICA Y LAB.DE CIT.EXFOL",
		"hombres" : 18,
		"mujeres" : 18,
		"total" : 36,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "ANESTESIOLOGIA",
		"hombres" : 84,
		"mujeres" : 146,
		"total" : 230,
		"porcentaje_hombres" : 36.52,
		"porcentaje_mujeres" : 63.48,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ANGIOLOGIA",
		"hombres" : 5,
		"mujeres" : 1,
		"total" : 6,
		"porcentaje_hombres" : 83.33,
		"porcentaje_mujeres" : 16.67,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ASISTENTES MEDICAS",
		"hombres" : 4,
		"mujeres" : 878,
		"total" : 882,
		"porcentaje_hombres" : 0.45,
		"porcentaje_mujeres" : 99.55,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ATENCION Y ORIENTACION AL D.H.",
		"hombres" : 2,
		"mujeres" : 15,
		"total" : 17,
		"porcentaje_hombres" : 11.76,
		"porcentaje_mujeres" : 88.24,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ATENCION Y ORIENTACION AL DERECHOHABIENTE",
		"hombres" : 6,
		"mujeres" : 35,
		"total" : 41,
		"porcentaje_hombres" : 14.63,
		"porcentaje_mujeres" : 85.37,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "AUDIOLOGIA",
		"hombres" : 1,
		"mujeres" : 1,
		"total" : 2,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "CARDIOLOGIA",
		"hombres" : 10,
		"mujeres" : 3,
		"total" : 13,
		"porcentaje_hombres" : 76.92,
		"porcentaje_mujeres" : 23.08,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CARDIOLOGIA PEDIATRICA",
		"hombres" : 0,
		"mujeres" : 1,
		"total" : 1,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "CENTRO DE COLECTA",
		"hombres" : 2,
		"mujeres" : 1,
		"total" : 3,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CENTRO DE MEZCLAS",
		"hombres" : 11,
		"mujeres" : 12,
		"total" : 23,
		"porcentaje_hombres" : 47.83,
		"porcentaje_mujeres" : 52.17,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "CIRUGIA CARDIOVASCULAR TORACICA",
		"hombres" : 2,
		"mujeres" : 0,
		"total" : 2,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA GENERAL",
		"hombres" : 164,
		"mujeres" : 161,
		"total" : 325,
		"porcentaje_hombres" : 50.46,
		"porcentaje_mujeres" : 49.54,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA MAXILOFACIAL",
		"hombres" : 4,
		"mujeres" : 0,
		"total" : 4,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA PEDIATRICA",
		"hombres" : 5,
		"mujeres" : 4,
		"total" : 9,
		"porcentaje_hombres" : 55.56,
		"porcentaje_mujeres" : 44.44,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA PLASTICA Y RECONSTRUCTIVA",
		"hombres" : 3,
		"mujeres" : 2,
		"total" : 5,
		"porcentaje_hombres" : 60.00,
		"porcentaje_mujeres" : 40.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "COMUNICACIONES ELECTRICAS",
		"hombres" : 2,
		"mujeres" : 7,
		"total" : 9,
		"porcentaje_hombres" : 22.22,
		"porcentaje_mujeres" : 77.78,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "CONSERVACION",
		"hombres" : 257,
		"mujeres" : 3,
		"total" : 260,
		"porcentaje_hombres" : 98.85,
		"porcentaje_mujeres" : 1.15,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CONSTRUCTORES",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "DERMATOLOGIA",
		"hombres" : 3,
		"mujeres" : 2,
		"total" : 5,
		"porcentaje_hombres" : 60.00,
		"porcentaje_mujeres" : 40.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "DIRECCION ADMINISTRATIVA",
		"hombres" : 24,
		"mujeres" : 23,
		"total" : 47,
		"porcentaje_hombres" : 51.06,
		"porcentaje_mujeres" : 48.94,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "EDUCACION MEDICA (FORM.DE PROF.)",
		"hombres" : 6,
		"mujeres" : 7,
		"total" : 13,
		"porcentaje_hombres" : 46.15,
		"porcentaje_mujeres" : 53.85,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ENDOCRINOLOGIA",
		"hombres" : 2,
		"mujeres" : 2,
		"total" : 4,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "ENDOCRINOLOGIA PEDIATRICA",
		"hombres" : 0,
		"mujeres" : 1,
		"total" : 1,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ENDOSCOPIA",
		"hombres" : 2,
		"mujeres" : 1,
		"total" : 3,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ENFERMERIA",
		"hombres" : 921,
		"mujeres" : 2007,
		"total" : 2928,
		"porcentaje_hombres" : 31.45,
		"porcentaje_mujeres" : 68.55,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ESTOMATOLOGIA",
		"hombres" : 41,
		"mujeres" : 45,
		"total" : 86,
		"porcentaje_hombres" : 47.67,
		"porcentaje_mujeres" : 52.33,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "FARMACIA",
		"hombres" : 101,
		"mujeres" : 56,
		"total" : 157,
		"porcentaje_hombres" : 64.33,
		"porcentaje_mujeres" : 35.67,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "FOMENTO A LA SALUD",
		"hombres" : 13,
		"mujeres" : 15,
		"total" : 28,
		"porcentaje_hombres" : 46.43,
		"porcentaje_mujeres" : 53.57,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "GASTROENTEROLOGIA",
		"hombres" : 5,
		"mujeres" : 1,
		"total" : 6,
		"porcentaje_hombres" : 83.33,
		"porcentaje_mujeres" : 16.67,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "GASTROENTEROLOGIA PEDIATRICA",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "GERIATRIA",
		"hombres" : 5,
		"mujeres" : 5,
		"total" : 10,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "GINECOLOGIA ONCOLOGICA",
		"hombres" : 1,
		"mujeres" : 2,
		"total" : 3,
		"porcentaje_hombres" : 33.33,
		"porcentaje_mujeres" : 66.67,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "GINECOLOGIA Y OBSTETRICIA",
		"hombres" : 96,
		"mujeres" : 112,
		"total" : 208,
		"porcentaje_hombres" : 46.15,
		"porcentaje_mujeres" : 53.85,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "HEMATOLOGIA",
		"hombres" : 5,
		"mujeres" : 2,
		"total" : 7,
		"porcentaje_hombres" : 71.43,
		"porcentaje_mujeres" : 28.57,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "HEMATOLOGIA PEDIATRICA",
		"hombres" : 1,
		"mujeres" : 1,
		"total" : 2,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "HEMODINAMIA",
		"hombres" : 3,
		"mujeres" : 0,
		"total" : 3,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "INFECTOLOGIA",
		"hombres" : 3,
		"mujeres" : 1,
		"total" : 4,
		"porcentaje_hombres" : 75.00,
		"porcentaje_mujeres" : 25.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "INHALOTERAPIA",
		"hombres" : 4,
		"mujeres" : 1,
		"total" : 5,
		"porcentaje_hombres" : 80.00,
		"porcentaje_mujeres" : 20.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "LABORATORIO DE ANALISIS CLINICOS",
		"hombres" : 127,
		"mujeres" : 165,
		"total" : 292,
		"porcentaje_hombres" : 43.49,
		"porcentaje_mujeres" : 56.51,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "LAVANDERIA",
		"hombres" : 112,
		"mujeres" : 6,
		"total" : 118,
		"porcentaje_hombres" : 94.92,
		"porcentaje_mujeres" : 5.08,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDIC DEL ENFMO PEDIATR EN EDO CRITICO",
		"hombres" : 3,
		"mujeres" : 2,
		"total" : 5,
		"porcentaje_hombres" : 60.00,
		"porcentaje_mujeres" : 40.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICINA FAMILIAR (CONS.MEDICO)",
		"hombres" : 425,
		"mujeres" : 700,
		"total" : 1125,
		"porcentaje_hombres" : 37.78,
		"porcentaje_mujeres" : 62.22,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA FISICA Y REHABILITACION",
		"hombres" : 30,
		"mujeres" : 13,
		"total" : 43,
		"porcentaje_hombres" : 69.77,
		"porcentaje_mujeres" : 30.23,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICINA INTERNA",
		"hombres" : 90,
		"mujeres" : 55,
		"total" : 145,
		"porcentaje_hombres" : 62.07,
		"porcentaje_mujeres" : 37.93,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICINA MATERNO FETAL",
		"hombres" : 0,
		"mujeres" : 1,
		"total" : 1,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICO GENERAL EN GUARDERIA",
		"hombres" : 1,
		"mujeres" : 1,
		"total" : 2,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "MEDICO GENERAL EN SALUD EN EL TRABAJO",
		"hombres" : 6,
		"mujeres" : 2,
		"total" : 8,
		"porcentaje_hombres" : 75.00,
		"porcentaje_mujeres" : 25.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "N.CENT.REG.DELEG.SUBDELEG.DIR.ADMTV.U.OP",
		"hombres" : 306,
		"mujeres" : 250,
		"total" : 556,
		"porcentaje_hombres" : 55.04,
		"porcentaje_mujeres" : 44.96,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEFROLOGIA",
		"hombres" : 9,
		"mujeres" : 5,
		"total" : 14,
		"porcentaje_hombres" : 64.29,
		"porcentaje_mujeres" : 35.71,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEFROLOGIA PEDIATRICA",
		"hombres" : 0,
		"mujeres" : 1,
		"total" : 1,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "NEONATOLOGIA",
		"hombres" : 10,
		"mujeres" : 22,
		"total" : 32,
		"porcentaje_hombres" : 31.25,
		"porcentaje_mujeres" : 68.75,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "NEUMOLOGIA",
		"hombres" : 3,
		"mujeres" : 3,
		"total" : 6,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "NEUMOLOGIA PEDIATRICA",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUROCIRUGIA",
		"hombres" : 6,
		"mujeres" : 0,
		"total" : 6,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUROLOGIA",
		"hombres" : 4,
		"mujeres" : 1,
		"total" : 5,
		"porcentaje_hombres" : 80.00,
		"porcentaje_mujeres" : 20.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUROLOGIA PEDIATRICA",
		"hombres" : 0,
		"mujeres" : 1,
		"total" : 1,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "NUTRICION Y DIETETICA",
		"hombres" : 161,
		"mujeres" : 146,
		"total" : 307,
		"porcentaje_hombres" : 52.44,
		"porcentaje_mujeres" : 47.56,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "OFTALMOLOGIA",
		"hombres" : 13,
		"mujeres" : 12,
		"total" : 25,
		"porcentaje_hombres" : 52.00,
		"porcentaje_mujeres" : 48.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ONCOLOGIA MEDICA",
		"hombres" : 3,
		"mujeres" : 3,
		"total" : 6,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "ONCOLOGIA PEDIATRICA",
		"hombres" : 1,
		"mujeres" : 1,
		"total" : 2,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "ONCOLOGIA QUIRURGICA",
		"hombres" : 3,
		"mujeres" : 0,
		"total" : 3,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "OTORRINOLARINGOLOGIA",
		"hombres" : 9,
		"mujeres" : 12,
		"total" : 21,
		"porcentaje_hombres" : 42.86,
		"porcentaje_mujeres" : 57.14,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PEDIATRA EN SERVICIOS DE URGENCIAS",
		"hombres" : 0,
		"mujeres" : 1,
		"total" : 1,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PEDIATRIA MEDICA",
		"hombres" : 64,
		"mujeres" : 194,
		"total" : 258,
		"porcentaje_hombres" : 24.81,
		"porcentaje_mujeres" : 75.19,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PLANIFICACION FAMILIAR",
		"hombres" : 5,
		"mujeres" : 21,
		"total" : 26,
		"porcentaje_hombres" : 19.23,
		"porcentaje_mujeres" : 80.77,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PROTECCION CIVIL",
		"hombres" : 2,
		"mujeres" : 1,
		"total" : 3,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "PSICOTERAPIA E HIGIENE MENTAL",
		"hombres" : 1,
		"mujeres" : 1,
		"total" : 2,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "PSIQUIATRIA (TERAPIA PSICOLOGICA)",
		"hombres" : 2,
		"mujeres" : 5,
		"total" : 7,
		"porcentaje_hombres" : 28.57,
		"porcentaje_mujeres" : 71.43,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PUERICULTURA",
		"hombres" : 0,
		"mujeres" : 92,
		"total" : 92,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "RADIODIAGNOSTICO",
		"hombres" : 146,
		"mujeres" : 45,
		"total" : 191,
		"porcentaje_hombres" : 76.44,
		"porcentaje_mujeres" : 23.56,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "REUMATOLOGIA",
		"hombres" : 4,
		"mujeres" : 2,
		"total" : 6,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "SALUD COMUNITARIA",
		"hombres" : 67,
		"mujeres" : 132,
		"total" : 199,
		"porcentaje_hombres" : 33.67,
		"porcentaje_mujeres" : 66.33,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "SALUD EN EL TRABAJO",
		"hombres" : 26,
		"mujeres" : 23,
		"total" : 49,
		"porcentaje_hombres" : 53.06,
		"porcentaje_mujeres" : 46.94,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "SALUD REPRODUCTIVA Y MAT INF",
		"hombres" : 0,
		"mujeres" : 31,
		"total" : 31,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "SECTOR ADMINISTRATIVO Y DE PERSONAL",
		"hombres" : 299,
		"mujeres" : 449,
		"total" : 748,
		"porcentaje_hombres" : 39.97,
		"porcentaje_mujeres" : 60.03,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "SECTOR ESTADISTICA",
		"hombres" : 134,
		"mujeres" : 131,
		"total" : 265,
		"porcentaje_hombres" : 50.57,
		"porcentaje_mujeres" : 49.43,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "SECTOR PROCESAMIENTO DE DATOS",
		"hombres" : 42,
		"mujeres" : 13,
		"total" : 55,
		"porcentaje_hombres" : 76.36,
		"porcentaje_mujeres" : 23.64,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "SECTOR TECNICO",
		"hombres" : 92,
		"mujeres" : 137,
		"total" : 229,
		"porcentaje_hombres" : 40.17,
		"porcentaje_mujeres" : 59.83,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "SERVICIOS BASICOS",
		"hombres" : 309,
		"mujeres" : 221,
		"total" : 530,
		"porcentaje_hombres" : 58.30,
		"porcentaje_mujeres" : 41.70,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "SERVICIOS DE SANGRE",
		"hombres" : 30,
		"mujeres" : 36,
		"total" : 66,
		"porcentaje_hombres" : 45.45,
		"porcentaje_mujeres" : 54.55,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "TECNICO MANEJO DE AP. ELECTROD. Y ELEC.",
		"hombres" : 4,
		"mujeres" : 3,
		"total" : 7,
		"porcentaje_hombres" : 57.14,
		"porcentaje_mujeres" : 42.86,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TERAPIA INTENSIVA",
		"hombres" : 44,
		"mujeres" : 58,
		"total" : 102,
		"porcentaje_hombres" : 43.14,
		"porcentaje_mujeres" : 56.86,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "TRABAJO SOCIAL MEDICO",
		"hombres" : 7,
		"mujeres" : 172,
		"total" : 179,
		"porcentaje_hombres" : 3.91,
		"porcentaje_mujeres" : 96.09,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "TRANSPORTES",
		"hombres" : 103,
		"mujeres" : 0,
		"total" : 103,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRASPLANTE DE ORGANOS INTRABDOMINALES",
		"hombres" : 3,
		"mujeres" : 0,
		"total" : 3,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRAUMATOLOGIA Y ORTOPEDIA",
		"hombres" : 85,
		"mujeres" : 10,
		"total" : 95,
		"porcentaje_hombres" : 89.47,
		"porcentaje_mujeres" : 10.53,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRIAGE",
		"hombres" : 14,
		"mujeres" : 14,
		"total" : 28,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "URGENCIAS",
		"hombres" : 204,
		"mujeres" : 167,
		"total" : 371,
		"porcentaje_hombres" : 54.99,
		"porcentaje_mujeres" : 45.01,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "UROLOGIA",
		"hombres" : 15,
		"mujeres" : 1,
		"total" : 16,
		"porcentaje_hombres" : 93.75,
		"porcentaje_mujeres" : 6.25,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "Total General",
		"hombres" : 4943,
		"mujeres" : 6942,
		"total" : 11885,
		"porcentaje_hombres" : 41.59,
		"porcentaje_mujeres" : 58.41,
		"predominio" : "Mujeres"
	}
]; // Aquí colocas tu JSON