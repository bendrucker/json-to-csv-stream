'use strict'

const test = require('tape')
const toStream = require('string-to-stream')
const toCsv = require('./')

test(function (t) {
  const stream = toCsv()

  const chunks = []
  stream.on('data', chunks.push.bind(chunks))

  toStream(JSON.stringify([{foo: 'bar'}]))
    .pipe(stream)

  console.log(chunks)
  t.end()
})
