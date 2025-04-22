/* script para construir tabla total vacantes o ucupadas
SELECT 
    COUNT(*) AS total_medicos,
    SUM(CASE WHEN PLZOCU = 1 THEN 1 ELSE 0 END) AS plazas_ocupadas,
    SUM(CASE WHEN PLZOCU = 0 THEN 1 ELSE 0 END) AS plazas_vacantes,
    ROUND((SUM(CASE WHEN PLZOCU = 1 THEN 1 ELSE 0 END) / COUNT(*)) * 100, 2) AS porcentaje_ocupacion,
    ROUND((SUM(CASE WHEN PLZOCU = 0 THEN 1 ELSE 0 END) / COUNT(*)) * 100, 2) AS porcentaje_vacantes
FROM personalaps.plantillaordinario
WHERE DESCRIP_CLASCATEG = '1.MÉDICOS'
    AND QNA = '2024017'
	AND NUMDEL = '27'
	AND DELEGACION = 'Sonora';
*/

const totalVacOcu = [
	{
		"total_medicos" : 1085,
		"plazas_ocupadas" : 953,
		"plazas_vacantes" : 132,
		"porcentaje_ocupacion" : 87.83,
		"porcentaje_vacantes" : 12.17
	}
];
