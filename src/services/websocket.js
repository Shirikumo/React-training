let Ws = new WebSocket('wss://srrj6.sse.codesandbox.io/');
Ws.onclose = () => {
  Ws = new WebSocket('wss://srrj6.sse.codesandbox.io/');
}
export default Ws;