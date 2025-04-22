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
WHERE QNA = '2024017'
AND NUMDEL = '26'
AND DELEGACION = 'Sinaloa'
GROUP BY 
    CLASIF_UNIDAD
ORDER BY 
    Plazas_Vacantes DESC;

*/

var jsonData = [
	{
		"Clasificacion_Unidad" : "02 Segundo Nivel",
		"Plazas_Ocupadas" : 7648,
		"Plazas_Vacantes" : 468,
		"Porcentaje_Ocupadas" : 94.23,
		"Porcentaje_Vacantes" : 5.77
	},
	{
		"Clasificacion_Unidad" : "01 Primer Nivel",
		"Plazas_Ocupadas" : 2868,
		"Plazas_Vacantes" : 107,
		"Porcentaje_Ocupadas" : 96.40,
		"Porcentaje_Vacantes" : 3.60
	},
	{
		"Clasificacion_Unidad" : "16 Unidades Prestaciones Económicas",
		"Plazas_Ocupadas" : 124,
		"Plazas_Vacantes" : 73,
		"Porcentaje_Ocupadas" : 62.94,
		"Porcentaje_Vacantes" : 37.06
	},
	{
		"Clasificacion_Unidad" : "14 Sede Delegacional",
		"Plazas_Ocupadas" : 593,
		"Plazas_Vacantes" : 46,
		"Porcentaje_Ocupadas" : 92.80,
		"Porcentaje_Vacantes" : 7.20
	},
	{
		"Clasificacion_Unidad" : "06 SubDelegaciones",
		"Plazas_Ocupadas" : 424,
		"Plazas_Vacantes" : 44,
		"Porcentaje_Ocupadas" : 90.60,
		"Porcentaje_Vacantes" : 9.40
	},
	{
		"Clasificacion_Unidad" : "09 Tiendas Empleados IMSS",
		"Plazas_Ocupadas" : 55,
		"Plazas_Vacantes" : 33,
		"Porcentaje_Ocupadas" : 62.50,
		"Porcentaje_Vacantes" : 37.50
	},
	{
		"Clasificacion_Unidad" : "05 Guarderías",
		"Plazas_Ocupadas" : 136,
		"Plazas_Vacantes" : 7,
		"Porcentaje_Ocupadas" : 95.10,
		"Porcentaje_Vacantes" : 4.90
	},
	{
		"Clasificacion_Unidad" : "17 Unidades Apoyo Operativo",
		"Plazas_Ocupadas" : 28,
		"Plazas_Vacantes" : 4,
		"Porcentaje_Ocupadas" : 87.50,
		"Porcentaje_Vacantes" : 12.50
	},
	{
		"Clasificacion_Unidad" : "12 Teatros",
		"Plazas_Ocupadas" : 2,
		"Plazas_Vacantes" : 1,
		"Porcentaje_Ocupadas" : 66.67,
		"Porcentaje_Vacantes" : 33.33
	},
	{
		"Clasificacion_Unidad" : "11 Centros de Capacitación",
		"Plazas_Ocupadas" : 7,
		"Plazas_Vacantes" : 0,
		"Porcentaje_Ocupadas" : 100.00,
		"Porcentaje_Vacantes" : 0.00
	}
];