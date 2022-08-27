const { connectDynamoDB, setRequest } = require('../../utils'),
	{ PLANETDB } = require('../../constants');

module.exports.deletePlanet = async () => {
	try {
		const listPlanet = await connectDynamoDB()
		.scan({
			TableName: `${PLANETDB}`,
		})
		.promise();

		for (let i in listPlanet.Items) {
			let id = 100 + Number(i);
			await connectDynamoDB()
				.delete({
					TableName: `${PLANETDB}`,
					Key: {
						id,
					},
				})
				.promise();
		}

		return setRequest(200, "Registros Eliminados");
	} catch (e) {
		return setRequest(404, e);
	}
};