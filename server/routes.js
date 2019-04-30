const express = require('express')
const router = express.Router()
const db = require('./db/db')

router.get('/', (req, res) => {
  db.getSentences()
    .then(sentences => {
      res.json(sentences)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const sentence = req.params
  db.addSentences(sentence)
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
