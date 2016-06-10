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

## License

MIT © [Ben Drucker](http://bendrucker.me)
