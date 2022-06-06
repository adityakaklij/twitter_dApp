require("@nomiclabs/hardhat-waffle");
require("dotenv").config({path:".env"});

const KEY = process.env.PRIVATE_KEY;


module.exports = {
  solidity: "0.8.5",
  // networks: {
  //   polygon:{
  //     url:"https://matic-mumbai.chainstacklabs.com",
  //     accounts:[KEY]
  //   }
  // }
};
