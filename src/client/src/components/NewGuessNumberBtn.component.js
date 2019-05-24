import Component from "../core/Component"

export default class NewGuessNumberBtnComponent extends Component{
  constructor(el, {getAnswerBtn, answerInput}) {
    super(el)
    this.getAnswerBtn = getAnswerBtn
    this.answerInput = answerInput
  }

  init() {
    this.$el.addEventListener('click', clickHandler.bind(this))
  }
}

function clickHandler() {
  this.getAnswerBtn.show()
  this.answerInput.hide()
  this.hide()
}