// components/Websocket.js
import React, { useContext, useEffect, useState } from "react";
import { WebsocketContext } from "../contexts/WebsocketContext";

const Websocket = () => {
  const [messages, setMessages] = useState("");
  const socket = useContext(WebsocketContext);

  const [value, setValue] = useState([]);

  useEffect(() => {
    console.log("mountinggggggggggg");

    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("onMessage", (data) => {
      console.log("onmessage", data);
      setValue((prev) => [...prev, data]);
    });

    return () => {
      console.log("unmounting");
      socket.off("connect");
      socket.off("onMessage");
    };
  }, [socket]);

  const onSubmit = () => {
    socket.emit("newMessage", messages);
    setMessages("");
  };

  return (
    <div>
      <h1>Websocket Component</h1>
      <div>
        {value.length === 0 ? (
          <h1>no messages</h1>
        ) : (
          <div>
            {value.map((msg, index) => (
              <div key={index}>
                {" "}
                {/* Add a unique key prop */}
                <h1>{msg.content}</h1>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <input
          type="text"
          value={messages}
          onChange={(e) => setMessages(e.target.value)}
        />
      </div>

      <button onClick={onSubmit}>submit</button>
    </div>
  );
};

export default Websocket;
