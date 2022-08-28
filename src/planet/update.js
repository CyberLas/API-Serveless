const { getDate, connectDynamoDB, setRequest } = require('../../utils'),
	{ PLANETDB } = require('../../constants')

module.exports.updatePlanet = async(event) => {
	try{
		let { id } = event.pathParameters
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
		} = JSON.parse(event.body);

		if (!isNaN(id) && Number(id) > 99) id = Number(id);
		// else throw new Error("¡Ups!")

		let updateData = await connectDynamoDB()
			.update({
				TableName: `${PLANETDB}`,
				Key: {
					id
				},
				UpdateExpression: "set nombre = :nombre, periodo_rotacion = :periodo_rotacion,periodo_orbital = :periodo_orbital, diametro = :diametro, clima = :clima, gravedad = :gravedad, terreno = :terreno, superficie_agua = :superficie_agua, poblacion = :poblacion, residentes = :residentes, peliculas = :peliculas, editado = :editado",
				ExpressionAttributeValues: {
					":nombre": nombre,
					":periodo_rotacion": periodo_rotacion,
					":periodo_orbital": periodo_orbital,
					":diametro": diametro,
					":clima": clima,
					":gravedad": gravedad,
					":terreno": terreno,
					":superficie_agua": superficie_agua,
					":poblacion": poblacion,
					":residentes": residentes,
					":peliculas": peliculas,
					":editado": getDate()
				},
				ReturnValues: "ALL_NEW"
			}).promise();
			
		updateData = updateData.Attributes;
		delete updateData["id"];

		return setRequest(200, "Registro Actualizado", updateData);
	} catch (e) {
		return setRequest(404, e);
	}
}