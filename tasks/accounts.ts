import '@nomiclabs/hardhat-waffle';
import { task } from 'hardhat/config';

task('accounts', 'Prints the list of accounts')
  .setAction(async (_ta, { ethers }) => {
    const accounts = await ethers.getSigners();
    console.log(await Promise.all(accounts.map((a) => a.getAddress)));
  });
