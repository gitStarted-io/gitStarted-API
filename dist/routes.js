'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _npmSearch = require('./controllers/npm-search');

var _npmSearch2 = _interopRequireDefault(_npmSearch);

var _template = require('./controllers/template');

var _template2 = _interopRequireDefault(_template);

var _user = require('./controllers/user');

var _user2 = _interopRequireDefault(_user);

var _download = require('./controllers/download');

var _download2 = _interopRequireDefault(_download);

var _index = require('./controllers/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Routes = function () {
    function Routes() {
        _classCallCheck(this, Routes);
    }

    _createClass(Routes, null, [{
        key: 'setup',
        value: function setup(app) {
            // Just to check if it's alive.
            app.get('/', _index2.default.showWorking);

            // GET REQUESTS
            app.get('/template/comment/:templateId', _template2.default.templateComments);
            app.get('/template/search/:term', _template2.default.searchTerm);
            app.get('/template/get/top', _template2.default.getTop);
            app.get('/template/:template/download', _template2.default.templateDownload);
            app.get('/template/:templateId', _template2.default.templateInfo);
            app.get('/download', _download2.default.download);
            app.get('/user/:user', _user2.default.getUserInfo);
            app.get('/currentUserInfoRoute', _user2.default.getCurrentUser);
            app.get('/npmsearch/:term', _npmSearch2.default.getResults);

            // POST REQUESTS
            app.post('/user/create', _user2.default.createUser);
        }
    }]);

    return Routes;
}();

module.exports = Routes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3V0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRU0sTTs7Ozs7Ozs4QkFDVyxHLEVBQUs7O0FBRWQsZ0JBQUksR0FBSixDQUFRLEdBQVIsRUFBYSxnQkFBTSxXQUFuQjs7O0FBR0EsZ0JBQUksR0FBSixDQUFRLCtCQUFSLEVBQXlDLG1CQUFTLGdCQUFsRDtBQUNBLGdCQUFJLEdBQUosQ0FBUSx3QkFBUixFQUFrQyxtQkFBUyxVQUEzQztBQUNBLGdCQUFJLEdBQUosQ0FBUSxtQkFBUixFQUE2QixtQkFBUyxNQUF0QztBQUNBLGdCQUFJLEdBQUosQ0FBUSw4QkFBUixFQUF3QyxtQkFBUyxnQkFBakQ7QUFDQSxnQkFBSSxHQUFKLENBQVEsdUJBQVIsRUFBaUMsbUJBQVMsWUFBMUM7QUFDQSxnQkFBSSxHQUFKLENBQVEsV0FBUixFQUFxQixtQkFBUyxRQUE5QjtBQUNBLGdCQUFJLEdBQUosQ0FBUSxhQUFSLEVBQXVCLGVBQUssV0FBNUI7QUFDQSxnQkFBSSxHQUFKLENBQVEsdUJBQVIsRUFBaUMsZUFBSyxjQUF0QztBQUNBLGdCQUFJLEdBQUosQ0FBUSxrQkFBUixFQUE0QixvQkFBVSxVQUF0Qzs7O0FBR0EsZ0JBQUksSUFBSixDQUFTLGNBQVQsRUFBeUIsZUFBSyxVQUE5QjtBQUNIOzs7Ozs7QUFHTCxPQUFPLE9BQVAsR0FBaUIsTUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5QTVNlYXJjaCBmcm9tICcuL2NvbnRyb2xsZXJzL25wbS1zZWFyY2gnO1xyXG5pbXBvcnQgVGVtcGxhdGUgZnJvbSAnLi9jb250cm9sbGVycy90ZW1wbGF0ZSc7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4vY29udHJvbGxlcnMvdXNlcic7XHJcbmltcG9ydCBEb3dubG9hZCBmcm9tICcuL2NvbnRyb2xsZXJzL2Rvd25sb2FkJztcclxuaW1wb3J0IEluZGV4IGZyb20gJy4vY29udHJvbGxlcnMvaW5kZXgnO1xyXG5cclxuY2xhc3MgUm91dGVzIHtcclxuICAgIHN0YXRpYyBzZXR1cChhcHApIHtcclxuICAgICAgICAvLyBKdXN0IHRvIGNoZWNrIGlmIGl0J3MgYWxpdmUuXHJcbiAgICAgICAgYXBwLmdldCgnLycsIEluZGV4LnNob3dXb3JraW5nKTtcclxuXHJcbiAgICAgICAgLy8gR0VUIFJFUVVFU1RTXHJcbiAgICAgICAgYXBwLmdldCgnL3RlbXBsYXRlL2NvbW1lbnQvOnRlbXBsYXRlSWQnLCBUZW1wbGF0ZS50ZW1wbGF0ZUNvbW1lbnRzKTtcclxuICAgICAgICBhcHAuZ2V0KCcvdGVtcGxhdGUvc2VhcmNoLzp0ZXJtJywgVGVtcGxhdGUuc2VhcmNoVGVybSk7XHJcbiAgICAgICAgYXBwLmdldCgnL3RlbXBsYXRlL2dldC90b3AnLCBUZW1wbGF0ZS5nZXRUb3ApO1xyXG4gICAgICAgIGFwcC5nZXQoJy90ZW1wbGF0ZS86dGVtcGxhdGUvZG93bmxvYWQnLCBUZW1wbGF0ZS50ZW1wbGF0ZURvd25sb2FkKTtcclxuICAgICAgICBhcHAuZ2V0KCcvdGVtcGxhdGUvOnRlbXBsYXRlSWQnLCBUZW1wbGF0ZS50ZW1wbGF0ZUluZm8pO1xyXG4gICAgICAgIGFwcC5nZXQoJy9kb3dubG9hZCcsIERvd25sb2FkLmRvd25sb2FkKTtcclxuICAgICAgICBhcHAuZ2V0KCcvdXNlci86dXNlcicsIFVzZXIuZ2V0VXNlckluZm8pO1xyXG4gICAgICAgIGFwcC5nZXQoJy9jdXJyZW50VXNlckluZm9Sb3V0ZScsIFVzZXIuZ2V0Q3VycmVudFVzZXIpO1xyXG4gICAgICAgIGFwcC5nZXQoJy9ucG1zZWFyY2gvOnRlcm0nLCBOUE1TZWFyY2guZ2V0UmVzdWx0cyk7XHJcblxyXG4gICAgICAgIC8vIFBPU1QgUkVRVUVTVFNcclxuICAgICAgICBhcHAucG9zdCgnL3VzZXIvY3JlYXRlJywgVXNlci5jcmVhdGVVc2VyKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSb3V0ZXM7XHJcbiJdfQ==