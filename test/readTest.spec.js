require("module-alias/register");

const request = require("supertest"),
	{ URL } = require("../constants"),
	{ getRandom } = require("../utils");

describe("GET /api/planet/{id}", () => {
	test("@route /", async () => {
		const response = await request(`${URL}`).get(`/api/planet/-${getRandom(1000)}`).send();
		expect(response.body.status).toBe(404);
		expect(response.body.message).toEqual(expect.stringContaining("El id no es un Número Válido"));
	}, 50000);

	test("@route /", async () => {
		const data = {
			nombre: expect.any(String),
			periodo_rotacion: expect.any(String),
			periodo_orbital: expect.any(String),
			diametro: expect.any(String),
			clima: expect.any(String),
			gravedad: expect.any(String),
			terreno: expect.any(String),
			superficie_agua: expect.any(String),
			poblacion: expect.any(String),
			residentes: expect.any(Array),
			peliculas: expect.any(Array),
			creado: expect.any(String),
			editado: expect.any(String),
			url: expect.any(String)
		},
		response = await request(`${URL}`).get(`/api/planet/${getRandom(60)}`).send();
		expect(response.body.body).toEqual(expect.objectContaining(data));
	}, 50000);

	test("@route /", async () => {
		const data = {
			nombre: "Utapau",
			periodo_rotacion: "27",
			periodo_orbital: "351",
			diametro: "12900",
			clima: "temperate, arid, windy",
			gravedad: "1 standard",
			terreno: "scrublands, savanna, canyons, sinkholes",
			superficie_agua: "0.9",
			poblacion: "95000000",
			residentes: [
				"https://swapi.py4e.com/api/people/83/"
			],
			peliculas: [
				"https://swapi.py4e.com/api/films/6/"
			],
			creado: "2014-12-10T12:49:01.491000Z",
			editado: "2014-12-20T20:58:18.439000Z",
			url: "https://swapi.py4e.com/api/planets/12/"
		},
		response = await request(`${URL}`).get(`/api/planet/12`).send();
		expect(response.body.body).toEqual(expect.objectContaining(data));
	}, 50000);

	test("@route /", async () => {
		for (let x = 0; x < 10; x++) {
		const response = await request(`${URL}`)
			.get(`/api/planet/${getRandom(50)}`)
			.send();
		expect(response.statusCode).toBe(200);
		expect(response.headers["content-type"]).toEqual(
			expect.stringContaining("application/json")
		);
		expect(response.body).toBeInstanceOf(Object);
		}
	}, 50000);
});