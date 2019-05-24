const path = require('path')

async function index (request, response) {
  request.session.answers = ['1', '2']
  response.sendFile(path.join(__dirname+'/../client/dist/index.html'));
}

function getAnswers (request, response) {
  //All response of our psychic
  const answers = {}
  //Static count of our psychic is 5
  for (let i = 1; i < 6; i++) {
    answers[i] = Math.floor(Math.random() * (100 - 10) + 10)
  }
  response.status(200).send({answers})
}

module.exports = { index, getAnswers }