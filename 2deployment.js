require ('dotenv').config;
//set up a connection
var Tx = require('ethereumjs-tx');
const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/a83b88fd112b47cb987ac584b3cf0ca9');

const account1 = '0x84Ac59B0e4B40D84b2b041415e84A46ceB49835E';
const account2 = '0xB98C3964DD5a07B0DE40A8D3A3aEC9426502CC91';
const privateKey1 = Buffer.from('process.env.PRIVATE_KEY_1', 'hex');
const privateKey2 = Buffer.from('process.env.PRIVATE_KEY_2', 'hex');
//contract deployment
web3.eth.getTransactionCount(account1, (err, txCount) => {
    const data = '6080604052600080556000600155600060025534801561001e57600080fd5b506040516110893803806110898339818101604052810190610040919061009c565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061010e565b600081519050610096816100f7565b92915050565b6000602082840312156100ae57600080fd5b60006100bc84828501610087565b91505092915050565b60006100d0826100d7565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b610100816100c5565b811461010b57600080fd5b50565b610f6c8061011d6000396000f3fe6080604052600436106100555760003560e01c806312065fe01461005a5780637c7f3c8514610085578063872decab146100b65780638eae4273146100e1578063cfdbe5ae14610120578063f247e3de1461014b575b600080fd5b34801561006657600080fd5b5061006f610176565b60405161007c9190610b22565b60405180910390f35b61009f600480360381019061009a919061088d565b610180565b6040516100ad929190610bb2565b60405180910390f35b3480156100c257600080fd5b506100cb610413565b6040516100d89190610b22565b60405180910390f35b3480156100ed57600080fd5b50610108600480360381019061010391906108ce565b61041d565b60405161011793929190610b3d565b60405180910390f35b34801561012c57600080fd5b50610135610669565b6040516101429190610b00565b60405180910390f35b34801561015757600080fd5b50610160610764565b60405161016d9190610b22565b60405180910390f35b6000600254905090565b606080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610213576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020a90610be9565b60405180910390fd5b60006005846040516102259190610ae9565b908152602001604051809103902054146102f257600060058460405161024b9190610ae9565b9081526020016040518091039020549050600060058560405161026e9190610ae9565b908152602001604051809103902081905550806000808282546102919190610d6f565b9250508190555080600260008282546102aa9190610d6f565b92505081905550836040518060400160405280600781526020017f64656c6574656400000000000000000000000000000000000000000000000000815250925092505061040e565b60006004846040516103049190610ae9565b908152602001604051809103902054146103d257600060048460405161032a9190610ae9565b9081526020016040518091039020549050600060048560405161034d9190610ae9565b90815260200160405180910390208190555080600160008282546103719190610cdb565b92505081905550806002600082825461038a9190610d6f565b92505081905550836040518060400160405280600781526020017f64656c6574656400000000000000000000000000000000000000000000000000815250925092505061040e565b826040518060400160405280601781526020017f63617465676f727920646f65736e277420657869737473000000000000000000815250915091505b915091565b6000600154905090565b60006060806000841315610522578360008082825461043c9190610cdb565b92505081905550836005866040516104549190610ae9565b90815260200160405180910390208190555083600260008282546104789190610cdb565b925050819055506006604051806040016040528087815260200186815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000190805190602001906104db92919061076d565b506020820151816001015550507f7482a26b112ec5f949004b1220e67bf420d6fd67ade0800abef32ad5370359fc8585604051610519929190610b82565b60405180910390a15b600084121561062357836001600082825461053d9190610d6f565b92505081905550836004866040516105559190610ae9565b90815260200160405180910390208190555083600260008282546105799190610cdb565b925050819055506006604051806040016040528087815260200186815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000190805190602001906105dc92919061076d565b506020820151816001015550507f7482a26b112ec5f949004b1220e67bf420d6fd67ade0800abef32ad5370359fc858560405161061a929190610b82565b60405180910390a15b83856040518060400160405280600b81526020017f6973206164646564206173000000000000000000000000000000000000000000815250909250925092509250925092565b60606006805480602002602001604051908101604052809291908181526020016000905b8282101561075b57838290600052602060002090600202016040518060400160405290816000820180546106c090610e4f565b80601f01602080910402602001604051908101604052809291908181526020018280546106ec90610e4f565b80156107395780601f1061070e57610100808354040283529160200191610739565b820191906000526020600020905b81548152906001019060200180831161071c57829003601f168201915b505050505081526020016001820154815250508152602001906001019061068d565b50505050905090565b60008054905090565b82805461077990610e4f565b90600052602060002090601f01602090048101928261079b57600085556107e2565b82601f106107b457805160ff19168380011785556107e2565b828001600101855582156107e2579182015b828111156107e15782518255916020019190600101906107c6565b5b5090506107ef91906107f3565b5090565b5b8082111561080c5760008160009055506001016107f4565b5090565b600061082361081e84610c3a565b610c09565b90508281526020810184848401111561083b57600080fd5b610846848285610e0d565b509392505050565b60008135905061085d81610f1f565b92915050565b600082601f83011261087457600080fd5b8135610884848260208601610810565b91505092915050565b60006020828403121561089f57600080fd5b600082013567ffffffffffffffff8111156108b957600080fd5b6108c584828501610863565b91505092915050565b600080604083850312156108e157600080fd5b600083013567ffffffffffffffff8111156108fb57600080fd5b61090785828601610863565b92505060206109188582860161084e565b9150509250929050565b600061092e8383610aac565b905092915050565b600061094182610c7a565b61094b8185610c9d565b93508360208202850161095d85610c6a565b8060005b85811015610999578484038952815161097a8582610922565b945061098583610c90565b925060208a01995050600181019050610961565b50829750879550505050505092915050565b6109b481610e03565b82525050565b6109c381610e03565b82525050565b60006109d482610c85565b6109de8185610cae565b93506109ee818560208601610e1c565b6109f781610f0e565b840191505092915050565b6000610a0d82610c85565b610a178185610cbf565b9350610a27818560208601610e1c565b610a3081610f0e565b840191505092915050565b6000610a4682610c85565b610a508185610cd0565b9350610a60818560208601610e1c565b80840191505092915050565b6000610a79601683610cbf565b91507f796f7520617265206e6f7420617574686f72697a6564000000000000000000006000830152602082019050919050565b60006040830160008301518482036000860152610ac982826109c9565b9150506020830151610ade60208601826109ab565b508091505092915050565b6000610af58284610a3b565b915081905092915050565b60006020820190508181036000830152610b1a8184610936565b905092915050565b6000602082019050610b3760008301846109ba565b92915050565b6000606082019050610b5260008301866109ba565b8181036020830152610b648185610a02565b90508181036040830152610b788184610a02565b9050949350505050565b60006040820190508181036000830152610b9c8185610a02565b9050610bab60208301846109ba565b9392505050565b60006040820190508181036000830152610bcc8185610a02565b90508181036020830152610be08184610a02565b90509392505050565b60006020820190508181036000830152610c0281610a6c565b9050919050565b6000604051905081810181811067ffffffffffffffff82111715610c3057610c2f610edf565b5b8060405250919050565b600067ffffffffffffffff821115610c5557610c54610edf565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000610ce682610e03565b9150610cf183610e03565b9250817f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03831360008312151615610d2c57610d2b610e81565b5b817f8000000000000000000000000000000000000000000000000000000000000000038312600083121615610d6457610d63610e81565b5b828201905092915050565b6000610d7a82610e03565b9150610d8583610e03565b9250827f800000000000000000000000000000000000000000000000000000000000000001821260008412151615610dc057610dbf610e81565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018213600084121615610df857610df7610e81565b5b828203905092915050565b6000819050919050565b82818337600083830152505050565b60005b83811015610e3a578082015181840152602081019050610e1f565b83811115610e49576000848401525b50505050565b60006002820490506001821680610e6757607f821691505b60208210811415610e7b57610e7a610eb0565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610f2881610e03565b8114610f3357600080fd5b5056fea2646970667358221220c051fb388bcb8c11c968eb35243f5c9cc44d56040c78b7ea534830a75abd097464736f6c63430008000033';
  
    const txObject = {
      nonce:    web3.utils.toHex(txCount),
      from: account1,
      gasLimit: web3.utils.toHex(1000000),
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
      data: data
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
