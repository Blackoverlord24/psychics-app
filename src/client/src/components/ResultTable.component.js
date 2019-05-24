import Component from "../core/Component"
import LocalStorageService from '../services/localStorage.service'

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
      .insertAdjacentHTML('afterBegin',  `<tr>${htmlTemp}<td>?</td></tr>`)
  }

  renderResults() {
    this.$body.innerHTML = ''
    renderBody.call(this)
    renderFooter.call(this)
  }
}

function renderBody() {
  const results = LocalStorageService.getItem('answers') || []
  let htmlTemp = ''
  results.forEach(result => {
    for (let key in result) {
      htmlTemp += `<td>${result[key]}</td>`
    }
    this.$body.innerHTML += `<tr>${htmlTemp}</tr>`
    htmlTemp = ''
  })
}

function renderFooter() {
  let psychicsRating = LocalStorageService.getItem('psychics')

  if (!psychicsRating) {
    psychicsRating = [{1: 0, 2: 0, 3: 0, 4: 0, 5: 0}]
    LocalStorageService.setItem('psychics', psychicsRating)
  }

  let  htmlTemp = ''

  for (let i = 1; i <6; i++) {
    htmlTemp += `<td>${psychicsRating[0][i]}</td>`
  }
  this.$body.innerHTML += `<tr>${htmlTemp}<td><b>Total result</b></td></tr>`
}