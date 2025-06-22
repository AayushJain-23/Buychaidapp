

// import {useState,useEffect} from 'react';
// import {BrowserProvider,Contract} from "ethers";
// import Buy from "./componets/Buy";
// import Memos from "./componets/Memos";
// import './App.css';
// import chai from "./chai.png";
// function App() {
//   const [state,setState]=useState({
//     provider:null,
//     signer:null,
//     contract:null
//   });

//   const [account,setAccount]=useState("None");


//   useEffect(()=>{
//     const connectWallet=async()=>{
//       const contractAddress="0xac141e8803a87a7400b73adf4a2b63fc6773637a";
//       const contractAbi=abi.abi;
//       try{
//         const {ethereum}=window;

//         if(ethereum){
//           await ethereum.request({method:"eth_requestAccounts"});
          
//         }
//         //const provider = new ethers.provider.Web3Provider(ethereum);
//         // const signer = provider.getSigner();
//         // const contract = new ethers.Contract(contractAddress,contractAbi,signer);
//         //import { BrowserProvider, Contract } from "ethers";

//         window.ethereum.on("chainChanged",()=>{
//           window.location.reload();
//         });

//         window.ethereum.on("accountChanged",()=>{
//           window.location.reload();
//         });

//     const provider = new BrowserProvider(ethereum);
//     const signer = await provider.getSigner();
//     const contract = new Contract(contractAddress, contractAbi, signer);
//     const address = await signer.getAddress();

//         setAccount(address);
//           setState({ provider, signer, contract });
//         } else {
//           alert("Please install Metamask");
//         }

//       } catch (error) {
//         console.log(error);
//       }
//     };

//     connectWallet();
//   }, []);
//  // console.log(state);

//   return (
//   <div style={{ backgroundColor:"#EFEFEF",minHeight:"100vh"}}>
//    <img src={chai} className="img-fluid" width="100%" alt="Chai Banner"/>
//    <p>Connected Account -{account}</p> 
 
//  <div className="App">
//     <Buy state={state}></Buy>
//      <Memos state={state}></Memos>

//   </div>
//   </div>
//   );
// }

// export default App;


import abi from "./contract/chai.json";

import { useState, useEffect } from 'react';
import { BrowserProvider, Contract } from "ethers";
import Buy from "./componets/Buy";
import Memos from "./componets/Memos";
import './App.css';
import chai from "./chai.png";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });

  const [account, setAccount] = useState("None");

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xac141e8803a87a7400b73adf4a2b63fc6773637a";
      const contractAbi = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          await ethereum.request({ method: "eth_requestAccounts" });

          //these two event listeners are provided by MetaMask.
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          }); //Triggered when user switches the blockchain network,You usually reload the app to re-initialize with the new network.

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });  //Triggered when user changes their account (wallet address) in MetaMask.You reload or update the connected account accordingly.

          const provider = new BrowserProvider(ethereum);
          const signer = await provider.getSigner();
          const contract = new Contract(contractAddress, contractAbi, signer);
          const address = await signer.getAddress();

          setAccount(address);
          setState({ provider, signer, contract });
        } else {
          alert("Metamask Not Found, Press Ok to Installtion");
          window.location.href = "https://metamask.io/download";
        }

      } catch (error) {
        console.log(error);
      }
    };

    connectWallet();
  }, []);

  return (
    <div style={{ backgroundColor: "#EFEFEF", minHeight: "100vh" }}>
      <img
  src={chai}
  alt="Chai Banner"
  style={{
    width: "100%",
    maxHeight: "280px",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
    margin: "0 auto",
    borderBottom: "2px solid Brown",
  }}
/>


      <p style={{ backgroundColor:"#f0dba5",color:"#3e2723", fontWeight:"bold",margin: "20px auto",width: "fit-content"}}>Connected Account - {account}</p>

      <div className="App">
        <Buy state={state}/>
        <Memos state={state}/>
      </div>
    </div>
  );
}

export default App;
