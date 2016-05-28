import {Router} from 'express';
const indexRoute = Router();

indexRoute.get('/', (req, res) => {
	res.send('<h1>Here\'s some ES6!</h1>');
});

export {indexRoute};