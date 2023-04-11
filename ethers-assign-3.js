const { ethers } = require("ethers");
const usdtAbi = require("./usdtAbi");
const USDT_ADDRESS = require("./USDTAddress");
require("dotenv").config();
const { API_KEY } = process.env;

const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${API_KEY}`
);

const usdtInteraction = async () => {
  const usdtContract = new ethers.Contract(USDT_ADDRESS, usdtAbi, provider);
  const currentBlockNumber = await provider.getBlockNumber();
  console.log(currentBlockNumber);
  const currentBlock = await provider.getBlock(currentBlockNumber);
  const oneHourAgoTimestamp = Math.round(Date.now() / 1000) - 3600;
  let blockNumber = currentBlockNumber;
  let blockNumHourAgo;
  while (true) {
    const block = await provider.getBlock(blockNumber);
    if (block.timestamp < oneHourAgoTimestamp) {
      console.log(`Block ${blockNumHourAgo} blocknumber one hour ago!`);
      blockNumHourAgo = blockNumber;
      break;
    }
    blockNumber--;
  }

  const events = await provider.getLogs({
    address: USDT_ADDRESS,
    fromBlock: blockNumHourAgo,
    toBlock: currentBlockNumber,
  });
  console.log(events);
};

usdtInteraction();
