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

## Create a User

### Request

`POST /api/v1/user/register`

    curl --request POST --url http://localhost:5000/api/v1/user/register --header 'content-type: application/json' --data '{
      "name":"davi",
      "email":"davi@teste.com",
      "password":"davi151079"
    }'

### Successful Response

    HTTP/1.1 200 OK
    Date: Sun, Apr 18 2021 12:01:24 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    {
      "message": "ok",
      "data": {
        "_id": "607c471820520407a9266e32",
        "name": "davi",
        "email": "teste@user.com",
      }
    }
    
### User exists Response

    HTTP/1.1 400 Bad Request
    Date: Sun, Apr 18 2021 12:01:24 GMT
    Status: 400 Bad Request
    Connection: close
    Content-Type: application/json
    Content-Length: 50

    {
      "message": "Error unable to save user, try again"
    }

## Authenticate User

### Request

`POST /api/v1/user/login`

    curl --request POST --url http://localhost:5000/api/v1/user/login --header 'content-type: application/json' --data '{
      "email":"davi@teste.com",
      "password":"davi151079"
    }'

### Successful Response

    HTTP/1.1 200 OK
    Date: Sun, Apr 18 2021 12:01:24 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 250

    {
      "message": "Login successful",
      "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGF2aSIsImVtYWlsIjoiZGF2aUB0ZXN0ZS5jb20iLCJpZCI6IjYwNjBjZmEyYWQ5M2M0NzVkZTU2NmI0MyIsImlhdCI6MTYxODc1NzI5MX0.mJVDsnX4OdGYyuyP31-v_LqsfPQ6CbQOhjPNzplmNAY"
      }
    }
    
## Create shortener url

### Request

`POST /api/v1/shorten`

    curl --request POST --url http://localhost:5000/api/v1/shorten --header 'authorization: Bearer YOUR_TOKEN' --header 'content-type: application/json' --data '{
	    "domain": "foo.com.br",
	    "long_url": "https://www.foo.com.br/bar"
    }'

### Response

    HTTP/1.1 200 OK
    Date: Sun, Apr 18 2021 12:01:24 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    {
      "message": "success",
      "short_url": "http://localhost:5000/-NHfgDLp8a"
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
