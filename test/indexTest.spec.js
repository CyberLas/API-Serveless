require("module-alias/register");

const request = require("supertest"),
	{ URL } = require("../constants");

describe("GET /", () => {
	test("[1] GET to Homepage", async () => {
		const response = await request(`${URL}`).get("/").send();
		expect(response.statusCode).toBe(200);
	}, 50000);

	test("[2] GET to Homepage for validate content-type", async () => {
		const response = await request(`${URL}`).get("/").send();
		expect(response.headers["content-type"]).toEqual(expect.stringContaining("text/plain; charset=utf-8"));
	}, 50000);

	test("[3] GET to invalidate page", async () => {
		const response = await request(`${URL}`).get("/test").send();
		expect(response.statusCode).toBe(404);
	}, 50000);

});
