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
