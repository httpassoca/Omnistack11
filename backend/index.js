const express = require("express");

const app = express();
// MAKE A RESPONSE JSON
app.use(express.json());

/* 

QUERY ??? PARAMS -> GET,  ( filters, pagination)
ROUTE //// PARAMS -> Identify :id
REQUEST BODY 

*/

app.post("/users", (req, res) => {
  const body = req.body;
  console.log(body);
  return res.json({
    type: "sucess",
    data: "Corona defeated"
  });
});

app.listen(3333,'', () => console.log("Server is running on port: 3333"));
