require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.19",

  paths:{
    sources: "./contracts",
    artifacts: './artifacts',
  },
  // networks:{
  //   hardhat: {
  //     chainId: 1337,
  //   },
  // },
  // networks:{
  //   goerli: {
  //     url: process.env.ALCHEMY_TESTNET_RPC_URL,
  //     accounts: [process.env.TESTNET_PRIVATE_KEY],
  //   },
  // },
};


