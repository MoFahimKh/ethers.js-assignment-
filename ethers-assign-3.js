const { ethers } = require("ethers");
const usdtAbi = require("./usdtAbi");
const USDT_ADDRESS = require("./USDTAddress");

require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/55fe2b930c1e49e88f098b1a062cd01b`
);

const usdtInteraction = async () => {
  const usdtContract = new ethers.Contract(USDT_ADDRESS, usdtAbi, provider);
  const latestBlockNumber = await provider.getBlockNumber(USDT_ADDRESS); // latest block number for transfer function in USDT
  console.log(latestBlockNumber);
  const BlockNumberHourAgo = latestBlockNumber - 240;
  console.log(BlockNumberHourAgo);

  const events = await provider.getLogs({
    address: USDT_ADDRESS,
    fromBlock: BlockNumberHourAgo,
    toBlock: latestBlockNumber,
  });
  console.log(events);
};
usdtInteraction();
