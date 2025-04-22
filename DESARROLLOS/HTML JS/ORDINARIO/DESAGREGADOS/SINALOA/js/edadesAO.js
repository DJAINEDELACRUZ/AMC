// 🔹 Datos de la base de datos (Sustituye con los valores reales)
/* query para extraer esta informacion:

WITH Datos AS (
    SELECT 
        pb.EDAD,
        CASE 
            WHEN ef.estado = ef2.estado THEN 'DENTRO DEL ORIGEN'
            ELSE 'FUERA DEL ORIGEN'
        END AS Grupo
    FROM 
        personalaps.plantillaordinario pb
    LEFT JOIN 
        personalaps.entidades_federativas ef
    ON 
        SUBSTRING(pb.CURP, 12, 2) = ef.clave
    LEFT JOIN 
        personalaps.normalizacion_delegaciones nd
    ON 
        pb.NUMDEL = nd.id_delegacion
    LEFT JOIN 
        personalaps.entidades_federativas ef2
    ON 
        nd.clave_estado = ef2.clave
    WHERE 
        pb.CURP IS NOT NULL
        AND pb.CURP != ''
        AND pb.QNA = '2024017'
        AND pb.EDAD >= 0 AND pb.EDAD < 95
)
SELECT 
    EDAD, 
    Grupo,
    COUNT(*) AS Cantidad
FROM Datos
GROUP BY EDAD, Grupo
ORDER BY EDAD;

*/

const edadesAO = [
	{
		"EDAD" : 17,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 1
	},
	{
		"EDAD" : 18,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 1
	},
	{
		"EDAD" : 19,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 2
	},
	{
		"EDAD" : 20,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 5
	},
	{
		"EDAD" : 20,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 2
	},
	{
		"EDAD" : 21,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 16
	},
	{
		"EDAD" : 21,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 1
	},
	{
		"EDAD" : 22,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 21
	},
	{
		"EDAD" : 22,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 2
	},
	{
		"EDAD" : 23,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 41
	},
	{
		"EDAD" : 23,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 2
	},
	{
		"EDAD" : 24,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 70
	},
	{
		"EDAD" : 24,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 5
	},
	{
		"EDAD" : 25,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 106
	},
	{
		"EDAD" : 25,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 3
	},
	{
		"EDAD" : 26,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 207
	},
	{
		"EDAD" : 26,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 16
	},
	{
		"EDAD" : 27,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 303
	},
	{
		"EDAD" : 27,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 30
	},
	{
		"EDAD" : 28,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 347
	},
	{
		"EDAD" : 28,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 35
	},
	{
		"EDAD" : 29,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 358
	},
	{
		"EDAD" : 29,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 36
	},
	{
		"EDAD" : 30,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 372
	},
	{
		"EDAD" : 30,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 38
	},
	{
		"EDAD" : 31,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 328
	},
	{
		"EDAD" : 31,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 29
	},
	{
		"EDAD" : 32,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 383
	},
	{
		"EDAD" : 32,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 40
	},
	{
		"EDAD" : 33,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 397
	},
	{
		"EDAD" : 33,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 36
	},
	{
		"EDAD" : 34,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 416
	},
	{
		"EDAD" : 34,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 40
	},
	{
		"EDAD" : 35,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 462
	},
	{
		"EDAD" : 35,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 40
	},
	{
		"EDAD" : 36,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 442
	},
	{
		"EDAD" : 36,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 38
	},
	{
		"EDAD" : 37,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 428
	},
	{
		"EDAD" : 37,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 43
	},
	{
		"EDAD" : 38,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 444
	},
	{
		"EDAD" : 38,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 30
	},
	{
		"EDAD" : 39,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 506
	},
	{
		"EDAD" : 39,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 40
	},
	{
		"EDAD" : 40,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 492
	},
	{
		"EDAD" : 40,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 47
	},
	{
		"EDAD" : 41,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 457
	},
	{
		"EDAD" : 41,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 43
	},
	{
		"EDAD" : 42,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 392
	},
	{
		"EDAD" : 42,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 45
	},
	{
		"EDAD" : 43,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 402
	},
	{
		"EDAD" : 43,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 41
	},
	{
		"EDAD" : 44,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 432
	},
	{
		"EDAD" : 44,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 31
	},
	{
		"EDAD" : 45,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 351
	},
	{
		"EDAD" : 45,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 34
	},
	{
		"EDAD" : 46,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 379
	},
	{
		"EDAD" : 46,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 38
	},
	{
		"EDAD" : 47,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 301
	},
	{
		"EDAD" : 47,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 38
	},
	{
		"EDAD" : 48,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 292
	},
	{
		"EDAD" : 48,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 26
	},
	{
		"EDAD" : 49,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 273
	},
	{
		"EDAD" : 49,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 35
	},
	{
		"EDAD" : 50,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 224
	},
	{
		"EDAD" : 50,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 25
	},
	{
		"EDAD" : 51,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 197
	},
	{
		"EDAD" : 51,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 26
	},
	{
		"EDAD" : 52,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 163
	},
	{
		"EDAD" : 52,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 22
	},
	{
		"EDAD" : 53,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 164
	},
	{
		"EDAD" : 53,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 18
	},
	{
		"EDAD" : 54,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 117
	},
	{
		"EDAD" : 54,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 20
	},
	{
		"EDAD" : 55,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 103
	},
	{
		"EDAD" : 55,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 8
	},
	{
		"EDAD" : 56,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 104
	},
	{
		"EDAD" : 56,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 9
	},
	{
		"EDAD" : 57,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 69
	},
	{
		"EDAD" : 57,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 14
	},
	{
		"EDAD" : 58,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 65
	},
	{
		"EDAD" : 58,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 10
	},
	{
		"EDAD" : 59,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 53
	},
	{
		"EDAD" : 59,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 9
	},
	{
		"EDAD" : 60,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 43
	},
	{
		"EDAD" : 60,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 4
	},
	{
		"EDAD" : 61,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 25
	},
	{
		"EDAD" : 61,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 1
	},
	{
		"EDAD" : 62,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 25
	},
	{
		"EDAD" : 62,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 2
	},
	{
		"EDAD" : 63,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 13
	},
	{
		"EDAD" : 63,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 5
	},
	{
		"EDAD" : 64,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 8
	},
	{
		"EDAD" : 64,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 3
	},
	{
		"EDAD" : 65,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 9
	},
	{
		"EDAD" : 65,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 1
	},
	{
		"EDAD" : 66,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 2
	},
	{
		"EDAD" : 66,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 1
	},
	{
		"EDAD" : 67,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 4
	},
	{
		"EDAD" : 67,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 2
	},
	{
		"EDAD" : 68,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 2
	},
	{
		"EDAD" : 70,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 2
	},
	{
		"EDAD" : 70,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 1
	},
	{
		"EDAD" : 78,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 1
	}
];

    /*
WITH Datos AS (
    SELECT 
        pb.CURP,
        SUBSTRING(pb.CURP, 12, 2) AS clave_origen,
        COALESCE(ef.estado, 'Nacidos en el extranjero') AS estado_origen,
        nd.delegacion_nombre,
        ef2.estado AS estado_actual,
        pb.EDAD
    FROM 
        personalaps.plantillaordinario pb
    LEFT JOIN 
        personalaps.entidades_federativas ef
    ON 
        SUBSTRING(pb.CURP, 12, 2) = ef.clave
    LEFT JOIN 
        personalaps.normalizacion_delegaciones nd
    ON 
        pb.NUMDEL = nd.id_delegacion
    LEFT JOIN 
        personalaps.entidades_federativas ef2
    ON 
        nd.clave_estado = ef2.clave
    WHERE 
        pb.CURP IS NOT NULL
        AND pb.CURP != ''
        AND pb.QNA = '2024017'
        AND pb.EDAD >= 0
        AND pb.PLZOCU = 1
        AND pb.NUMDEL = '26'
		AND pb.DELEGACION = 'Sinaloa'
),
Ordenados AS (
    SELECT 
        EDAD, 
        estado_origen = estado_actual AS dentro_origen,
        ROW_NUMBER() OVER (PARTITION BY estado_origen = estado_actual ORDER BY EDAD) AS fila,
        COUNT(*) OVER (PARTITION BY estado_origen = estado_actual) AS total_filas
    FROM Datos
),
Percentiles AS (
    SELECT 
        dentro_origen,
        MIN(CASE WHEN fila = FLOOR(total_filas * 0.25) THEN EDAD END) AS Q1,
        MIN(CASE WHEN fila = FLOOR(total_filas * 0.50) THEN EDAD END) AS Mediana,
        MIN(CASE WHEN fila = FLOOR(total_filas * 0.75) THEN EDAD END) AS Q3
    FROM Ordenados
    GROUP BY dentro_origen
),
Estadisticas AS (
    SELECT 
        CASE WHEN o.dentro_origen = 1 THEN 'DENTRO DEL ORIGEN' ELSE 'FUERA DEL ORIGEN' END AS Grupo,
        MIN(o.EDAD) AS Minima,
        MAX(o.EDAD) AS Maxima,
        AVG(o.EDAD) AS Media,
        STDDEV(o.EDAD) AS Desviacion_Estandar,

        p.Q1, p.Mediana, p.Q3,

        (SELECT EDAD FROM Ordenados WHERE dentro_origen = o.dentro_origen 
            GROUP BY EDAD ORDER BY COUNT(*) DESC LIMIT 1) AS Moda
    FROM Ordenados o
    JOIN Percentiles p ON o.dentro_origen = p.dentro_origen
    GROUP BY o.dentro_origen, p.Q1, p.Mediana, p.Q3
)
SELECT * FROM Estadisticas;
    */


const metricas = [
	{
		"Grupo" : "FUERA DEL ORIGEN",
		"Minima" : 20,
		"Maxima" : 78,
		"Media" : 40.4887,
		"Desviacion_Estandar" : 9.1025,
		"Q1" : 33,
		"Mediana" : 40,
		"Q3" : 47,
		"Moda" : 40
	},
	{
		"Grupo" : "DENTRO DEL ORIGEN",
		"Minima" : 17,
		"Maxima" : 70,
		"Media" : 39.4215,
		"Desviacion_Estandar" : 8.5175,
		"Q1" : 33,
		"Mediana" : 39,
		"Q3" : 45,
		"Moda" : 39
	}
];