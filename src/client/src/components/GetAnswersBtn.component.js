import apiService from '../services/api.service'
import Component from "../core/Component"

export default class GetAnswersBtnComponent extends Component{
  constructor(el, { resultTable }) {
    super(el)
    this.resultTable = resultTable
  }

  init() {
    this.$answerInput = document.getElementById('guessNumber')
    this.$newGuessBtn = document.getElementById('guessNewNumber')
    this.$el.addEventListener('click', clickHandler.bind(this))
  }
}

async function clickHandler() {
  this.$answerInput.parentNode.classList.remove('hide')
  this.$newGuessBtn.parentNode.classList.remove('hide')
  this.hide()

  const answers = await apiService.getAnswers()
  this.resultTable.addRow(answers)
}