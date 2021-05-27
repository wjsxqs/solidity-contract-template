import { HardhatUserConfig } from 'hardhat/config';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-gas-reporter';
import 'hardhat-contract-sizer';
import 'hardhat-typechain';

require('dotenv').config();

const {
  INFURA_API_KEY,
  ETH_MNEMONIC,
  ETH_PRIVATE_KEY
} = process.env;

const MNEMONIC = ETH_MNEMONIC || '';
const PRIVATE_KEY = ETH_PRIVATE_KEY || '';

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
      accounts: MNEMONIC ? { mnemonic: MNEMONIC } : [PRIVATE_KEY],
      gas: 5000000,
      gasPrice: 50000000000 // 50Gwei
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts: MNEMONIC ? { mnemonic: MNEMONIC } : [PRIVATE_KEY]
    },
    hardhat: {
      chainId: 1337
    },
  },
  gasReporter: {
    enabled: false
  },
  etherscan: {
    apiKey: ''
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: false,
    disambiguatePaths: false
  },
  typechain: {
    outDir: 'types',
    target: 'ethers-v5'
  }
};

export default config;
