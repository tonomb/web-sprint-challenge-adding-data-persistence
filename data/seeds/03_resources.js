
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'vscode', description: 'text editor'},
        {id: 2, name: 'sqlite studio', description: 'dbms client'},
        {id: 3, name: 'computer' },
        {id: 4, name: 'postman', description: 'http client'},
        {id: 5, name: 'github'},
        
      ]);
    });
};
