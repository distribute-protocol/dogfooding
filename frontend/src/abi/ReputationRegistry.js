const ReputationRegistryAddress = '0x9fbda871d559710256a2502a2517b794b482db40'
// rinkeby
// export const ReputationRegistryAddress = '0xb529f14aa8096f943177c09ca294ad66d2e08b1f'

const ReputationRegistryABI = `[{"constant":true,"inputs":[],"name":"totalFreeSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_projectAddress","type":"address"},{"name":"_voteOption","type":"uint256"},{"name":"_salt","type":"uint256"}],"name":"voteReveal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"register","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_projectAddress","type":"address"},{"name":"_reputation","type":"uint256"}],"name":"unstakeReputation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_reputation","type":"uint256"}],"name":"refundVotingReputation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_projectAddress","type":"address"},{"name":"_taskHash","type":"bytes32"}],"name":"rewardTask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_projectAddress","type":"address"}],"name":"refundStaker","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_projectAddress","type":"address"},{"name":"_reputation","type":"uint256"}],"name":"stakeReputation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_projectAddress","type":"address"},{"name":"_reputation","type":"uint256"},{"name":"_secretHash","type":"bytes32"},{"name":"_prevPollID","type":"uint256"}],"name":"voteCommit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_reputation","type":"uint256"}],"name":"burnReputation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_projectAddress","type":"address"},{"name":"_index","type":"uint256"},{"name":"_taskDescription","type":"string"},{"name":"_weiVal","type":"uint256"},{"name":"_reputationVal","type":"uint256"}],"name":"claimTask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_projectRegistry","type":"address"},{"name":"_plcrVoting","type":"address"}],"name":"init","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]`

const ReputationRegistryBytecode = `0x6060604052341561000f57600080fd5b6117158061001e6000396000f3006060604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063027c8977146100d557806311264a11146100fe57806318160ddd146101495780631aa3a0081461017257806327e235e3146101875780633c79fe74146101d4578063408489871461021657806341d67862146102395780635c3523181461027f5780637f306ba1146102b857806380bf87ba146102fa5780639c6c343914610352578063d5e6c03a14610375578063f09a40161461040c575b600080fd5b34156100e057600080fd5b6100e8610464565b6040518082815260200191505060405180910390f35b341561010957600080fd5b610147600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001909190505061046a565b005b341561015457600080fd5b61015c610606565b6040518082815260200191505060405180910390f35b341561017d57600080fd5b61018561060c565b005b341561019257600080fd5b6101be600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506106c3565b6040518082815260200191505060405180910390f35b34156101df57600080fd5b610214600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506106db565b005b341561022157600080fd5b6102376004808035906020019091905050610801565b005b341561024457600080fd5b61027d600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803560001916906020019091905050610939565b005b341561028a57600080fd5b6102b6600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a6d565b005b34156102c357600080fd5b6102f8600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610b9f565b005b341561030557600080fd5b610350600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803560001916906020019091908035906020019091905050610d10565b005b341561035d57600080fd5b61037360048080359060200190919050506112a1565b005b341561038057600080fd5b61040a600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919080359060200190919080359060200190919050506113a0565b005b341561041757600080fd5b610462600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506115da565b005b60045481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1662b97ba9856000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b151561052f57600080fd5b6102c65a03f1151561054057600080fd5b505050604051805190509050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b11d8bb88285856040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808481526020018381526020018281526020019350505050600060405180830381600087803b15156105ec57600080fd5b6102c65a03f115156105fd57600080fd5b50505050505050565b60035481565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414151561065a57600080fd5b6001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060016003600082825401925050819055506001600460008282540192505081905550565b60026020528060005260406000206000915090505481565b6000811115156106ea57600080fd5b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550806004600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16633c79fe7433836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15156107e957600080fd5b6102c65a03f115156107fa57600080fd5b5050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ef348e4033836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15156108c557600080fd5b6102c65a03f115156108d657600080fd5b50505080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508060046000828254019250508190555050565b60008273ffffffffffffffffffffffffffffffffffffffff1663cccee33583336000604051602001526040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600019166000191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b15156109ee57600080fd5b6102c65a03f115156109ff57600080fd5b5050506040518051905090508060046000828254019250508190555080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550505050565b60008173ffffffffffffffffffffffffffffffffffffffff16635c352318336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1515610b1257600080fd5b6102c65a03f11515610b2357600080fd5b505050604051805190509050600081111515610b3e57600080fd5b8060046000828254019250508190555080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505050565b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610bee5750600081115b1515610bf957600080fd5b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550806004600082825403925050819055508173ffffffffffffffffffffffffffffffffffffffff16637f306ba133836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1515610cf857600080fd5b6102c65a03f11515610d0957600080fd5b5050505050565b6000806001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054111515610d6157600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1662b97ba9876000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1515610e2457600080fd5b6102c65a03f11515610e3557600080fd5b505050604051805190509150600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636b2d95d4336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1515610f0657600080fd5b6102c65a03f11515610f1757600080fd5b50505060405180519050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636b9deb65336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1515610fe657600080fd5b6102c65a03f11515610ff757600080fd5b50505060405180519050039050848110156111a157808503600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015801561105e575060008214155b151561106957600080fd5b84600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555084600460008282540392505081905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c5fa801b338388036040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b151561118c57600080fd5b6102c65a03f1151561119d57600080fd5b5050505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635e28fd5e33848789886040518663ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001846000191660001916815260200183815260200182815260200195505050505050600060405180830381600087803b151561128557600080fd5b6102c65a03f1151561129657600080fd5b505050505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1662b97ba9336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b151561136657600080fd5b6102c65a03f1151561137757600080fd5b5050506040518051905011151561138d57600080fd5b8060036000828254039250508190555050565b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515156113ee57600080fd5b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550806004600082825403925050819055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e41067478686868686336040518763ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001868152602001806020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828103825286818151815260200191508051906020019080838360005b8381101561156f578082015181840152602081019050611554565b50505050905090810190601f16801561159c5780820380516001836020036101000a031916815260200191505b50975050505050505050600060405180830381600087803b15156115bf57600080fd5b6102c65a03f115156115d057600080fd5b5050505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614801561165957506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b151561166457600080fd5b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505600a165627a7a7230582024d04ceb4c111865c94c3a36d49c344af28bf95474f04482792f0ab556d490980029`

module.exports = {
  ReputationRegistryAddress,
  ReputationRegistryABI,
  ReputationRegistryBytecode
}
