require('dotenv').config()
require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "rinkeby",
  solidity: "0.8.7",
  networks: {
    rinkeby: {
      url: process.env.PROVIDER,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
