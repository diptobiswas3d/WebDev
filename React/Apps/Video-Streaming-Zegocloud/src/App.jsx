import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Room from "./Room";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/room/:roomId" element={<Room />}></Route>
      </Routes>
    </>
  );
}

function Home() {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  function handleJoin() {
    navigate(`/room/${roomId}`);
  }

  return (
    <main>
      <h1>Zegocloud Video Streaming App</h1>
      <input
        type="text"
        placeholder="Enter room id"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <button onClick={handleJoin}>Join</button>
    </main>
  );
}

export default App;
