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
		"EDAD" : 25,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 4
	},
	{
		"EDAD" : 26,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 24
	},
	{
		"EDAD" : 26,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 7
	},
	{
		"EDAD" : 27,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 88
	},
	{
		"EDAD" : 27,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 19
	},
	{
		"EDAD" : 28,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 138
	},
	{
		"EDAD" : 28,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 17
	},
	{
		"EDAD" : 29,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 143
	},
	{
		"EDAD" : 29,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 34
	},
	{
		"EDAD" : 30,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 135
	},
	{
		"EDAD" : 30,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 54
	},
	{
		"EDAD" : 31,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 132
	},
	{
		"EDAD" : 31,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 33
	},
	{
		"EDAD" : 32,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 120
	},
	{
		"EDAD" : 32,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 41
	},
	{
		"EDAD" : 33,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 130
	},
	{
		"EDAD" : 33,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 43
	},
	{
		"EDAD" : 34,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 116
	},
	{
		"EDAD" : 34,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 49
	},
	{
		"EDAD" : 35,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 100
	},
	{
		"EDAD" : 35,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 53
	},
	{
		"EDAD" : 36,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 96
	},
	{
		"EDAD" : 36,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 30
	},
	{
		"EDAD" : 37,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 92
	},
	{
		"EDAD" : 37,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 38
	},
	{
		"EDAD" : 38,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 114
	},
	{
		"EDAD" : 38,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 43
	},
	{
		"EDAD" : 39,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 129
	},
	{
		"EDAD" : 39,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 50
	},
	{
		"EDAD" : 40,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 154
	},
	{
		"EDAD" : 40,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 69
	},
	{
		"EDAD" : 41,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 152
	},
	{
		"EDAD" : 41,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 69
	},
	{
		"EDAD" : 42,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 124
	},
	{
		"EDAD" : 42,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 52
	},
	{
		"EDAD" : 43,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 112
	},
	{
		"EDAD" : 43,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 64
	},
	{
		"EDAD" : 44,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 97
	},
	{
		"EDAD" : 44,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 61
	},
	{
		"EDAD" : 45,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 103
	},
	{
		"EDAD" : 45,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 53
	},
	{
		"EDAD" : 46,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 82
	},
	{
		"EDAD" : 46,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 56
	},
	{
		"EDAD" : 47,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 76
	},
	{
		"EDAD" : 47,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 39
	},
	{
		"EDAD" : 48,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 94
	},
	{
		"EDAD" : 48,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 48
	},
	{
		"EDAD" : 49,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 99
	},
	{
		"EDAD" : 49,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 58
	},
	{
		"EDAD" : 50,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 106
	},
	{
		"EDAD" : 50,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 57
	},
	{
		"EDAD" : 51,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 111
	},
	{
		"EDAD" : 51,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 63
	},
	{
		"EDAD" : 52,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 103
	},
	{
		"EDAD" : 52,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 60
	},
	{
		"EDAD" : 53,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 80
	},
	{
		"EDAD" : 53,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 53
	},
	{
		"EDAD" : 54,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 63
	},
	{
		"EDAD" : 54,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 49
	},
	{
		"EDAD" : 55,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 47
	},
	{
		"EDAD" : 55,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 30
	},
	{
		"EDAD" : 56,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 41
	},
	{
		"EDAD" : 56,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 24
	},
	{
		"EDAD" : 57,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 27
	},
	{
		"EDAD" : 57,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 19
	},
	{
		"EDAD" : 58,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 16
	},
	{
		"EDAD" : 58,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 15
	},
	{
		"EDAD" : 59,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 19
	},
	{
		"EDAD" : 59,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 10
	},
	{
		"EDAD" : 60,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 12
	},
	{
		"EDAD" : 60,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 14
	},
	{
		"EDAD" : 61,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 11
	},
	{
		"EDAD" : 61,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 14
	},
	{
		"EDAD" : 62,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 12
	},
	{
		"EDAD" : 62,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 3
	},
	{
		"EDAD" : 63,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 7
	},
	{
		"EDAD" : 63,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 8
	},
	{
		"EDAD" : 64,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 4
	},
	{
		"EDAD" : 64,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 4
	},
	{
		"EDAD" : 65,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 4
	},
	{
		"EDAD" : 65,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 5
	},
	{
		"EDAD" : 66,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 1
	},
	{
		"EDAD" : 67,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 2
	},
	{
		"EDAD" : 68,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 1
	},
	{
		"EDAD" : 68,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 3
	},
	{
		"EDAD" : 69,
		"Grupo" : "DENTRO DEL ORIGEN",
		"Cantidad" : 1
	},
	{
		"EDAD" : 69,
		"Grupo" : "FUERA DEL ORIGEN",
		"Cantidad" : 1
	},
	{
		"EDAD" : 73,
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
		"Minima" : 25,
		"Maxima" : 73,
		"Media" : 43.4437,
		"Desviacion_Estandar" : 8.9555,
		"Q1" : 36,
		"Mediana" : 43,
		"Q3" : 50,
		"Moda" : 41
	},
	{
		"Grupo" : "DENTRO DEL ORIGEN",
		"Minima" : 26,
		"Maxima" : 69,
		"Media" : 40.6209,
		"Desviacion_Estandar" : 8.8845,
		"Q1" : 33,
		"Mediana" : 40,
		"Q3" : 48,
		"Moda" : 40
	}
];