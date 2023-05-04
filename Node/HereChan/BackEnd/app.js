const express = require('express')
const app = express()
const session = require('express-session')
const port = 5000
const cors = require('cors')

app.use(cors());

app.get('/',(req,res)=>{
  res.send("Olá Tudo bem?")
})





app.listen(port)