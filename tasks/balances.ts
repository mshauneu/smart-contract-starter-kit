import '@nomiclabs/hardhat-waffle';
import { task } from 'hardhat/config';

task('balances', 'Prints the list of accounts')
  .setAction(async (_ta, { ethers }) => {
    const signers = await ethers.getSigners();
    const accounts = await Promise.all(signers.map((s) => s.getAddress()));
    const balances = await Promise.all(accounts.map(
      async (a) => ethers.utils.formatEther(await ethers.provider.getBalance(a))));

    for (let i = 0; i < accounts.length; i += 1) {
      console.log(`${accounts[i]} - ${balances[i]} ETH`);
    }
  });
