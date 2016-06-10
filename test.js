'use strict'

const test = require('tape')
const toStream = require('string-to-stream')
const read = require('read-all-stream')
const toCsv = require('./')

test(function (t) {
  t.plan(1)
  const data = [{foo: 'bar', bar: 'baz'}, {foo: 'bar1', bar: 'baz1'}]
  const csv = toStream(JSON.stringify(data)).pipe(toCsv())

  read(csv, function (err, string) {
    if (err) return t.end(err)
    t.equal(string, 'foo,bar\nbar,baz\nbar1,baz1\n', 'outputs csv stream')
  })
})
