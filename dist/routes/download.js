'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.downloadRoute = undefined;

var _express = require('express');

var downloadRoute = (0, _express.Router)();

downloadRoute.get('/downloadRoute', function (req, res) {
	res.send('<h1>downloadRoute GitStarted</h1>');
});

exports.downloadRoute = downloadRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvZG93bmxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBLElBQU0sZ0JBQWdCLHNCQUF0Qjs7QUFFQSxjQUFjLEdBQWQsQ0FBa0IsZ0JBQWxCLEVBQW9DLFVBQUMsR0FBRCxFQUFNLEdBQU4sRUFBYztBQUNqRCxLQUFJLElBQUosQ0FBUyxtQ0FBVDtBQUNBLENBRkQ7O1FBSVEsYSxHQUFBLGEiLCJmaWxlIjoiZG93bmxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlcn0gZnJvbSAnZXhwcmVzcyc7XHJcbmNvbnN0IGRvd25sb2FkUm91dGUgPSBSb3V0ZXIoKTtcclxuXHJcbmRvd25sb2FkUm91dGUuZ2V0KCcvZG93bmxvYWRSb3V0ZScsIChyZXEsIHJlcykgPT4ge1xyXG5cdHJlcy5zZW5kKCc8aDE+ZG93bmxvYWRSb3V0ZSBHaXRTdGFydGVkPC9oMT4nKTtcclxufSk7XHJcblxyXG5leHBvcnQge2Rvd25sb2FkUm91dGV9OyJdfQ==