require('dotenv').config();
const { PORT, DATABASE_URL, DATABASE_NAME, COOKIE_SECRET } = process.env;

const express = require('express');
const app = express();
const port = PORT;
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');

// json parsing
app.use(express.json());

// cors
var cors = require('cors');
// app.use(cors());
app.use(
  cors({
    // origin: 'http://localhost:3000',
    origin: ['https://react-blog-eight-kappa.vercel.app', 'http://localhost:4445'],
    // origin: 'https://heesunae.github.io',
    methods: ['POST', 'PUT', 'GET', 'DELETE', 'OPTIONS', 'HEAD'],
    credentials: true, // 쿠키주고받기 허용
  })
);

// mongodb connect
const { default: mongoose } = require('mongoose');
mongoose
  .connect(DATABASE_URL, {
    dbName: DATABASE_NAME,
  })
  .then(() => {
    console.log('mongodb connected');
  })
  .catch((err) => console.log(err));

app.listen(port, (req, res) => {
  console.log('server start ' + port);
});

app.use(
  session({
    secret: COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: DATABASE_URL, dbName: DATABASE_NAME }),
    name: 'user', // cookie name
    proxy: true,
    // cookie: {
    // httpOnly: true,
    // sameSite: 'none',
    // secure: true,
    // domain: 'https://react-mongo-todo-app-server.vercel.app',
    // maxAge: 3.6e6 * 24
    // }, // 24시간 뒤 만료(자동 삭제)
  })
);

// api router
const postRouter = require('./server/routes/post.router');
const userRouter = require('./server/routes/user.router');
app.use('/post', postRouter);
app.use('/user', userRouter);

// build router
app.use(express.static(path.join(__dirname, '/build')));

app.get('*', function (res, req) {
  req.sendFile(path.join(__dirname, '/build/index.html'));
});
