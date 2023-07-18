require('dotenv').config()
const connect = require(`../controllers/connection`)
const getId = require(`../controllers/getUsersById`)
const postUser = require(`../controllers/postUsers`)
const updateUser = require(`../controllers/updateUsers`)
const deleteUser = require(`../controllers/deleteUsers`)

connect.pool

const getID = getId.getUserById

const reqPost= postUser.createUser

const reqUpdate = updateUser.updateUsers

const reqDelete = deleteUser.deleteUsers


module.exports = {
    getID,
    reqPost,
    reqUpdate,
    reqDelete
}