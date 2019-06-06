const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getSentences,
  addSentences
}

function getSentences (db = connection) {
  return db('sentences')
    .map((row) => {
      return row.sentence
    })
}

function addSentences (sentence, db = connection) {
  return db('sentences')
    .insert({
      sentence: sentence.newSentence
    })
}
