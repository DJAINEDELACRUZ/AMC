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
        AND pb.DESCRIP_CLASCATEG = '1.MÉDICOS'
        AND pb.EDAD >= 0
        AND pb.PLZOCU = 1
)
SELECT 
    EDAD, 
    Grupo,
    COUNT(*) AS Cantidad
FROM Datos
GROUP BY EDAD, Grupo
ORDER BY EDAD; */

const edadesAO = [
    {
		"EDAD" : 17,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 5
	},
	{
		"EDAD" : 18,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 40
	},
	{
		"EDAD" : 18,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 3
	},
	{
		"EDAD" : 19,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 15
	},
	{
		"EDAD" : 19,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 1
	},
	{
		"EDAD" : 20,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 7
	},
	{
		"EDAD" : 21,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 35
	},
	{
		"EDAD" : 22,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 106
	},
	{
		"EDAD" : 22,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 13
	},
	{
		"EDAD" : 23,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 143
	},
	{
		"EDAD" : 23,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 29
	},
	{
		"EDAD" : 24,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 280
	},
	{
		"EDAD" : 24,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 88
	},
	{
		"EDAD" : 25,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 283
	},
	{
		"EDAD" : 25,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 71
	},
	{
		"EDAD" : 26,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 238
	},
	{
		"EDAD" : 26,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 60
	},
	{
		"EDAD" : 27,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 287
	},
	{
		"EDAD" : 27,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 54
	},
	{
		"EDAD" : 28,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 396
	},
	{
		"EDAD" : 28,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 57
	},
	{
		"EDAD" : 29,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 424
	},
	{
		"EDAD" : 29,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 73
	},
	{
		"EDAD" : 30,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 441
	},
	{
		"EDAD" : 30,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 90
	},
	{
		"EDAD" : 31,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 479
	},
	{
		"EDAD" : 31,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 63
	},
	{
		"EDAD" : 32,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 505
	},
	{
		"EDAD" : 32,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 73
	},
	{
		"EDAD" : 33,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 558
	},
	{
		"EDAD" : 33,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 81
	},
	{
		"EDAD" : 34,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 559
	},
	{
		"EDAD" : 34,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 114
	},
	{
		"EDAD" : 35,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 561
	},
	{
		"EDAD" : 35,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 113
	},
	{
		"EDAD" : 36,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 543
	},
	{
		"EDAD" : 36,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 75
	},
	{
		"EDAD" : 37,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 586
	},
	{
		"EDAD" : 37,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 96
	},
	{
		"EDAD" : 38,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 589
	},
	{
		"EDAD" : 38,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 112
	},
	{
		"EDAD" : 39,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 571
	},
	{
		"EDAD" : 39,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 111
	},
	{
		"EDAD" : 40,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 580
	},
	{
		"EDAD" : 40,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 136
	},
	{
		"EDAD" : 41,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 559
	},
	{
		"EDAD" : 41,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 141
	},
	{
		"EDAD" : 42,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 496
	},
	{
		"EDAD" : 42,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 109
	},
	{
		"EDAD" : 43,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 513
	},
	{
		"EDAD" : 43,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 131
	},
	{
		"EDAD" : 44,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 496
	},
	{
		"EDAD" : 44,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 108
	},
	{
		"EDAD" : 45,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 479
	},
	{
		"EDAD" : 45,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 123
	},
	{
		"EDAD" : 46,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 486
	},
	{
		"EDAD" : 46,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 125
	},
	{
		"EDAD" : 47,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 529
	},
	{
		"EDAD" : 47,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 97
	},
	{
		"EDAD" : 48,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 521
	},
	{
		"EDAD" : 48,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 115
	},
	{
		"EDAD" : 49,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 538
	},
	{
		"EDAD" : 49,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 115
	},
	{
		"EDAD" : 50,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 550
	},
	{
		"EDAD" : 50,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 129
	},
	{
		"EDAD" : 51,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 542
	},
	{
		"EDAD" : 51,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 128
	},
	{
		"EDAD" : 52,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 485
	},
	{
		"EDAD" : 52,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 116
	},
	{
		"EDAD" : 53,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 449
	},
	{
		"EDAD" : 53,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 94
	},
	{
		"EDAD" : 54,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 335
	},
	{
		"EDAD" : 54,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 83
	},
	{
		"EDAD" : 55,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 307
	},
	{
		"EDAD" : 55,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 72
	},
	{
		"EDAD" : 56,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 265
	},
	{
		"EDAD" : 56,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 50
	},
	{
		"EDAD" : 57,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 229
	},
	{
		"EDAD" : 57,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 43
	},
	{
		"EDAD" : 58,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 185
	},
	{
		"EDAD" : 58,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 36
	},
	{
		"EDAD" : 59,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 172
	},
	{
		"EDAD" : 59,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 28
	},
	{
		"EDAD" : 60,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 127
	},
	{
		"EDAD" : 60,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 29
	},
	{
		"EDAD" : 61,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 96
	},
	{
		"EDAD" : 61,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 26
	},
	{
		"EDAD" : 62,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 68
	},
	{
		"EDAD" : 62,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 14
	},
	{
		"EDAD" : 63,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 44
	},
	{
		"EDAD" : 63,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 14
	},
	{
		"EDAD" : 64,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 27
	},
	{
		"EDAD" : 64,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 7
	},
	{
		"EDAD" : 65,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 28
	},
	{
		"EDAD" : 65,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 10
	},
	{
		"EDAD" : 66,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 17
	},
	{
		"EDAD" : 67,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 12
	},
	{
		"EDAD" : 67,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 2
	},
	{
		"EDAD" : 68,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 6
	},
	{
		"EDAD" : 68,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 4
	},
	{
		"EDAD" : 69,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 3
	},
	{
		"EDAD" : 69,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 2
	},
	{
		"EDAD" : 70,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 3
	},
	{
		"EDAD" : 73,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 2
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
        AND pb.DESCRIP_CLASCATEG = '1.MÉDICOS'
        AND pb.EDAD >= 0
        AND pb.PLZOCU = 1
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
		"Minima" : 18,
		"Maxima" : 73,
		"Media" : 41.9636,
		"Desviacion_Estandar" : 9.8863,
		"Q1" : 34,
		"Mediana" : 42,
		"Q3" : 50,
		"Moda" : 41
	},
	{
		"Grupo" : "DENTRO DEL ORIGEN",
		"Minima" : 17,
		"Maxima" : 70,
		"Media" : 41.1670,
		"Desviacion_Estandar" : 9.8999,
		"Q1" : 33,
		"Mediana" : 41,
		"Q3" : 49,
		"Moda" : 38
	}
];