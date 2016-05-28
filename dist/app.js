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

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Setting up the routes.
app.use(_express2.default.Router());
_routes2.default.setup(app);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBLElBQU0sTUFBTSx3QkFBWjs7O0FBR0EsSUFBSSxHQUFKLENBQVEsa0JBQVEsTUFBUixFQUFSO0FBQ0EsaUJBQU8sS0FBUCxDQUFhLEdBQWI7O0FBRUEsSUFBSSxHQUFKLENBQVEsc0JBQU8sS0FBUCxDQUFSO0FBQ0EsSUFBSSxHQUFKLENBQVEscUJBQVcsSUFBWCxFQUFSLEU7QUFDQSxJQUFJLEdBQUosQ0FBUSw2QkFBUjtBQUNBLElBQUksR0FBSixDQUFRLHFCQUFXLFVBQVgsQ0FBc0IsRUFBRSxVQUFVLElBQVosRUFBdEIsQ0FBUjs7QUFFQSxJQUFNLFNBQVMsSUFBSSxNQUFKLENBQVcsUUFBUSxHQUFSLENBQVksSUFBWixJQUFvQixJQUEvQixFQUFxQyxZQUFNO0FBQUEsd0JBQ2hDLE9BQU8sT0FBUCxFQURnQzs7QUFBQSxNQUNqRCxPQURpRCxtQkFDakQsT0FEaUQ7QUFBQSxNQUN4QyxJQUR3QyxtQkFDeEMsSUFEd0M7O0FBRXhELFVBQVEsR0FBUix5Q0FBa0QsT0FBbEQsU0FBNkQsSUFBN0Q7QUFDRCxDQUhjLENBQWYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XHJcbmltcG9ydCBjb29raWVQYXJzZXIgZnJvbSAnY29va2llLXBhcnNlcic7XHJcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcclxuXHJcbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuLy8gU2V0dGluZyB1cCB0aGUgcm91dGVzLlxyXG5hcHAudXNlKGV4cHJlc3MuUm91dGVyKCkpO1xyXG5Sb3V0ZXMuc2V0dXAoYXBwKTtcclxuXHJcbmFwcC51c2UobW9yZ2FuKCdkZXYnKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpOyAvLyBzdXBwb3J0IGpzb24gZW5jb2RlZCBib2RpZXNcclxuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xyXG5cclxuY29uc3Qgc2VydmVyID0gYXBwLmxpc3Rlbihwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDAsICgpID0+IHtcclxuICBjb25zdCB7YWRkcmVzcywgcG9ydH0gPSBzZXJ2ZXIuYWRkcmVzcygpO1xyXG4gIGNvbnNvbGUubG9nKGBnaXRTdGFydGVkIEFQSSBsaXN0ZW5pbmcgYXQgaHR0cDovLyR7YWRkcmVzc306JHtwb3J0fWApO1xyXG59KTsiXX0=