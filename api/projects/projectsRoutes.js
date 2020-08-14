const express = require('express');

const router = express.Router()

const Projects = require('./projectsModel')

//==== /api/projects ===

router.get('/', (req, res) => {
  res.status(200).json({message: 'its working on /api/projects'})
})


module.exports = router