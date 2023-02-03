const hre = require("hardhat");

async function main() {
  const accounts = await hre.ethers.getSigners();
  // const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
  //
  const contractAddress = "0xdE64C1Ee54CcEfc0144d2F13747aa9bD3c058cdD";
  const myContract = await hre.ethers.getContractAt(
    "Voting",
    contractAddress,
    accounts[0]
  );

  const voters = await myContract.getVotersAddress();
  voters.forEach((voter) => {
    console.log(voter);
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
