require("module-alias/register");

const request = require("supertest"),
	{ URL } = require("../constants");

describe("POST /api/planet/create", () => {
	test("@route /", async () => {
		const response = await request(`${URL}`).post("/api/planet/create").send();
		expect(response.body.status).toBe(404);
		expect(response.body.message).toEqual(expect.stringContaining("Falta algun Parámetro"));
	}, 50000);

	test("@route /", async () => {
		const createData = { 
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
				"https://swapi.py4e.com/api/people/2/",
				"https://swapi.py4e.com/api/people/4/",
				"https://swapi.py4e.com/api/people/6/",
				"https://swapi.py4e.com/api/people/7/",
				"https://swapi.py4e.com/api/people/8/",
				"https://swapi.py4e.com/api/people/9/",
				"https://swapi.py4e.com/api/people/11/",
				"https://swapi.py4e.com/api/people/43/",
				"https://swapi.py4e.com/api/people/62/"
			],
			peliculas:  [
				"https://swapi.py4e.com/api/films/1/",
				"https://swapi.py4e.com/api/films/3/",
				"https://swapi.py4e.com/api/films/4/",
				"https://swapi.py4e.com/api/films/5/",
				"https://swapi.py4e.com/api/films/6/"
			]
		},
		validateData = {
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
		}
		const response = await request(`${URL}`).post("/api/planet/create").send(createData).set('Content-Type', 'application/json').set('Accept', 'application/json');
		expect(response.body.status).toBe(200);
		expect(response.body.message).toEqual("Registro Creado");
		expect(response.body.body).toEqual(expect.objectContaining(validateData));
	}, 50000);
});