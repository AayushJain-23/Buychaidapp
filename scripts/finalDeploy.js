const hre = require("hardhat");

async function main() {
  
  const Chai = await hre.ethers.getContractFactory("chai");
  const contract = await Chai.deploy();

  await contract.waitForDeployment(); // v6: deployed() removed
  console.log("Address of contract:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});