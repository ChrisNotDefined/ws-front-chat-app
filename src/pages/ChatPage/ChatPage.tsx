import ChatView from '../../components/ChatView';
import ChatWriter from '../../components/ChatWriter';
import { useChatSocket } from '../../hooks/ChatWSHook';

export default function ChatPage(): JSX.Element {
  const { send, messages } = useChatSocket();

  return (
    <div>
      <h1>Simple Chat Page</h1>
      <ChatView messages={messages} />
      <br />
      <ChatWriter sendMessage={send} />
    </div>
  );
}
