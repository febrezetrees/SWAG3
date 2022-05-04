const { createAccount } = require('../shared');

module.exports = async function (context) {
  createAccount(context);
};
