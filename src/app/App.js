import React from 'react';
import useWebSocket from "react-use-websocket";
import DataPoints from '../components/datapoints/DataPoints';
import UserDetails from '../components/user/UserDetails';

const App = ()=> {

  const { sendJsonMessage, getWebSocket } = useWebSocket("ws://localhost:5000", {
    onOpen: () => console.log('WebSocket connection opened.'),
    onClose: () => console.log('WebSocket connection closed.'),
    shouldReconnect: (closeEvent) => true
  });

  return (
    <div className="App">
      <UserDetails getWebSocket={getWebSocket}></UserDetails>
      <DataPoints getWebSocket={getWebSocket}></DataPoints>
    </div>
  );
}

export default App;


