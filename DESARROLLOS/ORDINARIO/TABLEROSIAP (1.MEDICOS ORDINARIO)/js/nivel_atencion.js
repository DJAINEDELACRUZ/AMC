/* query para extraer la informacion de la tabla plazas ocupadas y vacantes por nivel de atencion
SELECT 
    CLASIF_UNIDAD AS "Clasificacion_Unidad",
    SUM(CASE WHEN PLZOCU = 1 THEN 1 ELSE 0 END) AS "Plazas_Ocupadas",
    SUM(CASE WHEN PLZOCU = 0 THEN 1 ELSE 0 END) AS "Plazas_Vacantes",
    ROUND(SUM(CASE WHEN PLZOCU = 1 THEN 1 ELSE 0 END) * 100.0 / 
        NULLIF(COUNT(*), 0), 2) AS "Porcentaje_Ocupadas",
    ROUND(SUM(CASE WHEN PLZOCU = 0 THEN 1 ELSE 0 END) * 100.0 / 
        NULLIF(COUNT(*), 0), 2) AS "Porcentaje_Vacantes"
FROM 
    personalaps.plantillaordinario
WHERE DESCRIP_CLASCATEG = '1.MÉDICOS'
AND QNA = '2024017'
GROUP BY 
    CLASIF_UNIDAD
ORDER BY 
    Plazas_Vacantes DESC;
    */

var jsonData = [
	{
		"Clasificacion_Unidad" : "02 Segundo Nivel",
		"Plazas_Ocupadas" : 44933,
		"Plazas_Vacantes" : 5393,
		"Porcentaje_Ocupadas" : 89.28,
		"Porcentaje_Vacantes" : 10.72
	},
	{
		"Clasificacion_Unidad" : "01 Primer Nivel",
		"Plazas_Ocupadas" : 25941,
		"Plazas_Vacantes" : 1098,
		"Porcentaje_Ocupadas" : 95.94,
		"Porcentaje_Vacantes" : 4.06
	},
	{
		"Clasificacion_Unidad" : "03 Tercer Nivel UMAE",
		"Plazas_Ocupadas" : 8714,
		"Plazas_Vacantes" : 686,
		"Porcentaje_Ocupadas" : 92.70,
		"Porcentaje_Vacantes" : 7.30
	},
	{
		"Clasificacion_Unidad" : "14 Sede Delegacional",
		"Plazas_Ocupadas" : 1967,
		"Plazas_Vacantes" : 136,
		"Porcentaje_Ocupadas" : 93.53,
		"Porcentaje_Vacantes" : 6.47
	},
	{
		"Clasificacion_Unidad" : "15 Unidades Prestaciones Médicas",
		"Plazas_Ocupadas" : 279,
		"Plazas_Vacantes" : 59,
		"Porcentaje_Ocupadas" : 82.54,
		"Porcentaje_Vacantes" : 17.46
	},
	{
		"Clasificacion_Unidad" : "04 Tercer Nivel",
		"Plazas_Ocupadas" : 548,
		"Plazas_Vacantes" : 31,
		"Porcentaje_Ocupadas" : 94.65,
		"Porcentaje_Vacantes" : 5.35
	},
	{
		"Clasificacion_Unidad" : "13 Sede Nivel Central",
		"Plazas_Ocupadas" : 402,
		"Plazas_Vacantes" : 27,
		"Porcentaje_Ocupadas" : 93.71,
		"Porcentaje_Vacantes" : 6.29
	},
	{
		"Clasificacion_Unidad" : "05 Guarderías",
		"Plazas_Ocupadas" : 124,
		"Plazas_Vacantes" : 15,
		"Porcentaje_Ocupadas" : 89.21,
		"Porcentaje_Vacantes" : 10.79
	},
	{
		"Clasificacion_Unidad" : "17 Unidades Apoyo Operativo",
		"Plazas_Ocupadas" : 11,
		"Plazas_Vacantes" : 2,
		"Porcentaje_Ocupadas" : 84.62,
		"Porcentaje_Vacantes" : 15.38
	},
	{
		"Clasificacion_Unidad" : "16 Unidades Prestaciones Económicas",
		"Plazas_Ocupadas" : 9,
		"Plazas_Vacantes" : 1,
		"Porcentaje_Ocupadas" : 90.00,
		"Porcentaje_Vacantes" : 10.00
	},
	{
		"Clasificacion_Unidad" : "06 SubDelegaciones",
		"Plazas_Ocupadas" : 2,
		"Plazas_Vacantes" : 0,
		"Porcentaje_Ocupadas" : 100.00,
		"Porcentaje_Vacantes" : 0.00
	}
];