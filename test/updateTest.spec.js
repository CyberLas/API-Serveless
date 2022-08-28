require("module-alias/register");

const request = require("supertest"),
	{ URL } = require("../constants");

describe("PUT /api/planet/create", () => {
	test("@route /", async () => {
		const response = await request(`${URL}`).put("/api/planet/update").send();
		expect(response.statusCode).toBe(404);
		expect(response.headers["content-type"]).toEqual(expect.stringContaining("application/json"));
	}, 50000);

	test("@route /", async () => {
		const dataUpdate = {},
			response = await request(`${URL}`).put("/api/planet/update/100").send(dataUpdate).set('Content-Type', 'application/json').set('Accept', 'application/json');
		expect(response.body.status).toBe(404);
		expect(response.body.message).toEqual(expect.objectContaining({}));
		expect(response.body.body).toEqual(null);
	}, 50000);

	test("@route /", async () => {
		const dataUpdate = { 
				nombre: "Tatooine",
				periodo_rotacion: "23",
				periodo_orbital: "304",
				diametro: "10465",
				clima: "arid",
				gravedad: "1 standard",
				terreno: "desert",
				superficie_agua: "1",
				poblacion: "200000",
				residentes: [
					"https://swapi.py4e.com/api/people/1/",
					"https://swapi.py4e.com/api/people/2/"
				],
				peliculas:  [
					"https://swapi.py4e.com/api/films/1/",
					"https://swapi.py4e.com/api/films/3/"
				]
			},
			validateRequest = {
				message: expect.any(String),
				status: expect.any(Number),
				body: expect.any(Object),
			},
			
			response = await request(`${URL}`).put("/api/planet/update/100").send(dataUpdate).set('Content-Type', 'application/json').set('Accept', 'application/json');

		expect(response.body).toEqual(expect.objectContaining(validateRequest))
	}, 50000);
});