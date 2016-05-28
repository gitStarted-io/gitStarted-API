import {Router} from 'express';
const searchTemplatesRoute = Router();

import {templates} from './../../sample_data/template-info.js';

const notFound = {message: 'This search produced no results.'};

searchTemplatesRoute.get('/template/search/:terms', (req, res) => {
    let pointsPruned = [];
    let pointsSorted = [];
    let searchTerms = req.params.terms.split(' ');
        
     // Increase efficiency
     let points = templates.map((template) => {
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
        
    res.json({searchResults: pointsPruned});
});

export {searchTemplatesRoute};