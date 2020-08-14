
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'db4-project', description: 'thursdays project', completed: true},
        {id: 2, name: 'sprint challenge', description:'data persistance sprint challenge', completed: false}
      ]);
    });
};
