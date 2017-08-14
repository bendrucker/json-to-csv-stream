# json-to-csv-stream [![Build Status](https://travis-ci.org/bendrucker/json-to-csv-stream.svg?branch=master)](https://travis-ci.org/bendrucker/json-to-csv-stream)

> Convert a JSON array stream into CSV rows


## Install

```
$ npm install --save json-to-csv-stream
```


## Usage

```js
var jsonToCsv = require('json-to-csv-stream')
var fs = require('fs')

fs.createReadStream('./data.json')
  .pipe(jsonToCsv())
  .pipe(fs.createWriteStream('./data.csv'))
```

## API

#### `jsonToCsvStream(options)` -> `Transform`

##### options

Type: `object`  
Default: `{}`

###### path

Type: `any`
Default: `undefined`

A path for [`JSONStream.parse`](https://github.com/dominictarr/JSONStream#jsonstreamparsepath).

###### csv

Type: `object`  
Default: `undefined`

Options to pass to [`csv-write-stream`](https://github.com/maxogden/csv-write-stream#var-writer--csvwriteroptions).

## License

MIT © [Ben Drucker](http://bendrucker.me)
