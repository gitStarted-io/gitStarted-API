import {Router} from 'express';
const templateCommmentsRoute = Router();

import {comments} from './../../sample_data/template-comments';

const notFoundMessage = {message: "No comments found for template or there exists no template with that id."};

templateCommmentsRoute.get('/template/comment/:templateId', (req, res) => {
    const templateId = parseInt(req.params.templateId);
    let numberOfCommments = 0;
    let commentsToSend = [];

    comments.forEach((comment) => {
        if(comment.templateId === templateId) {
            numberOfCommments += 1;
            commentsToSend.push(comment);
        }
    });

    if(commentsToSend.length !== 0) {
        res.json({
            templateId: templateId,
            numberOfCommments: numberOfCommments,
            comments: commentsToSend
        });
    } else 
        res.status(404).json(notFoundMessage)
});

export {templateCommmentsRoute};