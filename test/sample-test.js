const { expect } = require("chai");
const { ethers } = require("hardhat");
    
        describe("tweetdApp Contract Test", function(){

            
            it("Registering the 1st User", async function (){

                const tweetdApp = await ethers.getContractFactory("tweetdApp");
                const deployContract = await tweetdApp.deploy();
                await deployContract.deployed();

                const registerUser = await deployContract.createUser("User1");
                console.log("First User registered Succesfully!")

            })
            
            //This will fail
            it("Should register Only Once", async function (){

                const tweetdApp = await ethers.getContractFactory("tweetdApp");
                const deployContract = await tweetdApp.deploy();
                await deployContract.deployed();

                const registerUser = await deployContract.createUser("User1");
                await registerUser.wait();
                
                // It will give the error if the user tries to register Again!
                const registerUserAgain = await deployContract.createUser("User1");
                await registerUserAgain.wait();
            })

            // To tweet, User Must be register first.
            // This will fail
            it("Making the Tweet Without registration ", async function(){
                const tweetdApp = await ethers.getContractFactory("tweetdApp");
                const deployContract = await tweetdApp.deploy();
                await deployContract.deployed();

                const tweet = await deployContract.createTweet("First Tweet");
                await tweet.wait();
            })

            it("Making the Tweet With registration ", async function(){
                const tweetdApp = await ethers.getContractFactory("tweetdApp");
                const deployContract = await tweetdApp.deploy();
                await deployContract.deployed();

                const registerUser = await deployContract.createUser("User1");

                const tweet = await deployContract.createTweet("First Tweet");
                await tweet.wait();
            })

            // This test will fail
            it("Reteriving the Tweets Without making the tweet", async function(){
                const tweetdApp = await ethers.getContractFactory("tweetdApp");
                const deployContract = await tweetdApp.deploy();
                await deployContract.deployed();

                const [owner] = await ethers.getSigners();

                const reteriveTheTweet = await deployContract.reteriveTweet(owner.address);
                
            })

            it("Reteriving the Tweets after making the tweet", async function(){
                const tweetdApp = await ethers.getContractFactory("tweetdApp");
                const deployContract = await tweetdApp.deploy();
                await deployContract.deployed();

                const [owner] = await ethers.getSigners();

                const registerUser = await deployContract.createUser("User1");// Making user to eligible tweet
                await registerUser.wait();

                const tweet = await deployContract.createTweet("First Tweet");// Making the tweet
                await tweet.wait();

                const reteriveTheTweet = await deployContract.reteriveTweet(owner.address);


                console.log("The tweet is:- " , reteriveTheTweet );
            })

            // Deleting the tweet.
            it("Deleting the Tweet", async function(){

                const tweetdApp = await ethers.getContractFactory("tweetdApp");
                const deployContract = await tweetdApp.deploy();
                await deployContract.deployed();

                const registerUser = await deployContract.createUser("User1");// Creating user first.
                await registerUser.wait();

                const tweet = await deployContract.createTweet("Second tweet");// Making tweet to delete it.
                await tweet.wait();

                const deleteTheTweet = await deployContract.deleteTweet();
                console.log("The Tweet is deleted");

            })
    })

