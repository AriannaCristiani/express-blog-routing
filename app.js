const express = require('express')
const app = express()
const port = 3000
const posts = require('./posts.js')


app.use(express.static('public'))

//rotta principale
app.get('/', (req, res) => {
    res.send('hello')
})

//rotta index
app.get('/posts', (req , res) =>{
    res.send('questi sono i post')
})

//rotta show: dinamica
app.get('/posts/:id', (req, res) => {
    const id = req.params.id
    res.send(`questo è il post con id: ${id}`)
})

//rotta store
app.post('/posts', (req, res) => {
    res.send('stai creando un nuovo post')
})


app.listen(port, () => {
    console.log(`il server è in ascolto sulla porta: ${port}`)
})
