const db = require('../../data/dbConfig')

module.exports = {
  getTasks,
  addTask
}

// select tasks.id, tasks.description, tasks.notes, tasks.completed, projects.name, projects.description from tasks
// join projects on tasks.project_id = projects.id
// ;

function getTasks(){
  return  db('tasks')
  .select('tasks.id', 'tasks.description', 'tasks.notes', 'tasks.completed', 'projects.name as projectName', 'projects.description as projectDescription')
  .join('projects', 'tasks.project_id', 'projects.id')
}

function addTask(task){
  return db('tasks').insert(task)
    .then(ids =>{
      return  db('tasks').select('*').where({id: ids}).first()
    })
}