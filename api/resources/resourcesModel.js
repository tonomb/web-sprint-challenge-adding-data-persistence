const db = require('../../data/dbConfig')

module.exports = {
  addResource,
  getResources,
  getResourceById
}


function getResources(){
  return db('resources').select('*')
}

function getResourceById(id){
  return db('resources').where({id})
}

function addResource(resource){
  return db('resources').insert(resource)
    .then( ids => {
      return getResourceById(ids)
    })
    .catch( err => {
      console.log(err);
    })
}