export default class LocalStorageService {
  static getItem(itemName) {
    return JSON.parse(localStorage.getItem(itemName))
  }

  static setItem(itemName, items) {
    localStorage.setItem(itemName, JSON.stringify(items))
  }
}