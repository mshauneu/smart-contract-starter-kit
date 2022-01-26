import '@nomiclabs/hardhat-waffle';
import { task } from 'hardhat/config';

task('exec:vm', 'Execute VendingMachine')
  .addParam('address', 'The contract address')
  .setAction(async (ta, { ethers }) => {
    const signers = await ethers.getSigners();
    const factory = await ethers.getContractFactory('VendingMachine');
    const contract = factory.attach(ta.address);
    console.log(await contract.connect(signers[0]).quantity());

    const tx = await contract.connect(signers[1]).purchase('10', {
      value: ethers.utils.parseEther('10'),
      gasLimit: '6721975',
    });
    await tx.wait();
    console.log(await contract.connect(signers[1]).quantity());
    console.log(await contract.total());
  });

task('exec:tc', 'Execute TatooineCoin balances')
  .addParam('address', 'The contract address')
  .setAction(async (ta, { ethers }) => {
    const signers = await ethers.getSigners();
    const factory = await ethers.getContractFactory('TatooineCoin');
    const contract = factory.attach(ta.address);

    const accounts = await Promise.all(signers.map((s) => s.getAddress()));
    const balances = await Promise.all(accounts.map((a) => contract.balanceOf(a)));
    for (let i = 0; i < accounts.length; i += 1) {
      console.log(`${accounts[i]} - ${Math.round(+ethers.utils.formatEther(balances[i]))}`);
    }
  });

task('exec:voting', 'Execute voting')
  .addParam('address', 'The contract address')
  .setAction(async (ta, { ethers }) => {
    const signers = await ethers.getSigners();
    const factory = await ethers.getContractFactory('Voting');
    const contract = factory.attach(ta.address);
    let tx = await contract.connect(signers[0]).voteAlpha();
    let cr = await tx.wait();
    console.log(cr);
  });
  