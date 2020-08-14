
const db = require('../../data/dbConfig')

module.exports = {
  addProject,
  getProjects,
  getProjectById
}


function getProjects(){
  return db('projects').select('*')
}

function getProjectById(id){
  return db('projects').where({id})
}

function addProject(project){
  return db('projects').insert(project)
    .then( ids => {
      return getProjectById(ids)
    })
    .catch( err => {
      console.log(err);
    })
}