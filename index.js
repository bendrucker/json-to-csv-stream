'use strict'

const pumpify = require('pumpify')
const JSONStream = require('JSONStream')
const CsvStream = require('csv-write-stream')

module.exports = JSONToCsv

function JSONToCsv () {
  return pumpify(JSONStream.parse(), split(), CsvStream())
}

function
