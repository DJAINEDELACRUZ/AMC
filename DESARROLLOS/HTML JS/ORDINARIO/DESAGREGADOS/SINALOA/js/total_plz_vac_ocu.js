/* script para construir tabla total vacantes o ucupadas
SELECT 
    COUNT(*) AS total_medicos,
    SUM(CASE WHEN PLZOCU = 1 THEN 1 ELSE 0 END) AS plazas_ocupadas,
    SUM(CASE WHEN PLZOCU = 0 THEN 1 ELSE 0 END) AS plazas_vacantes,
    ROUND((SUM(CASE WHEN PLZOCU = 1 THEN 1 ELSE 0 END) / COUNT(*)) * 100, 2) AS porcentaje_ocupacion,
    ROUND((SUM(CASE WHEN PLZOCU = 0 THEN 1 ELSE 0 END) / COUNT(*)) * 100, 2) AS porcentaje_vacantes
FROM personalaps.plantillaordinario
WHERE QNA = '2024017';
*/

const totalVacOcu = [
	{
		"total_medicos" : 12668,
		"plazas_ocupadas" : 11885,
		"plazas_vacantes" : 783,
		"porcentaje_ocupacion" : 93.82,
		"porcentaje_vacantes" : 6.18
	}
];
