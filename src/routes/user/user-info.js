import {Router} from 'express';
const userInfoRoute = Router();

import {users} from './../../sample_data/user-info.js'; 

userInfoRoute.get('/user/:user', (req, res) => {
	var userFound = false;
	users.forEach((user) => {
		if(req.params.user == user.username){
			res.json(user);
			userFound = true;
		}
	});
	if(!userFound)
		res.status(404).json({message: `User ${req.params.user} not found.`});
});

export {userInfoRoute};