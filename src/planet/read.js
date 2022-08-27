const { connectDynamoDB, setRequest, getAxios } = require("../../utils"),
	{ URL, SWAPI, PLANETDB } = require("../../constants");

module.exports.readPlanet = async (event) => {
	try {
		let { id } = event.pathParameters,
		body = {},
		setting = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		if (!isNaN(id) && Number(id) > 0) id = Number(id);
		else return setRequest(404, "El id no es un Número Válido");

		if (id < 62) {
		let request = await getAxios(`${SWAPI}/${id}`, setting);

		body = {
			nombre: request.name,
			periodo_rotacion: request.rotation_period,
			periodo_orbital: request.orbital_period,
			diametro: request.diameter,
			clima: request.climate,
			gravedad: request.gravity,
			terreno: request.terrain,
			superficie_agua: request.surface_water,
			poblacion: request.population,
			residentes: request.residents,
			peliculas: request.films,
			creado: request.created,
			editado: request.edited,
			url: request.url,
		};
		}

		if (id > 62 && id < 100)
		return setRequest(404, "Información no Encontrada");

		if (id >= 100) {
		let getPlanet = await connectDynamoDB()
			.get({
				TableName: `${PLANETDB}`,
				Key: {
					id,
				},
			})
			.promise();
		getPlanet = getPlanet.Item;
		delete getPlanet["id"];
		body = getPlanet;
		}

		return setRequest(200, "Registro Encontrado", body);
	} catch (e) {
		return setRequest(404, e);
	}
};

module.exports.readAllPlanet = async () => {
	try {
		let allPlanet = await connectDynamoDB()
		.scan({
			TableName: `${PLANETDB}`,
		})
		.promise();

		allPlanet = allPlanet.Items;

		allPlanet.map((o) => delete o.id);

		return setRequest(200, "Registros Obtenidos", allPlanet);
	} catch (e) {
		return setRequest(404, e);
	}
};