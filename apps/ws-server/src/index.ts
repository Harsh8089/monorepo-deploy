import { WebSocketServer } from "ws"
import client from "@repo/db";

const wss = new WebSocketServer({
  port: 3001,
  host: "0.0.0.0"
});

wss.on('connection', async (ws) => {
  ws.send("Connected to ws server");


  await client.user.create({
    data: {
      username: "user-ws",
      password: "pswd-ws"
    }
  })
});

console.log("ws server activated on port 3001");



