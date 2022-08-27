const	AWS = require('aws-sdk'),
		{ getDate } = require('../../utils')

const updatePlanet = async(event) => {

	let { id } = event.pathParameters
	const { 
			nombre, periodo_rotacion, periodo_orbital, diametro, clima, gravedad,
			terreno, superficie_agua, poblacion, residentes, peliculas
		} = JSON.parse(event.body)

	if (!isNaN(id) && Number(id) > 99) id = Number(id)
	// else throw new Error("¡Ups!")
	console.log(getDate())
	const dynamodb = new AWS.DynamoDB.DocumentClient();

	let a = await dynamodb.update({
		TableName: 'planetTable',
		Key: {
			id
		},
		UpdateExpression: "set nombre = :nombre, periodo_rotacion = :periodo_rotacion, periodo_orbital = :periodo_orbital, diametro = :diametro, clima = :clima, gravedad = :gravedad, terreno = :terreno, superficie_agua = :superficie_agua, poblacion = :poblacion, residentes = :residentes, peliculas = :peliculas, editado = :editado",
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
	}).promise()

	console.log(a)

	return {
		satus: 200
	}
}

module.exports = {
	updatePlanet
}