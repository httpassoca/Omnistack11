const crypto = require("crypto");
module.exports = {
  generateUniqueId() {
    return crypto.randomBytes(4).toString("HEX");
  }
};
