/* !! TEMPLATE RULES !!
  templateName, tags:
    - can only contain numbers, lowercase letters, and -
    var regex = /^[a-z-]{1,}$/;
  version:
    - must follow the pattern ##.##.##
    var regex = /^[0-9]{1,}.[0-9]{1,}.[0-9]{1,}$/;
  upvotes, downvotes:
    - must be an integer
    Number.isInteger(upvotes), Number.isInteger(downvotes)

    Everything but upvotes and downvotes must be String.isString(attr)
*/

module.exports = {
  templates: [
    {
       templateName: 'express-is-awesome',
       description: 'An express template with some cool plugins.',
       tags: [
            'express',
            'jade'
       ],
       version: '1.0.3',
       upvotes: 120,
       downvotes: 3,
       author: 'datguy'
    },
    {
       templateName: 'gitstarted',
       description: 'The best template of them all.',
       tags: [
            'gitStarted',
            'react',
            'sql',
            'express'
       ],
       version: '0.0.1',
       upvotes: 10000000000,
       downvotes: 0,
       author: 'the-boys'
    },
    {
       templateName: 'minimalist',
       description: 'A template with only a bit of info.',
       tags: [

       ],
       version: '2.3.4',
       upvotes: 34,
       downvotes: 156,
       author: 'gilfoyle'
    },
    {
       templateName: 'i-like-frontend-1',
       description: 'I\'m Dinesh and I like to build I like to build frontend stuff.',
       tags: [
            'scss',
            'coffee-script',
            'frontend'
       ],
       version: '0.1.4',
       upvotes: 120,
       downvotes: 3,
       author: 'dineshc'
    },
    {
       templateName: 'pied-piper',
       description: 'A server template that is used for cool things.',
       tags: [
            'handlebars',
            'less',
            'angular-js',
            'morgan'
       ],
       version: '4.0.0',
       upvotes: 67832,
       downvotes: 465,
       author: 'rhendricks'
    },
    {
       templateName: 'mean-template',
       description: 'A template for making MEAN apps.',
       tags: [
            'mongodb',
            'express',
            'angular-js',
            'node'
       ],
       version: '3.1.0',
       upvotes: 2343240,
       downvotes: 43,
       author: 'meanguy'
    },
    {
       templateName: 'easy-template',
       description: 'The easiest of the templates.',
       tags: [
            'express'
       ],
       version: '2.2.7',
       upvotes: 1234,
       downvotes: 2371,
       author: 'the-lazy-coder'
    },
    {
       templateName: 'mongo-template',
       description: 'A template with easy MongoDB integration.',
       tags: [
            'mongodb'
       ],
       version: '0.8.9',
       upvotes: 4505,
       downvotes: 6,
       author: 'mongo-people'
    },
    {
       templateName: 'just-jade',
       description: 'Basic Node server serving Jade views.',
       tags: [
            'jade'
       ],
       version: '1.0.0',
       upvotes: 6793,
       downvotes: 1304,
       author: 'jade'
    },
    {
       templateName: 'express-yourself',
       description: 'An express template.',
       tags: [
            'express'
       ],
       version: '1.4.2',
       upvotes: 120,
       downvotes: 3,
       author: 'express-team'
    }
  ]
}