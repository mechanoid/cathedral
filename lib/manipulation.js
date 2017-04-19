// TODO: fix missing classList-property
export const addClass = (element, className) => element.classList.add(className)
export const removeClass = (element, className) => element.classList.remove(className)

export const css = (element, property, value) => {
  if (!value && value !== '' && value !== 0) {
    return window.getComputedStyle(element, null).getPropertyValue(property)
  } else if (value === '') {
    element.style.removeProperty(property)
  } else {
    element.style[property] = value
  }
}

// does only support atomic synchronous functions
const curry = (decorator, element, cb) =>
  (...args) => {
    cb(element, ...args)
    return decorator
  }

export const chain = (element) => ({
  addClass (...args) { return curry(this, element, addClass)(...args) },
  removeClass (...args) { return curry(this, element, removeClass)(...args) },
  css (...args) { return curry(this, element, css)(...args) }
})
