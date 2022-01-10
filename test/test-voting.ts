import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Contract, Signer } from 'ethers';

describe('VendingMachine', () => {
  let signers: Signer[];
  let contract: Contract;

  beforeEach(async () => {
    signers = await ethers.getSigners();
    const factory = await ethers.getContractFactory('Voting', signers[0]);
    contract = await (await factory.deploy()).deployed();
  });

  it('Test voting', async () => {
    expect(await contract.getTotalVotesAlpha()).to.equal('0');
    expect(await contract.getTotalVotesBeta()).to.equal('0');

    let tx = await contract.connect(signers[1]).voteAlpha();
    await tx.wait();
    tx = await contract.connect(signers[2]).voteAlpha();
    await tx.wait();

    tx = await contract.connect(signers[1]).voteBeta();
    await tx.wait();

    expect(await contract.getTotalVotesAlpha()).to.equal('2');
    expect(await contract.getTotalVotesBeta()).to.equal('1');
  });

});
