const { getTransaction } = require('../shared');

module.exports = async function (context) {
  getTransaction(context);
};
