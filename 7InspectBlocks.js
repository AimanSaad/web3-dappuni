//web3 connection

const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/a83b88fd112b47cb987ac584b3cf0ca9');

//get the latest block number
web3.eth.getBlockNumber().then(console.log);
//get all the data for the latest block
web3.eth.getBlock('latest').then(console.log);
// get a list of the most recent blocks in the chain
//fetching the most recent block 
//then counting backwards till the last 10 blocks in the chain with a for loop 
web3.eth.getBlockNumber().then((latest) => {
    for (let i = 0; i < 10; i++) {
      web3.eth.getBlock(latest - i).then(console.log)
    }
  })
  // get transaction from specific block
const hash = '0x66b3fd79a49dafe44507763e9b6739aa0810de2c15590ac22b5e2f0a3f502073'
web3.eth.getTransactionFromBlock(hash, 2).then(console.log)