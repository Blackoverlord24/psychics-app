export default class Component {
  constructor(el) {
    this.$el = document.getElementById(el)
    this.init()
  }

  init() {}

  hide() {
    this.$el.parentNode.classList.add('hide')
  }

  show() {
    this.$el.parentNode.classList.remove('hide')
  }
}