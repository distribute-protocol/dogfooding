export const DistributeTokenAddress = '0xf204a4ef082f5c04bb89f7d5e6568b796096735a'

export const DistributeTokenABI = `[{"constant":true,"inputs":[],"name":"totalFreeSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"weiBal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokens","type":"uint256"}],"name":"weiRequired","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFromEscrow","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amountToBurn","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokens","type":"uint256"}],"name":"targetPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferToEscrow","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokens","type":"uint256"}],"name":"mint","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"fund","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amountToBurn","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_weiValue","type":"uint256"}],"name":"transferWeiFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_tokenRegistry","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amountMinted","type":"uint256"},{"indexed":false,"name":"totalCost","type":"uint256"}],"name":"LogMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amountWithdrawn","type":"uint256"},{"indexed":false,"name":"reward","type":"uint256"}],"name":"LogWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]`

export const DistributeTokenBytecode = `0x606060405260006004556000600555655af3107a4000600755341561002357600080fd5b6040516020806115b6833981016040528080519060200190919050506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561008657600080fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506114df806100d76000396000f30060606040526004361061011d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063027c89771461011f578063065d5d0a1461014857806306fdde0314610171578063095ea7b3146101ff57806318160ddd1461025957806323b872dd146102825780632737c84c146102fb578063283760fa14610332578063313ce5671461038c57806342966c68146103bb57806370a08231146103de57806381af81911461042b57806395d89b41146104625780639d1b464a146104f05780639e88fd8114610519578063a0712d6814610573578063a9059cbb1461058b578063b60d4288146105e5578063dd62ed3e146105ef578063e4849b321461065b578063e9d46d741461067e575b005b341561012a57600080fd5b6101326106c0565b6040518082815260200191505060405180910390f35b341561015357600080fd5b61015b6106c6565b6040518082815260200191505060405180910390f35b341561017c57600080fd5b6101846106cc565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101c45780820151818401526020810190506101a9565b50505050905090810190601f1680156101f15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561020a57600080fd5b61023f600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610705565b604051808215151515815260200191505060405180910390f35b341561026457600080fd5b61026c6107f7565b6040518082815260200191505060405180910390f35b341561028d57600080fd5b6102e1600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506107fd565b604051808215151515815260200191505060405180910390f35b341561030657600080fd5b61031c6004808035906020019091905050610a97565b6040518082815260200191505060405180910390f35b341561033d57600080fd5b610372600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610aca565b604051808215151515815260200191505060405180910390f35b341561039757600080fd5b61039f610c2a565b604051808260ff1660ff16815260200191505060405180910390f35b34156103c657600080fd5b6103dc6004808035906020019091905050610c2f565b005b34156103e957600080fd5b610415600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610caf565b6040518082815260200191505060405180910390f35b341561043657600080fd5b61044c6004808035906020019091905050610cf8565b6040518082815260200191505060405180910390f35b341561046d57600080fd5b610475610d67565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104b557808201518184015260208101905061049a565b50505050905090810190601f1680156104e25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156104fb57600080fd5b610503610da0565b6040518082815260200191505060405180910390f35b341561052457600080fd5b610559600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610dd9565b604051808215151515815260200191505060405180910390f35b6105896004808035906020019091905050610f39565b005b341561059657600080fd5b6105cb600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611066565b604051808215151515815260200191505060405180910390f35b6105ed6111bf565b005b34156105fa57600080fd5b610645600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506111d1565b6040518082815260200191505060405180910390f35b341561066657600080fd5b61067c6004808035906020019091905050611258565b005b341561068957600080fd5b6106be600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506113bf565b005b60055481565b60065481565b6040805190810160405280601981526020017f4469737472696275746564205574696c69747920546f6b656e0000000000000081525081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60045481565b600080600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101580156108ce5750828110155b15156108d957600080fd5b82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555082600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811015610a265782600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a360019150509392505050565b60008082111515610aa757600080fd5b600454610ab2610da0565b028260045401610ac184610cf8565b02039050919050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b2857600080fd5b81600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610b7657600080fd5b81600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508160056000828254019250508190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055506001905092915050565b601281565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c8b57600080fd5b6004548111151515610c9c57600080fd5b8060046000828254039250508190555050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008060008084111515610d0b57600080fd5b60006004541480610d1e57506000600654145b15610d2d576007549250610d60565b83600454019150610d3c610da0565b90506103e8610d4d85846003611480565b6103e8018202811515610d5c57fe5b0492505b5050919050565b6040805190810160405280600381526020017f445354000000000000000000000000000000000000000000000000000000000081525081565b6000806005541480610db457506000600654145b15610dc3576007549050610dd6565b600554600654811515610dd257fe5b0490505b90565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e3757600080fd5b81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610e8557600080fd5b81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508160056000828254039250508190555081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055506001905092915050565b600080610f4583610a97565b9150813410151515610f5657600080fd5b826004600082825401925050819055508260056000828254019250508190555082600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816006600082825401925050819055507fe7360c0fa1984a85874443100f5b25dd4f84192659660eb199f6c96e11defbcb8383604051808381526020018281526020019250505060405180910390a181340390506000811115611061573373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050151561106057600080fd5b5b505050565b600081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515156110b657600080fd5b81600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b34600660008282540192505081905550565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600080821180156112a8575081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b15156112b357600080fd5b6112bb610da0565b8202905081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508160046000828254039250508190555081600560008282540392505081905550806006600082825403925050819055507f210405eb88ac7589aa9de0a6e36b9c9d3cd6e4061b74363d250a77afe3c6efb78282604051808381526020018281526020019250505060405180910390a13373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015156113bb57600080fd5b5050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561141b57600080fd5b600654811115151561142c57600080fd5b806006600082825403925050819055508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050151561147c57600080fd5b5050565b60008060018301600a0a85029050600a6005858381151561149d57fe5b04018115156114a857fe5b0491505093925050505600a165627a7a72305820f2c926b9057369f162acc681ea64ac996fbfdc03ff6b8308ac91b3410e511c0f0029`
