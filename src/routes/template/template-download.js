import {Router} from 'express';
const downloadTemplateRoute = Router();

downloadTemplateRoute.get('/template/:templateId/download', (req, res) => {
	res.send('<h1>' + req.params.templateId + ' to be downloaded.</h1>');
});

export {downloadTemplateRoute};
