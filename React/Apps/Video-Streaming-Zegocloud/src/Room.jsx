import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { v4 } from "uuid";

function Room() {
  const { roomId } = useParams();

  async function meetingUI(element) {
    const appId = 189338443;
    const serverSecret = "e1fe77a56ff35dafa4fcc9864e213dbe";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      v4(),
      "Arya"
    );

    const ui = ZegoUIKitPrebuilt.create(kitToken);

    ui.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  }
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Room {roomId}</h2>
      <div ref={meetingUI}></div>
    </>
  );
}

export default Room;
