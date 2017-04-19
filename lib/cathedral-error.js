export default class CathedralError extends Error {
  constructor (message) {
    super(message)
    Object.setPrototypeOf(this, CathedralError.prototype)
    this.name = this.constructor.name
  }
}
