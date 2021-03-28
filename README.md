# Welcome to Basic URL Shortener 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/davialmeida/basic-url-shortener#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/davialmeida/basic-url-shortener/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/davialmeida/Basic URL Shortener)](https://github.com/davialmeida/basic-url-shortener/blob/master/LICENSE)

> A basic url shortener with express.js and MongoDB

## Install

```sh
yarn install
```

## Usage

```sh
yarn run start
```
or 

```sh
yarn run dev
```

# REST API

The REST API to the example app is described below.

## Create shortener url

### Request

`POST /shorten/`

    curl --request POST --url http://localhost:5000/api/v1/shorten --header 'authorization: Bearer YOUR_TOKEN' --header 'content-type: application/json' --data '{
	    "domain": "foo.com.br",
	    "long_url": "https://www.foo.com.br/bar"
    }'

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    {
      "message": "success",
      "short_url": "http://localhost/-NHfgDLp8a"
    }

## Author

👤 **Davi Almeida**

* Github: [@davialmeida](https://github.com/davialmeida)
* LinkedIn: [@davialmeidadev](https://linkedin.com/in/davialmeidadev)

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2021 [Davi Almeida](https://github.com/davialmeida).

This project is [MIT](https://github.com/davialmeida/basic-url-shortener/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_