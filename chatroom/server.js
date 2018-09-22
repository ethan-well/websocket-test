var WebSocket = require('ws');
var wss = new WebSocket.Server({ port: 8000 });

var connectCount = 0;

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', function connection(ws) {
  console.log('Connected');
  connectCount ++;
  wss.broadcast('user' + connectCount + ' come here');
  ws.on('message', function incoming(data) {
    wss.broadcast(data);
  });
});

console.log('websocket server listening on port 8000 ...');