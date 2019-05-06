exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('sentences').del()
    .then(function () {
      // Inserts seed entries
      return knex('sentences').insert([
        {id: 1, sentence: 'Once upon a time. '},
        {id: 2, sentence: 'In the beautiful land of Aotearoa. '}
      ])
    })
}
