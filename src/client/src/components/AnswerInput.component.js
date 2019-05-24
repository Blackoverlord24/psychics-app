import Component from "../core/Component"
import LocalStorageService from '../services/localStorage.service'

export default class AnswerInputComponent extends  Component{
  constructor(el, { resultTable }) {
    super(el)
    this.resultTable = resultTable
  }
  
  init() {
    this.$el.addEventListener('keyup', keyupHandler.bind(this))
  }
}

function keyupHandler(event) {
  if(event.keyCode === 13) {
    const answer = event.target.value

    if(isValidNumber(answer)) {
      const answers = LocalStorageService.getItem('answers')
      const lastAnswersIndex = answers.length - 1
      const lastAnswers = answers[lastAnswersIndex]

      lastAnswers.result = answer
      answers[lastAnswersIndex] = lastAnswers

      LocalStorageService.setItem('answers', answers)

      for(let key in lastAnswers) {
        if(lastAnswers[key] === parseInt(answer)) {
          setPsychicRating(key)
        }
      }
      this.resultTable.renderResults()
      this.hide()
    }
  }
}

function isValidNumber(value) {
  const valLength = value.toString().length
  return valLength === 2
}

function setPsychicRating(psychicIndex) {
  const psychics = LocalStorageService.getItem('psychics')
  psychics[0][psychicIndex] += 1
  LocalStorageService.setItem('psychics', psychics)
}