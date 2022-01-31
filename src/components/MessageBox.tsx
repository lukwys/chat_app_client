import { Alert } from "react-bootstrap";
import { Message } from "../types/message";

type MessageBoxProps = {
  message: Message
  userId: string
}

export const MessageBox = ({ message, userId }: MessageBoxProps) => {
  if (!message.userId) return (<p>{message.message}</p>)

  if (userId === message.userId && message.message) return <Alert variant="danger">{message.message}</Alert>

  if (message.message) return <Alert>{message.message}</Alert>

  return null;
};
