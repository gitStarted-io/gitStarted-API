'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _routes = require('./routes');

var routes = _interopRequireWildcard(_routes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// import routes


console.log(routes);

app.use('/', routes.indexRoute);
app.use('/', routes.searchTemplatesRoute);
app.use('/', routes.getTopTemplatesRoute);
app.use('/', routes.templateCommmentsRoute);
app.use('/', routes.downloadTemplateRoute);
app.use('/', routes.templateInfoRoute);
app.use('/', routes.currentUserInfoRoute);
app.use('/', routes.userCreateRoute);
app.use('/', routes.userInfoRoute);
app.use('/', routes.downloadRoute);

app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json()); // support json encoded bodies
app.use((0, _cookieParser2.default)());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

var server = app.listen(process.env.PORT || 3000, function () {
  var _server$address = server.address();

  var address = _server$address.address;
  var port = _server$address.port;

  console.log('gitStarted API listening at http://' + address + ':' + port);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBS0E7O0lBQVksTTs7Ozs7O0FBSFosSUFBTSxNQUFNLHdCQUFaOzs7OztBQUtBLFFBQVEsR0FBUixDQUFZLE1BQVo7O0FBRUEsSUFBSSxHQUFKLENBQVEsR0FBUixFQUFhLE9BQU8sVUFBcEI7QUFDQSxJQUFJLEdBQUosQ0FBUSxHQUFSLEVBQWEsT0FBTyxvQkFBcEI7QUFDQSxJQUFJLEdBQUosQ0FBUSxHQUFSLEVBQWEsT0FBTyxvQkFBcEI7QUFDQSxJQUFJLEdBQUosQ0FBUSxHQUFSLEVBQWEsT0FBTyxzQkFBcEI7QUFDQSxJQUFJLEdBQUosQ0FBUSxHQUFSLEVBQWEsT0FBTyxxQkFBcEI7QUFDQSxJQUFJLEdBQUosQ0FBUSxHQUFSLEVBQWEsT0FBTyxpQkFBcEI7QUFDQSxJQUFJLEdBQUosQ0FBUSxHQUFSLEVBQWEsT0FBTyxvQkFBcEI7QUFDQSxJQUFJLEdBQUosQ0FBUSxHQUFSLEVBQWEsT0FBTyxlQUFwQjtBQUNBLElBQUksR0FBSixDQUFRLEdBQVIsRUFBYSxPQUFPLGFBQXBCO0FBQ0EsSUFBSSxHQUFKLENBQVEsR0FBUixFQUFhLE9BQU8sYUFBcEI7O0FBRUEsSUFBSSxHQUFKLENBQVEsc0JBQU8sS0FBUCxDQUFSO0FBQ0EsSUFBSSxHQUFKLENBQVEscUJBQVcsSUFBWCxFQUFSLEU7QUFDQSxJQUFJLEdBQUosQ0FBUSw2QkFBUjtBQUNBLElBQUksR0FBSixDQUFRLHFCQUFXLFVBQVgsQ0FBc0IsRUFBRSxVQUFVLElBQVosRUFBdEIsQ0FBUjs7QUFFQSxJQUFNLFNBQVMsSUFBSSxNQUFKLENBQVcsUUFBUSxHQUFSLENBQVksSUFBWixJQUFvQixJQUEvQixFQUFxQyxZQUFNO0FBQUEsd0JBQ2hDLE9BQU8sT0FBUCxFQURnQzs7QUFBQSxNQUNqRCxPQURpRCxtQkFDakQsT0FEaUQ7QUFBQSxNQUN4QyxJQUR3QyxtQkFDeEMsSUFEd0M7O0FBRXhELFVBQVEsR0FBUix5Q0FBa0QsT0FBbEQsU0FBNkQsSUFBN0Q7QUFDRCxDQUhjLENBQWYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XHJcbmltcG9ydCBjb29raWVQYXJzZXIgZnJvbSAnY29va2llLXBhcnNlcic7XHJcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbi8vIGltcG9ydCByb3V0ZXNcclxuaW1wb3J0ICogYXMgcm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuXHJcbmNvbnNvbGUubG9nKHJvdXRlcyk7XHJcblxyXG5hcHAudXNlKCcvJywgcm91dGVzLmluZGV4Um91dGUpO1xyXG5hcHAudXNlKCcvJywgcm91dGVzLnNlYXJjaFRlbXBsYXRlc1JvdXRlKTtcclxuYXBwLnVzZSgnLycsIHJvdXRlcy5nZXRUb3BUZW1wbGF0ZXNSb3V0ZSk7XHJcbmFwcC51c2UoJy8nLCByb3V0ZXMudGVtcGxhdGVDb21tbWVudHNSb3V0ZSk7XHJcbmFwcC51c2UoJy8nLCByb3V0ZXMuZG93bmxvYWRUZW1wbGF0ZVJvdXRlKTtcclxuYXBwLnVzZSgnLycsIHJvdXRlcy50ZW1wbGF0ZUluZm9Sb3V0ZSk7XHJcbmFwcC51c2UoJy8nLCByb3V0ZXMuY3VycmVudFVzZXJJbmZvUm91dGUpO1xyXG5hcHAudXNlKCcvJywgcm91dGVzLnVzZXJDcmVhdGVSb3V0ZSk7XHJcbmFwcC51c2UoJy8nLCByb3V0ZXMudXNlckluZm9Sb3V0ZSk7XHJcbmFwcC51c2UoJy8nLCByb3V0ZXMuZG93bmxvYWRSb3V0ZSk7XHJcblxyXG5hcHAudXNlKG1vcmdhbignZGV2JykpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTsgLy8gc3VwcG9ydCBqc29uIGVuY29kZWQgYm9kaWVzXHJcbmFwcC51c2UoY29va2llUGFyc2VyKCkpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcclxuXHJcbmNvbnN0IHNlcnZlciA9IGFwcC5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwLCAoKSA9PiB7XHJcbiAgY29uc3Qge2FkZHJlc3MsIHBvcnR9ID0gc2VydmVyLmFkZHJlc3MoKTtcclxuICBjb25zb2xlLmxvZyhgZ2l0U3RhcnRlZCBBUEkgbGlzdGVuaW5nIGF0IGh0dHA6Ly8ke2FkZHJlc3N9OiR7cG9ydH1gKTtcclxufSk7XHJcbiJdfQ==