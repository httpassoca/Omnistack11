const app = require("../../src/app");
const request = require("supertest");
const connection = require("../../src/database/connection");
describe("Incident", () => {
  beforeEach(async () => {
    await connection.migrate.latest();
  });
  afterEach(async () => {
    await connection.migrate.rollback();
  });
  test("Should be able to create a new Incident", async () => {
    const resONG = await request(app)
      .post("/ongs")
      .send({
        name: "APAD",
        email: "contato@ap.com",
        whatsapp: "3196646507",
        city: "Mateus Leme",
        uf: "MG"
      });
    const res = await request(app)
      .post("/incidents")
      .set({ authorization: resONG.body.id })
      .send({
        title: "Caso 2",
        description: " 2 Cachorro morrend",
        value: 120
      });
    expect(res.body).toHaveProperty("id");
  });
  test("Should be able to show incidents", async () => {
    const resONG = await request(app)
      .post("/ongs")
      .send({
        name: "APAD",
        email: "contato@ap.com",
        whatsapp: "3196646507",
        city: "Mateus Leme",
        uf: "MG"
      });
    await request(app)
      .post("/incidents")
      .set({ authorization: resONG.body.id })
      .send({
        title: "Caso 2",
        description: " 2 Cachorro morrend",
        value: 120
      });
    const res = await request(app).get("/incidents");
    console.log(res.body);
  });
  test("Should be able to delete an incident", async () => {
    const resONG = await request(app)
      .post("/ongs")
      .send({
        name: "APAD",
        email: "contato@ap.com",
        whatsapp: "3196646507",
        city: "Mateus Leme",
        uf: "MG"
      });
    await request(app)
      .post("/incidents")
      .set({ authorization: resONG.body.id })
      .send({
        title: "Caso 2",
        description: " 2 Cachorro morrend",
        value: 120
      });
    const res = await request(app)
      .delete("/incidents/1")
      .set({ authorization: resONG.body.id });
    expect(res.status).toBe(204);
    console.log(res.status);
  });
  afterAll(async () => {
    await connection.destroy();
  });
});
