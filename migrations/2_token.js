const StandardToken = artifacts.require('StandardToken');

module.exports = async function (deployer) {
  await deployer.deploy(StandardToken, 'StandardToken', 'TST', '1000000000000000000000000000');
};
