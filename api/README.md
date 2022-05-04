# Bank API

> Bank API built with [Node.js](https://nodejs.org) and [Azure Functions](https://azure.microsoft.com/services/functions/?WT.mc_id=javascript-0000-yolasors), adapted from the Express.js Bank API of the [Web Dev for Beginners curriculum](https://github.com/microsoft/Web-Dev-For-Beginners).

## Running the server

Make sure you have [Node.js](https://nodejs.org) and [Azure Functions Core Tools](https://docs.microsoft.com/azure/azure-functions/functions-run-local?tabs=v4%2Cwindows%2Ccsharp%2Cportal%2Cbash&WT.mc_id=javascript-0000-yolasors) installed.

1. Git clone this repo.
2. Open a terminal in `api` folder, then run `npm start`.

The server should start listening on port `7071`.

> Note: all entries are stored in-memory and are not persisted, so when the server is stopped all data is lost.

## API details

Route                                        | Description
---------------------------------------------|------------------------------------
GET    /api/                                 | Get server info
POST   /api/accounts/                        | Create an account, ex: `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Get all data for the specified account
DELETE /api/accounts/:user                   | Remove specified account
POST   /api/accounts/:user/transactions      | Add a transaction, ex: `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Remove specified transaction
