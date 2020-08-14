
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'fork project', notes:'fork project and create your own branch', completed:true, project_id: '1'},
        {id: 2, description: 'complete mvp', notes:'create a database model using knex', completed:true, project_id: '1'},
        {id: 3, description: 'complete stretch', notes:'write the endpoints to test out your model', completed:true, project_id: '1'},
        {id: 4, description: 'complete project mvp', notes:'fork project and complet mvp goals',completed: false, project_id: '2'},
        {id: 5, description: 'seed database', notes:'create fake data for your databas', completed:false, project_id: '2'}
      ]);
    });
};
