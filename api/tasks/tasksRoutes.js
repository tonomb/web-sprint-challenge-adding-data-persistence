const express = require('express');

const router = express.Router()

const Tasks = require('./tasksModel')

//==== /api/tasks ===

router.get('/', (req, res) => {
  Tasks.getTasks()
    .then( tasks =>{
      res.status(200).json({tasks})
    })
})


router.post('/', (req, res) => {
  Tasks.addTask(req.body)
    .then( task =>{
      res.status(201).json(task)
    })
    .catch( err =>{
      if(err.errno === 19){
        res.status(400).json({error: 'Tasks must include a description and project_id'})
      }
      console.log(err);
      res.status(500).json(err)
    })
})


module.exports = router