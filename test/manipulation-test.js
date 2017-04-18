/* global document */

import test from 'ava'

import { $ } from '../lib/selector.js'
import { addClass, removeClass, chain } from '../lib/manipulation.js'

test.beforeEach(() => { document.body.innerHTML = '' })

/**
 * addClass
 */

test('addClass', t => {
  t.is(typeof addClass, 'function')
})

test('addClass adds a class to the list of an elements classes', t => {
  document.body.innerHTML = `
    <div id="element"></div>
  `

  const element = $('#element')
  addClass(element, 'some-class')

  t.is(element.className, 'some-class')
})

test('addClass adds a class to a given list of an elements classes', t => {
  document.body.innerHTML = `
    <div id="element" class="fubar"></div>
  `

  const element = $('#element')
  addClass(element, 'some-class')
  addClass(element, 'fubar')

  t.is(element.className, 'fubar some-class')
})

/**
 * removeClass
 */

test('removeClass', t => {
  t.is(typeof removeClass, 'function')
})

test('removeClass removes a given class from the list of an elements classes', t => {
  document.body.innerHTML = `
    <div id="element" class="some-other fubar second"></div>
  `

  const element = $('#element')
  removeClass(element, 'fubar')

  t.is(element.className, 'some-other second')

  removeClass(element, 'second')
  removeClass(element, 'some-class')

  t.is(element.className, 'some-other')
})

/**
 * chain
 */

test('chain function is specified', t => {
  t.is(typeof chain, 'function')
})

test('chain returns an object, containing a set of curried functions for the given element', t => {
  document.body.innerHTML = `
    <div id="element" class="initial"></div>
  `

  const element = $('#element')

  chain(element)
    .addClass('changed')
    .removeClass('initial')

  t.is(element.className, 'changed')
})
