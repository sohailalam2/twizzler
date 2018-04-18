# Twizzler Web
---

## Introduction

The aim of this project is to build a RESTful API endpoints capable of simulating Twitter posts and likes. 

The frontend is built using **VueJs** with **Vuex** as the centralized state-management store and with an additional support for **Server Sent Events** to receive updates from the server instantly. 

Being a proof of concept work, this project uses **Bulma** css framework with **SCSS** as a CSS preprocessor and **PUG** as the templating language. 

Because of the SSE feature, you can open two or more browser tabs / different browsers etc. and you will get immediate updates pushed to you as it happens.

## Requirements

- NodeJs v8 or above
- NPM v5 or above

## Installation and Building

``` bash
# install dependencies
npm install

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Running the application

The **src/app.js** is the entry point of the application and it can be run as follows -

```bash
npm run dev
```
