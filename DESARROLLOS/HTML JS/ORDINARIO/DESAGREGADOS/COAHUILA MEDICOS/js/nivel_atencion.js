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
		"Plazas_Ocupadas" : 1745,
		"Plazas_Vacantes" : 268,
		"Porcentaje_Ocupadas" : 86.69,
		"Porcentaje_Vacantes" : 13.31
	},
	{
		"Clasificacion_Unidad" : "01 Primer Nivel",
		"Plazas_Ocupadas" : 881,
		"Plazas_Vacantes" : 39,
		"Porcentaje_Ocupadas" : 95.76,
		"Porcentaje_Vacantes" : 4.24
	},
	{
		"Clasificacion_Unidad" : "03 Tercer Nivel UMAE",
		"Plazas_Ocupadas" : 389,
		"Plazas_Vacantes" : 38,
		"Porcentaje_Ocupadas" : 91.10,
		"Porcentaje_Vacantes" : 8.90
	},
	{
		"Clasificacion_Unidad" : "14 Sede Delegacional",
		"Plazas_Ocupadas" : 78,
		"Plazas_Vacantes" : 3,
		"Porcentaje_Ocupadas" : 96.30,
		"Porcentaje_Vacantes" : 3.70
	},
	{
		"Clasificacion_Unidad" : "05 Guarderías",
		"Plazas_Ocupadas" : 3,
		"Plazas_Vacantes" : 1,
		"Porcentaje_Ocupadas" : 75.00,
		"Porcentaje_Vacantes" : 25.00
	},
	{
		"Clasificacion_Unidad" : "15 Unidades Prestaciones Médicas",
		"Plazas_Ocupadas" : 2,
		"Plazas_Vacantes" : 0,
		"Porcentaje_Ocupadas" : 100.00,
		"Porcentaje_Vacantes" : 0.00
	}
];