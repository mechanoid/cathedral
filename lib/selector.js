/* global document, Element */

export const findAll = (element, selector) => [...element.querySelectorAll(selector)]
export const find = (element, selector) => element.querySelector(selector)

export const $ = function $ (selector, context) {
  if (selector instanceof Element) {
    return selector
  }

  if (!context) {
    return document.querySelector(selector)
  }

  return find($(context), selector)
}

export const $$ = function $$ (selector, context) {
  if (!context) {
    return [...document.querySelectorAll(selector)]
  }

  return findAll($(context), selector)
}

// see zepto.js
export const children = (element, selector) => {
  const children = 'children' in element
      ? [...element.children]
      : [...element.childNodes].map((node) => (node.nodeType === 1) && node)

  if (selector) {
    // TODO: matches will fail in older browsers
    return children.filter(child => child.matches(selector))
  }

  return children
}
