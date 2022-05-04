const { deleteTransaction } = require('../shared');

module.exports = async function (context) {
  deleteTransaction(context);
};
