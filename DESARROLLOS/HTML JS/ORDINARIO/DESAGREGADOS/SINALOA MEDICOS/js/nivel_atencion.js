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
		"Plazas_Ocupadas" : 1499,
		"Plazas_Vacantes" : 86,
		"Porcentaje_Ocupadas" : 94.57,
		"Porcentaje_Vacantes" : 5.43
	},
	{
		"Clasificacion_Unidad" : "01 Primer Nivel",
		"Plazas_Ocupadas" : 732,
		"Plazas_Vacantes" : 29,
		"Porcentaje_Ocupadas" : 96.19,
		"Porcentaje_Vacantes" : 3.81
	},
	{
		"Clasificacion_Unidad" : "14 Sede Delegacional",
		"Plazas_Ocupadas" : 65,
		"Plazas_Vacantes" : 0,
		"Porcentaje_Ocupadas" : 100.00,
		"Porcentaje_Vacantes" : 0.00
	},
	{
		"Clasificacion_Unidad" : "05 Guarderías",
		"Plazas_Ocupadas" : 2,
		"Plazas_Vacantes" : 0,
		"Porcentaje_Ocupadas" : 100.00,
		"Porcentaje_Vacantes" : 0.00
	}
];