// import React, { useEffect, useState } from "react";
// import { HubConnectionBuilder } from "@microsoft/signalr";

// const Maps2 = () => {
//   const [messages, setMessages] = useState([]);
//   const [connection, setConnection] = useState(null);
//   const [inputMessage, setInputMessage] = useState("");

//   useEffect(() => {
//     const connect = async () => {
//       const connection = new HubConnectionBuilder()
//         .withUrl("https://localhost:7041/MessageHub")
//         .withAutomaticReconnect()
//         .build();

//       connection.on("ReceiveMessage", (user, message) => {
//         setMessages((prevMessages) => [...prevMessages, { user, message }]);
//       });

//       try {
//         await connection.start();
//         console.log("Connected to SignalR server!");
//         setConnection(connection);
//       } catch (err) {
//         console.error("Error while connecting: ", err);
//       }
//     };

//     connect();

//     return () => {
//       if (connection) {
//         connection.stop();
//       }
//     };
//   }, []);

//   const sendMessageToApi = async (message) => {
//     try {
//       await fetch("https://localhost:7041/api/message", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ message }),
//       });
//     } catch (err) {
//       console.error("Error sending message to API: ", err);
//     }
//   };

//   const sendMessage = async () => {
//     if (inputMessage.trim() && connection) {
//       await sendMessageToApi(inputMessage);
//       setInputMessage("");
//     }
//   };

//   return (
//     <div>
//       <h1>SignalR Chat</h1>
//       <ul>
//         {messages.map((msg, index) => (
//           <li key={index}>
//             <strong>{msg.user}:</strong> {msg.message}
//           </li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         value={inputMessage}
//         onChange={(e) => setInputMessage(e.target.value)}
//         placeholder="Type your message here"
//       />
//       <button onClick={sendMessage}>Send Message</button>
//     </div>
//   );
// };

// export default Maps2;
