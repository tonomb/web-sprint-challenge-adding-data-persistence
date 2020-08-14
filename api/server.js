const express = require('express')
const server = express()

const projectsRoutes = require('./projects/projectsRoutes')
const resourcesRoutes = require('./resources/resourcesRoutes')

server.use(express.json())

//==== /api/projects ===
server.use('/api/projects', projectsRoutes)

//==== /api/resources
server.use('/api/resources', resourcesRoutes)

module.exports = server