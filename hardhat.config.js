
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const API_URL  = process.env.API_URL;
const PRIVATE_KEY= process.env.PRIVATE_KEY;
module.exports = {
   solidity: "0.8.9",
   defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}