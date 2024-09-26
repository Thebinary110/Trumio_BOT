const hre = require("hardhat");

async function main() {
  const NAME = "GPTMembership";
  const SYMBOL = "GPT";

  const GPTMembership = await hre.ethers.getContractFactory("GPTMembership");
  const gPTMembership = await GPTMembership.deploy(NAME, SYMBOL);

  await gPTMembership.deployed();

  console.log(` GPTMembership: ${gPTMembership.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
