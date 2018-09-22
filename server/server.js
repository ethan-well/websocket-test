const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8000 });

wss.on('connection', function connection(ws, req) {
  console.log('connection');

  ws.on('message', function(data) {
    console.log('receive: ' + data);
    ws.send(data);
  });
});

console.log('websocket server listening on port 8000 ...');