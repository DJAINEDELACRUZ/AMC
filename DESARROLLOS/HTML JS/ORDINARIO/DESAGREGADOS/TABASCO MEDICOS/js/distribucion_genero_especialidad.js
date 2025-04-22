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
		"hombres" : 0,
		"mujeres" : 2,
		"total" : 2,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ANATOMIA PATOLOGICA Y LAB.DE CIT.EXFOL",
		"hombres" : 1,
		"mujeres" : 3,
		"total" : 4,
		"porcentaje_hombres" : 25.00,
		"porcentaje_mujeres" : 75.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ANESTESIOLOGIA",
		"hombres" : 38,
		"mujeres" : 40,
		"total" : 78,
		"porcentaje_hombres" : 48.72,
		"porcentaje_mujeres" : 51.28,
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
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
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
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA GENERAL",
		"hombres" : 28,
		"mujeres" : 5,
		"total" : 33,
		"porcentaje_hombres" : 84.85,
		"porcentaje_mujeres" : 15.15,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA PEDIATRICA",
		"hombres" : 1,
		"mujeres" : 1,
		"total" : 2,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
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
		"especialidad" : "EDUCACION MEDICA (FORM.DE PROF.)",
		"hombres" : 1,
		"mujeres" : 3,
		"total" : 4,
		"porcentaje_hombres" : 25.00,
		"porcentaje_mujeres" : 75.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ENDOCRINOLOGIA",
		"hombres" : 1,
		"mujeres" : 1,
		"total" : 2,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "ENDOSCOPIA",
		"hombres" : 0,
		"mujeres" : 1,
		"total" : 1,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "FOMENTO A LA SALUD",
		"hombres" : 2,
		"mujeres" : 3,
		"total" : 5,
		"porcentaje_hombres" : 40.00,
		"porcentaje_mujeres" : 60.00,
		"predominio" : "Mujeres"
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
		"hombres" : 1,
		"mujeres" : 3,
		"total" : 4,
		"porcentaje_hombres" : 25.00,
		"porcentaje_mujeres" : 75.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "GINECOLOGIA Y OBSTETRICIA",
		"hombres" : 15,
		"mujeres" : 30,
		"total" : 45,
		"porcentaje_hombres" : 33.33,
		"porcentaje_mujeres" : 66.67,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "HEMATOLOGIA",
		"hombres" : 2,
		"mujeres" : 0,
		"total" : 2,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
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
		"especialidad" : "HEMODINAMIA",
		"hombres" : 3,
		"mujeres" : 0,
		"total" : 3,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICINA FAMILIAR (CONS.MEDICO)",
		"hombres" : 140,
		"mujeres" : 161,
		"total" : 301,
		"porcentaje_hombres" : 46.51,
		"porcentaje_mujeres" : 53.49,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA FISICA Y REHABILITACION",
		"hombres" : 5,
		"mujeres" : 1,
		"total" : 6,
		"porcentaje_hombres" : 83.33,
		"porcentaje_mujeres" : 16.67,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICINA INTERNA",
		"hombres" : 28,
		"mujeres" : 13,
		"total" : 41,
		"porcentaje_hombres" : 68.29,
		"porcentaje_mujeres" : 31.71,
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
		"mujeres" : 0,
		"total" : 2,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "N.CENT.REG.DELEG.SUBDELEG.DIR.ADMTV.U.OP",
		"hombres" : 37,
		"mujeres" : 15,
		"total" : 52,
		"porcentaje_hombres" : 71.15,
		"porcentaje_mujeres" : 28.85,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEFROLOGIA",
		"hombres" : 4,
		"mujeres" : 1,
		"total" : 5,
		"porcentaje_hombres" : 80.00,
		"porcentaje_mujeres" : 20.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEONATOLOGIA",
		"hombres" : 7,
		"mujeres" : 9,
		"total" : 16,
		"porcentaje_hombres" : 43.75,
		"porcentaje_mujeres" : 56.25,
		"predominio" : "Mujeres"
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
		"hombres" : 2,
		"mujeres" : 0,
		"total" : 2,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
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
		"especialidad" : "OFTALMOLOGIA",
		"hombres" : 5,
		"mujeres" : 1,
		"total" : 6,
		"porcentaje_hombres" : 83.33,
		"porcentaje_mujeres" : 16.67,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ONCOLOGIA MEDICA",
		"hombres" : 0,
		"mujeres" : 1,
		"total" : 1,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ONCOLOGIA PEDIATRICA",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ONCOLOGIA QUIRURGICA",
		"hombres" : 2,
		"mujeres" : 0,
		"total" : 2,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "OTORRINOLARINGOLOGIA",
		"hombres" : 2,
		"mujeres" : 2,
		"total" : 4,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "PEDIATRA EN SERVICIOS DE URGENCIAS",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "PEDIATRIA MEDICA",
		"hombres" : 23,
		"mujeres" : 9,
		"total" : 32,
		"porcentaje_hombres" : 71.88,
		"porcentaje_mujeres" : 28.13,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "PSIQUIATRIA (TERAPIA PSICOLOGICA)",
		"hombres" : 1,
		"mujeres" : 2,
		"total" : 3,
		"porcentaje_hombres" : 33.33,
		"porcentaje_mujeres" : 66.67,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "RADIODIAGNOSTICO",
		"hombres" : 14,
		"mujeres" : 15,
		"total" : 29,
		"porcentaje_hombres" : 48.28,
		"porcentaje_mujeres" : 51.72,
		"predominio" : "Mujeres"
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
		"mujeres" : 4,
		"total" : 8,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "SALUD EN EL TRABAJO",
		"hombres" : 3,
		"mujeres" : 6,
		"total" : 9,
		"porcentaje_hombres" : 33.33,
		"porcentaje_mujeres" : 66.67,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "SERVICIOS DE SANGRE",
		"hombres" : 1,
		"mujeres" : 1,
		"total" : 2,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "TERAPIA INTENSIVA",
		"hombres" : 3,
		"mujeres" : 2,
		"total" : 5,
		"porcentaje_hombres" : 60.00,
		"porcentaje_mujeres" : 40.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRAUMATOLOGIA Y ORTOPEDIA",
		"hombres" : 17,
		"mujeres" : 3,
		"total" : 20,
		"porcentaje_hombres" : 85.00,
		"porcentaje_mujeres" : 15.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRIAGE",
		"hombres" : 5,
		"mujeres" : 11,
		"total" : 16,
		"porcentaje_hombres" : 31.25,
		"porcentaje_mujeres" : 68.75,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "URGENCIAS",
		"hombres" : 102,
		"mujeres" : 74,
		"total" : 176,
		"porcentaje_hombres" : 57.95,
		"porcentaje_mujeres" : 42.05,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "UROLOGIA",
		"hombres" : 7,
		"mujeres" : 0,
		"total" : 7,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "Total General",
		"hombres" : 526,
		"mujeres" : 427,
		"total" : 953,
		"porcentaje_hombres" : 55.19,
		"porcentaje_mujeres" : 44.81,
		"predominio" : "Hombres"
	}
]; // Aquí colocas tu JSON