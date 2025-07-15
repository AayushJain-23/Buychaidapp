# Chai DApp

A simple decentralized application where users can buy you a "chai" (like a small tip) by sending ETH along with their name and a message. Built using Solidity for the smart contract and React + Ethers.js for the frontend.

---

## Features

- Connect MetaMask wallet
- Send ETH with a message and name
- View messages from all contributors
- Fully deployed on Sepolia Testnet

---

## Tech Stack

- **Smart Contract**: Solidity
- **Blockchain Framework**: Hardhat
- **Frontend**: React.js
- **Blockchain Communication**: Ethers.js
- **Wallet Integration**: MetaMask
- **Test Network**: Sepolia

---

## Getting Started

### 1. Clone the repository

```
git clone https://github.com/AayushJain-23/Buychaidapp.git
cd Buychaidapp
```
### 2. Install Hardhat dependencies
```
npm install

```
### 3. Compile the contract
```
npx hardhat compile


```
### 4. Deploy to Sepolia (make sure .env has your private key and Infura/Alchemy endpoint)
```
npx hardhat run scripts/deploy.js --network sepolia


```
### 5. Start the frontend
```
cd client
npm install
npm start



```
