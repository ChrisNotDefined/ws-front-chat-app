interface APiGatewayWSBody {
  action: 'sendMessage';
  data: string;
}

export const buildSocket = (): WebSocket => {
  return new WebSocket(
    'wss://jvs539tb7j.execute-api.us-west-2.amazonaws.com/dev'
  );
};

export const sendMessage = (ws: WebSocket, message: string): void => {
  const body: APiGatewayWSBody = {
    action: 'sendMessage',
    data: message,
  };

  ws.send(JSON.stringify(body));
};
