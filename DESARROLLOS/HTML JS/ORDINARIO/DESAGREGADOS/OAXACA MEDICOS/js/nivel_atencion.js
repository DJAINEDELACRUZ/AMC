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
AND NUMDEL = '27'
AND DELEGACION = 'Sonora'
GROUP BY 
    CLASIF_UNIDAD
ORDER BY 
    Plazas_Vacantes DESC;
    */

var jsonData = [
	{
		"Clasificacion_Unidad" : "02 Segundo Nivel",
		"Plazas_Ocupadas" : 643,
		"Plazas_Vacantes" : 37,
		"Porcentaje_Ocupadas" : 94.56,
		"Porcentaje_Vacantes" : 5.44
	},
	{
		"Clasificacion_Unidad" : "01 Primer Nivel",
		"Plazas_Ocupadas" : 349,
		"Plazas_Vacantes" : 9,
		"Porcentaje_Ocupadas" : 97.49,
		"Porcentaje_Vacantes" : 2.51
	},
	{
		"Clasificacion_Unidad" : "14 Sede Delegacional",
		"Plazas_Ocupadas" : 83,
		"Plazas_Vacantes" : 0,
		"Porcentaje_Ocupadas" : 100.00,
		"Porcentaje_Vacantes" : 0.00
	},
	{
		"Clasificacion_Unidad" : "06 SubDelegaciones",
		"Plazas_Ocupadas" : 1,
		"Plazas_Vacantes" : 0,
		"Porcentaje_Ocupadas" : 100.00,
		"Porcentaje_Vacantes" : 0.00
	},
	{
		"Clasificacion_Unidad" : "05 Guarderías",
		"Plazas_Ocupadas" : 1,
		"Plazas_Vacantes" : 0,
		"Porcentaje_Ocupadas" : 100.00,
		"Porcentaje_Vacantes" : 0.00
	}
];