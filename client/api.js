import request from 'superagent'

const url = 'http://localhost:3000/api/v1/routes/'

export function getSentences (callback) {
  request
    .get(url)
    .end((err, res) => {
      callback(err, res.body)
    })
}

export function addSentences (sentence, callback) {
  request
    .post(url)
    .send(sentence)
    .end((err, res) => {
      callback(err)
    })
}
