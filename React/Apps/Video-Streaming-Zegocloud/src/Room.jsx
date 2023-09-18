import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { v4 } from "uuid";

function Room() {
  const { roomId } = useParams();

  async function meetingUI(element) {
    const appID = 1770505026;
    const serverSecret = "01a18f663bc50620d3eedd2c739dec7e";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
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
