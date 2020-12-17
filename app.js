const express = require('express');
const cors = require('cors');
const userRouter = require('./Routes/UserRoute');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/', userRouter);
module.exports = app;
