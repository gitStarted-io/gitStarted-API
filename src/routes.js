// import express from 'express';
// import path from 'path';
// const routes = path.resolve(__dirname, 'routes');

// export default function routeManager(app) {

// 	// Just to check if it's alive.
// 	app.get('/', require(routes + '/index.js'));

// 	// GET REQUESTS
// 	app.get('/template/comment/:templateId', require(routes + '/template/template-comments.js'));
// 	app.get('/template/search/:term', require(routes + '/template/search-term.js'));
// 	app.get('/template/get/top', require(routes + '/template/search-top.js'));
// 	app.get('/template/:template/download', require(routes + '/template/template-download.js'));
// 	app.get('/template/:template', require(routes + '/template/template-info.js'));
// 	app.get('/download', require(routes + '/download.js'));
// 	app.get('/user/:user', require(routes +'/user/user-info.js'));

// 	// POST REQUESTS
// 	app.post('/user/create', require(routes + '/user/user-create.js'));

// };

export * from './routes/index'
export * from './routes/template/search-term'
export * from './routes/template/get-top'
export * from './routes/template/template-comments'
export * from './routes/template/template-download'
export * from './routes/template/template-info'
export * from './routes/user/user'
export * from './routes/user/user-create'
export * from './routes/user/user-info'
export * from './routes/download'
