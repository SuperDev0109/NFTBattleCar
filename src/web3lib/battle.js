import BigNumber from 'bignumber.js'
import { battleContract } from './contracts'
import {callMethod, bnDivdedByDecimals} from './utils'
import { web3 } from './web3'
import { ethers } from 'ethers'

//Getter

//Setter
export const mintNFT = async (id, myWalletAddress) => {
    const result = await battleContract.contract.methods.mint(id).send({ 
        gasLimit:285000,
        from: myWalletAddress, 
        to: battleContract.address
    })
}
