const { deleteAccount } = require('../shared');

module.exports = async function (context) {
  deleteAccount(context);
};
