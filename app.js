const express = require('express')
const app = express()
const port = 3000
const posts = require('./posts.js')


app.use(express.static('public'))


app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/posts', (req , res) =>{
    res.send('questi sono i post')
})


app.listen(port, () => {
    console.log(`il server è in ascolto sulla porta: ${port}`)
})
