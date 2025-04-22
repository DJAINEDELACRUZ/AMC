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
		"hombres" : 1,
		"mujeres" : 1,
		"total" : 2,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "ANATOMIA PATOLOGICA Y LAB.DE CIT.EXFOL",
		"hombres" : 0,
		"mujeres" : 4,
		"total" : 4,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ANESTESIOLOGIA",
		"hombres" : 27,
		"mujeres" : 34,
		"total" : 61,
		"porcentaje_hombres" : 44.26,
		"porcentaje_mujeres" : 55.74,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ANGIOLOGIA",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
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
		"especialidad" : "CARDIOLOGIA",
		"hombres" : 5,
		"mujeres" : 2,
		"total" : 7,
		"porcentaje_hombres" : 71.43,
		"porcentaje_mujeres" : 28.57,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA GENERAL",
		"hombres" : 53,
		"mujeres" : 27,
		"total" : 80,
		"porcentaje_hombres" : 66.25,
		"porcentaje_mujeres" : 33.75,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA PEDIATRICA",
		"hombres" : 2,
		"mujeres" : 0,
		"total" : 2,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA PLASTICA Y RECONSTRUCTIVA",
		"hombres" : 0,
		"mujeres" : 1,
		"total" : 1,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
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
		"hombres" : 2,
		"mujeres" : 5,
		"total" : 7,
		"porcentaje_hombres" : 28.57,
		"porcentaje_mujeres" : 71.43,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ENDOSCOPIA",
		"hombres" : 3,
		"mujeres" : 0,
		"total" : 3,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "FOMENTO A LA SALUD",
		"hombres" : 3,
		"mujeres" : 1,
		"total" : 4,
		"porcentaje_hombres" : 75.00,
		"porcentaje_mujeres" : 25.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "GASTROENTEROLOGIA",
		"hombres" : 1,
		"mujeres" : 1,
		"total" : 2,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "GERIATRIA",
		"hombres" : 2,
		"mujeres" : 2,
		"total" : 4,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "GINECOLOGIA Y OBSTETRICIA",
		"hombres" : 18,
		"mujeres" : 37,
		"total" : 55,
		"porcentaje_hombres" : 32.73,
		"porcentaje_mujeres" : 67.27,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "HEMATOLOGIA",
		"hombres" : 2,
		"mujeres" : 1,
		"total" : 3,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "HEMATOLOGIA PEDIATRICA",
		"hombres" : 0,
		"mujeres" : 1,
		"total" : 1,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "INFECTOLOGIA",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "LABORATORIO DE ANALISIS CLINICOS",
		"hombres" : 0,
		"mujeres" : 1,
		"total" : 1,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA FAMILIAR (CONS.MEDICO)",
		"hombres" : 132,
		"mujeres" : 171,
		"total" : 303,
		"porcentaje_hombres" : 43.56,
		"porcentaje_mujeres" : 56.44,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA FISICA Y REHABILITACION",
		"hombres" : 1,
		"mujeres" : 6,
		"total" : 7,
		"porcentaje_hombres" : 14.29,
		"porcentaje_mujeres" : 85.71,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA INTERNA",
		"hombres" : 24,
		"mujeres" : 17,
		"total" : 41,
		"porcentaje_hombres" : 58.54,
		"porcentaje_mujeres" : 41.46,
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
		"hombres" : 0,
		"mujeres" : 1,
		"total" : 1,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICO GENERAL EN SALUD EN EL TRABAJO",
		"hombres" : 1,
		"mujeres" : 1,
		"total" : 2,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "N.CENT.REG.DELEG.SUBDELEG.DIR.ADMTV.U.OP",
		"hombres" : 37,
		"mujeres" : 27,
		"total" : 64,
		"porcentaje_hombres" : 57.81,
		"porcentaje_mujeres" : 42.19,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEFROLOGIA",
		"hombres" : 4,
		"mujeres" : 3,
		"total" : 7,
		"porcentaje_hombres" : 57.14,
		"porcentaje_mujeres" : 42.86,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEONATOLOGIA",
		"hombres" : 5,
		"mujeres" : 4,
		"total" : 9,
		"porcentaje_hombres" : 55.56,
		"porcentaje_mujeres" : 44.44,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUMOLOGIA",
		"hombres" : 0,
		"mujeres" : 1,
		"total" : 1,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "NEUROCIRUGIA",
		"hombres" : 3,
		"mujeres" : 0,
		"total" : 3,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUROLOGIA",
		"hombres" : 3,
		"mujeres" : 1,
		"total" : 4,
		"porcentaje_hombres" : 75.00,
		"porcentaje_mujeres" : 25.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "OFTALMOLOGIA",
		"hombres" : 4,
		"mujeres" : 5,
		"total" : 9,
		"porcentaje_hombres" : 44.44,
		"porcentaje_mujeres" : 55.56,
		"predominio" : "Mujeres"
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
		"hombres" : 0,
		"mujeres" : 2,
		"total" : 2,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ONCOLOGIA QUIRURGICA",
		"hombres" : 4,
		"mujeres" : 1,
		"total" : 5,
		"porcentaje_hombres" : 80.00,
		"porcentaje_mujeres" : 20.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "OTORRINOLARINGOLOGIA",
		"hombres" : 1,
		"mujeres" : 2,
		"total" : 3,
		"porcentaje_hombres" : 33.33,
		"porcentaje_mujeres" : 66.67,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PEDIATRA EN SERVICIOS DE URGENCIAS",
		"hombres" : 2,
		"mujeres" : 0,
		"total" : 2,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "PEDIATRIA MEDICA",
		"hombres" : 20,
		"mujeres" : 31,
		"total" : 51,
		"porcentaje_hombres" : 39.22,
		"porcentaje_mujeres" : 60.78,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PSIQUIATRIA (TERAPIA PSICOLOGICA)",
		"hombres" : 2,
		"mujeres" : 1,
		"total" : 3,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "RADIODIAGNOSTICO",
		"hombres" : 13,
		"mujeres" : 12,
		"total" : 25,
		"porcentaje_hombres" : 52.00,
		"porcentaje_mujeres" : 48.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "REUMATOLOGIA",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "SALUD COMUNITARIA",
		"hombres" : 4,
		"mujeres" : 6,
		"total" : 10,
		"porcentaje_hombres" : 40.00,
		"porcentaje_mujeres" : 60.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "SALUD EN EL TRABAJO",
		"hombres" : 6,
		"mujeres" : 5,
		"total" : 11,
		"porcentaje_hombres" : 54.55,
		"porcentaje_mujeres" : 45.45,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "SERVICIOS DE SANGRE",
		"hombres" : 4,
		"mujeres" : 3,
		"total" : 7,
		"porcentaje_hombres" : 57.14,
		"porcentaje_mujeres" : 42.86,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TERAPIA INTENSIVA",
		"hombres" : 8,
		"mujeres" : 2,
		"total" : 10,
		"porcentaje_hombres" : 80.00,
		"porcentaje_mujeres" : 20.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRAUMATOLOGIA Y ORTOPEDIA",
		"hombres" : 30,
		"mujeres" : 2,
		"total" : 32,
		"porcentaje_hombres" : 93.75,
		"porcentaje_mujeres" : 6.25,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRIAGE",
		"hombres" : 7,
		"mujeres" : 10,
		"total" : 17,
		"porcentaje_hombres" : 41.18,
		"porcentaje_mujeres" : 58.82,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "URGENCIAS",
		"hombres" : 102,
		"mujeres" : 89,
		"total" : 191,
		"porcentaje_hombres" : 53.40,
		"porcentaje_mujeres" : 46.60,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "UROLOGIA",
		"hombres" : 6,
		"mujeres" : 0,
		"total" : 6,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "Total General",
		"hombres" : 548,
		"mujeres" : 529,
		"total" : 1077,
		"porcentaje_hombres" : 50.88,
		"porcentaje_mujeres" : 49.12,
		"predominio" : "Hombres"
	}
]; // Aquí colocas tu JSON