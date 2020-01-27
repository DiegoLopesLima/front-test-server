const
  express = require('express'),
  path = require('path'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io')(server),
  cors = require('cors'),
  apiPrefix = '/api/',
  apiVersion = 'v1',
  port = 3000,
  conversationsRouter = require(path.resolve(__dirname, 'api/conversations')),
  messagesRouter = require(path.resolve(__dirname, 'api/messages'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(`${apiPrefix}${apiVersion}/conversations`, conversationsRouter);
app.use(`${apiPrefix}${apiVersion}/messages`, messagesRouter);

server.listen(port);
