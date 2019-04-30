const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getSentences,
  saveSentences
}

function getSentences (db = connection) {
  return db('sentences')
    .select()
}

function saveSentences (sentence, db = connection) {
  return db('sentences')
    .insert({
      sentence: sentence
    })
}
