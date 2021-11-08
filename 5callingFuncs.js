//setup
const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/a83b88fd112b47cb987ac584b3cf0ca9');

const account1 = '0x84Ac59B0e4B40D84b2b041415e84A46ceB49835E';
const account2 = '0xB98C3964DD5a07B0DE40A8D3A3aEC9426502CC91';


const privateKey1 = Buffer.from('470bce325f6f7323856ad6841a6aa3f5d815bf92287c0d8858ba98f4f1f8572e', 'hex');
const privateKey2 = Buffer.from('ebab2993d48997bc31ca13ea16bd18a960ce6cd2a83098dab6ec831a134294fe', 'hex');

const contractAddress = '0x4C54287D0C220d1E259a35c19D9f522f4f82008E';
const abi = 
	[{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_owner",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "category",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "int256",
				"name": "value",
				"type": "int256"
			}
		],
		"name": "TransactionAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_text",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "_amount",
				"type": "int256"
			}
		],
		"name": "addNewTransaction",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_text",
				"type": "string"
			}
		],
		"name": "deleteTransaction",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getExpense",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getHistoryList",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "accountName",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "value",
						"type": "int256"
					}
				],
				"internalType": "struct ExpenseTracker.Transactions[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getIncome",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const contract = new web3.eth.Contract(abi, contractAddress);

web3.eth.getTransactionCount(account1, (err, txCount) => {

    const txObject = {
      nonce:    web3.utils.toHex(txCount),
      from: account1,
      gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
      to: contractAddress,
      data: contract.methods.transfer(account2, 1000).encodeABI()
    }
  
    const tx = new Tx(txObject);
    tx.sign(privateKey1);
  
    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');
  
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      console.log('err:', err, 'txHash:', txHash);
      // Use this txHash to find the contract on Etherscan
    })
  })
  
  // Check incomes
  contract.methods.getIncome().call((err, balance) => {
    console.log({ err, balance })
  })
  
  // Check balance 
  contract.methods.getBalance().call((err, balance) => {
    console.log({ err, balance })
  })
