'use strict'

const pumpify = require('pumpify')
const JSONStream = require('JSONStream')
const CsvStream = require('csv-write-stream')
const through = require('through2')

module.exports = JSONToCsv

function JSONToCsv (options) {
  options = options || {}
  return pumpify(JSONStream.parse(), split(), CsvStream(options.csv))
}

function split () {
  return through.obj(function (array, enc, callback) {
    array.forEach(this.push.bind(this))
    callback(null)
  })
}
