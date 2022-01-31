import React, { useEffect, useState } from 'react';
import { MessageField } from "./components/MessageField";
import { MessageInput } from "./components/MessageInput";
import { Container } from "react-bootstrap";
import { MessageType } from "./types/messageType";

import 'bootstrap/dist/css/bootstrap.min.css';

const ws = new WebSocket('ws://localhost:8080');


const App = () => {
  const [messages, setMessages] = useState<MessageType []>([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    ws.onopen = () => {
      console.log('Connected')
    };
    ws.onmessage = (event) => {
      console.log(event.data);
      setMessages((oldState) => [...oldState, JSON.parse(event.data)])
      if (!userId && JSON.parse(event.data).isInitMessage) setUserId(JSON.parse(event.data).userId)
    };
  }, [])

  return (
    <Container className="app text-center">
      <h1>Chat app</h1>
      <MessageField messages={messages} userId={userId} />
      <MessageInput ws={ws} />
    </Container>
  );
}

export default App;
