const { DynamoDB } = require('aws-sdk')

module.exports.getRandom = (max) => {
	return Math.floor(Math.random() * max) + 1;
}

module.exports.getDate = () => {
	let date = new Date();
	return date.toDateString();
}

module.exports.connectDynamoDB = () => {
	return new DynamoDB.DocumentClient();
}
