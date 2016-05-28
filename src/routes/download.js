import {Router} from 'express';
const downloadRoute = Router();

downloadRoute.get('/downloadRoute', (req, res) => {
	res.send('<h1>downloadRoute GitStarted</h1>');
});

export {downloadRoute};