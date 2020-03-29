const app = require("../../src/app");
const request = require("supertest");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.latest();
  });
  afterEach(async () => {
    await connection.migrate.rollback();
  });
  afterAll(async () => {
    await connection.destroy();
  });
  test("should be able to create a new ONG", async () => {
    const res = await request(app)
      .post("/ongs")
      .send({
        name: "APAD",
        email: "contato@ap.com",
        whatsapp: "3196646507",
        city: "Mateus Leme",
        uf: "MG"
      });
    expect(res.body).toHaveProperty("id");
    expect(res.body.id).toHaveLength(8);
  });
  test("Should be able to get all ONGs", async () => {
    await request(app)
      .post("/ongs")
      .send({
        name: "APAD",
        email: "contato@ap.com",
        whatsapp: "3196646507",
        city: "Mateus Leme",
        uf: "MG"
      });
    const res = await request(app).get("/ongs");
    console.log(res.body);
  });
});
