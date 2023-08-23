import React, { useState, useEffect } from "react";
import socketioclient from "socket.io-client";
import "./App.css";

const ENDPOINT = "http://localhost:3001";
let socket;
let pkmnTrainers = [
  "Ash",
  "Gary",
  "Red",
  "Dawn",
  "Barry",
  "Lyra",
  "May",
  "Misty",
  "Brock",
  "Steven",
];

function App() {
  const [username, setUsername] = useState(
    pkmnTrainers[Math.floor(Math.random() * 10)]
  );
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [typingUser, setTypingUser] = useState("");
  const [dotCount, setDotCount] = useState(1); // This will represent the number of dots.

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prevCount) => (prevCount % 3) + 1); // This will cycle the count between 1 and 3.
    }, 500);

    // Cleanup: Clear the interval when the component unmounts.
    return () => clearInterval(interval);
  }, []);
  console.log("Socket:", socket);
  if (socket) {
    socket.on("user-typing", (user) => {
      console.log(user, "is typing - received from server");
      console.log("Typing user before:", typingUser);
      setTypingUser(user);
      console.log("Typing user after:", typingUser);
    });
    // socket.emit("stop-typing", username);
    socket.on("user-stop-typing", (user) => {
      console.log(user, "stopped typing - received from server");
      console.log("Typing user before:", typingUser);
      if (typingUser == user) setTypingUser("");
      console.log("Typing user after:", typingUser);
    });
  }
  useEffect(() => {
    socket = socketioclient(ENDPOINT);
    // let randomUsername = pkmnTrainers[Math.floor(Math.random() * 10)];
    // setUsername(randomUsername);
    console.log(username, "joined the chat");

    socket.emit("new-user", username);

    socket.on("user-connected", (user) => {
      console.log(user, "joined the chat");
      setChat((prevChat) => [
        ...prevChat,
        { message: `${user} joined the chat`, dir: "left" },
      ]);
      socket.on("user-disconnected", (user) => {
        setChat((prevChat) => [
          ...prevChat,
          { message: `${user} left the chat`, dir: "left" },
        ]);
      });
    });

    socket.on("chat-message", (data) => {
      console.log(data.msg);
      setChat((prevChat) => [
        ...prevChat,
        { user: data.user, message: data.msg, dir: "left" },
      ]);
      // console.log(chat);
    });
    return () => {
      socket.off("chat-message");
      socket.off("user-connected");
      socket.off("user-disconnected");
      socket.off("user-typing");
      socket.off("user-stop-typing");
    };
    // socket.emit("send-chat-message", "Eevee use tackle");
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setChat((prevChat) => [
      ...prevChat,
      { user: "You", message: message, dir: "right" },
    ]);
    // console.log(message);
    // console.log(chat);
    socket.emit("send-chat-message", message);
    setMessage("");
    socket.emit("stop-typing", username);
    console.log("Sending stop-typing to server after message sent");
  }

  function writeMessage(e) {
    const curMessage = e.target.value;
    // console.log(message);
    setMessage(curMessage);
    if (curMessage == "") {
      socket.emit("stop-typing", username);
      console.log("Sending stop-typing to server");
    } else {
      socket.emit("typing", username);
      console.log("Sending typing to server");
    }
    // console.log(`${username}: ${curMessage}`);
  }

  return (
    <main>
      <h1>Neo Chat App React</h1>
      <div id="message-container">
        <div className="message right">You joined the chat</div>
        {chat.map((message, index) => {
          return (
            <div key={index} className={"message " + message.dir}>
              {message.user
                ? `${message.user}: ${message.message}`
                : message.message}
            </div>
          );
        })}
        {typingUser && (
          <div className="message left">
            {typingUser} is typing
            {dotCount === 1 ? "." : dotCount === 2 ? ".." : "..."}
          </div>
        )}
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
