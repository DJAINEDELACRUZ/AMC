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
		"Plazas_Ocupadas" : 11563,
		"Plazas_Vacantes" : 2066,
		"Porcentaje_Ocupadas" : 84.84,
		"Porcentaje_Vacantes" : 15.16
	},
	{
		"Clasificacion_Unidad" : "01 Primer Nivel",
		"Plazas_Ocupadas" : 6817,
		"Plazas_Vacantes" : 1387,
		"Porcentaje_Ocupadas" : 83.09,
		"Porcentaje_Vacantes" : 16.91
	},
	{
		"Clasificacion_Unidad" : "15 Unidades Prestaciones Médicas",
		"Plazas_Ocupadas" : 1036,
		"Plazas_Vacantes" : 377,
		"Porcentaje_Ocupadas" : 73.32,
		"Porcentaje_Vacantes" : 26.68
	},
	{
		"Clasificacion_Unidad" : "13 Sede Nivel Central",
		"Plazas_Ocupadas" : 212,
		"Plazas_Vacantes" : 209,
		"Porcentaje_Ocupadas" : 50.36,
		"Porcentaje_Vacantes" : 49.64
	},
	{
		"Clasificacion_Unidad" : "14 Sede Delegacional",
		"Plazas_Ocupadas" : 638,
		"Plazas_Vacantes" : 150,
		"Porcentaje_Ocupadas" : 80.96,
		"Porcentaje_Vacantes" : 19.04
	}
];