// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";

// const socket = io("http://localhost:3001"); // Change the URL if the backend server is running on a different address

// const SocketPage = () => {
//   const [message, setMessage] = useState("");
//   const [chatLog, setChatLog] = useState([]);

//   useEffect(() => {
//     // Listen for 'WelcomeMessage' event and log the message
//     socket.on("WelcomeMessage", (message) => {
//       console.log(message);
//     });

//     // Listen for 'ChatMessage' event and update the chat log
//     socket.on("ChatMessage", (message) => {
//       setChatLog((prevLog) => [...prevLog, message]);
//     });

//     // Clean up the event listener
//     return () => {
//       socket.off("WelcomeMessage");
//       socket.off("ChatMessage");
//     };
//   }, []);

//   const handleSendMessage = () => {
//     socket.emit("ChatMessage", message); // Emit a 'ChatMessage' event with the message
//     setMessage(""); // Clear input
//     // setChatLog((prevLog) => [...prevLog, message]);
//     const updatedlog = [...chatLog, message];
//     setChatLog(updatedlog);
//     console.log(chatLog);
//   };

//   return (
//     <div>
//       <h1>Chat Application</h1>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button onClick={handleSendMessage}>Send</button>
//       <ul>
//         {chatLog.map((message, index) => (
//           <li key={index}>{message}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SocketPage;
