/* global document, Element */

import test from 'ava'

import { $, $$, children } from '../lib/selector.js'

test.beforeEach(() => { document.body.innerHTML = '' })

/**
 * $
 */

test('wrapper function $ is specified', t => {
  t.is(typeof $, 'function')
})

test('$ retrieves a single dom item', t => {
  document.body.innerHTML = `
    <div class="part-of-many"></div>
    <div class="part-of-many"></div>
  `

  t.truthy($('.part-of-many') instanceof Element)
  t.is($('.part-of-many').outerHTML, '<div class="part-of-many"></div>')
})

/**
 * $$
 */

test('wrapper function $$ is specified', t => {
  t.is(typeof $$, 'function')
})

test('$$ retrieves an array of dom elements', t => {
  document.body.innerHTML = `
    <div class="part-of-many"></div>
    <div class="part-of-many"></div>
  `

  t.truthy($$('.part-of-many') instanceof Array)
  t.is($$('.part-of-many').length, 2)
})

/**
 * children
 */

test('children function is specified', t => {
  t.is(typeof children, 'function')
})

test('children returns an array of child elements if given', t => {
  document.body.innerHTML = `
    <div class="parent">
      <div class="child">
        <div class="sub-child"></div>
      </div>
      <div class="child"></div>
      <div class="child"></div>
    </div>
  `

  const parent = $('.parent')
  t.is(children(parent).length, 3)
})

test('children with a selector passed returns only child elements that match the given selector', t => {
  document.body.innerHTML = `
    <div class="parent">
      <div class="child active"></div>
      <div class="child active"></div>
      <div class="child"></div>
    </div>
  `

  const parent = $('.parent')
  t.is(children(parent, '.active').length, 2)
})
