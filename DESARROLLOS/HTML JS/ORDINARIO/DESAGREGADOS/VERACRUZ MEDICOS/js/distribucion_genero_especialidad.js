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
		"hombres" : 6,
		"mujeres" : 4,
		"total" : 10,
		"porcentaje_hombres" : 60.00,
		"porcentaje_mujeres" : 40.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ANATOMIA PATOLOGICA Y LAB.DE CIT.EXFOL",
		"hombres" : 10,
		"mujeres" : 12,
		"total" : 22,
		"porcentaje_hombres" : 45.45,
		"porcentaje_mujeres" : 54.55,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ANESTESIOLOGIA",
		"hombres" : 137,
		"mujeres" : 185,
		"total" : 322,
		"porcentaje_hombres" : 42.55,
		"porcentaje_mujeres" : 57.45,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ANGIOLOGIA",
		"hombres" : 7,
		"mujeres" : 2,
		"total" : 9,
		"porcentaje_hombres" : 77.78,
		"porcentaje_mujeres" : 22.22,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "AUDIOLOGIA",
		"hombres" : 1,
		"mujeres" : 3,
		"total" : 4,
		"porcentaje_hombres" : 25.00,
		"porcentaje_mujeres" : 75.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "CARDIOLOGIA",
		"hombres" : 19,
		"mujeres" : 8,
		"total" : 27,
		"porcentaje_hombres" : 70.37,
		"porcentaje_mujeres" : 29.63,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CARDIOLOGIA PEDIATRICA",
		"hombres" : 1,
		"mujeres" : 2,
		"total" : 3,
		"porcentaje_hombres" : 33.33,
		"porcentaje_mujeres" : 66.67,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "CIRUGIA CARDIOVASCULAR TORACICA",
		"hombres" : 7,
		"mujeres" : 2,
		"total" : 9,
		"porcentaje_hombres" : 77.78,
		"porcentaje_mujeres" : 22.22,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA GENERAL",
		"hombres" : 167,
		"mujeres" : 61,
		"total" : 228,
		"porcentaje_hombres" : 73.25,
		"porcentaje_mujeres" : 26.75,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA PEDIATRICA",
		"hombres" : 13,
		"mujeres" : 7,
		"total" : 20,
		"porcentaje_hombres" : 65.00,
		"porcentaje_mujeres" : 35.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA PLASTICA Y RECONSTRUCTIVA",
		"hombres" : 9,
		"mujeres" : 1,
		"total" : 10,
		"porcentaje_hombres" : 90.00,
		"porcentaje_mujeres" : 10.00,
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
		"especialidad" : "EDUCACION MEDICA (FORM.DE PROF.)",
		"hombres" : 7,
		"mujeres" : 14,
		"total" : 21,
		"porcentaje_hombres" : 33.33,
		"porcentaje_mujeres" : 66.67,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ENDOCRINOLOGIA",
		"hombres" : 2,
		"mujeres" : 5,
		"total" : 7,
		"porcentaje_hombres" : 28.57,
		"porcentaje_mujeres" : 71.43,
		"predominio" : "Mujeres"
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
		"mujeres" : 4,
		"total" : 6,
		"porcentaje_hombres" : 33.33,
		"porcentaje_mujeres" : 66.67,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "FOMENTO A LA SALUD",
		"hombres" : 11,
		"mujeres" : 9,
		"total" : 20,
		"porcentaje_hombres" : 55.00,
		"porcentaje_mujeres" : 45.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "GASTROENTEROLOGIA",
		"hombres" : 6,
		"mujeres" : 7,
		"total" : 13,
		"porcentaje_hombres" : 46.15,
		"porcentaje_mujeres" : 53.85,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "GASTROENTEROLOGIA PEDIATRICA",
		"hombres" : 0,
		"mujeres" : 2,
		"total" : 2,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "GENETICA",
		"hombres" : 0,
		"mujeres" : 1,
		"total" : 1,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "GERIATRIA",
		"hombres" : 10,
		"mujeres" : 4,
		"total" : 14,
		"porcentaje_hombres" : 71.43,
		"porcentaje_mujeres" : 28.57,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "GINECOLOGIA Y OBSTETRICIA",
		"hombres" : 112,
		"mujeres" : 99,
		"total" : 211,
		"porcentaje_hombres" : 53.08,
		"porcentaje_mujeres" : 46.92,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "HEMATOLOGIA",
		"hombres" : 4,
		"mujeres" : 10,
		"total" : 14,
		"porcentaje_hombres" : 28.57,
		"porcentaje_mujeres" : 71.43,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "HEMATOLOGIA PEDIATRICA",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "HEMODINAMIA",
		"hombres" : 8,
		"mujeres" : 1,
		"total" : 9,
		"porcentaje_hombres" : 88.89,
		"porcentaje_mujeres" : 11.11,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "INFECTOLOGIA",
		"hombres" : 3,
		"mujeres" : 2,
		"total" : 5,
		"porcentaje_hombres" : 60.00,
		"porcentaje_mujeres" : 40.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "LABORATORIO DE ANALISIS CLINICOS",
		"hombres" : 2,
		"mujeres" : 4,
		"total" : 6,
		"porcentaje_hombres" : 33.33,
		"porcentaje_mujeres" : 66.67,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDIC DEL ENFMO PEDIATR EN EDO CRITICO",
		"hombres" : 1,
		"mujeres" : 4,
		"total" : 5,
		"porcentaje_hombres" : 20.00,
		"porcentaje_mujeres" : 80.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA FAMILIAR (CONS.MEDICO)",
		"hombres" : 529,
		"mujeres" : 718,
		"total" : 1247,
		"porcentaje_hombres" : 42.42,
		"porcentaje_mujeres" : 57.58,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA FISICA Y REHABILITACION",
		"hombres" : 9,
		"mujeres" : 18,
		"total" : 27,
		"porcentaje_hombres" : 33.33,
		"porcentaje_mujeres" : 66.67,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA INTERNA",
		"hombres" : 113,
		"mujeres" : 43,
		"total" : 156,
		"porcentaje_hombres" : 72.44,
		"porcentaje_mujeres" : 27.56,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICINA MATERNO FETAL",
		"hombres" : 1,
		"mujeres" : 1,
		"total" : 2,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "MEDICINA PALIATIVA",
		"hombres" : 0,
		"mujeres" : 2,
		"total" : 2,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICO GENERAL EN GUARDERIA",
		"hombres" : 2,
		"mujeres" : 1,
		"total" : 3,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICO GENERAL EN SALUD EN EL TRABAJO",
		"hombres" : 6,
		"mujeres" : 3,
		"total" : 9,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "N.CENT.REG.DELEG.SUBDELEG.DIR.ADMTV.U.OP",
		"hombres" : 109,
		"mujeres" : 62,
		"total" : 171,
		"porcentaje_hombres" : 63.74,
		"porcentaje_mujeres" : 36.26,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEFROLOGIA",
		"hombres" : 16,
		"mujeres" : 13,
		"total" : 29,
		"porcentaje_hombres" : 55.17,
		"porcentaje_mujeres" : 44.83,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEONATOLOGIA",
		"hombres" : 4,
		"mujeres" : 7,
		"total" : 11,
		"porcentaje_hombres" : 36.36,
		"porcentaje_mujeres" : 63.64,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "NEUMOLOGIA",
		"hombres" : 4,
		"mujeres" : 3,
		"total" : 7,
		"porcentaje_hombres" : 57.14,
		"porcentaje_mujeres" : 42.86,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUROCIRUGIA",
		"hombres" : 12,
		"mujeres" : 2,
		"total" : 14,
		"porcentaje_hombres" : 85.71,
		"porcentaje_mujeres" : 14.29,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUROLOGIA",
		"hombres" : 9,
		"mujeres" : 5,
		"total" : 14,
		"porcentaje_hombres" : 64.29,
		"porcentaje_mujeres" : 35.71,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUROLOGIA PEDIATRICA",
		"hombres" : 3,
		"mujeres" : 0,
		"total" : 3,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "OFTALMOLOGIA",
		"hombres" : 11,
		"mujeres" : 18,
		"total" : 29,
		"porcentaje_hombres" : 37.93,
		"porcentaje_mujeres" : 62.07,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ONCOLOGIA MEDICA",
		"hombres" : 5,
		"mujeres" : 10,
		"total" : 15,
		"porcentaje_hombres" : 33.33,
		"porcentaje_mujeres" : 66.67,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ONCOLOGIA PEDIATRICA",
		"hombres" : 3,
		"mujeres" : 2,
		"total" : 5,
		"porcentaje_hombres" : 60.00,
		"porcentaje_mujeres" : 40.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ONCOLOGIA QUIRURGICA",
		"hombres" : 13,
		"mujeres" : 7,
		"total" : 20,
		"porcentaje_hombres" : 65.00,
		"porcentaje_mujeres" : 35.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "OTORRINOLARINGOLOGIA",
		"hombres" : 14,
		"mujeres" : 15,
		"total" : 29,
		"porcentaje_hombres" : 48.28,
		"porcentaje_mujeres" : 51.72,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PATOLOGIA CLINICA",
		"hombres" : 2,
		"mujeres" : 1,
		"total" : 3,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "PEDIATRA EN SERVICIOS DE URGENCIAS",
		"hombres" : 8,
		"mujeres" : 16,
		"total" : 24,
		"porcentaje_hombres" : 33.33,
		"porcentaje_mujeres" : 66.67,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PEDIATRIA MEDICA",
		"hombres" : 68,
		"mujeres" : 114,
		"total" : 182,
		"porcentaje_hombres" : 37.36,
		"porcentaje_mujeres" : 62.64,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PLANIFICACION FAMILIAR",
		"hombres" : 2,
		"mujeres" : 2,
		"total" : 4,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "PROCTOLOGIA",
		"hombres" : 2,
		"mujeres" : 2,
		"total" : 4,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "PSIQUIATRIA (TERAPIA PSICOLOGICA)",
		"hombres" : 3,
		"mujeres" : 9,
		"total" : 12,
		"porcentaje_hombres" : 25.00,
		"porcentaje_mujeres" : 75.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "RADIODIAGNOSTICO",
		"hombres" : 46,
		"mujeres" : 58,
		"total" : 104,
		"porcentaje_hombres" : 44.23,
		"porcentaje_mujeres" : 55.77,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "REUMATOLOGIA",
		"hombres" : 1,
		"mujeres" : 7,
		"total" : 8,
		"porcentaje_hombres" : 12.50,
		"porcentaje_mujeres" : 87.50,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "SALUD COMUNITARIA",
		"hombres" : 22,
		"mujeres" : 17,
		"total" : 39,
		"porcentaje_hombres" : 56.41,
		"porcentaje_mujeres" : 43.59,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "SALUD EN EL TRABAJO",
		"hombres" : 23,
		"mujeres" : 29,
		"total" : 52,
		"porcentaje_hombres" : 44.23,
		"porcentaje_mujeres" : 55.77,
		"predominio" : "Mujeres"
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
		"mujeres" : 1,
		"total" : 2,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "SERVICIOS DE SANGRE",
		"hombres" : 17,
		"mujeres" : 16,
		"total" : 33,
		"porcentaje_hombres" : 51.52,
		"porcentaje_mujeres" : 48.48,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TERAPIA INTENSIVA",
		"hombres" : 50,
		"mujeres" : 15,
		"total" : 65,
		"porcentaje_hombres" : 76.92,
		"porcentaje_mujeres" : 23.08,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRASPLANTE DE CORNEA",
		"hombres" : 0,
		"mujeres" : 1,
		"total" : 1,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "TRASPLANTE DE ORGANOS INTRABDOMINALES",
		"hombres" : 5,
		"mujeres" : 2,
		"total" : 7,
		"porcentaje_hombres" : 71.43,
		"porcentaje_mujeres" : 28.57,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRAUMATOLOGIA Y ORTOPEDIA",
		"hombres" : 98,
		"mujeres" : 20,
		"total" : 118,
		"porcentaje_hombres" : 83.05,
		"porcentaje_mujeres" : 16.95,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRIAGE",
		"hombres" : 28,
		"mujeres" : 24,
		"total" : 52,
		"porcentaje_hombres" : 53.85,
		"porcentaje_mujeres" : 46.15,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "URGENCIAS",
		"hombres" : 400,
		"mujeres" : 322,
		"total" : 722,
		"porcentaje_hombres" : 55.40,
		"porcentaje_mujeres" : 44.60,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "UROLOGIA",
		"hombres" : 27,
		"mujeres" : 0,
		"total" : 27,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "Total General",
		"hombres" : 2216,
		"mujeres" : 2044,
		"total" : 4260,
		"porcentaje_hombres" : 52.02,
		"porcentaje_mujeres" : 47.98,
		"predominio" : "Hombres"
	}
]; // Aquí colocas tu JSON