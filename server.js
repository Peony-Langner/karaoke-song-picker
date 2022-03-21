const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

app.set('port', process.env.PORT || 4000);
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('we are connected to the database.');
  })
  .catch((error) => {
    console.log('an error occurred while connecting ot the db', error);
  });

//? Import routes here
const songListRoute = require('./routes/songListRoute');

//? Routes
app.get('/', (req, res) => res.send('Welcome to my karaoke song picker!'));
app.use('/api/songList', songListRoute);

app.all('*', (req, res) => {
  res.status(500);
  res.send('Invalid path');
});

app.listen(app.get('port'), () => {
  console.log('Server started on port ' + app.get('port'));
});
