const express = require('express');
const app = express();
const port = 4444;
const path = require('path');

// json parsing
app.use(express.json());

// cors
var cors = require('cors');
app.use(cors());

// mongodb connect
const { default: mongoose } = require('mongoose');
mongoose
  .connect('mongodb+srv://heesun:hs5132@express-project.nurobjn.mongodb.net/', {
    dbName: 'react-blog',
  })
  .then(() => {
    console.log('mongodb connected');
  })
  .catch((err) => console.log(err));

app.listen(port, (req, res) => {
  console.log('server start ' + port);
});

// api router
const postRouter = require('./server/routes/post.router');
app.use('/post', postRouter);

// build router
app.use(express.static(path.join(__dirname, '/build')));

app.get('*', function (res, req) {
  req.sendFile(path.join(__dirname, '/build/index.html'));
});
