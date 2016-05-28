import {Router} from 'express';
const currentUserInfoRoute = Router();

currentUserInfoRoute.get('/currentUserInfoRoute', (req, res) => {
	res.send('<h1>This is the currentUserRoute screen</h1>');
});

export {currentUserInfoRoute};