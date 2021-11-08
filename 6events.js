//web3 connection

const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/a83b88fd112b47cb987ac584b3cf0ca9');
//contract setup
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
//get all of the events emitted by the contract, for its entire lifetime
const contract = new web3.eth.Contract(abi, contractAddress);
contract.getPastEvents(
    'AllEvents',
    {
      fromBlock: 5854000,// need to limitize blocks in order to get our code successfully executed
      toBlock: 'latest'
    },
    (err, events) => { console.log(events) }
  )
  