'use strict'

const pumpify = require('pumpify')
const JSONStream = require('JSONStream')
const CsvStream = require('csv-write-stream')
const through = require('through2')

module.exports = JSONToCsv

function JSONToCsv (options) {
  options = options || {}
  return pumpify(
    JSONStream.parse(options.path),
    split(),
    CsvStream(options.csv)
  )
}

function split () {
  return through.obj(function (chunk, enc, callback) {
    if (Array.isArray(chunk)) chunk.forEach(this.push.bind(this))
    else this.push(chunk)
    callback(null)
  })
}
