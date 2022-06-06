
const { ethers } = require("hardhat");

async function main() {

  const tweetdApp = await ethers.getContractFactory("tweetdApp");

  const deployTheContract = await tweetdApp.deploy();

  await deployTheContract.deployed();

  console.log("Contract Address:- ", deployTheContract.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
