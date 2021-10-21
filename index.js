const express = require("express");
const { Server } = require("socket.io");
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});

const server = app.listen(8069, function() {
  console.log("Sitecall app listening on port 8069!");
});

const io = new Server(server)

io.on("connection", (socket) => {
  console.log('Połączono socket');
  io.emit("status", 5555);
});
  
app.get("/", (req,res) => {
  console.log('Request!');
  res.json({'test': 5})
});
