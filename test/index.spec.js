import 'module-alias/register'

import request from 'supertest'
import { server } from '../src/server'

describe('GET /', () => {
	test('@route /', async() => {
		const response = await request(server)
			.get('/')
			.send()
		expect(response.statusCode).toBe(200)
		// console.log(response)
	}, 1000)
	
})