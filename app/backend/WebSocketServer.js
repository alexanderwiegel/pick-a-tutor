const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      // the WebSocket on the client side broadcasts to every other connected WebSocket client, but excludes itself
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data)
        console.log('data', data)
      }
    })
  })
})

module.exports = wss;