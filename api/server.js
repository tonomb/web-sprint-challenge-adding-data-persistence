const express = require('express')
const server = express()

const projectsRoutes = require('./projects/projectsRoutes')

server.use(express.json())

//==== /api/projects ===
server.use('/api/projects', projectsRoutes)


module.exports = server