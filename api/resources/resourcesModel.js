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
  return db('resources').where({id}).first()
}

function addResource(resource){
  return db('resources').insert(resource)
    .then( ids => {
      return getResourceById(ids)
    })
    // if you add the catch here it goes through the then on the route.
    
}