import { useState } from 'react';
import { ChatButton, ChatInput, WritterContainer } from './ChatWriter.styles';

interface ChatWritterProps {
  sendMessage: (message: string) => void;
}

export default function ChatWriter(props: ChatWritterProps): JSX.Element {
  const { sendMessage } = props;

  const [message, setMessage] = useState('');
  const handleInputMessage: React.ChangeEventHandler<HTMLInputElement> = (
    evt
  ) => setMessage(evt.target.value);

  const handleSendMessage: React.FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    if (message !== '') {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSendMessage}>
      <WritterContainer>
        <ChatInput
          type="text"
          placeholder="Write your message: "
          value={message}
          onChange={handleInputMessage}
        />
        <ChatButton>SEND</ChatButton>
      </WritterContainer>
    </form>
  );
}
