'use strict'

const test = require('tape')
const toStream = require('string-to-stream')
const read = require('read-all-stream')
const toCsv = require('./')

test('default behavior', function (t) {
  t.plan(1)
  const data = [{foo: 'bar', bar: 'baz'}, {foo: 'bar1', bar: 'baz1'}]
  const csv = toStream(JSON.stringify(data)).pipe(toCsv())

  read(csv, function (err, string) {
    if (err) return t.end(err)
    t.equal(string, 'foo,bar\nbar,baz\nbar1,baz1\n', 'outputs csv stream')
  })
})

test('send csv-write-stream options', function (t) {
  t.plan(1)
  const data = [{foo: 'bar', bar: 'baz'}, {foo: 'bar1', bar: 'baz1'}]
  const options = {
    csv: {
      separator: ';',
      newline: '\r\n',
      headers: ['bar'],
      sendHeaders: false
    }
  }
  const csv = toStream(JSON.stringify(data)).pipe(toCsv(options))

  read(csv, function (err, string) {
    if (err) return t.end(err)
    t.equal(string, 'baz\r\nbaz1\r\n', 'outputs customized csv stream')
  })
})

test('send JSONStream options', function (t) {
  t.plan(1)
  const data = [
    {foo: 'bar', bar: { baz: 'hi', biz: 'ok' }},
    {foo: 'bar1', bar: { baz: 'hi1', biz: 'ok1' }}
  ]
  const options = { path: '*.bar' }
  const csv = toStream(JSON.stringify(data)).pipe(toCsv(options))

  read(csv, function (err, string) {
    if (err) return t.end(err)
    t.equal(string, 'baz,biz\nhi,ok\nhi1,ok1\n', 'outputs filtered csv stream')
  })
})
