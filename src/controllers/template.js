/**
 * Created by Durzo on 5/28/2016.
 */

import {templates as topTemplates} from '../sample_data/template-info';
import {comments} from '../sample_data/template-comments';

const MESSAGES = {
    TEMPLATE_COMMENTS_NOT_FOUND: {message: "No comments found for template or there exists no template with that id."},
    TEMPLATE_NOT_FOUND: {message: "Not Found"}
}

class Template {
    // GET: '/template/get/top'
    static getTop(req, res, next) {
        // sort templates
        if(topTemplates)
            res.status(200).send(topTemplates.sort((a, b) => {
                return b.upvotes - a.upvotes;
            }));
        else {
            res.status(500).json({message: "Database error - unable to retrieve top templates"});
        }
    }

    // GET: '/template/search/:term'
    static searchTerm(req, res, next) {
        let pointsPruned = [];
        let pointsSorted = [];
        let searchTerms = req.params.term.split(' ');

        // Increase efficiency
        let points = topTemplates.map((template) => {
            for(let i in searchTerms) {
                let regex = new RegExp(searchTerms[i]);
                let matchArray = template.templateName.match(regex);
                let matchPoints = 0;
                if(matchArray) {
                    if(matchArray[0] === template.templateName)
                    // check if perfect macth with templateName +100
                        return {score: 100, name: template.templateName};
                    else {
                        // check if imperfect match with templateName +expression
                        matchPoints += Math.round(100 * matchArray[0].length / template.templateName.length);
                    }
                }
                for(let j in template.tags) {
                    matchArray = null;
                    matchArray = template.tags[j].match(regex);
                    // check if match with any tags +15 each
                    if(matchArray)
                        matchPoints += 15;
                }
                if(matchPoints !== 0) {
                    return matchPoints > 100
                        ? {
                        score: 100,
                        name: template.templateName
                    } : {
                        score: matchPoints,
                        template: {
                            templateName: template.templateName,
                            author: template.author,
                            tags: template.tags
                        }
                    };
                }
                else
                    return '';
            }
        });

        points.forEach((pointObject) => {
            if(pointObject !== '')
                pointsPruned.push(pointObject);
        });

        pointsPruned.sort((a, b) => {
            return b.score - a.score;
        });

        res.status(200).json({searchResults: pointsPruned});
    }

    // GET: '/template/comment/:templateId'
    static templateComments(req, res, next) {
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
            res.status(200).json({
                templateId: templateId,
                numberOfCommments: numberOfCommments,
                comments: commentsToSend
            });
        } else {
            res.status(404).json(MESSAGES.TEMPLATE_COMMENTS_NOT_FOUND);
        }
    }

    // GET: '/template/:template/download'
    static templateDownload(req, res, next) {
        res.status(200).send(topTemplates[0]);
    }

    // GET: '/template/:templateId'
    static templateInfo(req, res, next) {
        let templateToSend = null;

        topTemplates.forEach((template) => {
            if(template.templateId === parseInt(req.params.templateId))
                templateToSend = template;
        });

        if(templateToSend)
            res.status(200).send(templateToSend);
        else
            res.status(404).json(MESSAGES.TEMPLATE_NOT_FOUND);
    }
}

module.exports = Template;