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
		"Plazas_Ocupadas" : 1854,
		"Plazas_Vacantes" : 1393,
		"Porcentaje_Ocupadas" : 57.10,
		"Porcentaje_Vacantes" : 42.90
	},
	{
		"Clasificacion_Unidad" : "01 Primer Nivel",
		"Plazas_Ocupadas" : 2575,
		"Plazas_Vacantes" : 690,
		"Porcentaje_Ocupadas" : 78.87,
		"Porcentaje_Vacantes" : 21.13
	},
	{
		"Clasificacion_Unidad" : "15 Unidades Prestaciones Médicas",
		"Plazas_Ocupadas" : 338,
		"Plazas_Vacantes" : 165,
		"Porcentaje_Ocupadas" : 67.20,
		"Porcentaje_Vacantes" : 32.80
	},
	{
		"Clasificacion_Unidad" : "13 Sede Nivel Central",
		"Plazas_Ocupadas" : 21,
		"Plazas_Vacantes" : 13,
		"Porcentaje_Ocupadas" : 61.76,
		"Porcentaje_Vacantes" : 38.24
	},
	{
		"Clasificacion_Unidad" : "14 Sede Delegacional",
		"Plazas_Ocupadas" : 47,
		"Plazas_Vacantes" : 1,
		"Porcentaje_Ocupadas" : 97.92,
		"Porcentaje_Vacantes" : 2.08
	}
];