const contractObject = artifacts.require("Token");

module.exports = function (deployer) {
    deployer.deploy(contractObject);
};