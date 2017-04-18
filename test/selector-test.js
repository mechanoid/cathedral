/* global document, Element */

import test from 'ava'

import { $, $$ } from '../lib/selector.js'

test.beforeEach(() => { document.body.innerHTML = '' })

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

test('wrapper function $$ is specified', t => {
  t.is(typeof $$, 'function')
})

test('$ retrieves a single dom item', t => {
  document.body.innerHTML = `
    <div class="part-of-many"></div>
    <div class="part-of-many"></div>
  `

  t.truthy($$('.part-of-many') instanceof Array)
  t.is($$('.part-of-many').length, 2)
})
