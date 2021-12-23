import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Contract, Signer } from 'ethers';

describe('VendingMachine', () => {
  let signers: Signer[];
  let contract: Contract;

  beforeEach(async () => {
    signers = await ethers.getSigners();
    const factory = await ethers.getContractFactory('VendingMachine', signers[0]);
    contract = await (await factory.deploy()).deployed();
  });

  it('Should return the new total and quantity', async () => {
    expect(await contract.total()).to.equal('700');

    const tx = await contract.connect(signers[1]).purchase('10', {
      value: ethers.utils.parseEther('10'),
      gasLimit: '6721975',
    });
    await tx.wait();

    await expect(contract.connect(signers[1]).purchase('10', {
      value: ethers.utils.parseEther('1'),
      gasLimit: '6721975',
    })).to.be.revertedWith('You must pay at least 1 ETH per cupcake');

    expect(await contract.connect(signers[1]).quantity()).to.equal('10');
    expect(await contract.total()).to.equal('690');
  });

  it('Should refill', async () => {
    expect(await contract.total()).to.equal('700');
    await contract.refill(100);
    expect(await contract.total()).to.equal('800');
  });

  it('Should revert Only the owner can refill.', async () => {
    await expect(contract.connect(signers[1]).refill(10))
      .to.be.revertedWith('Only the owner can refill.');
  });

  it('Should revert You must pay at least 1 ETH per cupcake', async () => {
    await expect(contract.connect(signers[1]).purchase('10', {
      value: ethers.utils.parseEther('1'),
      gasLimit: '6721975',
    })).to.be.revertedWith('You must pay at least 1 ETH per cupcake');
  });

  it('Should revert Not enough cupcakes in stock to complete this purchase', async () => {
    await expect(contract.connect(signers[1]).purchase('1000', {
      value: ethers.utils.parseEther('1000'),
      gasLimit: '6721975',
    })).to.be.revertedWith('Not enough cupcakes in stock to complete this purchase');
  });
});
