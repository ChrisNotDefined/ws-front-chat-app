import { useCallback, useEffect, useRef, useState } from 'react';
import { buildSocket, sendMessage } from '../services/WSService';

interface IUseChatResponse {
  send: (msg: string) => void;
  messages: string[];
}

export const useChatSocket = (): IUseChatResponse => {
  const wsRef = useRef<WebSocket>();
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    if (wsRef.current === undefined) {
      wsRef.current = buildSocket();
      wsRef.current.addEventListener('message', (evt) => {
        setMessages((msg) => [...msg, evt.data]);
      });
    }

    // return () => {
    //   if (wsRef.current !== undefined) {
    //     wsRef.current.close();
    //     wsRef.current = undefined;
    //   }
    // };
  }, []);

  const send = useCallback(
    (msg: string): void => sendMessage(wsRef.current ?? buildSocket(), msg),
    []
  );

  return { send, messages };
};
