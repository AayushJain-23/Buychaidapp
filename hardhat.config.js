
//Goerli testnet is officially deprecated now.
//The Sepolia testnet is now the default and recommended Ethereum testnet by both the Ethereum Foundation and platforms like Alchemy.


// require("@nomicfoundation/hardhat-toolbox");

// require("dotenv").config();
// /** @type import('hardhat/config').HardhatUserConfig */

// const GOERLI_URL = process.env.GOERLI_URL;
// const PRIVATE_KEY = process.env.PRIVATE_KEY;
// module.exports = {
//   solidity: "0.8.17",
//   networks: {
//     goerli: {
//       url: GOERLI_URL,
//       accounts: [PRIVATE_KEY],
//     },
//   },
// };


require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_URL = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports ={
  solidity:"0.8.1",
  networks: {
    sepolia :{
      url: SEPOLIA_URL,
      accounts :[PRIVATE_KEY],
    },
  },
};
