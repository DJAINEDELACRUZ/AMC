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
		"DELEGACION" : "Sonora",
		"DERECHOHABIENTES" : 1579466,
		"PLAZAS_OCUPADAS" : 3045,
		"PLAZAS_VACANTES" : 395
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
AND NUMDEL = '27'
AND DELEGACION = 'Sonora'
GROUP BY 
    p.CATEGORIA
ORDER BY 
    PLAZAS_VACANTES DESC;
*/

const datos8 = [
	{
		"CATEGORIA" : "MEDICO NO FAMILIAR     80",
		"PLAZAS_OCUPADAS" : 1775,
		"PLAZAS_VACANTES" : 291,
		"DIFERENCIA" : 1484,
		"PORCENTAJE_OCUPACION" : 85.91
	},
	{
		"CATEGORIA" : "MEDICO FAMILIAR        80",
		"PLAZAS_OCUPADAS" : 693,
		"PLAZAS_VACANTES" : 32,
		"DIFERENCIA" : 661,
		"PORCENTAJE_OCUPACION" : 95.59
	},
	{
		"CATEGORIA" : "MEDICO GENERAL 80",
		"PLAZAS_OCUPADAS" : 323,
		"PLAZAS_VACANTES" : 17,
		"DIFERENCIA" : 306,
		"PORCENTAJE_OCUPACION" : 95.00
	},
	{
		"CATEGORIA" : "N51 JEFE SERVICIO UMH  80",
		"PLAZAS_OCUPADAS" : 50,
		"PLAZAS_VACANTES" : 14,
		"DIFERENCIA" : 36,
		"PORCENTAJE_OCUPACION" : 78.13
	},
	{
		"CATEGORIA" : "N53 JEF DEPTO CLIN UMAE80",
		"PLAZAS_OCUPADAS" : 13,
		"PLAZAS_VACANTES" : 14,
		"DIFERENCIA" : -1,
		"PORCENTAJE_OCUPACION" : 48.15
	},
	{
		"CATEGORIA" : "N52 COORD CLINICO UMH  80",
		"PLAZAS_OCUPADAS" : 22,
		"PLAZAS_VACANTES" : 6,
		"DIFERENCIA" : 16,
		"PORCENTAJE_OCUPACION" : 78.57
	},
	{
		"CATEGORIA" : "N51 JEFE SERVICIOS UMF 80",
		"PLAZAS_OCUPADAS" : 37,
		"PLAZAS_VACANTES" : 3,
		"DIFERENCIA" : 34,
		"PORCENTAJE_OCUPACION" : 92.50
	},
	{
		"CATEGORIA" : "MED TRAS PAC URGENCIA  80",
		"PLAZAS_OCUPADAS" : 0,
		"PLAZAS_VACANTES" : 3,
		"DIFERENCIA" : -3,
		"PORCENTAJE_OCUPACION" : 0.00
	},
	{
		"CATEGORIA" : "N55 JEFE DIV MED UMAE  80",
		"PLAZAS_OCUPADAS" : 10,
		"PLAZAS_VACANTES" : 2,
		"DIFERENCIA" : 8,
		"PORCENTAJE_OCUPACION" : 83.33
	},
	{
		"CATEGORIA" : "N51 JEFE SERVICIO CONSULT EXT UMH 80",
		"PLAZAS_OCUPADAS" : 3,
		"PLAZAS_VACANTES" : 1,
		"DIFERENCIA" : 2,
		"PORCENTAJE_OCUPACION" : 75.00
	},
	{
		"CATEGORIA" : "MED ESPECIALISTA PSIQUIATRA CAICE",
		"PLAZAS_OCUPADAS" : 0,
		"PLAZAS_VACANTES" : 1,
		"DIFERENCIA" : -1,
		"PORCENTAJE_OCUPACION" : 0.00
	},
	{
		"CATEGORIA" : "N53 SUBDIR MED UMH C   80",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 1,
		"DIFERENCIA" : 0,
		"PORCENTAJE_OCUPACION" : 50.00
	},
	{
		"CATEGORIA" : "N56 COORD AUX GEST MED D3YD4 80",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 1,
		"DIFERENCIA" : 0,
		"PORCENTAJE_OCUPACION" : 50.00
	},
	{
		"CATEGORIA" : "N55 MED ESP PEDIATRA CAICE",
		"PLAZAS_OCUPADAS" : 2,
		"PLAZAS_VACANTES" : 1,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 66.67
	},
	{
		"CATEGORIA" : "N51 MEDICO ESP ST      80",
		"PLAZAS_OCUPADAS" : 2,
		"PLAZAS_VACANTES" : 1,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 66.67
	},
	{
		"CATEGORIA" : "N56 DIRECTOR UMH A     80",
		"PLAZAS_OCUPADAS" : 3,
		"PLAZAS_VACANTES" : 1,
		"DIFERENCIA" : 2,
		"PORCENTAJE_OCUPACION" : 75.00
	},
	{
		"CATEGORIA" : "N49 DIR UMF 4 5 Y 6   80",
		"PLAZAS_OCUPADAS" : 0,
		"PLAZAS_VACANTES" : 1,
		"DIFERENCIA" : -1,
		"PORCENTAJE_OCUPACION" : 0.00
	},
	{
		"CATEGORIA" : "N51 JEF SPPSTIMSS UMH 2NIV 80",
		"PLAZAS_OCUPADAS" : 5,
		"PLAZAS_VACANTES" : 1,
		"DIFERENCIA" : 4,
		"PORCENTAJE_OCUPACION" : 83.33
	},
	{
		"CATEGORIA" : "N48 DIRECTOR MICROZONA 80",
		"PLAZAS_OCUPADAS" : 6,
		"PLAZAS_VACANTES" : 1,
		"DIFERENCIA" : 5,
		"PORCENTAJE_OCUPACION" : 85.71
	},
	{
		"CATEGORIA" : "N53 DIRECTOR UMH D     80",
		"PLAZAS_OCUPADAS" : 6,
		"PLAZAS_VACANTES" : 1,
		"DIFERENCIA" : 5,
		"PORCENTAJE_OCUPACION" : 85.71
	},
	{
		"CATEGORIA" : "N52 SUBDIR MEDICO UMF  80",
		"PLAZAS_OCUPADAS" : 5,
		"PLAZAS_VACANTES" : 1,
		"DIFERENCIA" : 4,
		"PORCENTAJE_OCUPACION" : 83.33
	},
	{
		"CATEGORIA" : "N53 COORD CL TURNO UMH 80",
		"PLAZAS_OCUPADAS" : 19,
		"PLAZAS_VACANTES" : 1,
		"DIFERENCIA" : 18,
		"PORCENTAJE_OCUPACION" : 95.00
	},
	{
		"CATEGORIA" : "N56 COORD AUX MED EDUCA D3YD4 80",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N58 DIR ED INV SA UMAE 80",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N56 COORD AUX MED SPPSTIMSS D3YD4 80",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N55 MED ESP MFR CAICE",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N49 DIRECTOR UMF       80",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N52 DIRECTOR UM D      80",
		"PLAZAS_OCUPADAS" : 6,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 6,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N56 COORD AUX MED INVEST D3YD4 80",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N55 SUBD MED UMH A     80",
		"PLAZAS_OCUPADAS" : 4,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 4,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N53 DIRECTOR  UMF 2    80",
		"PLAZAS_OCUPADAS" : 3,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 3,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N54 MED SUP HOSPITALES 80",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N62 JEFE(A) SERVS PREST MEDICAS D3 Y D4",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N58 COORDINADOR(A) GEST MEDICA D3 Y D4",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N55 DIRECTOR UMH B     80",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N58 COORDINADOR(A) PLAN ENL INST D3 Y D4",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N60 COOR ATN MED CAICE",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N52 JEFE CLIN SAL TRAB 80",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N59 COORDINADOR(A) PREV ATN SAL D3 Y D4",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N56 COORD AUX MED EPIDEMIOLOGI D3YD4 80",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N53 COORD HOSP DON ORG Y TEJ UMAE",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N58 COORDINADOR(A) SALUD TRAB D3 Y D4",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N54 SUBDIR MED UMH B   80",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N56 COORD AUX ATN MED D3YD4 80",
		"PLAZAS_OCUPADAS" : 2,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 2,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N52 JEFE DIVISION UMH  80",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N55 CONFIANZA MEDICA   80",
		"PLAZAS_OCUPADAS" : 3,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 3,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N53 DIR CENT INV ED FORM DOC 80",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N57 COOR CLIN TUR UMAE 80",
		"PLAZAS_OCUPADAS" : 4,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 4,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N51 DIRECTOR UMH E     80",
		"PLAZAS_OCUPADAS" : 5,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 5,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N56 COORD AUX MED SAL PUBLICA D3YD4 80",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N58 COORDINADOR(A) INF AN EST D3 Y D4",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N53 JEF SPPSTIMSS UMAE 80",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N56 COORD AUX MED SALUD TRAB D3YD4 80",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N54 DIRECTOR UMF 1     80",
		"PLAZAS_OCUPADAS" : 3,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 3,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N56 MED SUP LIDER 80",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N54 DIRECTOR UMH C     80",
		"PLAZAS_OCUPADAS" : 2,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 2,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N55 MEDICO ESP CAICE 80",
		"PLAZAS_OCUPADAS" : 2,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 2,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N51 PROF MED CENT INV ED FORM DOC 80",
		"PLAZAS_OCUPADAS" : 3,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 3,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N63 DIRECTOR MED UMAE 80",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N52 DIRECTOR UMF 3     80",
		"PLAZAS_OCUPADAS" : 4,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 4,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N54 MED SUP MED FAM 80",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	},
	{
		"CATEGORIA" : "N51 COORD HOSP DON ORG Y TEJ UMH",
		"PLAZAS_OCUPADAS" : 1,
		"PLAZAS_VACANTES" : 0,
		"DIFERENCIA" : 1,
		"PORCENTAJE_OCUPACION" : 100.00
	}
];
