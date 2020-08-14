const express = require('express');

const router = express.Router()

const Projects = require('./projectsModel')

//==== /api/projects ===

router.get('/', (req, res) => {
  Projects.getProjects()
    .then( projects => {
      res.status(200).json({projects})
    })
})

router.get('/:id', (req, res) =>{
  Projects.getProjectById(req.params.id)
    .then( project =>{
      res.status(200).json(project)
    })
})

router.post('/', (req, res) => {
  Projects.addProject(req.body)
    .then(project => {
      res.status(201).json({project})
    })
    .catch( err => {
      console.log(err);
      res.status(500).json(err)
    })
})


module.exports = router