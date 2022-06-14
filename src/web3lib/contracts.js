import { web3 } from './web3';
import config from '../config';

import battleJSONAbi from './abis/battle.json';

const networkId = config.networkId;



const battleContractAddress = config.contractAddress.battle[networkId];
const IBattleContract = new web3.eth.Contract(battleJSONAbi, battleContractAddress);

console.log(networkId);
console.log(battleContractAddress);

const battleContract = {
    address: battleContractAddress,
    abi: battleJSONAbi,
    contract: IBattleContract,
    decimals: 10
};

export {
    networkId,
    battleContract,
}
