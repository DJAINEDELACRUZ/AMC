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
		"Plazas_Ocupadas" : 2286,
		"Plazas_Vacantes" : 321,
		"Porcentaje_Ocupadas" : 87.69,
		"Porcentaje_Vacantes" : 12.31
	},
	{
		"Clasificacion_Unidad" : "01 Primer Nivel",
		"Plazas_Ocupadas" : 1456,
		"Plazas_Vacantes" : 99,
		"Porcentaje_Ocupadas" : 93.63,
		"Porcentaje_Vacantes" : 6.37
	},
	{
		"Clasificacion_Unidad" : "03 Tercer Nivel UMAE",
		"Plazas_Ocupadas" : 404,
		"Plazas_Vacantes" : 53,
		"Porcentaje_Ocupadas" : 88.40,
		"Porcentaje_Vacantes" : 11.60
	},
	{
		"Clasificacion_Unidad" : "14 Sede Delegacional",
		"Plazas_Ocupadas" : 111,
		"Plazas_Vacantes" : 16,
		"Porcentaje_Ocupadas" : 87.40,
		"Porcentaje_Vacantes" : 12.60
	},
	{
		"Clasificacion_Unidad" : "05 Guarderías",
		"Plazas_Ocupadas" : 3,
		"Plazas_Vacantes" : 0,
		"Porcentaje_Ocupadas" : 100.00,
		"Porcentaje_Vacantes" : 0.00
	}
];