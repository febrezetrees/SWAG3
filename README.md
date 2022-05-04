# 🏦 Bank app demo

> Example solution for the bank app project of the [Web Dev for Beginners curriculum](https://github.com/microsoft/Web-Dev-For-Beginners), built with vanilla HTML5, CSS and JavaScript (no frameworks or libraries used) and using a serverless API built with [Azure Functions](https://azure.microsoft.com/services/functions/?WT.mc_id=javascript-0000-yolasors).

## Running the app

1. Git clone this repo.
2. Open a terminal, then run `npm install`. It will start a development web server on port `3000`
3. Open `http://localhost:3000` in a browser to run the app.

## Deploying on Azure Static Web apps

> What's Azure Static Web Apps? It's an all-inclusive hosting service for web apps providing features like continuous deployment, serverless APIs, authentication and more. And it has a free tier!

Prerequisites:
- An [Azure account](https://azure.microsoft.com/free/?WT.mc_id=javascript-0000-cxa) (you can create one for free).

1. Once you've created your Azure account, open a terminal and run the following command:
  ```sh
  npm run deploy
  ```
2. When asked, log in to your Azure account.
3. When asked, select the Azure Static Web Apps subscription.

You can find tutorials on using Static Web Apps [here](https://docs.microsoft.com/learn/paths/azure-static-web-apps/?WT.mc_id=javascript-0000-cxa).
