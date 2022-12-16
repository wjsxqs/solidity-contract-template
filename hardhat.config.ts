import { HardhatUserConfig } from 'hardhat/config';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@openzeppelin/hardhat-upgrades';
import 'hardhat-gas-reporter';
import 'hardhat-contract-sizer';
import 'hardhat-abi-exporter';
import '@typechain/hardhat';
import 'solidity-coverage';

import dotenv from 'dotenv';

dotenv.config();

const { ETH_MNEMONIC, ETH_PRIVATE_KEY, ALCHEMY_API_KEY } = process.env;

const MNEMONIC = ETH_MNEMONIC || '';
const ACCOUNTS = MNEMONIC ? { mnemonic: MNEMONIC } : ETH_PRIVATE_KEY ? [ETH_PRIVATE_KEY] : [];

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    mainnet: {
      chainId: 1,
      url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: ACCOUNTS,
    },
    goerli: {
      chainId: 5,
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: ACCOUNTS,
    },
    mumbai: {
      chainId: 80001,
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: ACCOUNTS,
    },
    polygon: {
      chainId: 137,
      url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: ACCOUNTS,
    },
    bsc: {
      chainId: 56,
      url: 'https://rpc.ankr.com/bsc',
      accounts: ACCOUNTS,
    },
    bsc_testnet: {
      chainId: 97,
      url: 'https://bsctestapi.terminet.io/rpc',
      accounts: ACCOUNTS,
    },
    aurora: {
      chainId: 1313161554,
      url: 'https://mainnet.aurora.dev',
      accounts: ACCOUNTS,
    },
    aurora_testnet: {
      chainId: 1313161555,
      url: 'https://testnet.aurora.dev',
      accounts: ACCOUNTS,
    },
    arbitrum_one: {
      chainId: 42161,
      url: `https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: ACCOUNTS,
    },
    arbitrum_goerli: {
      chainId: 421613,
      url: `https://arb-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: ACCOUNTS,
    },
    optimism: {
      chainId: 10,
      url: `https://opt-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: ACCOUNTS,
    },
    optimism_goerli: {
      chainId: 420,
      url: `https://opt-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: ACCOUNTS,
    },
    fantom: {
      chainId: 250,
      url: 'https://rpc.ankr.com/fantom',
      accounts: ACCOUNTS,
    },
    fantom_testnet: {
      chainId: 4002,
      url: 'https://rpc.ankr.com/fantom_testnet',
      accounts: ACCOUNTS,
    },
    avalanche: {
      chainId: 43114,
      url: 'https://rpc.ankr.com/avalanche',
      accounts: ACCOUNTS,
    },
    avalanche_fuji: {
      chainId: 43114,
      url: 'https://rpc.ankr.com/avalanche_fuji',
      accounts: ACCOUNTS,
    },
    moonbase: {
      chainId: 1287,
      url: 'https://rpc.api.moonbase.moonbeam.network',
      accounts: ACCOUNTS,
    },
    moonriver: {
      chainId: 1285,
      url: 'https://rpc.api.moonriver.moonbeam.network',
      accounts: ACCOUNTS,
    },
    moonbeam: {
      chainId: 1284,
      url: 'https://rpc.api.moonbeam.network',
      accounts: ACCOUNTS,
    },
    celo: {
      chainId: 42220,
      url: 'https://rpc.ankr.com/celo',
      accounts: ACCOUNTS,
    },
    celo_alfajores: {
      chainId: 42220,
      url: 'https://alfajores-forno.celo-testnet.org',
      accounts: ACCOUNTS,
    },
    telos_testnet: {
      chainId: 41,
      url: 'https://testnet.telos.net/evm',
      accounts: ACCOUNTS,
    },
    telos: {
      chainId: 40,
      url: 'https://mainnet.telos.net/evm',
      accounts: ACCOUNTS,
    },
    evmos_testnet: {
      chainId: 9000,
      url: 'https://eth.bd.evmos.dev:8545',
      accounts: ACCOUNTS,
    },
    evmos: {
      chainId: 9001,
      url: 'https://evmos-mainnet.public.blastapi.io',
      accounts: ACCOUNTS,
    },
    boba_rinkeby: {
      chainId: 28,
      url: 'https://rinkeby.boba.network',
      accounts: ACCOUNTS,
    },
    boba: {
      chainId: 288,
      url: 'https://mainnet.boba.network',
      accounts: ACCOUNTS,
    },
    hardhat: {
      chainId: 1337,
    },
  },
  paths: {
    artifacts: './artifacts',
    cache: './cache',
    sources: './contracts',
    tests: './test',
  },
  gasReporter: {
    enabled: false,
  },
  etherscan: {
    apiKey: '',
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: false,
    disambiguatePaths: false,
  },
  abiExporter: {
    runOnCompile: true,
    clear: true,
    flat: true,
    only: [':Greeter$'],
    pretty: true,
  },
  typechain: {
    outDir: 'types',
    target: 'ethers-v5',
  },
  mocha: {
    timeout: 0,
  },
};

export default config;
