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
    AND NUMDEL = '27'
	AND DELEGACION = 'Sonora'
    GROUP BY NOMBREAR WITH ROLLUP
) AS resultados
ORDER BY 
    especialidad = 'Total General', -- Mover la fila Total General al final
    especialidad;
*/

const dataDisctribucion = [
	{
		"especialidad" : "ALERGIA E INMUNOLOGIA (LABORATORIO)",
		"hombres" : 4,
		"mujeres" : 2,
		"total" : 6,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ANATOMIA PATOLOGICA Y LAB.DE CIT.EXFOL",
		"hombres" : 12,
		"mujeres" : 11,
		"total" : 23,
		"porcentaje_hombres" : 52.17,
		"porcentaje_mujeres" : 47.83,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ANESTESIOLOGIA",
		"hombres" : 122,
		"mujeres" : 138,
		"total" : 260,
		"porcentaje_hombres" : 46.92,
		"porcentaje_mujeres" : 53.08,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ANGIOLOGIA",
		"hombres" : 7,
		"mujeres" : 1,
		"total" : 8,
		"porcentaje_hombres" : 87.50,
		"porcentaje_mujeres" : 12.50,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CALIDAD DE LA  ATENCION CLINICA",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CARDIOLOGIA",
		"hombres" : 26,
		"mujeres" : 12,
		"total" : 38,
		"porcentaje_hombres" : 68.42,
		"porcentaje_mujeres" : 31.58,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CARDIOLOGIA PEDIATRICA",
		"hombres" : 3,
		"mujeres" : 1,
		"total" : 4,
		"porcentaje_hombres" : 75.00,
		"porcentaje_mujeres" : 25.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CENTRO DE COLECTA",
		"hombres" : 6,
		"mujeres" : 3,
		"total" : 9,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA CARDIOVASCULAR TORACICA",
		"hombres" : 9,
		"mujeres" : 1,
		"total" : 10,
		"porcentaje_hombres" : 90.00,
		"porcentaje_mujeres" : 10.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA GENERAL",
		"hombres" : 102,
		"mujeres" : 27,
		"total" : 129,
		"porcentaje_hombres" : 79.07,
		"porcentaje_mujeres" : 20.93,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA PEDIATRICA",
		"hombres" : 9,
		"mujeres" : 3,
		"total" : 12,
		"porcentaje_hombres" : 75.00,
		"porcentaje_mujeres" : 25.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA PLASTICA Y RECONSTRUCTIVA",
		"hombres" : 4,
		"mujeres" : 0,
		"total" : 4,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "DERMATOLOGIA",
		"hombres" : 0,
		"mujeres" : 3,
		"total" : 3,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "EDUCACION MEDICA (FORM.DE PROF.)",
		"hombres" : 5,
		"mujeres" : 7,
		"total" : 12,
		"porcentaje_hombres" : 41.67,
		"porcentaje_mujeres" : 58.33,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ENDOCRINOLOGIA",
		"hombres" : 4,
		"mujeres" : 3,
		"total" : 7,
		"porcentaje_hombres" : 57.14,
		"porcentaje_mujeres" : 42.86,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ENDOCRINOLOGIA PEDIATRICA",
		"hombres" : 1,
		"mujeres" : 2,
		"total" : 3,
		"porcentaje_hombres" : 33.33,
		"porcentaje_mujeres" : 66.67,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ENDOSCOPIA",
		"hombres" : 2,
		"mujeres" : 4,
		"total" : 6,
		"porcentaje_hombres" : 33.33,
		"porcentaje_mujeres" : 66.67,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "FISIOLOGIA CARDIOPULMONAR",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "FOMENTO A LA SALUD",
		"hombres" : 9,
		"mujeres" : 9,
		"total" : 18,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "GASTROENTEROLOGIA",
		"hombres" : 4,
		"mujeres" : 3,
		"total" : 7,
		"porcentaje_hombres" : 57.14,
		"porcentaje_mujeres" : 42.86,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "GASTROENTEROLOGIA PEDIATRICA",
		"hombres" : 1,
		"mujeres" : 1,
		"total" : 2,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "GERIATRIA",
		"hombres" : 13,
		"mujeres" : 14,
		"total" : 27,
		"porcentaje_hombres" : 48.15,
		"porcentaje_mujeres" : 51.85,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "GINECOLOGIA ONCOLOGICA",
		"hombres" : 1,
		"mujeres" : 3,
		"total" : 4,
		"porcentaje_hombres" : 25.00,
		"porcentaje_mujeres" : 75.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "GINECOLOGIA Y OBSTETRICIA",
		"hombres" : 81,
		"mujeres" : 74,
		"total" : 155,
		"porcentaje_hombres" : 52.26,
		"porcentaje_mujeres" : 47.74,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "HEMATOLOGIA",
		"hombres" : 2,
		"mujeres" : 3,
		"total" : 5,
		"porcentaje_hombres" : 40.00,
		"porcentaje_mujeres" : 60.00,
		"predominio" : "Mujeres"
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
		"hombres" : 13,
		"mujeres" : 1,
		"total" : 14,
		"porcentaje_hombres" : 92.86,
		"porcentaje_mujeres" : 7.14,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "INFECTOLOGIA",
		"hombres" : 3,
		"mujeres" : 0,
		"total" : 3,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "INFECTOLOGIA PEDIATRICA",
		"hombres" : 0,
		"mujeres" : 1,
		"total" : 1,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "LABORATORIO DE ANALISIS CLINICOS",
		"hombres" : 1,
		"mujeres" : 3,
		"total" : 4,
		"porcentaje_hombres" : 25.00,
		"porcentaje_mujeres" : 75.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDIC DEL ENFMO PEDIATR EN EDO CRITICO",
		"hombres" : 1,
		"mujeres" : 2,
		"total" : 3,
		"porcentaje_hombres" : 33.33,
		"porcentaje_mujeres" : 66.67,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA FAMILIAR (CONS.MEDICO)",
		"hombres" : 380,
		"mujeres" : 427,
		"total" : 807,
		"porcentaje_hombres" : 47.09,
		"porcentaje_mujeres" : 52.91,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA FISICA Y REHABILITACION",
		"hombres" : 5,
		"mujeres" : 7,
		"total" : 12,
		"porcentaje_hombres" : 41.67,
		"porcentaje_mujeres" : 58.33,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA INTERNA",
		"hombres" : 73,
		"mujeres" : 35,
		"total" : 108,
		"porcentaje_hombres" : 67.59,
		"porcentaje_mujeres" : 32.41,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICINA MATERNO FETAL",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICINA NUCLEAR",
		"hombres" : 4,
		"mujeres" : 0,
		"total" : 4,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICINA PALIATIVA",
		"hombres" : 1,
		"mujeres" : 1,
		"total" : 2,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
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
		"hombres" : 4,
		"mujeres" : 0,
		"total" : 4,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICO GENERAL EN SALUD EN EL TRABAJO",
		"hombres" : 10,
		"mujeres" : 5,
		"total" : 15,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "N.CENT.REG.DELEG.SUBDELEG.DIR.ADMTV.U.OP",
		"hombres" : 65,
		"mujeres" : 58,
		"total" : 123,
		"porcentaje_hombres" : 52.85,
		"porcentaje_mujeres" : 47.15,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEFROLOGIA",
		"hombres" : 13,
		"mujeres" : 7,
		"total" : 20,
		"porcentaje_hombres" : 65.00,
		"porcentaje_mujeres" : 35.00,
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
		"hombres" : 1,
		"mujeres" : 4,
		"total" : 5,
		"porcentaje_hombres" : 20.00,
		"porcentaje_mujeres" : 80.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "NEUMOLOGIA",
		"hombres" : 7,
		"mujeres" : 4,
		"total" : 11,
		"porcentaje_hombres" : 63.64,
		"porcentaje_mujeres" : 36.36,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUROCIRUGIA",
		"hombres" : 12,
		"mujeres" : 0,
		"total" : 12,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUROLOGIA",
		"hombres" : 6,
		"mujeres" : 1,
		"total" : 7,
		"porcentaje_hombres" : 85.71,
		"porcentaje_mujeres" : 14.29,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUROLOGIA PEDIATRICA",
		"hombres" : 2,
		"mujeres" : 3,
		"total" : 5,
		"porcentaje_hombres" : 40.00,
		"porcentaje_mujeres" : 60.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "OFTALMOLOGIA",
		"hombres" : 14,
		"mujeres" : 12,
		"total" : 26,
		"porcentaje_hombres" : 53.85,
		"porcentaje_mujeres" : 46.15,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ONCOLOGIA MEDICA",
		"hombres" : 10,
		"mujeres" : 4,
		"total" : 14,
		"porcentaje_hombres" : 71.43,
		"porcentaje_mujeres" : 28.57,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ONCOLOGIA PEDIATRICA",
		"hombres" : 1,
		"mujeres" : 2,
		"total" : 3,
		"porcentaje_hombres" : 33.33,
		"porcentaje_mujeres" : 66.67,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ONCOLOGIA QUIRURGICA",
		"hombres" : 12,
		"mujeres" : 3,
		"total" : 15,
		"porcentaje_hombres" : 80.00,
		"porcentaje_mujeres" : 20.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "OTORRINOLARINGOLOGIA",
		"hombres" : 13,
		"mujeres" : 13,
		"total" : 26,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "PEDIATRA EN SERVICIOS DE URGENCIAS",
		"hombres" : 6,
		"mujeres" : 7,
		"total" : 13,
		"porcentaje_hombres" : 46.15,
		"porcentaje_mujeres" : 53.85,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PEDIATRIA MEDICA",
		"hombres" : 59,
		"mujeres" : 85,
		"total" : 144,
		"porcentaje_hombres" : 40.97,
		"porcentaje_mujeres" : 59.03,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PLANIFICACION FAMILIAR",
		"hombres" : 0,
		"mujeres" : 1,
		"total" : 1,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PROCTOLOGIA",
		"hombres" : 2,
		"mujeres" : 1,
		"total" : 3,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "PSIQUIATRIA (TERAPIA PSICOLOGICA)",
		"hombres" : 8,
		"mujeres" : 3,
		"total" : 11,
		"porcentaje_hombres" : 72.73,
		"porcentaje_mujeres" : 27.27,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "RADIODIAGNOSTICO",
		"hombres" : 30,
		"mujeres" : 48,
		"total" : 78,
		"porcentaje_hombres" : 38.46,
		"porcentaje_mujeres" : 61.54,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "RADIOTERAPIA",
		"hombres" : 7,
		"mujeres" : 0,
		"total" : 7,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "REUMATOLOGIA",
		"hombres" : 3,
		"mujeres" : 8,
		"total" : 11,
		"porcentaje_hombres" : 27.27,
		"porcentaje_mujeres" : 72.73,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "REUMATOLOGIA PEDIATRICA",
		"hombres" : 0,
		"mujeres" : 1,
		"total" : 1,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "SALUD COMUNITARIA",
		"hombres" : 10,
		"mujeres" : 16,
		"total" : 26,
		"porcentaje_hombres" : 38.46,
		"porcentaje_mujeres" : 61.54,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "SALUD EN EL TRABAJO",
		"hombres" : 34,
		"mujeres" : 28,
		"total" : 62,
		"porcentaje_hombres" : 54.84,
		"porcentaje_mujeres" : 45.16,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "SALUD REPRODUCTIVA Y MAT INF",
		"hombres" : 1,
		"mujeres" : 2,
		"total" : 3,
		"porcentaje_hombres" : 33.33,
		"porcentaje_mujeres" : 66.67,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "SECTOR ADMINISTRATIVO Y DE PERSONAL",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "SERVICIOS DE SANGRE",
		"hombres" : 5,
		"mujeres" : 5,
		"total" : 10,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "TERAPIA INTENSIVA",
		"hombres" : 32,
		"mujeres" : 12,
		"total" : 44,
		"porcentaje_hombres" : 72.73,
		"porcentaje_mujeres" : 27.27,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRASPLANTE DE CORNEA",
		"hombres" : 2,
		"mujeres" : 0,
		"total" : 2,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRASPLANTE DE MEDULA OSEA",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRASPLANTE DE ORGANOS INTRABDOMINALES",
		"hombres" : 7,
		"mujeres" : 3,
		"total" : 10,
		"porcentaje_hombres" : 70.00,
		"porcentaje_mujeres" : 30.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRAUMATOLOGIA Y ORTOPEDIA",
		"hombres" : 87,
		"mujeres" : 4,
		"total" : 91,
		"porcentaje_hombres" : 95.60,
		"porcentaje_mujeres" : 4.40,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRIAGE",
		"hombres" : 23,
		"mujeres" : 19,
		"total" : 42,
		"porcentaje_hombres" : 54.76,
		"porcentaje_mujeres" : 45.24,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "URGENCIAS",
		"hombres" : 265,
		"mujeres" : 248,
		"total" : 513,
		"porcentaje_hombres" : 51.66,
		"porcentaje_mujeres" : 48.34,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "UROLOGIA",
		"hombres" : 19,
		"mujeres" : 2,
		"total" : 21,
		"porcentaje_hombres" : 90.48,
		"porcentaje_mujeres" : 9.52,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "Total General",
		"hombres" : 1685,
		"mujeres" : 1413,
		"total" : 3098,
		"porcentaje_hombres" : 54.39,
		"porcentaje_mujeres" : 45.61,
		"predominio" : "Hombres"
	}
]; // Aquí colocas tu JSON