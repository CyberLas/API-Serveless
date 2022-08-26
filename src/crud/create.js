const AWS = require('aws-sdk')

const createPlant = async(event) => {
	console.log(event)
	try{
		const dynamodb = new AWS.DynamoDB.DocumentClient(),
		{ 
			nombre, periodo_rotacion, periodo_orbital, diametro, clima, gravedad,
			terreno, superficie_agua, poblacion, residentes, peliculas
		} = JSON.parse(event.body),

		creado = new Date(),

		result = await dynamodb.scan({
			TableName: "planetTable",
		}).promise(),
		
		plant = {
			id: (100 + result.Items.length), nombre, periodo_rotacion, periodo_orbital, diametro, clima, 
			gravedad, terreno, superficie_agua, poblacion, residentes, peliculas, creado, actualizado: creado,
			url: `https://hj832qcdpa.execute-api.us-east-1.amazonaws.com/api/planets/${100 + result.Items.length}`
		};
		
		await dynamodb.put({
			TableName: 'planetTable',
			Item: plant
		}).promise();

		return {
			status: 200,
			message: 'Request Success',
			body: plant
		}
	}catch(e){
		return {
			status: 404,
			body: null,
			message: e
		}
	}
	
}

module.exports = {
	createPlant
}