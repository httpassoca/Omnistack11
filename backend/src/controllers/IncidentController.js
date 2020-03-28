const connection = require("../database/connection");
module.exports = {
  /*
    index => list all incidents
    create => create incidents
    delete => delete incidents
  */
  async index(req, res) {
    const { page = 1 } = req.query;
    const [count] = await connection("incidents").count();
    console.log(count);
    // Picking data from incidents and their respectivies ongs
    const incidents = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      ]);
    res.header("X-Total-Count", count["count(*)"]);
    return res.json(incidents);
  },

  async create(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;
    // Pick ID from the new Incident posted on table Incidents
    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id
    });
    return res.json({ id });
  },
  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;
    // Verify if the Incident
    const incident = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();
    // If the Incident ong_id doesnt match with the authorization id from the ong connected
    if (incident.ong_id != ong_id) {
      // 401 == Failed because the operation are not permitted
      return res.status(401).json({ error: "Operation not permitted" });
    }
    await connection("incidents")
      .where("id", id)
      .delete();
    // 204 == Success but no content to return
    return res.status(204).send();
  }
};
