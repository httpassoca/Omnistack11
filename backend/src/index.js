const express = require("express")
const cors = require('cors');
const routes = require('./routes')
const app = express();
// cors = security
app.use(cors());
// MAKE A RESPONSE JSON
app.use(express.json());
app.use(routes);


app.listen(3333,'', () => console.log("Server is running on port: 3333"));
