/* eslint-disable global-require,no-use-before-define */
const path = require('path');
const Loki = require('lokijs');

const db = new Loki(path.join(__dirname, './data/db.json'), {
  autoload: true,
  autosave: true,
  autoloadCallback: databaseInitialize,
});

function databaseInitialize() {
  const users = require('./users')(db);
  const tweets = require('./tweets')(db);

  exports.users = users;
  exports.tweets = tweets;
}

