const hre = require("hardhat");

async function main() {
  const [owner, investor1] = await hre.ethers.getSigners();
  const ZameenToken = await hre.ethers.getContractFactory("ZameenToken");

  const token = await ZameenToken.attach("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");

  console.log("Total Supply:", (await token.totalSupply()).toString());

  await token.distribute(investor1.address, hre.ethers.parseEther("1000"));
  console.log("Distributed 1000 tokens to investor1");

  const balance = await token.balanceOf(investor1.address);
  console.log("Investor1 Balance:", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
