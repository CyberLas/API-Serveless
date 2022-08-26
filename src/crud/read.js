const	AWS = require('aws-sdk'),
		axios = require('axios')

const readPlanet = async(event) => {
	try{
		let { id } = event.pathParameters,
			body = {}

		if (!isNaN(id) && Number(id) > 0) id = Number(id)
		else throw new Error("¡Ups!")
		
		if(id < 62){
			let request = await axios.get(`https://swapi.py4e.com/api/planets/${id}`, {
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(resp => {
				return resp.data
			})

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
				url: request.url
			}
		}
		if(id > 62 && id < 100) throw new Error("Información no Encontrada")

		if(id >= 100){
			const dynamodb = new AWS.DynamoDB.DocumentClient();
			let db = await dynamodb.get({
				TableName: 'planetTable',
				Key: {
					id
				}
			}).promise()
			db = db.Item
			delete db['id']
			body = db
		}

		return {
			status: 200,
			message: 'Petición Exitosa',
			body
		}
	}catch(e){
		return {
			status: 404,
			message: e,
			body: null
		}
	}
}

const readAllPlanet = async(event) => {
	const dynamodb = new AWS.DynamoDB.DocumentClient()
		
	let db = await dynamodb.scan({
		TableName: "planetTable",
	}).promise()

	db = db.Items

	db.map(o => delete o.id)

	return{
		status: 200,
		message: 'Petición Exitosa',
		body: db
	}
}

module.exports = {
	readPlanet, readAllPlanet
}