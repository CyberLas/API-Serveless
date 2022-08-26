'use strict';

module.exports.hello = async (event) => {
  return {
	statusCode: 200,
	body: JSON.stringify(
		{
			message: '¡Hello serverless!',
			input: event,
		},
		null,
		2
	),
  }
}

module.exports.helloUser = async (event) => {
  return {
	statusCode: 200,
	body: JSON.stringify(
		{
			message: 'Hola Usuario',
			input: event,
		},
		null,
		2
	),
  }
}
