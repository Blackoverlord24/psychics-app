import Component from "../core/Component"
import apiService from '../services/api.service'

export default class AnswerInputComponent extends  Component{
  constructor(el, { resultTable }) {
    super(el)
    this.resultTable = resultTable
  }
  
  init() {
    this.$el.addEventListener('keyup', keyupHandler.bind(this))
  }
}

async function keyupHandler(event) {
  if(event.keyCode === 13) {
    const answer = event.target.value

    if(isValidNumber(answer)) {
      await apiService.updatePsychicsRate(answer)
      await this.resultTable.renderResults()
      this.hide()
    }
  }
}

function isValidNumber(value) {
  const valLength = value.toString().length
  return valLength === 2
}
