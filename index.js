require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/twitter' , (req , res) => {
    res.send("uday_choudhary_29")
})

app.listen(process.env.PORT , () => {
    console.log("i am listening")
})

app.get('/login' , (req , res) => {
    res.send('<h1>Welcome Uday</h1>')
})