const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });
const app = require('./app');
const DATABASE = process.env.DATABASE.replace(
  '<password>',
  process.env.PASSWORD
);

mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected'));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('listening'));
