'use strict';
module.exports.apiPlanet = async (event) => {
	return {
		statusCode: 200,
		body: JSON.stringify(
			{
				message: "BIENVENIDO API-PLANET",
				input: event,
			},
			null,
			2
		),
	}
}
