const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const getId = require(`../controllers/getUsersById`)
const reqPost = require(`../controllers/postUsers`)
const reqUpdate = require(`../controllers/updateUsers`)
const reqDelete = require(`../controllers/deleteUsers`)


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// app.get('/users', db.getUsers)
app.get('/clients/:id', getId.getUserById) 
app.post('/clients', reqPost.createUser)
app.put('/clients/:id', reqUpdate.updateUsers)
app.delete('/clients/:id', reqDelete.deleteUsers) 

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })






























