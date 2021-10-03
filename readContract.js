
const Web3 = require ("Web3");
//const rpcURL = "https:127.0.0.1:7545";
const rpcURL = "https://ropsten.infura.io/v3/a83b88fd112b47cb987ac584b3cf0ca9";
const web3 = new Web3(rpcURL);

const ABI = 
	[
        {
            "inputs": [],
            "name": "usingnew",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    
];
const addressContract = "0x29377b98B05893512e1E36973DcC5f00052b70a8";

const contract = new web3.eth.Contract(ABI, addressContract);

contract.methods.usingnew().call((err, result) => { 
    if (!err){
        console.log('Result from contract', result);
    }
})