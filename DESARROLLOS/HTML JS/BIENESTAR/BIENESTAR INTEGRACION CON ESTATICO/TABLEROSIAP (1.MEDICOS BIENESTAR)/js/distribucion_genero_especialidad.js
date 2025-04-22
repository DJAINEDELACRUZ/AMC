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
		"especialidad" : "ANATOMIA PATOLOGICA Y LAB.DE CIT.EXFOL",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
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
		"especialidad" : "DIRECCION ADMINISTRATIVA",
		"hombres" : 38,
		"mujeres" : 27,
		"total" : 65,
		"porcentaje_hombres" : 58.46,
		"porcentaje_mujeres" : 41.54,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "GINECOLOGIA Y OBSTETRICIA",
		"hombres" : 96,
		"mujeres" : 103,
		"total" : 199,
		"porcentaje_hombres" : 48.24,
		"porcentaje_mujeres" : 51.76,
		"predominio" : "Mujeres"
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
		"hombres" : 1477,
		"mujeres" : 1581,
		"total" : 3058,
		"porcentaje_hombres" : 48.30,
		"porcentaje_mujeres" : 51.70,
		"predominio" : "Mujeres"
	},
	{
		"especialidad" : "MEDICINA FISICA Y REHABILITACION",
		"hombres" : 1,
		"mujeres" : 0,
		"total" : 1,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
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
		"hombres" : 158,
		"mujeres" : 119,
		"total" : 277,
		"porcentaje_hombres" : 57.04,
		"porcentaje_mujeres" : 42.96,
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
		"especialidad" : "RADIODIAGNOSTICO",
		"hombres" : 2,
		"mujeres" : 0,
		"total" : 2,
		"porcentaje_hombres" : 100.00,
		"porcentaje_mujeres" : 0.00,
		"predominio" : "Hombres"
	},
	{
		"especialidad" : "SALUD COMUNITARIA",
		"hombres" : 24,
		"mujeres" : 27,
		"total" : 51,
		"porcentaje_hombres" : 47.06,
		"porcentaje_mujeres" : 52.94,
		"predominio" : "Mujeres"
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
		"hombres" : 105,
		"mujeres" : 105,
		"total" : 210,
		"porcentaje_hombres" : 50.00,
		"porcentaje_mujeres" : 50.00,
		"predominio" : "Igualdad"
	},
	{
		"especialidad" : "Total General",
		"hombres" : 2500,
		"mujeres" : 2335,
		"total" : 4835,
		"porcentaje_hombres" : 51.71,
		"porcentaje_mujeres" : 48.29,
		"predominio" : "Hombres"
	}
]; // Aquí colocas tu JSON