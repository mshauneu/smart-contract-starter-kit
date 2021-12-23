# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case.
It comes with a sample contract (*VendingMachine*), a test for that contract,
a sample script that deploys that contract,
and an example of a task implementations.

## Init

```shell
npm install
```

## Compile

```shell
npx hardhat compile
```

## Test

```shell
npx hardhat test
```

## Deploy

```shell
export VM_ADDRESS=$(npx hardhat --network ganache deploy --contract VendingMachine)
```

## Exec

```shell
npx hardhat --network ganache exec:vm --address $VM_ADDRESS

BigNumber { value: "0" }
BigNumber { value: "10" }
BigNumber { value: "690" }
```
