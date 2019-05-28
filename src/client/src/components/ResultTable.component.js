import Component from "../core/Component"
import apiService from '../services/api.service'

export default class ResultTableComponent extends Component {
  constructor(el) {
    super(el)
  }

  init() {
    this.$body = this.$el.querySelector('tbody')
    this.renderResults()
  }

  addRow(answers) {
    let htmlTemp = ''
    for (let key in answers) {
      htmlTemp += `<td>${answers[key]}</td>`
    }

    this.$el
      .querySelector('tbody')
      .insertAdjacentHTML('afterBegin',  `<tr>${htmlTemp}</tr>`)
  }

  async renderResults() {
    this.$body.innerHTML = ''
    await renderBody.call(this)
    await renderFooter.call(this)
  }
}

async function renderBody() {
  const results = await apiService.getAnswersHistory()

  let htmlTemp = ''
  results.forEach(result => {
    for (let key in result) {
      htmlTemp += `<td>${result[key]}</td>`
    }
    this.$body.innerHTML += `<tr>${htmlTemp}</tr>`
    htmlTemp = ''
  })
}

async function renderFooter() {
  const psychicsRating = await apiService.getPsychicsRate()

  let  htmlTemp = ''
  for (let i = 1; i <6; i++) {
    htmlTemp += `<td>${psychicsRating[0][i]}</td>`
  }
  this.$body.innerHTML += `<tr>${htmlTemp}<td><b>Authenticity of psychics</b></td></tr>`
}
