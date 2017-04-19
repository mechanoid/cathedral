 /* global document, Element */

/*
  Important Attribution Note:

  Many functions of this library are heavily inspired by zepto.js (https://github.com/madrobby/zepto)
  written and maintained by Thomas Fuchs.
 */

import CustomError from './cathedral-error.js'
import createElement from './create-element.js'

export class CathedralSelectorError extends CustomError {}

/* recognition patterns from zepto.js */
const htmlFragmentPattern = /^\s*<(\w+|!)[^>]*>/

export const findAll = (element, selector) => [...element.querySelectorAll(selector)]
export const find = (element, selector) => element.querySelector(selector)

export const $ = function $ (rawSelector, context) {
  if (!rawSelector) { return }

  if (rawSelector instanceof Element) {
    return rawSelector
  }

  const selector = rawSelector.trim()

  if (selector[0] === '<' && htmlFragmentPattern.test(selector)) {
    return createElement(selector)
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
