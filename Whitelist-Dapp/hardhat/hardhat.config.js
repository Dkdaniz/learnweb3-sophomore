require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_HTTP_URL = process.env.ALCHEMY_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: ALCHEMY_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};