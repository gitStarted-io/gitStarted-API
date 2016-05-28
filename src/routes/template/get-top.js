import {Router} from 'express';
const getTopTemplatesRoute = Router();

import {templates as topTemplates} from './../../sample_data/template-info.js';

getTopTemplatesRoute.get('/template/get/top', (req, res) => {
    // get templates in order of popularity from db
        // sort templates
        if(topTemplates)
            res.send(topTemplates.sort((a, b) => {
            	return b.upvotes - a.upvotes;
            }));
        else
            res.status(500).json({message: "Database error - unable to retrieve top templates"});
});

export {getTopTemplatesRoute};