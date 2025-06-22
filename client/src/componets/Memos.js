// import {useState,useEffect} from 'react';

// const Memos=({state})=>{
//     const [memos,setMemos]=useState([]);
//     const {contract}=state;

//     useEffect(()=>{
//         const memosMessage= async()=>{
//        // const {contract}=state;
//         const memos= await contract.getMemos();   
//         setMemos(memos)
//         };
//         contract && memosMessage();
//     },[contract]);
    



// return(
//  <>
    
//     <p>Messages</p>
//     {memos.map((memo)=>(
//      <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Message</th>
//             <th>Timestamp</th>
//             <th>From</th>
//           </tr>
//         </thead>
//         <tbody>
//               <tr>
//                 <td>{memo.name}</td>
//                 <td>{memo.message}</td>
//                 <td>{memo.timestamp}</td>
//                 <td>{memo.from}</td>
//               </tr>
//         </tbody>        
//     </table>
//    // );
//     ))}
// </>
// );
// };


// export default Memos;

import { useState, useEffect } from 'react';

const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
    };
    contract && memosMessage();
  }, [contract]);

  return (
    <>
      <p style={{ 
        textAlign: "center",
        fontFamily: "'Fira Code', monospace",        
        fontSize: "15px",
        color: "#c9d1d9",
        backgroundColor: "Black",
        letterSpacing: "0.5px"
    //padding: "1px",
    //marginTop: "0px",
    }}>
        Messages
      </p>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Message</th>
            <th style={cellStyle}>Timestamp</th>
            <th style={cellStyle}>From</th>
          </tr>
        </thead>
        <tbody>
          {memos.map((memo, index) => (
            <tr key={index}>
              <td style={cellStyle}>{memo.name}</td>
              <td style={cellStyle}>{memo.message}</td>
              <td style={cellStyle}>
                {new Date(Number(memo.timestamp) * 1000).toLocaleString()}
              </td>
              <td style={cellStyle}>{memo.from}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const cellStyle = {
  backgroundColor: "#0d1117",             // deep dark
  color: "#c9d1d9",                        // soft white
  border: "2px solid #30363d",            // github-dark border
  padding: "3px 10px",
  fontFamily: "'Fira Code', monospace",   // dev look
  fontSize: "15px",
  textAlign: "center",
  letterSpacing: "0.5px",
};

export default Memos;