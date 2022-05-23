import { Container } from "react-bootstrap";
import { MessageBox } from "./MessageBox";
import { Message as MessageType } from "../types/message"

type MessageFieldProps = {
  messages: MessageType [],
  userId: string
}

export const MessageField = ({ messages, userId } : MessageFieldProps) => (
  <Container className="border border-light">
    {messages.map((message, id) => <MessageBox key={id} message={message} userId={userId} />)}
  </Container>
);
