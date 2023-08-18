import React, { useState, useEffect } from "react";
import socketioclient from "socket.io-client";
import "./App.css";

const ENDPOINT = "http://localhost:3001";
let socket;

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket = socketioclient(ENDPOINT);
    socket.on("chat-message", (data) => {
      console.log(data);
      setChat((prevChat) => [...prevChat, { message: data, dir: "left" }]);
      console.log(chat);
    });
    return () => {
      socket.off("chat-message");
    };
    // socket.emit("send-chat-message", "Eevee use tackle");
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setChat((prevChat) => [...prevChat, { message: message, dir: "right" }]);
    console.log(message);
    console.log(chat);
    socket.emit("send-chat-message", message);
  }

  function writeMessage(e) {
    console.log(message);
    setMessage(e.target.value);
  }

  return (
    <main>
      <h1>Neo Chat App React</h1>
      <div id="message-container">
        {chat.map((message, index) => {
          return (
            <div key={index} className={"message " + message.dir}>
              {message.message}
            </div>
          );
        })}
      </div>
      <form id="send-container">
        <input
          id="message-input"
          type="text"
          placeholder="Enter Message"
          onChange={writeMessage}
          value={message}
        />
        <button id="send-button" onClick={handleSubmit}>
          Send
        </button>
      </form>
    </main>
  );
}

export default App;
