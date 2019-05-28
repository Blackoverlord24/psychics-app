const path = require('path')

async function index (request, response) {
  response.sendFile(path.join(__dirname+'/../client/dist/index.html'))
}

function historyOfAnswers(request, response) {
  response.status(200).send({answersHistory: request.session.answers || []})
}

function psychicsRate(request, response) {
  if(!request.session.psychicsRate) {
    request.session.psychicsRate = [{1: 0, 2: 0, 3: 0, 4: 0, 5: 0}]
  }

  const psychicsRate = request.session.psychicsRate

  response.status(200).send({psychicsRate})
}

function updatePsychicsRate(request, response) {
  const answerNumber = request.body.answer
  const answers = request.session.answers
  const lastAnswersIndex = answers.length - 1
  const lastAnswers = answers[lastAnswersIndex]

  request.session.answers[lastAnswersIndex]['result'] = answerNumber

  for(let key in lastAnswers) {
    //Add psychics rate in he or she give a correct number or subtract if incorrect
    if(lastAnswers[key] === parseInt(answerNumber)) {
      request.session.psychicsRate[0][key]++
    } else {
      //0 is the lowest rating so we don't take negative numbers
      if(request.session.psychicsRate[0][key]) {
        request.session.psychicsRate[0][key]--
      }
    }
  }

  response.status(200).send({psychicsRate: request.session.psychicsRate})
}

function answers (request, response) {
  //All response of our psychic
  const answers = {}
  //Static count of our psychic is 5
  for (let i = 1; i < 6; i++) {
    answers[i] = Math.floor(Math.random() * (100 - 10) + 10)
  }
  answers['result'] = ''

  if(!request.session.answers) {
    request.session.answers = []
  }

  request.session.answers.push(answers)
  response.status(200).send(answers)
}

module.exports = { index, answers, historyOfAnswers, psychicsRate, updatePsychicsRate }
