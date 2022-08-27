const { connectDynamoDB } = require('../../utils')

const deletePlanet = async() => {
	let db = await connectDynamoDB().scan({
		TableName: "planetTable",
	}).promise()
	
	db = db.Items

	for(let a in db){
		let id = 100 + Number(a)
		await connectDynamoDB().delete({
			TableName: 'planetTable',
			Key: {
				id,
			}
		}).promise()
	}

	return {
		status: 200
	}
}

module.exports = {
	deletePlanet
}