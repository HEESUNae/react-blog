require('dotenv').config();
const { PRODUCT_MODE, PORT, DATABASE_URL, DATABASE_NAME, COOKIE_SECRET } = process.env;

const express = require('express');
const app = express();
const port = PORT;
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cp = require('cookie-parser');

// json parsing
app.use(express.json());

app.use(cp());

// cors
var cors = require('cors');
// app.use(cors());
app.use(
  cors({
    // origin: FRONT_URL,
    origin: PRODUCT_MODE === 'develop' ? 'http://localhost:4445' : 'https://react-blog-heesunae.vercel.app',
    // origin: 'https://react-blog-heesunae.vercel.app',
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
  })
);

// index cookie 삭제
app.get('/', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('user', { path: '/' });
    res.sendFile(path.join(__dirname, '/build/index.html'));
  });
});

// api router
const postRouter = require('./server/routes/post.router');
const userRouter = require('./server/routes/user.router');
app.use('/post', postRouter);
app.use('/user', userRouter);

// build router
app.use(express.static(path.join(__dirname, '/build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});
