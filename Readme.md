# Voting Dapp

Live demo at https://voting-front-pr2i4kiut-darkslategrey.vercel.app/

## Stack

- Truffle
- Hardhat
- Solidity

## Tests

We mix hardhat et truffle configs to make all tests pass.

Hardhat tests are in `hh-tests/`

```sh
yarn hardhat test
```

Truffle tests are in `truffle-test/`

```sh
truffle test
```

## Videos

- Add Voter
- Start proposal registration
- Add proposal
- End proposal registration
- Start voting session
- Voter vote
- End voting session
- Compute winner
- Show winner

## Bugs on live demo

When the vote session is open, the dapp does not recognize registered voters when they want to vote.
