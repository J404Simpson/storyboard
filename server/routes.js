const express = require('express')
const db = require('./db/db')
const router = express.Router()

router.get('/', (req, res) => {
  db.getSentences()
    .then(sentences => {
      res.send(sentences)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  db.addSentences(req.body)
    .then(res.sendStatus(200))
})

module.exports = router
