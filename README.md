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

## Check

```shell
npx hardhat check
```

## Coverage

```shell
npx hardhat coverage
```

## Play

Make sure `Ganache UI` ran.
![init](/docs/init.png)

### Deploy

```shell
export VM_ADDRESS=$(npx hardhat --network ganache deploy --contract VendingMachine)
```

![deploy](/docs/deploy.png)

### Exec

```shell
npx hardhat --network ganache exec:vm --address $VM_ADDRESS
```

![exec-tx](/docs/exec-1.png)
![exec](/docs/exec-2.png)
