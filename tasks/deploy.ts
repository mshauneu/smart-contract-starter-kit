import '@nomiclabs/hardhat-waffle';
import { task } from 'hardhat/config';

task('deploy:vm', 'Deploy')
  .setAction(async (_ta, { ethers }) => {
    const VM = await ethers.getContractFactory("VendingMachine");
    const vm = await VM.deploy();
    await vm.deployed();
    console.log(vm.address);
  });

task('deploy:voting', 'Deploy')
  .setAction(async (_ta, { ethers }) => {
    const Voting = await ethers.getContractFactory("Voting");
    const voting = await Voting.deploy();
    await voting.deployed();
    console.log(voting.address);
  });
