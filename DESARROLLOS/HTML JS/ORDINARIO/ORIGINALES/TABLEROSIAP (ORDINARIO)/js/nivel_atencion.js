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
		"Plazas_Ocupadas" : 223744,
		"Plazas_Vacantes" : 21319,
		"Porcentaje_Ocupadas" : 91.30,
		"Porcentaje_Vacantes" : 8.70
	},
	{
		"Clasificacion_Unidad" : "01 Primer Nivel",
		"Plazas_Ocupadas" : 104507,
		"Plazas_Vacantes" : 4973,
		"Porcentaje_Ocupadas" : 95.46,
		"Porcentaje_Vacantes" : 4.54
	},
	{
		"Clasificacion_Unidad" : "03 Tercer Nivel UMAE",
		"Plazas_Ocupadas" : 56686,
		"Plazas_Vacantes" : 2995,
		"Porcentaje_Ocupadas" : 94.98,
		"Porcentaje_Vacantes" : 5.02
	},
	{
		"Clasificacion_Unidad" : "14 Sede Delegacional",
		"Plazas_Ocupadas" : 22919,
		"Plazas_Vacantes" : 2039,
		"Porcentaje_Ocupadas" : 91.83,
		"Porcentaje_Vacantes" : 8.17
	},
	{
		"Clasificacion_Unidad" : "06 SubDelegaciones",
		"Plazas_Ocupadas" : 14003,
		"Plazas_Vacantes" : 1443,
		"Porcentaje_Ocupadas" : 90.66,
		"Porcentaje_Vacantes" : 9.34
	},
	{
		"Clasificacion_Unidad" : "16 Unidades Prestaciones Económicas",
		"Plazas_Ocupadas" : 4343,
		"Plazas_Vacantes" : 868,
		"Porcentaje_Ocupadas" : 83.34,
		"Porcentaje_Vacantes" : 16.66
	},
	{
		"Clasificacion_Unidad" : "13 Sede Nivel Central",
		"Plazas_Ocupadas" : 6487,
		"Plazas_Vacantes" : 747,
		"Porcentaje_Ocupadas" : 89.67,
		"Porcentaje_Vacantes" : 10.33
	},
	{
		"Clasificacion_Unidad" : "05 Guarderías",
		"Plazas_Ocupadas" : 9152,
		"Plazas_Vacantes" : 730,
		"Porcentaje_Ocupadas" : 92.61,
		"Porcentaje_Vacantes" : 7.39
	},
	{
		"Clasificacion_Unidad" : "17 Unidades Apoyo Operativo",
		"Plazas_Ocupadas" : 3265,
		"Plazas_Vacantes" : 369,
		"Porcentaje_Ocupadas" : 89.85,
		"Porcentaje_Vacantes" : 10.15
	},
	{
		"Clasificacion_Unidad" : "09 Tiendas Empleados IMSS",
		"Plazas_Ocupadas" : 1043,
		"Plazas_Vacantes" : 357,
		"Porcentaje_Ocupadas" : 74.50,
		"Porcentaje_Vacantes" : 25.50
	},
	{
		"Clasificacion_Unidad" : "10 Almacenes",
		"Plazas_Ocupadas" : 681,
		"Plazas_Vacantes" : 208,
		"Porcentaje_Ocupadas" : 76.60,
		"Porcentaje_Vacantes" : 23.40
	},
	{
		"Clasificacion_Unidad" : "04 Tercer Nivel",
		"Plazas_Ocupadas" : 4707,
		"Plazas_Vacantes" : 187,
		"Porcentaje_Ocupadas" : 96.18,
		"Porcentaje_Vacantes" : 3.82
	},
	{
		"Clasificacion_Unidad" : "15 Unidades Prestaciones Médicas",
		"Plazas_Ocupadas" : 805,
		"Plazas_Vacantes" : 122,
		"Porcentaje_Ocupadas" : 86.84,
		"Porcentaje_Vacantes" : 13.16
	},
	{
		"Clasificacion_Unidad" : "08 Plantas de Lavado",
		"Plazas_Ocupadas" : 2129,
		"Plazas_Vacantes" : 86,
		"Porcentaje_Ocupadas" : 96.12,
		"Porcentaje_Vacantes" : 3.88
	},
	{
		"Clasificacion_Unidad" : "11 Centros de Capacitación",
		"Plazas_Ocupadas" : 498,
		"Plazas_Vacantes" : 49,
		"Porcentaje_Ocupadas" : 91.04,
		"Porcentaje_Vacantes" : 8.96
	},
	{
		"Clasificacion_Unidad" : "07 Velatorios",
		"Plazas_Ocupadas" : 267,
		"Plazas_Vacantes" : 21,
		"Porcentaje_Ocupadas" : 92.71,
		"Porcentaje_Vacantes" : 7.29
	},
	{
		"Clasificacion_Unidad" : "12 Teatros",
		"Plazas_Ocupadas" : 94,
		"Plazas_Vacantes" : 5,
		"Porcentaje_Ocupadas" : 94.95,
		"Porcentaje_Vacantes" : 5.05
	}
];