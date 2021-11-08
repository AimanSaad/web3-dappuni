
const Web3 = require ("Web3");
//const rpcURL = "https:127.0.0.1:7545";
const rpcURL = "https://ropsten.infura.io/v3/a83b88fd112b47cb987ac584b3cf0ca9";
const web3 = new Web3(rpcURL);

const abi = 
	 [
            {
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

        const addressContract = "0x4C54287D0C220d1E259a35c19D9f522f4f82008E";

const contract = new web3.eth.Contract(abi, addressContract);
contract.methods.getBalance().call((err, result) => { console.log(result);})
contract.methods.getExpense().call((err, result) => { console.log(result);})
contract.methods.getIncome().call((err, result) => { console.log(result);})
contract.methods.getHistoryList().call((err, result) => { console.log(result);})






