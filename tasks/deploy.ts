import '@nomiclabs/hardhat-waffle';
import { task } from 'hardhat/config';

task('deploy:vm', 'Deploy')
  .setAction(async (_ta, { ethers }) => {
    const factory = await ethers.getContractFactory("VendingMachine");
    const contract = await factory.deploy();
    await contract.deployed();
    console.log(contract.address);
  });

task('deploy:voting', 'Deploy')
  .setAction(async (_ta, { ethers }) => {
    const factory = await ethers.getContractFactory("Voting");
    const contract = await factory.deploy();
    await contract.deployed();
    console.log(contract.address);
  });

task('deploy:tc', 'Deploy')
  .setAction(async (_ta, { ethers }) => {
    const factory = await ethers.getContractFactory("TatooineCoin");
    const contract = await factory.deploy();
    await contract.deployed();
    console.log(contract.address);
  });

