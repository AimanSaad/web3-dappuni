//connection set-up
const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/a83b88fd112b47cb987ac584b3cf0ca9');
//get the average gas price currently for the network
web3.eth.getGasPrice().then((result) => {
    console.log(web3.utils.fromWei(result, 'ether'))
  })
  //direct access to the sha3 function
  console.log(web3.utils.sha3('Dapp University'))
  // keccack256
  console.log(web3.utils.keccak256('Dapp University'))
  //handle (pseudo) randomness by generating a 32 byte random hex
  console.log(web3.utils.randomHex(32))
  //perform an action on a JavaScript array or object
  // Get access to the underscore JS library
const _ = web3.utils._

_.each({ key1: 'value1', key2: 'value2' }, (value, key) => {
  console.log(key)
})
