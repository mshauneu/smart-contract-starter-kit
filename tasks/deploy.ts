import '@nomiclabs/hardhat-waffle';
import { task } from 'hardhat/config';

task('deploy', 'Deploy')
  .addParam('contract', 'The contract name')
  .setAction(async (ta, { ethers }) => {
    const factory = await ethers.getContractFactory(ta.contract);
    const contract = await factory.deploy();
    await contract.deployed();
    console.log(contract.address);
  });
