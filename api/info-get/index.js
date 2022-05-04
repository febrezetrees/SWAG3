const pkg = require('../../package.json');

module.exports = async function ({ res }) {
  return res.send(`${pkg.description} v${pkg.version}`);
};
