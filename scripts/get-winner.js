const hre = require("hardhat");

async function main() {
  const accounts = await hre.ethers.getSigners();
  const contractAddress = "0x2cafb7c2dd922479841883d3abb343dfa899ba34";
  // const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
  const myContract = await hre.ethers.getContractAt(
    "Voting",
    contractAddress,
    accounts[0]
  );

  const winner = await myContract.winningProposalID();
  console.log("winner", winner.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
