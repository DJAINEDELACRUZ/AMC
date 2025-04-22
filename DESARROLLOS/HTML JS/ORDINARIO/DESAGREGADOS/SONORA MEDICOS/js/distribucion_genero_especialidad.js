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
		"hombres" : 2,
		"mujeres" : 2,
		"total" : 4,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "ANATOMIA PATOLOGICA Y LAB.DE CIT.EXFOL",
		"hombres" : 9,
		"mujeres" : 9,
		"total" : 18,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "ANESTESIOLOGIA",
		"hombres" : 150,
		"mujeres" : 129,
		"total" : 279,
		"porcentaje_hombres" : 53.76,
		"porcentaje_mujeres" : 46.24,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ANGIOLOGIA",
		"hombres" : 8,
		"mujeres" : 1,
		"total" : 9,
		"porcentaje_hombres" : 88.89,
		"porcentaje_mujeres" : 11.11,
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
		"hombres" : 3,
		"mujeres" : 2,
		"total" : 5,
		"porcentaje_hombres" : 60.00,
		"porcentaje_mujeres" : 40.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CARDIOLOGIA",
		"hombres" : 32,
		"mujeres" : 12,
		"total" : 44,
		"porcentaje_hombres" : 72.73,
		"porcentaje_mujeres" : 27.27,
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
		"especialidad" : "CENTRO DE COLECTA",
		"hombres" : 2,
		"mujeres" : 0,
		"total" : 2,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
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
		"hombres" : 111,
		"mujeres" : 20,
		"total" : 131,
		"porcentaje_hombres" : 84.73,
		"porcentaje_mujeres" : 15.27,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA PEDIATRICA",
		"hombres" : 10,
		"mujeres" : 2,
		"total" : 12,
		"porcentaje_hombres" : 83.33,
		"porcentaje_mujeres" : 16.67,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "CIRUGIA PLASTICA Y RECONSTRUCTIVA",
		"hombres" : 7,
		"mujeres" : 3,
		"total" : 10,
		"porcentaje_hombres" : 70.00,
		"porcentaje_mujeres" : 30.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "DERMATOLOGIA",
		"hombres" : 1,
		"mujeres" : 3,
		"total" : 4,
		"porcentaje_hombres" : 25.00,
		"porcentaje_mujeres" : 75.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "EDUCACION MEDICA (FORM.DE PROF.)",
		"hombres" : 5,
		"mujeres" : 5,
		"total" : 10,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
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
		"hombres" : 6,
		"mujeres" : 1,
		"total" : 7,
		"porcentaje_hombres" : 85.71,
		"porcentaje_mujeres" : 14.29,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "FOMENTO A LA SALUD",
		"hombres" : 8,
		"mujeres" : 8,
		"total" : 16,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "GASTROENTEROLOGIA",
		"hombres" : 2,
		"mujeres" : 2,
		"total" : 4,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
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
		"hombres" : 8,
		"mujeres" : 5,
		"total" : 13,
		"porcentaje_hombres" : 61.54,
		"porcentaje_mujeres" : 38.46,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "GINECOLOGIA ONCOLOGICA",
		"hombres" : 1,
		"mujeres" : 1,
		"total" : 2,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "GINECOLOGIA Y OBSTETRICIA",
		"hombres" : 88,
		"mujeres" : 95,
		"total" : 183,
		"porcentaje_hombres" : 48.09,
		"porcentaje_mujeres" : 51.91,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "HEMATOLOGIA",
		"hombres" : 7,
		"mujeres" : 4,
		"total" : 11,
		"porcentaje_hombres" : 63.64,
		"porcentaje_mujeres" : 36.36,
		"predominio" : "Hombres"
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
		"especialidad" : "HEMODINAMIA",
		"hombres" : 4,
		"mujeres" : 0,
		"total" : 4,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "INFECTOLOGIA",
		"hombres" : 6,
		"mujeres" : 1,
		"total" : 7,
		"porcentaje_hombres" : 85.71,
		"porcentaje_mujeres" : 14.29,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "LABORATORIO DE ANALISIS CLINICOS",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDIC DEL ENFMO PEDIATR EN EDO CRITICO",
		"hombres" : 5,
		"mujeres" : 7,
		"total" : 12,
		"porcentaje_hombres" : 41.67,
		"porcentaje_mujeres" : 58.33,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA FAMILIAR (CONS.MEDICO)",
		"hombres" : 394,
		"mujeres" : 384,
		"total" : 778,
		"porcentaje_hombres" : 50.64,
		"porcentaje_mujeres" : 49.36,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICINA FISICA Y REHABILITACION",
		"hombres" : 11,
		"mujeres" : 9,
		"total" : 20,
		"porcentaje_hombres" : 55.00,
		"porcentaje_mujeres" : 45.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "MEDICINA INTERNA",
		"hombres" : 83,
		"mujeres" : 33,
		"total" : 116,
		"porcentaje_hombres" : 71.55,
		"porcentaje_mujeres" : 28.45,
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
		"especialidad" : "MEDICINA NUCLEAR",
		"hombres" : 2,
		"mujeres" : 2,
		"total" : 4,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "MEDICINA PALIATIVA",
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
		"mujeres" : 4,
		"total" : 5,
		"porcentaje_hombres" : 20.00,
		"porcentaje_mujeres" : 80.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICO GENERAL EN SALUD EN EL TRABAJO",
		"hombres" : 7,
		"mujeres" : 5,
		"total" : 12,
		"porcentaje_hombres" : 58.33,
		"porcentaje_mujeres" : 41.67,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "N.CENT.REG.DELEG.SUBDELEG.DIR.ADMTV.U.OP",
		"hombres" : 76,
		"mujeres" : 42,
		"total" : 118,
		"porcentaje_hombres" : 64.41,
		"porcentaje_mujeres" : 35.59,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEFROLOGIA",
		"hombres" : 16,
		"mujeres" : 8,
		"total" : 24,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEFROLOGIA PEDIATRICA",
		"hombres" : 1,
		"mujeres" : 1,
		"total" : 2,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "NEONATOLOGIA",
		"hombres" : 8,
		"mujeres" : 12,
		"total" : 20,
		"porcentaje_hombres" : 40.00,
		"porcentaje_mujeres" : 60.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "NEUMOLOGIA",
		"hombres" : 3,
		"mujeres" : 4,
		"total" : 7,
		"porcentaje_hombres" : 42.86,
		"porcentaje_mujeres" : 57.14,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "NEUMOLOGIA PEDIATRICA",
		"hombres" : 0,
		"mujeres" : 2,
		"total" : 2,
		"porcentaje_hombres" : 0.00,
		"porcentaje_mujeres" : 100.00,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "NEUROCIRUGIA",
		"hombres" : 18,
		"mujeres" : 2,
		"total" : 20,
		"porcentaje_hombres" : 90.00,
		"porcentaje_mujeres" : 10.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUROLOGIA",
		"hombres" : 4,
		"mujeres" : 2,
		"total" : 6,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "NEUROLOGIA PEDIATRICA",
		"hombres" : 2,
		"mujeres" : 1,
		"total" : 3,
		"porcentaje_hombres" : 66.67,
		"porcentaje_mujeres" : 33.33,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "OFTALMOLOGIA",
		"hombres" : 15,
		"mujeres" : 13,
		"total" : 28,
		"porcentaje_hombres" : 53.57,
		"porcentaje_mujeres" : 46.43,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ONCOLOGIA MEDICA",
		"hombres" : 9,
		"mujeres" : 2,
		"total" : 11,
		"porcentaje_hombres" : 81.82,
		"porcentaje_mujeres" : 18.18,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "ONCOLOGIA PEDIATRICA",
		"hombres" : 1,
		"mujeres" : 5,
		"total" : 6,
		"porcentaje_hombres" : 16.67,
		"porcentaje_mujeres" : 83.33,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "ONCOLOGIA QUIRURGICA",
		"hombres" : 10,
		"mujeres" : 1,
		"total" : 11,
		"porcentaje_hombres" : 90.91,
		"porcentaje_mujeres" : 9.09,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "OTORRINOLARINGOLOGIA",
		"hombres" : 12,
		"mujeres" : 9,
		"total" : 21,
		"porcentaje_hombres" : 57.14,
		"porcentaje_mujeres" : 42.86,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "PEDIATRA EN SERVICIOS DE URGENCIAS",
		"hombres" : 8,
		"mujeres" : 6,
		"total" : 14,
		"porcentaje_hombres" : 57.14,
		"porcentaje_mujeres" : 42.86,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "PEDIATRIA MEDICA",
		"hombres" : 81,
		"mujeres" : 89,
		"total" : 170,
		"porcentaje_hombres" : 47.65,
		"porcentaje_mujeres" : 52.35,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "PROCTOLOGIA",
		"hombres" : 4,
		"mujeres" : 1,
		"total" : 5,
		"porcentaje_hombres" : 80.00,
		"porcentaje_mujeres" : 20.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "PSIQUIATRIA (TERAPIA PSICOLOGICA)",
		"hombres" : 10,
		"mujeres" : 3,
		"total" : 13,
		"porcentaje_hombres" : 76.92,
		"porcentaje_mujeres" : 23.08,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "RADIODIAGNOSTICO",
		"hombres" : 55,
		"mujeres" : 21,
		"total" : 76,
		"porcentaje_hombres" : 72.37,
		"porcentaje_mujeres" : 27.63,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "RADIOTERAPIA",
		"hombres" : 7,
		"mujeres" : 4,
		"total" : 11,
		"porcentaje_hombres" : 63.64,
		"porcentaje_mujeres" : 36.36,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "REUMATOLOGIA",
		"hombres" : 1,
		"mujeres" : 5,
		"total" : 6,
		"porcentaje_hombres" : 16.67,
		"porcentaje_mujeres" : 83.33,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "SALUD COMUNITARIA",
		"hombres" : 10,
		"mujeres" : 9,
		"total" : 19,
		"porcentaje_hombres" : 52.63,
		"porcentaje_mujeres" : 47.37,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "SALUD EN EL TRABAJO",
		"hombres" : 18,
		"mujeres" : 12,
		"total" : 30,
		"porcentaje_hombres" : 60.00,
		"porcentaje_mujeres" : 40.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "SERVICIOS DE SANGRE",
		"hombres" : 7,
		"mujeres" : 6,
		"total" : 13,
		"porcentaje_hombres" : 53.85,
		"porcentaje_mujeres" : 46.15,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TERAPIA INTENSIVA",
		"hombres" : 26,
		"mujeres" : 15,
		"total" : 41,
		"porcentaje_hombres" : 63.41,
		"porcentaje_mujeres" : 36.59,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRASPLANTE DE ORGANOS INTRABDOMINALES",
		"hombres" : 5,
		"mujeres" : 1,
		"total" : 6,
		"porcentaje_hombres" : 83.33,
		"porcentaje_mujeres" : 16.67,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRAUMATOLOGIA Y ORTOPEDIA",
		"hombres" : 108,
		"mujeres" : 10,
		"total" : 118,
		"porcentaje_hombres" : 91.53,
		"porcentaje_mujeres" : 8.47,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "TRIAGE",
		"hombres" : 25,
		"mujeres" : 12,
		"total" : 37,
		"porcentaje_hombres" : 67.57,
		"porcentaje_mujeres" : 32.43,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "URGENCIAS",
		"hombres" : 237,
		"mujeres" : 187,
		"total" : 424,
		"porcentaje_hombres" : 55.90,
		"porcentaje_mujeres" : 44.10,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "UROLOGIA",
		"hombres" : 21,
		"mujeres" : 1,
		"total" : 22,
		"porcentaje_hombres" : 95.45,
		"porcentaje_mujeres" : 4.55,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "Total General",
		"hombres" : 1791,
		"mujeres" : 1254,
		"total" : 3045,
		"porcentaje_hombres" : 58.82,
		"porcentaje_mujeres" : 41.18,
		"predominio" : "Hombres"
	}
]; // Aquí colocas tu JSON