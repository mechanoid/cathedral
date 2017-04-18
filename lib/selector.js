/* global document */

export const $ = (selector) => document.querySelector(selector)
export const $$ = (selector) => [...document.querySelectorAll(selector)]

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
