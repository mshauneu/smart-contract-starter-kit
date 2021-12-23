import '@nomiclabs/hardhat-waffle';
import { task } from 'hardhat/config';
import { Signer } from '@ethersproject/abstract-signer';

task('accounts', 'Prints the list of accounts')
  .setAction(async (_ta, { ethers }) => {
    const accounts: Signer[] = await ethers.getSigners();
    console.log(await Promise.all(accounts.map((a) => a.getAddress)));
  });
