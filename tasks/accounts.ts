import '@nomiclabs/hardhat-waffle';
import { task } from 'hardhat/config';

task('accounts', 'Prints the list of accounts')
  .setAction(async (_ta, { ethers }) => {
    const signers = await ethers.getSigners();
    const accounts = await Promise.all(signers.map((s) => s.getAddress()));
    console.log(accounts);
  });
