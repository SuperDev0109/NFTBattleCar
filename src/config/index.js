require('dotenv').config();

const web3Provider = process.env.REACT_APP_NETWORK_ID === '80001'
  ? process.env.REACT_APP_MATIC_WEB3_PROVIDER
  : process.env.REACT_APP_MUMBAI_WEB3_PROVIDER

  // console.log(process.env.REACT_APP_NETWORK_ID)
  const config = {
    web3Provider: web3Provider,
    networkId: process.env.REACT_APP_NETWORK_ID,
    contractAddress: {
      battle: {
        137: '', //Matic mainnet
        80001: '0x270c30157D5F17a45BD5A272C3F1bf12C9Ae1630' //Matic testnet -- Mumbai
      }
    }
  }

  module.exports = config;
