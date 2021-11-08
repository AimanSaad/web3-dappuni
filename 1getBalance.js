const Web3 = require ("Web3");
//const rpcURL = "https:127.0.0.1:7545";
const rpcURL = "https://ropsten.infura.io/v3/a83b88fd112b47cb987ac584b3cf0ca9";
const account =  "0xB98C3964DD5a07B0DE40A8D3A3aEC9426502CC91";

const web3 = new Web3(rpcURL);

web3.eth.getBalance(account, (err, wei) => {
    console.log("Balance in wei" ,wei);
    balance = web3.utils.fromWei(wei, 'ether');
    console.log("Balance in ether",balance);
})