import { Alert } from "react-bootstrap";
import { MessageType } from "../types/messageType";

type aaa = {
  message: MessageType
  userId: string
}

export const Message = ({ message, userId }: aaa) => {
  if (!message.userId) return (<p>{message.message}</p>)

  if (userId === message.userId && message.message) return <Alert variant="danger">{message.message}</Alert>

  if (message.message) return <Alert>{message.message}</Alert>

  return null;
};
