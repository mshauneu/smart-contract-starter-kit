import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-solhint';
import 'solidity-coverage';
import { HardhatUserConfig } from 'hardhat/config';

import './tasks/accounts';
import './tasks/deploy';
import './tasks/exec';

const config: HardhatUserConfig = {
  paths: {
    artifacts: './artifacts',
    cache: './cache',
    sources: './contracts',
    tests: './test',
  },
  solidity: {
    version: '0.8.9',
    settings: {
      metadata: {
        bytecodeHash: 'none',
      },
      optimizer: {
        enabled: true,
        runs: 800,
      },
    },
  },
  networks: {
    ganache: {
      url: 'http://127.0.0.1:7545',
    },
  },
  typechain: {
    outDir: 'artifacts/types',
    target: 'ethers-v5',
  },
};

export default config;
