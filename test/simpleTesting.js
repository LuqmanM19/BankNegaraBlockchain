const SimpleRegulator = artifacts.require("SimpleRegulator");
 
contract("SimpleRegulator", () => {
  let simpleRegulator;
 
  before(async () => {
    // deployed() return a js object pointing to an already deployed smart contract
    simpleRegulator = await SimpleRegulator.deployed();
  });
 
  it("The contract should be deployed properly", async () => {
    // console.log(simpleRegulator.address);
    assert(simpleRegulator.address !== "");
  });
 
  it("The threshold should be 20 ether", async () => {
    const threshold = await simpleRegulator.threshold;
    assert.equal(simpleRegulator.threshold, threshold);
  });
 
  it("The balance of the contract should be 20 ether", async () => {
    simpleRegulator.deposit(5);
    const balance = await simpleRegulator.getBalance();
    assert(balance.toNumber() === 20);
  });
});