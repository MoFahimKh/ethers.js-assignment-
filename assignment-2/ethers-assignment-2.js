const { ethers } = require("ethers");
require("dotenv").config();
const { API_KEY } = process.env;

const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${API_KEY}`
);

const queryData = async () => {
  const block = await provider.getBlock();
  console.log("================= BLOCK DETAILS ================= ");
  console.log(`|BLOCK HEIGHT : ${block.number}`);
  console.log(`|HASH : ${block.hash}`);
  console.log(`|PARENT HASH : ${block.parentHash}`);
  console.log(`|TIMESTAMP : ${block.timestamp}`);
  console.log(`|GAS LIMIT : ${block.gasLimit}`);
  console.log(`|GAS USED : ${block.gasUsed}`);
  console.log(`|MINER : ${block.miner}`);
  console.log(`|BASE FEE PER GAS : ${block.baseFeePerGas}`);
};
queryData();
