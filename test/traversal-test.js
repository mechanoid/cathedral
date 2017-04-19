/* global document, Element */

import test from 'ava'

import { $, $$, find, findAll, children } from '../lib/traversal.js'

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

test('$ retrieves sub results based on find, if a context is given', t => {
  document.body.innerHTML = `
    <div id="parent" style="display:inline">
      <div id="child"></div>
    </div>
  `

  const parent = $('#parent')
  const child = $('#child')

  // check $ context search based on find
  t.truthy($('#child', '#parent') === child)
  t.truthy($('#child', parent) === child)
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

test('$$ retrieves sub results based on findAll, if a context is given', t => {
  document.body.innerHTML = `
    <div id="parent" style="display:inline">
      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>
    </div>
  `

  const parent = $('#parent')

  // check $$ context search based on findAll
  t.is($$('.child', '#parent').length, 3)
  t.is($$('.child', parent).length, 3)
})
/**
 * find
 */

test('find function is specified', t => {
  t.is(typeof find, 'function')
})

test('find function is specified', t => {
  document.body.innerHTML = `
    <div id="parent" style="display:inline">
      <div id="child"></div>
    </div>
  `

  const parent = $('#parent')
  const child = $('#child')

  t.truthy(find(parent, '#child') === child)
})

/**
 * findAll
 */

test('find function is specified', t => {
  t.is(typeof findAll, 'function')
})

test('find function is specified', t => {
  document.body.innerHTML = `
    <div id="parent" style="display:inline">
      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>
    </div>
  `

  const parent = $('#parent')

  t.truthy(findAll(parent, '.child') instanceof Array)
  t.is(findAll(parent, '.child').length, 3)
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
