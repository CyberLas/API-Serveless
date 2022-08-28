const { connectDynamoDB, getDate, setRequest } = require("../../utils"),
	{ URL, PLANETDB } = require("../../constants");

module.exports.createPlanet = async (event) => {
	try {
		const {
				nombre,
				periodo_rotacion,
				periodo_orbital,
				diametro,
				clima,
				gravedad,
				terreno,
				superficie_agua,
				poblacion,
				residentes,
				peliculas,
			} = JSON.parse(event.body),
			result = await connectDynamoDB()
				.scan({
					TableName: `${PLANETDB}`,
				})
				.promise();
		let planet = {
				id: 100 + result.Items.length,
				nombre,
				periodo_rotacion,
				periodo_orbital,
				diametro,
				clima,
				gravedad,
				terreno,
				superficie_agua,
				poblacion,
				residentes,
				peliculas,
				creado: getDate(),
				editado: getDate(),
				url: `${URL}/${100 + result.Items.length}`,
			};

		await connectDynamoDB()
			.put({
				TableName: `${PLANETDB}`,
				Item: planet,
			})
			.promise();

		delete planet["id"];
		
		return setRequest(200, "Registro Creado", planet);
	} catch (e) {
		return setRequest(404, Object.entries({}).length === 0 ? 'Falta algun Parámetro' : e);
	}
};