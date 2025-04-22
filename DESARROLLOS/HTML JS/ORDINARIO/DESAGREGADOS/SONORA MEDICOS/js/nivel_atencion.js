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
		"Plazas_Ocupadas" : 1819,
		"Plazas_Vacantes" : 293,
		"Porcentaje_Ocupadas" : 86.13,
		"Porcentaje_Vacantes" : 13.87
	},
	{
		"Clasificacion_Unidad" : "03 Tercer Nivel UMAE",
		"Plazas_Ocupadas" : 273,
		"Plazas_Vacantes" : 56,
		"Porcentaje_Ocupadas" : 82.98,
		"Porcentaje_Vacantes" : 17.02
	},
	{
		"Clasificacion_Unidad" : "01 Primer Nivel",
		"Plazas_Ocupadas" : 850,
		"Plazas_Vacantes" : 43,
		"Porcentaje_Ocupadas" : 95.18,
		"Porcentaje_Vacantes" : 4.82
	},
	{
		"Clasificacion_Unidad" : "17 Unidades Apoyo Operativo",
		"Plazas_Ocupadas" : 9,
		"Plazas_Vacantes" : 2,
		"Porcentaje_Ocupadas" : 81.82,
		"Porcentaje_Vacantes" : 18.18
	},
	{
		"Clasificacion_Unidad" : "14 Sede Delegacional",
		"Plazas_Ocupadas" : 85,
		"Plazas_Vacantes" : 1,
		"Porcentaje_Ocupadas" : 98.84,
		"Porcentaje_Vacantes" : 1.16
	},
	{
		"Clasificacion_Unidad" : "05 Guarderías",
		"Plazas_Ocupadas" : 5,
		"Plazas_Vacantes" : 0,
		"Porcentaje_Ocupadas" : 100.00,
		"Porcentaje_Vacantes" : 0.00
	},
	{
		"Clasificacion_Unidad" : "15 Unidades Prestaciones Médicas",
		"Plazas_Ocupadas" : 4,
		"Plazas_Vacantes" : 0,
		"Porcentaje_Ocupadas" : 100.00,
		"Porcentaje_Vacantes" : 0.00
	}
];