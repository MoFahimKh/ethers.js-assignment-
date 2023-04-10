const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/55fe2b930c1e49e88f098b1a062cd01b`
);

const queryData = async () => {
  const {
    number,
    hash,
    parentHash,
    timestamp,
    gasLimit,
    gasUsed,
    miner,
    baseFeePerGas,
  } = await provider.getBlock();

  console.log("================= BLOCK DETAILS ================= ");
  console.log(`|BLOCK HEIGHT : ${number}`);
  console.log(`|HASH : ${hash}`);
  console.log(`|PARENT HASH : ${parentHash}`);
  console.log(`|TIMESTAMP : ${timestamp}`);
  console.log(`|GAS LIMIT : ${gasLimit}`);
  console.log(`|GAS USED : ${gasUsed}`);
  console.log(`|MINER : ${miner}`);
  console.log(`|BASE FEE PER GAS : ${baseFeePerGas}`);
};

queryData();
