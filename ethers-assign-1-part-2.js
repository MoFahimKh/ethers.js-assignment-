// getting and setting via signer
const { ethers } = require("ethers");
const abi = require("./abi");
require("dotenv").config();

const { CONTRACT_ADDRESS, PRIVATE_KEY, API_KEY } = process.env;
const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/${API_KEY}`
);

const contractInteraction = async () => {
  const walletContract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);
  //calling getter for state variable 'name'
  const name = await walletContract.name();
  console.log(name);

  //setting or writing a transaction on to the deployed contract
  let signer = new ethers.Wallet(PRIVATE_KEY, provider);
  const new_Contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
  let tx = await new_Contract.setValue(5);
  await tx.wait();
  console.log(tx);
};
contractInteraction();
