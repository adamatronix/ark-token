const ArkToken = artifacts.require("ArkToken")

contract("token", (accounts) => {

  it("distributes token supply", async () => {
    const token = await ArkToken.deployed()
    
    // accounts[0] is the same address that created the TweetherToken:
    const founderBalance = await token.balanceOf.call(accounts[0])

    // Make sure it holds all of the supply:
    assert.equal(founderBalance.toString(), "1000000")
  })

})