import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useState } from "react";

type MessageInputProps = {
  ws: WebSocket
}

export const MessageInput = ({ ws }: MessageInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    ws.send(message);
    setMessage('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 d-flex" >
        <Form.Control type="text" placeholder="message" value={message} onChange={(event) => setMessage(event.target.value)} />
        <Button variant="primary">Send</Button>
      </Form.Group>
    </Form>
  )
};
