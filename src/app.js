import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import Routes from './routes';

const app = express();

// Setting up the routes.
app.use(express.Router());
Routes.setup(app);

app.use(morgan('dev'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(process.env.PORT || 3000, () => {
  const {address, port} = server.address();
  console.log(`gitStarted API listening at http://${address}:${port}`);
});