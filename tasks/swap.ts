import '@nomiclabs/hardhat-waffle';
import { task } from 'hardhat/config';

task('deposit', 'Deposit PUB').setAction(async (_ta, { ethers }) => {
  const [_, user_pub, user_pvt] = await ethers.getSigners();

  const Token = await ethers.getContractFactory('Token', user_pub);
  const token = await Token.deploy('Token_Pub', 'TPUB');
  await token.deployed();
  console.log(`TPUB - ${token.address}`);

  const Htlc = await ethers.getContractFactory('HTLC', user_pub);
  const htlc = await Htlc.deploy(await user_pvt.getAddress(), token.address, 1);
  await htlc.deployed();
  console.log(`HTLC - ${htlc.address}`);

  await token.approve(htlc.address, 1);
  await htlc.fund();
});

task('withdraw', 'Withdraw PVT').setAction(async (_ta, { ethers }) => {
  const [_, user_pub, user_pvt] = await ethers.getSigners();

  const Token = await ethers.getContractFactory('Token', user_pvt);
  const token = await Token.deploy('Token_Pvt', 'TPVT');
  await Token.deployed();
  console.log(`TPUB - ${token.address}`);

  const Htlc = await ethers.getContractFactory('HTLC', user_pvt);
  const htlc = await Htlc.deploy(await user_pub.getAddress(), token.address, 1);
  await htlc.deployed();
  console.log(`HTLC - ${htlc.address}`);

  await token.approve(htlc.address, 1);
  await htlc.fund();
});
