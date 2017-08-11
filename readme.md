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

## Options

You can pass [JSONStream](https://www.npmjs.com/package/JSONStream) and/or [csv-write-stream](https://www.npmjs.com/package/csv-write-stream) options to `json-to-csv-stream`.

```js
{
  // JSONStream options
  path: undefined,

  // csv-write-stream options
  csv: {
    separator: ',',
    newline: '\n',
    headers: undefined,
    sendHeaders: true
  }
}
```

Example:

```js
jsonToCsv({
  path: 'clients.*',
  csv: { headers: ['name', 'address'], separator: ';' }
})
```

## License

MIT © [Ben Drucker](http://bendrucker.me)
