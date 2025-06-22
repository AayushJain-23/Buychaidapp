// import {parseEther} from "ethers";
// const Buy =({state})=>{

//     const buyChai=async()=>{
//         event.preventDefault();
//       const {contract}=state;
//       const name = document.querySelector("#name").value;  
//       const message = document.querySelector("#message").value; 
//       console.log(name,message,contract);
//      const amount = parseEther("1");
//      //{value:ethers.utils.parseEther("0.001")};

//       const transaction = await contract.buyChai(name,message,{value: amount});
//       await transaction.wait();
//       console.log("Transaction is done");

//     };
//     return(<>
//     <form onSubmit={buyChai}>
//       <label>Name</label>
//         <input type="text" 
//         id="name"
//          placeholder="Enter Your Name"
//          ></input>

//         <label>Message</label>
//         <input type="text"
//          id="message"
//           placeholder="Enter Your Message"
//           ></input>
//         <button type="submit">Pay</button>
//     </form>
//     </>);
// }
// export default Buy;

import { parseEther } from "ethers";

const Buy = ({ state }) => {
  const buyChai = async (event) => {
    event.preventDefault(); // stops form from reloading the page

    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;

    if (!name || !message) {
      alert("Please fill in both name and message.");
      return;
    }

    if (!contract) {
      alert("Smart contract not loaded yet.");
      return;
    }

    try {
      const amount = parseEther("0.0001"); // 1 ETH
      const txn = await contract.buyChai(name, message, { value: amount });
      await txn.wait();
      alert("Transaction successful!");
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Transaction failed. Check console.");
    }
  };

return (
  <>
    <form onSubmit={buyChai}  style={{ margin: "20px", textAlign: "center" }}>
      <div>
        <label 
        style={{fontWeight: "bold",color: "Black",fontSize: "16px",}}>Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter Your Name"
          style={{ padding: "5px",backgroundColor: "#f0dba5",fontWeight: "normal", margin: "10px" }}
        />
      </div>


      <div>
        <label style={{fontWeight: "bold",color: "Black",fontSize: "16px",}}>Message</label>
        <input
          type="text"
          id="message"
          placeholder="Enter Your Message"
          style={{ padding: "5px",backgroundColor: "#f0dba5",fontWeight: "normal", margin: "10px" }}
        />
      </div>

      <button type="submit"  style={{ padding: "5px 10px", backgroundColor: "#d2691e",fontWeight: "500",marginTop: "10px" }}>
        Pay
      </button>
    </form>
  </>
);

};

export default Buy;
