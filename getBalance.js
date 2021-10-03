const Web3 = require ("Web3");
//const rpcURL = "https:127.0.0.1:7545";
const rpcURL = "https://ropsten.infura.io/v3/a83b88fd112b47cb987ac584b3cf0ca9";
const account =  "0x84Ac59B0e4B40D84b2b041415e84A46ceB49835E";

const web3 = new Web3(rpcURL);

web3.eth.getBalance(account, (err, wei) => {
    console.log("Balance in wei" ,wei);
    balance = web3.utils.fromWei(wei, 'ether');
    console.log("Balance in ether",balance);
})