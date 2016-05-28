const userCreateRoute = Router();

userCreateRoute.get('/user/create', (req, res) => {
	res.send('<h1>User was probably created.</h1>');
	// // If user was successfully created
 //    res.redirect('/');
 //    res.close();
});

export {userCreateRoute};
