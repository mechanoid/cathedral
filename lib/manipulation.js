// import { children } from './selector.js'

// TODO: fix missing classList-property
export const addClass = (element, className) => element.classList.add(className)
export const removeClass = (element, className) => element.classList.remove(className)

// does only support atomic synchronous functions
const curry = (decorator, element, cb) =>
  (...args) => {
    cb(element, ...args)
    return decorator
  }

export const chain = (element) => ({
  addClass (...args) { return curry(this, element, addClass)(...args) },
  removeClass (...args) { return curry(this, element, removeClass)(...args) }
})
