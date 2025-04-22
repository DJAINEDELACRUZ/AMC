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
		"hombres" : 2,
		"mujeres" : 2,
		"total" : 4,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "ANATOMIA PATOLOGICA Y LAB.DE CIT.EXFOL",
		"hombres" : 4,
		"mujeres" : 2,
		"total" : 6,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ANESTESIOLOGIA",
		"hombres" : 42,
		"mujeres" : 47,
		"total" : 89,
		"porcentaje_hombres" : 47.19,
		"porcentaje_mujeres" : 52.81,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ANGIOLOGIA",
		"hombres" : 2,
		"mujeres" : 1,
		"total" : 3,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CALIDAD DE LA  ATENCION CLINICA",
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
		"mujeres" : 1,
		"total" : 6,
		"porcentaje_hombres" : 83.33,
		"porcentaje_mujeres" : 16.67,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CARDIOLOGIA PEDIATRICA",
		"hombres" : 3,
		"mujeres" : 0,
		"total" : 3,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA GENERAL",
		"hombres" : 53,
		"mujeres" : 10,
		"total" : 63,
		"porcentaje_hombres" : 84.13,
		"porcentaje_mujeres" : 15.87,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA PEDIATRICA",
		"hombres" : 4,
		"mujeres" : 1,
		"total" : 5,
		"porcentaje_hombres" : 80.00,
		"porcentaje_mujeres" : 20.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA PLASTICA Y RECONSTRUCTIVA",
		"hombres" : 2,
		"mujeres" : 0,
		"total" : 2,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "DERMATOLOGIA",
		"hombres" : 0,
		"mujeres" : 2,
		"total" : 2,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "EDUCACION MEDICA (FORM.DE PROF.)",
		"hombres" : 4,
		"mujeres" : 3,
		"total" : 7,
		"porcentaje_hombres" : 57.14,
		"porcentaje_mujeres" : 42.86,
		"predominio" : "Hombres"
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
		"especialidad" : "ENDOSCOPIA",
		"hombres" : 4,
		"mujeres" : 0,
		"total" : 4,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
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
		"especialidad" : "FOMENTO A LA SALUD",
		"hombres" : 3,
		"mujeres" : 3,
		"total" : 6,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
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
		"hombres" : 4,
		"mujeres" : 2,
		"total" : 6,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "GINECOLOGIA ONCOLOGICA",
		"hombres" : 2,
		"mujeres" : 0,
		"total" : 2,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "GINECOLOGIA Y OBSTETRICIA",
		"hombres" : 41,
		"mujeres" : 35,
		"total" : 76,
		"porcentaje_hombres" : 53.95,
		"porcentaje_mujeres" : 46.05,
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
		"hombres" : 0,
		"mujeres" : 3,
		"total" : 3,
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
		"hombres" : 2,
		"mujeres" : 1,
		"total" : 3,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICINA FAMILIAR (CONS.MEDICO)",
		"hombres" : 196,
		"mujeres" : 221,
		"total" : 417,
		"porcentaje_hombres" : 47.00,
		"porcentaje_mujeres" : 53.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA FISICA Y REHABILITACION",
		"hombres" : 0,
		"mujeres" : 5,
		"total" : 5,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA INTERNA",
		"hombres" : 38,
		"mujeres" : 16,
		"total" : 54,
		"porcentaje_hombres" : 70.37,
		"porcentaje_mujeres" : 29.63,
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
		"especialidad" : "MEDICO GENERAL EN GUARDERIA",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICO GENERAL EN SALUD EN EL TRABAJO",
		"hombres" : 2,
		"mujeres" : 2,
		"total" : 4,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "N.CENT.REG.DELEG.SUBDELEG.DIR.ADMTV.U.OP",
		"hombres" : 28,
		"mujeres" : 16,
		"total" : 44,
		"porcentaje_hombres" : 63.64,
		"porcentaje_mujeres" : 36.36,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEFROLOGIA",
		"hombres" : 6,
		"mujeres" : 9,
		"total" : 15,
		"porcentaje_hombres" : 40.00,
		"porcentaje_mujeres" : 60.00,
		"predominio" : "Mujeres"
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
		"hombres" : 7,
		"mujeres" : 10,
		"total" : 17,
		"porcentaje_hombres" : 41.18,
		"porcentaje_mujeres" : 58.82,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "NEUMOLOGIA",
		"hombres" : 4,
		"mujeres" : 0,
		"total" : 4,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUROCIRUGIA",
		"hombres" : 4,
		"mujeres" : 1,
		"total" : 5,
		"porcentaje_hombres" : 80.00,
		"porcentaje_mujeres" : 20.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUROLOGIA",
		"hombres" : 2,
		"mujeres" : 1,
		"total" : 3,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
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
		"especialidad" : "OFTALMOLOGIA",
		"hombres" : 3,
		"mujeres" : 6,
		"total" : 9,
		"porcentaje_hombres" : 33.33,
		"porcentaje_mujeres" : 66.67,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ONCOLOGIA MEDICA",
		"hombres" : 5,
		"mujeres" : 2,
		"total" : 7,
		"porcentaje_hombres" : 71.43,
		"porcentaje_mujeres" : 28.57,
		"predominio" : "Hombres"
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
		"hombres" : 4,
		"mujeres" : 1,
		"total" : 5,
		"porcentaje_hombres" : 80.00,
		"porcentaje_mujeres" : 20.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "OTORRINOLARINGOLOGIA",
		"hombres" : 4,
		"mujeres" : 3,
		"total" : 7,
		"porcentaje_hombres" : 57.14,
		"porcentaje_mujeres" : 42.86,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "PEDIATRA EN SERVICIOS DE URGENCIAS",
		"hombres" : 3,
		"mujeres" : 2,
		"total" : 5,
		"porcentaje_hombres" : 60.00,
		"porcentaje_mujeres" : 40.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "PEDIATRIA MEDICA",
		"hombres" : 25,
		"mujeres" : 32,
		"total" : 57,
		"porcentaje_hombres" : 43.86,
		"porcentaje_mujeres" : 56.14,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PROCTOLOGIA",
		"hombres" : 1,
		"mujeres" : 1,
		"total" : 2,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "PSIQUIATRIA (TERAPIA PSICOLOGICA)",
		"hombres" : 1,
		"mujeres" : 1,
		"total" : 2,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "RADIODIAGNOSTICO",
		"hombres" : 22,
		"mujeres" : 25,
		"total" : 47,
		"porcentaje_hombres" : 46.81,
		"porcentaje_mujeres" : 53.19,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "REUMATOLOGIA",
		"hombres" : 2,
		"mujeres" : 2,
		"total" : 4,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "SALUD COMUNITARIA",
		"hombres" : 8,
		"mujeres" : 8,
		"total" : 16,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "SALUD EN EL TRABAJO",
		"hombres" : 4,
		"mujeres" : 5,
		"total" : 9,
		"porcentaje_hombres" : 44.44,
		"porcentaje_mujeres" : 55.56,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "SERVICIOS DE SANGRE",
		"hombres" : 5,
		"mujeres" : 6,
		"total" : 11,
		"porcentaje_hombres" : 45.45,
		"porcentaje_mujeres" : 54.55,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "TERAPIA INTENSIVA",
		"hombres" : 14,
		"mujeres" : 7,
		"total" : 21,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRAUMATOLOGIA Y ORTOPEDIA",
		"hombres" : 27,
		"mujeres" : 3,
		"total" : 30,
		"porcentaje_hombres" : 90.00,
		"porcentaje_mujeres" : 10.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRIAGE",
		"hombres" : 6,
		"mujeres" : 4,
		"total" : 10,
		"porcentaje_hombres" : 60.00,
		"porcentaje_mujeres" : 40.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "URGENCIAS",
		"hombres" : 115,
		"mujeres" : 80,
		"total" : 195,
		"porcentaje_hombres" : 58.97,
		"porcentaje_mujeres" : 41.03,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "UROLOGIA",
		"hombres" : 10,
		"mujeres" : 1,
		"total" : 11,
		"porcentaje_hombres" : 90.91,
		"porcentaje_mujeres" : 9.09,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "Total General",
		"hombres" : 733,
		"mujeres" : 594,
		"total" : 1327,
		"porcentaje_hombres" : 55.24,
		"porcentaje_mujeres" : 44.76,
		"predominio" : "Hombres"
	}
]; // Aquí colocas tu JSON