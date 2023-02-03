# Voting Dapp

Live demo at https://voting-front-102xftsuj-darkslategrey.vercel.app/

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

##### Add Voter

https://www.loom.com/share/7073a522374647619475a880951a18d5

##### Start proposal registration

https://www.loom.com/share/9a5bde7269024f17ad0eb81039efcd43

##### Add proposal

https://www.loom.com/share/610bcd1ea7534bb8baa4c9608e4ced07

##### End proposal registration

https://www.loom.com/share/85db952ca91f4c3484cffe9c3165083e

##### Start voting session and voter vote (localhost)

https://www.loom.com/share/3380096d0d00471fbe302bf0b67da8d3

##### End voting session and compute winner (localhost)

https://www.loom.com/share/6b83a4848e914a2095276f0b0bf7ad9f

##### Show winner (localhost)

https://www.loom.com/share/0b43effaee4d43db91e7f2446af7e126

## Bugs on live demo

When the vote session is open, the dapp does not recognize registered voters when they want to vote.
Then the voter cannot see proposals for voting.
For this reason I finnished tests on my localhost
