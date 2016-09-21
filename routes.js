const NPMSearch = require('./controllers/npm-search');
const Template = require('./controllers/template');
const User = require('./controllers/user');
const Download = require('./controllers/download');
const Index = require('./controllers/index');

class Routes {
  static setup(app) {
        // Just to check if it's alive.
    app.get('/', Index.showWorking);

        // GET REQUESTS
    app.get('/template/comment/:templateId', Template.templateComments);
    app.get('/template/search/:term', Template.searchTerm);
    app.get('/template/get/top', Template.getTop);
    app.get('/template/:template/download', Template.templateDownload);
    app.get('/template/:templateId', Template.templateInfo);
    app.get('/download', Download.download);
    app.get('/user/:user', User.getUserInfo);
    app.get('/currentUserInfoRoute', User.getCurrentUser);
    app.get('/npmsearch/:term', NPMSearch.getResults);
    app.get('/user/:userId/:guid', User.validateUser);

        // POST REQUESTS
    app.post('/user/create', User.createUser);
    app.post('/user/login', User.loginUser);
  }
}

module.exports = Routes;
