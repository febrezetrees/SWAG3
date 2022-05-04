const { createTransaction } = require('../shared');

module.exports = async function (context) {
  createTransaction(context);
};
