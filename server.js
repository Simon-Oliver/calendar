const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./server/routes/routes');

const app = express();
app.use(bodyParser.json());

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/shiftApp',
  { useNewUrlParser: true }
);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/', router);

// Right before your app.listen(), add this:
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
