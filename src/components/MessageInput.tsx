import { Button, Form } from 'react-bootstrap';

export const MessageInput = () => {
  return (
    <Form>
      <Form.Group className="mb-3 d-flex" >
        <Form.Control type="text" placeholder="message" />
        <Button variant="primary">Send</Button>
      </Form.Group>
    </Form>
  )
};
