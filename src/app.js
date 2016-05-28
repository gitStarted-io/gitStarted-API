import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

const app = express();

// import routes
import * as routes from './routes';

console.log(routes);

app.use('/', routes.indexRoute);
app.use('/', routes.searchTemplatesRoute);
app.use('/', routes.getTopTemplatesRoute);
app.use('/', routes.templateCommmentsRoute);
app.use('/', routes.downloadTemplateRoute);
app.use('/', routes.templateInfoRoute);
app.use('/', routes.currentUserInfoRoute);
app.use('/', routes.userCreateRoute);
app.use('/', routes.userInfoRoute);
app.use('/', routes.downloadRoute);

app.use(morgan('dev'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(process.env.PORT || 3000, () => {
  const {address, port} = server.address();
  console.log(`gitStarted API listening at http://${address}:${port}`);
});
