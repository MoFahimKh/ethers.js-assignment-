// getting and setting via raw transaction object
const { ethers } = require("ethers");
const abi = require("./abi");
const walletAddress = require("./walletAddress");

require("dotenv").config();
const { PRIVATE_KEY } = process.env;

const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/55fe2b930c1e49e88f098b1a062cd01b`
);

const contractInteraction = async () => {
  const walletContract = new ethers.Contract(walletAddress, abi, provider);
  const stateVaraibleValue = await walletContract.name(); // getting value of state variable from contract
  console.log(stateVaraibleValue);
  const rawTnx = {
    nonce: 7,
    gasPrice: 100,
    gasLimit: 364459,
    from: "0x85392e765680737b29E449FAF37df956f0931f58",
    to: "0x1798210b3d2c091de5b619f05641bdcbb3c1e911",
    value: 0,
    data: walletContract.interface.encodeFunctionData("setValue", [10]), //setValue is the function name , [10] is the args array passed to the function
    chainId: 5,
  };
  const signer = new ethers.Wallet(PRIVATE_KEY, provider);
  // console.log(signer);
  const signRawTnx = await signer.signTransaction(rawTnx);
  console.log(signRawTnx);
  const sendTrans = await provider.sendTransaction(signRawTnx);
  console.log("sent transaction :", sendTrans);
};
contractInteraction();
