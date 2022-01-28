import '@nomiclabs/hardhat-waffle';
import { task } from 'hardhat/config';

task('exec:vm', 'Execute VendingMachine')
  .addParam('address', 'The contract address')
  .setAction(async (ta, { ethers }) => {
    const signers = await ethers.getSigners();
    const VM = await ethers.getContractFactory('VendingMachine');
    const vm = VM.attach(ta.address);
    console.log(await vm.connect(signers[0]).quantity());

    const tx = await vm.connect(signers[1]).purchase('10', {
      value: ethers.utils.parseEther('10'),
      gasLimit: '6721975',
    });
    await tx.wait();
    console.log(await vm.connect(signers[1]).quantity());
    console.log(await vm.total());
  });

task('exec:tc', 'Execute TatooineCoin balances')
  .addParam('address', 'The contract address')
  .setAction(async (ta, { ethers }) => {
    const signers = await ethers.getSigners();
    const TC = await ethers.getContractFactory('TatooineCoin');
    const tc = TC.attach(ta.address);

    const accounts = await Promise.all(signers.map((s) => s.getAddress()));
    const balances = await Promise.all(accounts.map((a) => tc.balanceOf(a)));
    for (let i = 0; i < accounts.length; i += 1) {
      console.log(`${accounts[i]} - ${Math.round(+ethers.utils.formatEther(balances[i]))}`);
    }
  });

task('exec:voting', 'Execute voting')
  .addParam('address', 'The contract address')
  .setAction(async (ta, { ethers }) => {
    const signers = await ethers.getSigners();
    const Voting = await ethers.getContractFactory('Voting');
    const voting = Voting.attach(ta.address);
    let tx = await voting.connect(signers[0]).voteAlpha();
    let cr = await tx.wait();
    console.log(cr);
  });
  