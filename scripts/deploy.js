const hre = require("hardhat");

async function main() {
  const ZameenToken = await hre.ethers.getContractFactory("ZameenToken");
  const token = await ZameenToken.deploy();
  await token.waitForDeployment();

  console.log("ZameenToken deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
