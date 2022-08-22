import { ChatBoard } from './ChatView.styles';

interface ChatViewProps {
  messages: string[];
}

export default function ChatView(props: ChatViewProps): JSX.Element {
  const { messages } = props;

  return (
    <ChatBoard>
      {messages.map((msg, idx) => {
        return <div key={idx}>{msg}</div>;
      })}
    </ChatBoard>
  );
}
