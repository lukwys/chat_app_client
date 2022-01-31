import React from 'react';
import { MessageField } from "./components/MessageField";
import { MessageInput } from "./components/MessageInput";
import { Container } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Container className="app text-center">
      <h1>Chat app</h1>
      <MessageField />
      <MessageInput />
    </Container>
  );
}

export default App;
