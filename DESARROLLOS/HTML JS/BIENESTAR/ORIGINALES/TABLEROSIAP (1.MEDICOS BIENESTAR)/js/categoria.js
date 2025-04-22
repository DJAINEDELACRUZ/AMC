/*Extraer este es un problema pero estos son los querys aplicados paso por paso para hacerlo

-- Numero 1

CREATE TABLE procesado.plazas_vacantes_por_estado_TOTAL AS
SELECT
    p.NUMDEL,
    CASE
        WHEN p.NUMDEL IN ('31', '32') THEN '30' -- Agrupa Veracruz Norte y Sur como 30
        WHEN p.NUMDEL IN ('35', '36', '37', '38') THEN '09' -- Agrupa Ciudad de México (DF Norte y Sur) como 09
        WHEN p.NUMDEL IN ('15', '16') THEN '15' -- Agrupa México Oriente y Poniente como 15
        ELSE p.NUMDEL -- Deja los demás estados igual
    END AS NUMELINEGI,
    p.DELEGACION,
    COUNT(DISTINCT p.DEPENDENCIA) AS TOTAL_UNIDADES,
    SUM(CASE WHEN p.PLZOCU = 1 THEN 1 ELSE 0 END) AS OCUPADAS,
    SUM(CASE WHEN p.PLZVAC = 1 THEN 1 ELSE 0 END) AS VACANTES
FROM
    personalaps.plantillaordinario p
WHERE DESCRIP_CLASCATEG = '1.MÉDICOS'
AND p.QNA = '2024017'
GROUP BY
    NUMELINEGI, p.NUMDEL, p.DELEGACION
ORDER BY
    NUMELINEGI, p.NUMDEL;

SELECT * FROM procesado.plazas_vacantes_por_estado_TOTAL;


-- Numero 2

UPDATE procesado.plazas_vacantes_por_estado_TOTAL
SET NUMELINEGI = 
    CASE 
        WHEN DELEGACION = 'Michoacán' THEN '16'
        WHEN DELEGACION = 'Morelos' THEN '17'
        WHEN DELEGACION = 'Nayarit' THEN '18'
        WHEN DELEGACION = 'Nuevo León' THEN '19'
        WHEN DELEGACION = 'Oaxaca' THEN '20'
        WHEN DELEGACION = 'Puebla' THEN '21'
        WHEN DELEGACION = 'Querétaro' THEN '22'
        WHEN DELEGACION = 'Quintana Roo' THEN '23'
        WHEN DELEGACION = 'San Luis Potosí' THEN '24'
        WHEN DELEGACION = 'Sinaloa' THEN '25'
        WHEN DELEGACION = 'Sonora' THEN '26'
        WHEN DELEGACION = 'Tabasco' THEN '27'
        WHEN DELEGACION = 'Tamaulipas' THEN '28'
        WHEN DELEGACION = 'Tlaxcala' THEN '29'
        WHEN DELEGACION = 'Veracruz Norte' THEN '30'
        WHEN DELEGACION = 'Veracruz Sur' THEN '30'
        WHEN DELEGACION = 'Yucatán' THEN '31'
        WHEN DELEGACION = 'Zacatecas' THEN '32'
        ELSE NUMELINEGI
    END
WHERE DELEGACION IN ('Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 
                     'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 
                     'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 
                     'Veracruz Norte', 'Veracruz Sur', 'Yucatán', 'Zacatecas');


-- Numero 3

CREATE TABLE procesado.vacantes_estado_densidad_poblacional_TOTAL AS
SELECT
    CASE
        -- Agrupar Veracruz Norte y Sur bajo NUMELINEGI 30
        WHEN pvpe.NUMELINEGI = '30' THEN '30'
        -- Agrupar Ciudad de México (DF Norte y Sur) bajo NUMELINEGI 09
        WHEN pvpe.NUMELINEGI = '09' THEN '09'
        -- Agrupar México Oriente y Poniente bajo NUMELINEGI 15
        WHEN pvpe.NUMELINEGI = '15' THEN '15'
        ELSE pvpe.NUMELINEGI
    END AS NUMELINEGI,
    CASE
        -- Renombrar Veracruz agrupado
        WHEN pvpe.NUMELINEGI = '30' THEN 'Veracruz'
        -- Renombrar Ciudad de México agrupado
        WHEN pvpe.NUMELINEGI = '09' THEN 'Ciudad de México'
        -- Renombrar México agrupado
        WHEN pvpe.NUMELINEGI = '15' THEN 'Estado de México'
        ELSE pvpe.DELEGACION
    END AS DELEGACION,
    SUM(pvpe.TOTAL_UNIDADES) AS TOTAL_UNIDADES,
    SUM(pvpe.OCUPADAS) AS OCUPADAS,
    SUM(pvpe.VACANTES) AS VACANTES,
    SUM(catalogo.imss) AS DERECHOHABIENTES
FROM
    procesado.plazas_vacantes_por_estado_TOTAL pvpe
LEFT JOIN
    personalaps.catalogo_derechohabiencia_estado catalogo
    ON pvpe.NUMELINEGI = catalogo.numero_delegacion
GROUP BY
    NUMELINEGI, DELEGACION
ORDER BY
    NUMELINEGI;

SELECT *  FROM procesado.vacantes_estado_densidad_poblacional_TOTAL;


-- Numero 4

CREATE TABLE procesado.vacantes_estado_densidad_poblacional_agrupado_TOTAL AS
SELECT 
    NUMELINEGI,
    DELEGACION,
    SUM(TOTAL_UNIDADES) AS TOTAL_UNIDADES,
    SUM(VACANTES) AS PLAZAS_VACANTES,
    SUM(OCUPADAS) AS PLAZAS_OCUPADAS,
    MAX(DERECHOHABIENTES) AS DERECHOHABIENTES -- Obtiene cualquier valor (ya que son iguales)
FROM 
    procesado.vacantes_estado_densidad_poblacional_TOTAL
GROUP BY 
    NUMELINEGI, DELEGACION
ORDER BY 
    NUMELINEGI;

SELECT DELEGACION, DERECHOHABIENTES, PLAZAS_OCUPADAS, PLAZAS_VACANTES FROM procesado.vacantes_estado_densidad_poblacional_agrupado_TOTAL;

*/

// 📌 Array de datos SIN base de datos
const datos = [
	{
		"DELEGACION" : "Baja California",
		"DERECHOHABIENTES" : 19862,
		"PLAZAS_OCUPADAS" : 30,
		"PLAZAS_VACANTES" : 23
	},
	{
		"DELEGACION" : "Campeche",
		"DERECHOHABIENTES" : 8950,
		"PLAZAS_OCUPADAS" : 74,
		"PLAZAS_VACANTES" : 35
	},
	{
		"DELEGACION" : "Coahuila",
		"DERECHOHABIENTES" : 12289,
		"PLAZAS_OCUPADAS" : 94,
		"PLAZAS_VACANTES" : 61
	},
	{
		"DELEGACION" : "Colima",
		"DERECHOHABIENTES" : 2774,
		"PLAZAS_OCUPADAS" : 28,
		"PLAZAS_VACANTES" : 5
	},
	{
		"DELEGACION" : "Chiapas",
		"DERECHOHABIENTES" : 169403,
		"PLAZAS_OCUPADAS" : 760,
		"PLAZAS_VACANTES" : 290
	},
	{
		"DELEGACION" : "Chihuahua",
		"DERECHOHABIENTES" : 31733,
		"PLAZAS_OCUPADAS" : 93,
		"PLAZAS_VACANTES" : 121
	},
	{
		"DELEGACION" : "Ciudad de México",
		"DERECHOHABIENTES" : 21158,
		"PLAZAS_OCUPADAS" : 21,
		"PLAZAS_VACANTES" : 13
	},
	{
		"DELEGACION" : "Durango",
		"DERECHOHABIENTES" : 16703,
		"PLAZAS_OCUPADAS" : 116,
		"PLAZAS_VACANTES" : 97
	},
	{
		"DELEGACION" : "Guerrero",
		"DERECHOHABIENTES" : 36293,
		"PLAZAS_OCUPADAS" : 45,
		"PLAZAS_VACANTES" : 26
	},
	{
		"DELEGACION" : "Hidalgo",
		"DERECHOHABIENTES" : 22969,
		"PLAZAS_OCUPADAS" : 213,
		"PLAZAS_VACANTES" : 104
	},
	{
		"DELEGACION" : "Estado de México",
		"DERECHOHABIENTES" : 66031,
		"PLAZAS_OCUPADAS" : 72,
		"PLAZAS_VACANTES" : 46
	},
	{
		"DELEGACION" : "Michoacán",
		"DERECHOHABIENTES" : 41892,
		"PLAZAS_OCUPADAS" : 281,
		"PLAZAS_VACANTES" : 173
	},
	{
		"DELEGACION" : "Nayarit",
		"DERECHOHABIENTES" : 21313,
		"PLAZAS_OCUPADAS" : 234,
		"PLAZAS_VACANTES" : 29
	},
	{
		"DELEGACION" : "Oaxaca",
		"DERECHOHABIENTES" : 97052,
		"PLAZAS_OCUPADAS" : 794,
		"PLAZAS_VACANTES" : 152
	},
	{
		"DELEGACION" : "Puebla",
		"DERECHOHABIENTES" : 54956,
		"PLAZAS_OCUPADAS" : 327,
		"PLAZAS_VACANTES" : 153
	},
	{
		"DELEGACION" : "San Luis Potosí",
		"DERECHOHABIENTES" : 43932,
		"PLAZAS_OCUPADAS" : 256,
		"PLAZAS_VACANTES" : 213
	},
	{
		"DELEGACION" : "Sinaloa",
		"DERECHOHABIENTES" : 18879,
		"PLAZAS_OCUPADAS" : 117,
		"PLAZAS_VACANTES" : 79
	},
	{
		"DELEGACION" : "Tamaulipas",
		"DERECHOHABIENTES" : 16284,
		"PLAZAS_OCUPADAS" : 85,
		"PLAZAS_VACANTES" : 123
	},
	{
		"DELEGACION" : "Tlaxcala",
		"DERECHOHABIENTES" : 4519,
		"PLAZAS_OCUPADAS" : 253,
		"PLAZAS_VACANTES" : 5
	},
	{
		"DELEGACION" : "Veracruz",
		"DERECHOHABIENTES" : 108127,
		"PLAZAS_OCUPADAS" : 556,
		"PLAZAS_VACANTES" : 287
	},
	{
		"DELEGACION" : "Yucatán",
		"DERECHOHABIENTES" : 26576,
		"PLAZAS_OCUPADAS" : 168,
		"PLAZAS_VACANTES" : 48
	},
	{
		"DELEGACION" : "Zacatecas",
		"DERECHOHABIENTES" : 14392,
		"PLAZAS_OCUPADAS" : 218,
		"PLAZAS_VACANTES" : 179
	}
];

/*
Query para extraer esta informacion de la tabla plazas ocupadas y vacantes por categoria 

SELECT 
    p.CATEGORIA,
    COUNT(CASE WHEN p.PLZOCU = 1 THEN p.MATRICULA END) AS PLAZAS_OCUPADAS,
    COUNT(CASE WHEN p.PLZVAC = 1 THEN p.MATRICULA END) AS PLAZAS_VACANTES,
    (COUNT(CASE WHEN p.PLZOCU = 1 THEN p.MATRICULA END) - 
    COUNT(CASE WHEN p.PLZVAC = 1 THEN p.MATRICULA END)) AS DIFERENCIA,
    ROUND(
    COUNT(CASE WHEN p.PLZOCU = 1 THEN p.MATRICULA END) * 100.0 /
    NULLIF(COUNT(p.MATRICULA), 0), 2
) AS PORCENTAJE_OCUPACION
FROM 
    personalaps.plantillaordinario p
WHERE p.DESCRIP_CLASCATEG = "1.MÉDICOS"
AND p.QNA = '2024017'
GROUP BY 
    p.CATEGORIA
ORDER BY 
    PLAZAS_VACANTES DESC;
*/

const datos8 = [
	{
		"CATEGORIA" : "MEDICO NO FAMILIAR H R",
		"PLAZAS_OCUPADAS" : 1182,
		"PLAZAS_VACANTES" : 1215,
		"DIFERENCIA" : -33,
		"PORCENTAJE_OCUPACION" : 49.31
	},
	{
		"CATEGORIA" : "MEDICO GENERAL U MED  80",
		"PLAZAS_OCUPADAS" : 3150,
		"PLAZAS_VACANTES" : 904,
		"DIFERENCIA" : 2246,
		"PORCENTAJE_OCUPACION" : 77.70
	},
	{
		"CATEGORIA" : "N45 COORD MEDICO HR",
		"PLAZAS_OCUPADAS" : 73,
		"PLAZAS_VACANTES" : 42,
		"DIFERENCIA" : 31,
		"PORCENTAJE_OCUPACION" : 63.48
	},
	{
		"CATEGORIA" : "N41 SUPERV MED AUX UMR RURAL 80",
		"PLAZAS_OCUPADAS" : 163,
		"PLAZAS_VACANTES" : 35,
		"DIFERENCIA" : 128,
		"PORCENTAJE_OCUPACION" : 82.32
	},
	{
		"CATEGORIA" : "COORD MEDICO HOSPITAL RURAL E0",
		"PLAZAS_OCUPADAS" : 34,
		"PLAZAS_VACANTES" : 13,
		"DIFERENCIA" : 21,
		"PORCENTAJE_OCUPACION" : 72.34
	},
	{
		"CATEGORIA" : "SUPERV MEDICO AUX UMR RURAL E0",
		"PLAZAS_OCUPADAS" : 41,
		"PLAZAS_VACANTES" : 12,
		"DIFERENCIA" : 29,
		"PORCENTAJE_OCUPACION" : 77.36
	},
	{
		"CATEGORIA" : "N56 SUPERV MED PROG RURAL 80",
		"PLAZAS_OCUPADAS" : 40,
		"PLAZAS_VACANTES" : 12,
		"DIFERENCIA" : 28,
		"PORCENTAJE_OCUPACION" : 76.92
	},
	{
		"CATEGORIA" : "N52 DIRECTOR HOSP RURAL80",
		"PLAZAS_OCUPADAS" : 59,
		"PLAZAS_VACANTES" : 10,
		"DIFERENCIA" : 49,
		"PORCENTAJE_OCUPACION" : 85.51
	},
	{
		"CATEGORIA" : "MED GENERAL UNIDAD MEDICA E0",
		"PLAZAS_OCUPADAS" : 21,
		"PLAZAS_VACANTES" : 5,
		"DIFERENCIA" : 16,
		"PORCENTAJE_OCUPACION" : 80.77
	},
	{
		"CATEGORIA" : "N43 MEDICO ESP HR 80",
		"PLAZAS_OCUPADAS" : 15,
		"PLAZAS_VACANTES" : 4,
		"DIFERENCIA" : 11,
		"PORCENTAJE_OCUPACION" : 78.95
	},
	{
		"CATEGORIA" : "SUPERV MEDICO PROGS RURAL E0",
		"PLAZAS_OCUPADAS" : 8,
		"PLAZAS_VACANTES" : 2,
		"DIFERENCIA" : 6,
		"PORCENTAJE_OCUPACION" : 80.00
	},
	{
		"CATEGORIA" : "MED ESPECIAL HOSPITAL RURAL E0",
		"PLAZAS_OCUPADAS" : 3,
		"PLAZAS_VACANTES" : 2,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 60.00
	},
	{
		"CATEGORIA" : "JEFE AREA MEDICA RURAL E0",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 1,
		"DIFERENCIA" : 0,
		"PORCENTAJE_OCUPACION" : 50.00
	},
	{
		"CATEGORIA" : "N57 COOR DELEG MED RURAL 80",
		"PLAZAS_OCUPADAS" : 9,
		"PLAZAS_VACANTES" : 1,
		"DIFERENCIA" : 8,
		"PORCENTAJE_OCUPACION" : 90.00
	},
	{
		"CATEGORIA" : "N62 JEFE AREA MEDICA   80",
		"PLAZAS_OCUPADAS" : 5,
		"PLAZAS_VACANTES" : 1,
		"DIFERENCIA" : 4,
		"PORCENTAJE_OCUPACION" : 83.33
	},
	{
		"CATEGORIA" : "DIR HOSPITAL RURAL E0",
		"PLAZAS_OCUPADAS" : 17,
		"PLAZAS_VACANTES" : 1,
		"DIFERENCIA" : 16,
		"PORCENTAJE_OCUPACION" : 94.44
	},
	{
		"CATEGORIA" : "N57 COORD PROG MED RURAL 80",
		"PLAZAS_OCUPADAS" : 5,
		"PLAZAS_VACANTES" : 1,
		"DIFERENCIA" : 4,
		"PORCENTAJE_OCUPACION" : 83.33
	},
	{
		"CATEGORIA" : "N62 JEFE AREA MED RURAL 80",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 1,
		"DIFERENCIA" : 0,
		"PORCENTAJE_OCUPACION" : 50.00
	},
	{
		"CATEGORIA" : "N34 MEDICO GRAL U MED  80",
		"PLAZAS_OCUPADAS" : 5,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 5,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N43 ANESTESIOLOGO UMH  80",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "COORD DELEG MED RURAL E0",
		"PLAZAS_OCUPADAS" : 2,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 2,
		"PORCENTAJE_OCUPACION" : 100.00
	}
];
