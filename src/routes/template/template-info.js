import {Router} from 'express';
const templateInfoRoute = Router();

import {templates} from './../../sample_data/template-info';

let templateToSend;
let notFound = {message: "Not Found"};

templateInfoRoute.get('/template/:templateId', (req, res) => {
    templates.forEach((template) => {
        if(template.templateId === parseInt(req.params.templateId))
            templateToSend = template;
    });

    if(templateToSend)
        res.send(templateToSend);
    else
        res.status(404).json(notFound);
});

export {templateInfoRoute};