/* query para crear la tabla plazas ocupadas y vacantes por OOAD ejecutar el siguiente query

SELECT
	p.NUMDEL,
	p.DELEGACION,
	COUNT(DISTINCT p.DEPENDENCIA) AS TOTAL_UNIDADES,
	SUM(CASE WHEN p.PLZOCU = 1 THEN 1 ELSE 0 END) AS OCUPADAS,
	SUM(CASE WHEN p.PLZVAC = 1 THEN 1 ELSE 0 END) AS VACANTES,
	ROUND(SUM(CASE WHEN p.PLZOCU = 1 THEN 1 ELSE 0 END) * 100.0 / 
		NULLIF(SUM(CASE WHEN p.PLZOCU = 1 OR p.PLZVAC = 1 THEN 1 ELSE 0 END), 0), 2) AS PORCENTAJE_OCUPADAS,
	ROUND(SUM(CASE WHEN p.PLZVAC = 1 THEN 1 ELSE 0 END) * 100.0 / 
		NULLIF(SUM(CASE WHEN p.PLZOCU = 1 OR p.PLZVAC = 1 THEN 1 ELSE 0 END), 0), 2) AS PORCENTAJE_VACANTES
FROM 
	personalaps.plantillaordinario p
WHERE 
	p.DESCRIP_CLASCATEG = '1.MÉDICOS'
AND p.QNA = '2024017'
AND p.NUMDEL = '27'
AND p.DELEGACION = 'Sonora'
GROUP BY
	p.NUMDEL, p.DELEGACION
ORDER BY
	p.NUMDEL; 

*/

const datosDelegaciones = [
	{
		"NUMDEL" : "31",
		"DELEGACION" : "Veracruz Norte",
		"TOTAL_UNIDADES" : 62,
		"OCUPADAS" : 2537,
		"VACANTES" : 320,
		"PORCENTAJE_OCUPADAS" : 88.80,
		"PORCENTAJE_VACANTES" : 11.20
	},
	{
		"NUMDEL" : "32",
		"DELEGACION" : "Veracruz Sur",
		"TOTAL_UNIDADES" : 72,
		"OCUPADAS" : 1723,
		"VACANTES" : 169,
		"PORCENTAJE_OCUPADAS" : 91.07,
		"PORCENTAJE_VACANTES" : 8.93
	}
];

/* query para extraer esta información del modal desagregado
SELECT 
    p.NUMDEL, 
    p.DELEGACION, 
    p.CATEGORIA AS CATEGORIA, 
    p.DESCRIP_CLASCATEG AS DESCRIPCION,
    COUNT(*) AS VACANTES
FROM 
    personalaps.plantillaordinario p
WHERE 
    p.QNA = '2024017'
    AND p.NUMDEL IN ('31','32')
    AND p.DELEGACION IN ('Veracruz Norte', 'Veracruz Sur')
    AND p.DESCRIP_CLASCATEG = '1.MÉDICOS'
    AND p.PLZOCU = 0  -- ← esta es la clave
GROUP BY 
    p.NUMDEL, p.DELEGACION, p.CATEGORIA, p.DESCRIP_CLASCATEG
ORDER BY 
    p.NUMDEL, p.CATEGORIA;
*/
const datosDelegacionesDesagregado = [
	{
		"NUMDEL" : "31",
		"DELEGACION" : "Veracruz Norte",
		"CATEGORIA" : "MED TRAS PAC URGENCIA  80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 2
	},
	{
		"NUMDEL" : "31",
		"DELEGACION" : "Veracruz Norte",
		"CATEGORIA" : "MEDICO FAMILIAR        80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 103
	},
	{
		"NUMDEL" : "31",
		"DELEGACION" : "Veracruz Norte",
		"CATEGORIA" : "MEDICO GENERAL 80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 25
	},
	{
		"NUMDEL" : "31",
		"DELEGACION" : "Veracruz Norte",
		"CATEGORIA" : "MEDICO NO FAMILIAR     80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 154
	},
	{
		"NUMDEL" : "31",
		"DELEGACION" : "Veracruz Norte",
		"CATEGORIA" : "N49 DIR UMF 4 5 Y 6   80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 1
	},
	{
		"NUMDEL" : "31",
		"DELEGACION" : "Veracruz Norte",
		"CATEGORIA" : "N51 JEF SPPSTIMSS UMH 2NIV 80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 2
	},
	{
		"NUMDEL" : "31",
		"DELEGACION" : "Veracruz Norte",
		"CATEGORIA" : "N51 JEFE SERVICIO CONSULT EXT UMH 80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 1
	},
	{
		"NUMDEL" : "31",
		"DELEGACION" : "Veracruz Norte",
		"CATEGORIA" : "N51 JEFE SERVICIO UMH  80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 11
	},
	{
		"NUMDEL" : "31",
		"DELEGACION" : "Veracruz Norte",
		"CATEGORIA" : "N51 JEFE SERVICIOS UMF 80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 1
	},
	{
		"NUMDEL" : "31",
		"DELEGACION" : "Veracruz Norte",
		"CATEGORIA" : "N52 COORD CLINICO UMH  80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 3
	},
	{
		"NUMDEL" : "31",
		"DELEGACION" : "Veracruz Norte",
		"CATEGORIA" : "N53 COORD CL TURNO UMH 80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 2
	},
	{
		"NUMDEL" : "31",
		"DELEGACION" : "Veracruz Norte",
		"CATEGORIA" : "N53 JEF DEPTO CLIN UMAE80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 7
	},
	{
		"NUMDEL" : "31",
		"DELEGACION" : "Veracruz Norte",
		"CATEGORIA" : "N54 DIRECTOR UMF 1     80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 1
	},
	{
		"NUMDEL" : "31",
		"DELEGACION" : "Veracruz Norte",
		"CATEGORIA" : "N54 DIRECTOR UMH C     80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 2
	},
	{
		"NUMDEL" : "31",
		"DELEGACION" : "Veracruz Norte",
		"CATEGORIA" : "N54 MED SUP MED FAM 80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 1
	},
	{
		"NUMDEL" : "31",
		"DELEGACION" : "Veracruz Norte",
		"CATEGORIA" : "N55 JEFE DIV MED UMAE  80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 1
	},
	{
		"NUMDEL" : "31",
		"DELEGACION" : "Veracruz Norte",
		"CATEGORIA" : "N56 DIRECTOR UMH A     80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 1
	},
	{
		"NUMDEL" : "31",
		"DELEGACION" : "Veracruz Norte",
		"CATEGORIA" : "N58 COORDINADOR(A) PLAN ENL INST D3 Y D4",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 1
	},
	{
		"NUMDEL" : "31",
		"DELEGACION" : "Veracruz Norte",
		"CATEGORIA" : "N58 DIR ED INV SA UMAE 80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 1
	},
	{
		"NUMDEL" : "32",
		"DELEGACION" : "Veracruz Sur",
		"CATEGORIA" : "MED TRAS PAC URGENCIA  80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 1
	},
	{
		"NUMDEL" : "32",
		"DELEGACION" : "Veracruz Sur",
		"CATEGORIA" : "MEDICO FAMILIAR        80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 4
	},
	{
		"NUMDEL" : "32",
		"DELEGACION" : "Veracruz Sur",
		"CATEGORIA" : "MEDICO GENERAL 80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 13
	},
	{
		"NUMDEL" : "32",
		"DELEGACION" : "Veracruz Sur",
		"CATEGORIA" : "MEDICO NO FAMILIAR     80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 127
	},
	{
		"NUMDEL" : "32",
		"DELEGACION" : "Veracruz Sur",
		"CATEGORIA" : "N49 DIR UMF 4 5 Y 6   80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 2
	},
	{
		"NUMDEL" : "32",
		"DELEGACION" : "Veracruz Sur",
		"CATEGORIA" : "N51 JEF SPPSTIMSS UMH 2NIV 80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 1
	},
	{
		"NUMDEL" : "32",
		"DELEGACION" : "Veracruz Sur",
		"CATEGORIA" : "N51 JEFE SERVICIO CONSULT EXT UMH 80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 2
	},
	{
		"NUMDEL" : "32",
		"DELEGACION" : "Veracruz Sur",
		"CATEGORIA" : "N51 JEFE SERVICIO UMH  80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 7
	},
	{
		"NUMDEL" : "32",
		"DELEGACION" : "Veracruz Sur",
		"CATEGORIA" : "N51 JEFE SERVICIOS UMF 80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 1
	},
	{
		"NUMDEL" : "32",
		"DELEGACION" : "Veracruz Sur",
		"CATEGORIA" : "N52 COORD CLINICO UMH  80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 6
	},
	{
		"NUMDEL" : "32",
		"DELEGACION" : "Veracruz Sur",
		"CATEGORIA" : "N52 DIRECTOR UMF 3     80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 1
	},
	{
		"NUMDEL" : "32",
		"DELEGACION" : "Veracruz Sur",
		"CATEGORIA" : "N52 JEFE CLIN SAL TRAB 80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 1
	},
	{
		"NUMDEL" : "32",
		"DELEGACION" : "Veracruz Sur",
		"CATEGORIA" : "N54 MED SUP EPIDEMIOLOGO 80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 1
	},
	{
		"NUMDEL" : "32",
		"DELEGACION" : "Veracruz Sur",
		"CATEGORIA" : "N54 SUBDIR MED UMH B   80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 1
	},
	{
		"NUMDEL" : "32",
		"DELEGACION" : "Veracruz Sur",
		"CATEGORIA" : "N56 COORD AUX MED EDUCA D3YD4 80",
		"DESCRIPCION" : "1.MÉDICOS",
		"VACANTES" : 1
	}
];