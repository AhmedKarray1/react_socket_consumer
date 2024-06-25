import React from "react";
import "./App.css";

import { WebsocketProvider, socket } from "./contexts/WebsocketContext";
import Websocket from "./components/Websocket";

function App() {
  return (
    <WebsocketProvider value={socket}>
      <Websocket />
    </WebsocketProvider>
  );
}

export default App;
