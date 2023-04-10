# ethers.js-assignment-2

This is a web page that uses the Ethereum JSON-RPC API to display information about the latest block on the Ethereum blockchain.

## Usage

To use this code, simply open the `index.html` file in your web browser.

## How it works

The script uses the `ethers.js` library to connect to the Ethereum JSON-RPC API, retrieve information about the latest block, and display that information in a table on the web page.

## Code overview

- The `index.html` file contains the structure of the web page, including a table that will be populated with block information.
- The `style` section of `index.html` contains some basic CSS to style the web page.
- The `script` section of `index.html` contains the JavaScript code that connects to the Ethereum JSON-RPC API and retrieves block information. The code uses the `ethers.js` library to simplify the process of connecting to the API.
- The code retrieves the block height, hash, parent hash, timestamp, gas limit, gas used, miner, and base fee per gas from the Ethereum JSON-RPC API, and displays that information in the table on the web page.

