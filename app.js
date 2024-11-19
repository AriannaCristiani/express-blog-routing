const express = require('express')
const app = express()
const port = 3000
const posts = require('./posts-array.js')


app.use(express.static('public'))

//rotta principale
app.get('/', (req, res) => {
    res.send('hello')
})



app.listen(port, () => {
    console.log(`il server è in ascolto sulla porta: ${port}`)
})
