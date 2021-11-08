//Inside the app.js file, we'll first require the newly installed library
var Tx = require ('ethereumjs-tx');
//set up a Web3 connection 
const Web3 = require('web3');
const web3 = new Web3 ('https://ropsten.infura.io/v3/a83b88fd112b47cb987ac584b3cf0ca9');
// create 2 new accounts with Web3.js
//web3.eth.accounts.create();
//assign them to variables
const account1 = '0x84Ac59B0e4B40D84b2b041415e84A46ceB49835E';
const account2 = '0xB98C3964DD5a07B0DE40A8D3A3aEC9426502CC91';
//store private keys in .env
//read these private keys from our environment with process global object
//const privateKey1 = process.env.PRIVATE_KEY_1;
//const privateKey2 = process.env.PRIVATE_KEY_2;
// convert them to a string of binary data with a Buffer
const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1);
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2);
// build the transaction object and wrap it in getter function
web3.eth.getTransactionCount(account1, (err, txCount) => {
const txObject = {
    nonce:    web3.utils.toHex(txCount),
    from: account1,
    to:       account2,
    value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
}

  //it has now all the values needed to generate a transaction, like nonce, to, value, gasLimit, and gasPrice. 
//the above assigned the value for the nonce variable. got the transaction nonce
//sign the transaction.
const tx = new Tx(txObject);
tx.sign(privateKey1);

const serializedTx = tx.serialize();
const raw = '0x' + serializedTx.toString('hex');
// send this signed serialized transaction to the test network
web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('txHash:', txHash)
  })

})
