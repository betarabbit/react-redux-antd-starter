const path = require('path');
const express = require('express');
const winston = require('winston');
const helmet = require('helmet');
const jsonServer = require('json-server');
const historyApiFallback = require('connect-history-api-fallback');

const distPath = path.join(__dirname, './dist');

const PORT = process.env.PORT || 3000;
const app = express();

// Enable various security helpers.
app.use(helmet());

app.use('/api', jsonServer.router('./src/api/mock/db.json'));

// Allow HTML5 mode routing.
app.use(historyApiFallback({
  index: '/',
  verbose: false,
}));

app.use(express.static(distPath));

app.listen(PORT, (err) => {
  if (err) {
    winston.error(err);
    return;
  }

  winston.info(`Listening on port ${PORT}`);
});


