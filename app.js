const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const Routes = require('./routes');

const app = express();

// Setting up the routes.
app.use(express.Router());
Routes.setup(app);

app.use(morgan('dev'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(process.env.PORT || 3000, () => {
  const { address, port } = server.address();
  console.log(`gitStarted API listening at http://${address}:${port}`);
});
