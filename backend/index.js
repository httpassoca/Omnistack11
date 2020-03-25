const express = require('express')

const app = express()

app.get('/', (req,res) => {
    return res.json({"type":"sucess", "data":"Corona defeated"})
})

app.listen(3333)