const { DynamoDB } = require('aws-sdk'),
	axios = require('axios');

module.exports.getRandom = (max) => {
	return Math.floor(Math.random() * max) + 1;
};

module.exports.getDate = () => {
	let date = new Date();
	return date.toDateString();
};

module.exports.connectDynamoDB = () => {
	return new DynamoDB.DocumentClient();
};

module.exports.getAxios = async(url, setting) => {
	return await axios.get(url, setting).then((res) => {
		return res.data;
	})
};

module.exports.setRequest = (status, message = '', body = null) => {
	return {
		status,
		message,
		body,
	};
};
