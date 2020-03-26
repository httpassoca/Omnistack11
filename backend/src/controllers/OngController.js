const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  /*
    index => list all ongs
    create => create ongs
  */
  async index(req, res) {
    const ongs = await connection("ongs").select("*");
    return res.json(ongs);
  },
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    // Generate a random ID
    const id = crypto.randomBytes(4).toString("HEX");
    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });
    return res.json({ id });
  }
};
