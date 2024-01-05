const hre = require("hardhat");

async function main() {
  try {
    const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    const unlockTime = currentTimestampInSeconds + 60;

    const lockedAmount = hre.ethers.parseEther("0.0000001");

    // Provide the beneficiary address as the target
    const beneficiary = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; // Replace with the actual beneficiary address
    const Campaign = await hre.ethers.getContractFactory("Campaign");
    const campaign = await Campaign.deploy(unlockTime, beneficiary, { value: lockedAmount });

    await campaign.deployed();

    console.log(
      `Lock with ${hre.ethers.utils.formatEther(
        lockedAmount
      )} ETH and unlock timestamp ${unlockTime} deployed to ${campaign.address}`
    );
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main();
