require('module-alias/register')

const { URL } = require("../constants"),
	request = require('supertest'),
	{ getRandom } = require('../utils')

describe('GET /', () => {
	test('@route /', async() => {
		const response = await request(`${URL}`).get('/').send()
		expect(response.statusCode).toBe(200)
	}, 50000)

	test('@route /', async() => {
		const response = await request(`${URL}`).get('/').send()
		expect(response.headers['content-type']).toEqual(expect.stringContaining('text/plain; charset=utf-8'))
	}, 50000)
	
	
	test('@route /', async() => {
		const response = await request(`${URL}`).get('/test').send()
		expect(response.statusCode).toBe(404)
	})
	
	test('@route /', async() => {
		const response = await request(`${URL}`).get('/api/planet').send()
		expect(response.body).toBeInstanceOf(Object)
	})

	test('@route /', async() => {
		for (let x = 0; x < 10; x++) {
			const response = await request(`${URL}`)
					.get(`/api/planet/${getRandom(100)}`)
					.send();
			expect(response.statusCode).toBe(200)
			expect(response.headers["content-type"]).toEqual(
				expect.stringContaining("application/json")
			)
			expect(response.body).toBeInstanceOf(Object)
		}
	}, 50000)
})

// describe('POST /', () => {
// 	test('@route /', async() => {
// 		const response = await request(`${URL}`).get('/').send()
// 		expect(response.statusCode).toBe(200)
// 	}, 10000)

// 	test('@route /', async() => {
// 		const response = await request(`${URL}`).get('/test').send()
// 		expect(response.statusCode).toBe(404)
// 	})

// 	test('@route /', async() => {
// 		const response = await request(`${URL}`).get('/api/planet').send()
// 		expect(response.body).toBeInstanceOf(Object)
// 	})
// })