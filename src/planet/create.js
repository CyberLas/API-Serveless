const { connectDynamoDB, getRandom } = require("../../utils"),
	{ URL, PLANET } = require("../../constants");

const createPlant = async (event) => {
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
					TableName: `${PLANET}`,
				})
				.promise(),
			plant = {
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
				creado: getRandom(),
				editado: getRandom(),
				url: `${URL}/${100 + result.Items.length}`,
			};

		await connectDynamoDB()
			.put({
				TableName: `${PLANET}`,
				Item: plant,
			})
			.promise();

		return {
			status: 200,
			message: "Request Success",
			body: plant,
		};
	} catch (e) {
		return {
			status: 404,
			body: null,
			message: e,
		};
	}
};

module.exports = {
	createPlant,
};
