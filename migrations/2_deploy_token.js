const ArkToken = artifacts.require("ArkToken")

module.exports = (deployer) => {
  deployer.deploy(ArkToken)
} 