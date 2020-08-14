const express = require('express');

const router = express.Router()

const Resources = require('./resourcesModel')

//==== /api/resources ===

router.get('/', (req, res) => {
  Resources.getResources()
    .then( resources => {
      res.status(200).json({resources})
    })
})

router.get('/:id', (req, res) =>{
  Resources.getResourceById(req.params.id)
    .then( resource =>{
      res.status(200).json(resource)
    })
})

router.post('/', (req, res) => {
  Resources.addResource(req.body)
    .then(resource => {
      res.status(201).json({resource})
    })
    .catch( err => {
      if(err.errno === 19){
        res.json({error: 'Name must be unique'})
      }
    })
})


module.exports = router