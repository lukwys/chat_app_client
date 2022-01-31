import { Container } from "react-bootstrap";
import { Message } from "./Message";
import { MessageType as MessageType } from "../types/messageType"

type MessageFieldType = {
  messages: MessageType [],
  userId: string
}

export const MessageField = ({ messages, userId } : MessageFieldType) => (
  <Container className="border border-light">
    {messages.map((message, id) => <Message key={id} message={message} userId={userId} />)}
  </Container>
);
