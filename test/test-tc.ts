import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Contract, Signer } from 'ethers';

describe('VendingMachine', () => {
  let contract: Contract;
  let signers: Signer[];
  let accounts: string[];

  beforeEach(async () => {
    signers = await ethers.getSigners();
    const factory = await ethers.getContractFactory('TatooineCoin', signers[0]);
    contract = await (await factory.deploy()).deployed();
    accounts = await Promise.all(signers.map((s) => s.getAddress()));

  });

  it('Should have the correct total supply', async () => {
    expect(await contract.totalSupply()).to.equal('100000000000000000000000000');
  });

});
