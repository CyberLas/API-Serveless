require("module-alias/register");

const request = require("supertest"),
	{ URL } = require("../constants");

describe("DELETE /api/planet/create", () => {
	test("@route /", async () => {
		const validateRequest = {
				message: expect.any(String),
				status: expect.any(Number),
				body: expect.any(Object),
			},			
			response = await request(`${URL}`).delete("/api/planet/delete").send().set('Content-Type', 'application/json').set('Accept', 'application/json');

		expect(response.body).toEqual(expect.objectContaining(validateRequest))
	}, 50000);
});
