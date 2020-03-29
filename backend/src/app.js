const express = require("express")
const cors = require('cors');
const routes = require('./routes')
const {errors} = require('celebrate')
const app = express();
// cors = security
app.use(cors());
// MAKE A RESPONSE JSON
app.use(express.json());
app.use(routes);
// Validation Message
app.use(errors());


module.exports = app;