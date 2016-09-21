/**
 * Created by Durzo on 5/28/2016.
 */

const { templates: topTemplates } = require('../sample_data/template-info');
const { comments } = require('../sample_data/template-comments');

const MESSAGES = {
  TEMPLATE_COMMENTS_NOT_FOUND: { message: 'No comments found for template or there exists no template with that id.' },
  TEMPLATE_NOT_FOUND: { message: 'Not Found' },
};

class Template {
    // GET: '/template/get/top'
  static getTop(req, res, next) {
        // sort templates
    if (topTemplates)
      res.status(200).send(topTemplates.sort((a, b) => {
        return b.upvotes - a.upvotes;
      }));
    else {
      res.status(500).json({ message: 'Database error - unable to retrieve top templates' });
    }
  }

    // GET: '/template/search/:term'
  static searchTerm(req, res, next) {
    const pointsPruned = [];
    const pointsSorted = [];
    const searchTerms = req.params.term.split(' ');

        // Increase efficiency
    const points = topTemplates.map((template) => {
      for (const i in searchTerms) {
        const regex = new RegExp(searchTerms[i]);
        let matchArray = template.templateName.match(regex);
        let matchPoints = 0;
        if (matchArray) {
          if (matchArray[0] === template.templateName)
                    // check if perfect macth with templateName +100
            return { score: 100, name: template.templateName };
          else {
                        // check if imperfect match with templateName +expression
            matchPoints += Math.round(100 * matchArray[0].length / template.templateName.length);
          }
        }
        for (const j in template.tags) {
          matchArray = null;
          matchArray = template.tags[j].match(regex);
                    // check if match with any tags +15 each
          if (matchArray)
            matchPoints += 15;
        }
        if (matchPoints !== 0) {
          return matchPoints > 100
                        ? {
                          score: 100,
                          name: template.templateName,
                        } : {
                          score: matchPoints,
                          template: {
                            templateName: template.templateName,
                            author: template.author,
                            tags: template.tags,
                          },
                        };
        }
        else
                    return '';
      }
    });

    points.forEach((pointObject) => {
      if (pointObject !== '')
        pointsPruned.push(pointObject);
    });

    pointsPruned.sort((a, b) => {
      return b.score - a.score;
    });

    res.status(200).json({ searchResults: pointsPruned });
  }

    // GET: '/template/comment/:templateId'
  static templateComments(req, res, next) {
    const templateId = parseInt(req.params.templateId);
    let numberOfCommments = 0;
    const commentsToSend = [];

    comments.forEach((comment) => {
      if (comment.templateId === templateId) {
        numberOfCommments += 1;
        commentsToSend.push(comment);
      }
    });

    if (commentsToSend.length !== 0) {
      res.status(200).json({
        templateId,
        numberOfCommments,
        comments: commentsToSend,
      });
    } else {
      res.status(404).json(MESSAGES.TEMPLATE_COMMENTS_NOT_FOUND);
    }
  }

    // GET: '/template/:template/download'
  static templateDownload(req, res, next) {
    const data = {
      templateId: 1,
      templateName: 'test',
      description: 'test desc',
      version: '1.0',
      command: 'console.log("awesome");',
      tags: ['test'],
      author: 'Jake',
      repo: ['git@github.com:gitStarted-io/templates/tree/master/nodejs/gulp'],
      files: [
        {
          file: 'gulpfile.js',
          path: 'nodejs/gulp',
          destination: '',
          children: [
            {
              file: 'test.js',
              path: 'test',
              children: [
                {
                  file: 'test2.js',
                  path: 'test2',
                },
              ],
            },
          ],
        },
        {
          file: 'index.js',
          path: 'nodejs/index',
          destination: '',
          children: [
            {
              file: 'routes.js',
              path: 'routes',
            },
          ],
        },
        {
          file: 'routes.js',
          path: 'nodejs/routes',
          destination: '',
        },
        {
          file: 'index.js',
          path: 'nodejs/routes',
          destination: 'controllers',
        },
      ],
    };
        //         {
        //             name: 'package.json',
        //             isFile:true,
        //             content: JSON.stringify({
        //                 "name":"test",
        //                 "version":"1.0",
        //                 "description":"awesome test",
        //                 "main":"index.js",
        //                 "scripts": { "run": "node index.js" },
        //                 "license":"MIT",
        //                 "dependencies": {
        //                     "path": "^0.12.7"
        //                 },
        //                 "devDependencies": {
        //                     "gulp": "^3.9.1"
        //                 }
        //             })
        //         },
        //         {
        //             name: "gulpfile.js",
        //             isFile: true,
        //             content: "var gulp = require('gulp');\n[[[TOP_CONTENT_REPLACE]]]\nconsole.log('after top');\n[[[MID_CONTENT_REPLACE]]]\nconsole.log('after mid');\n[[[BOTTOM_CONTENT_REPLACE]]]\nconsole.log('after bottom');",
        //             dependencies: ["gulp"],
        //             children: [
        //                 {
        //                     name:"test stuff",
        //                     content:"[[[TOP_CONTENT_PLACEHOLDER]]]var requireDir = require('require-dir');[[[TOP_CONTENT_REPLACE]]][[[/TOP_CONTENT_PLACEHOLDER]]]\n[[[MID_CONTENT_PLACEHOLDER]]]console.log('from teststuff.');[[[/MID_CONTENT_PLACEHOLDER]]]\n[[[BOTTOM_CONTENT_PLACEHOLDER]]]console.log('bottom stuff');[[[/BOTTOM_CONTENT_PLACEHOLDER]]]",
        //                     dependencies:["require-dir"],
        //                     children:[
        //                         {
        //                             name:"test inner child",
        //                             content:"[[[TOP_CONTENT_PLACEHOLDER]]]var hope = require('hope');[[[/TOP_CONTENT_PLACEHOLDER]]]"
        //                         }
        //                     ]
        //                 }
        //             ]
        //         },
        //         {
        //             name: "src",
        //             isFile: false,
        //             children:[
        //                 {
        //                     name: "gulpfile-inside.js",
        //                     isFile: true,
        //                     content: "var gulp = require('gulp');\n[[[TOP_CONTENT_REPLACE]]]\nconsole.log('after top');\n[[[MID_CONTENT_REPLACE]]]\nconsole.log('after mid');\n[[[BOTTOM_CONTENT_REPLACE]]]\nconsole.log('after bottom');",
        //                     dependencies: ["gulp"],
        //                     children: [
        //                         {
        //                             name:"test stuff",
        //                             content:"[[[TOP_CONTENT_PLACEHOLDER]]]var requireDir = require('require-dir');[[[TOP_CONTENT_REPLACE]]][[[/TOP_CONTENT_PLACEHOLDER]]]\n[[[MID_CONTENT_PLACEHOLDER]]]console.log('from teststuff.');[[[/MID_CONTENT_PLACEHOLDER]]]\n[[[BOTTOM_CONTENT_PLACEHOLDER]]]console.log('bottom stuff');[[[/BOTTOM_CONTENT_PLACEHOLDER]]]",
        //                             dependencies:["require-dir"],
        //                             isFile:true,
        //                             children:[
        //                                 {
        //                                     name:"test inner child",
        //                                     content:"[[[TOP_CONTENT_PLACEHOLDER]]]var hope = require('hope');[[[/TOP_CONTENT_PLACEHOLDER]]]"
        //                                 }
        //                             ]
        //                         }
        //                     ]
        //                 },
        //                 {
        //                     name:"controllers",
        //                     isFile:false,
        //                     children:[
        //                         {
        //                             name: "test.js",
        //                             content: "class Awesome {\n   constructor(data) {\n      this.test = data;\n   }\n}\n\nmodule.exports = Awesome;",
        //                             isFile:true
        //                         }
        //                     ]
        //                 }
        //             ]
        //         }
        //     ]
        // };
    res.status(200).json(data);
  }

    // GET: '/template/:templateId'
  static templateInfo(req, res, next) {
    let templateToSend = null;

    topTemplates.forEach((template) => {
      if (template.templateId === parseInt(req.params.templateId))
        templateToSend = template;
    });

    if (templateToSend)
      res.status(200).send(templateToSend);
    else
            res.status(404).json(MESSAGES.TEMPLATE_NOT_FOUND);
  }
}

module.exports = Template;
