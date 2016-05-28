'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.userInfoRoute = undefined;

var _express = require('express');

var _userInfo = require('./../../sample_data/user-info.js');

var userInfoRoute = (0, _express.Router)();

userInfoRoute.get('/user/:user', function (req, res) {
	var userFound = false;
	_userInfo.users.forEach(function (user) {
		if (req.params.user == user.username) {
			res.json(user);
			userFound = true;
		}
	});
	if (!userFound) res.status(404).json({ message: 'User ' + req.params.user + ' not found.' });
});

exports.userInfoRoute = userInfoRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdXNlci91c2VyLWluZm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUZBLElBQU0sZ0JBQWdCLHNCQUF0Qjs7QUFJQSxjQUFjLEdBQWQsQ0FBa0IsYUFBbEIsRUFBaUMsVUFBQyxHQUFELEVBQU0sR0FBTixFQUFjO0FBQzlDLEtBQUksWUFBWSxLQUFoQjtBQUNBLGlCQUFNLE9BQU4sQ0FBYyxVQUFDLElBQUQsRUFBVTtBQUN2QixNQUFHLElBQUksTUFBSixDQUFXLElBQVgsSUFBbUIsS0FBSyxRQUEzQixFQUFvQztBQUNuQyxPQUFJLElBQUosQ0FBUyxJQUFUO0FBQ0EsZUFBWSxJQUFaO0FBQ0E7QUFDRCxFQUxEO0FBTUEsS0FBRyxDQUFDLFNBQUosRUFDQyxJQUFJLE1BQUosQ0FBVyxHQUFYLEVBQWdCLElBQWhCLENBQXFCLEVBQUMsbUJBQWlCLElBQUksTUFBSixDQUFXLElBQTVCLGdCQUFELEVBQXJCO0FBQ0QsQ0FWRDs7UUFZUSxhLEdBQUEsYSIsImZpbGUiOiJ1c2VyLWluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlcn0gZnJvbSAnZXhwcmVzcyc7XHJcbmNvbnN0IHVzZXJJbmZvUm91dGUgPSBSb3V0ZXIoKTtcclxuXHJcbmltcG9ydCB7dXNlcnN9IGZyb20gJy4vLi4vLi4vc2FtcGxlX2RhdGEvdXNlci1pbmZvLmpzJzsgXHJcblxyXG51c2VySW5mb1JvdXRlLmdldCgnL3VzZXIvOnVzZXInLCAocmVxLCByZXMpID0+IHtcclxuXHR2YXIgdXNlckZvdW5kID0gZmFsc2U7XHJcblx0dXNlcnMuZm9yRWFjaCgodXNlcikgPT4ge1xyXG5cdFx0aWYocmVxLnBhcmFtcy51c2VyID09IHVzZXIudXNlcm5hbWUpe1xyXG5cdFx0XHRyZXMuanNvbih1c2VyKTtcclxuXHRcdFx0dXNlckZvdW5kID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRpZighdXNlckZvdW5kKVxyXG5cdFx0cmVzLnN0YXR1cyg0MDQpLmpzb24oe21lc3NhZ2U6IGBVc2VyICR7cmVxLnBhcmFtcy51c2VyfSBub3QgZm91bmQuYH0pO1xyXG59KTtcclxuXHJcbmV4cG9ydCB7dXNlckluZm9Sb3V0ZX07Il19