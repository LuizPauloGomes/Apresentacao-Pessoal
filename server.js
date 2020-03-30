const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const path = '/aulaJoseffeWeb/modulo03/views/'

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

//para alterar 
server.get('/', function(req, res) {
return res.render("index")
})

server.get('/index.html', function(req, res){
    return res.render("index")
})

server.get('/familia.html', function(req, res){
    return res.render("familia")
})

server.get('/amigos.html', function(req, res) {
    return res.render("amigos")
})
//para alterar

server.listen(5000, function(){
    console.log('Server UP!!')
})