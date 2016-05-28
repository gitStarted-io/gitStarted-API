'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userCreateRoute = undefined;

var _express = require('express');

var userCreateRoute = (0, _express.Router)(); // var express = require('express');
// var router = express.Router();

// module.exports = (function() {

//     var router = express.Router();

//     router.post('/user/create', function(req, res, next) {
//         res.send('<h1>User was probably created.</h1>');

//         res.redirect('/');
//         res.close();
//     });

//     return router;
// })();

userCreateRoute.get('/user/create', function (req, res) {
  res.send('<h1>User was probably created.</h1>');
  // // If user was successfully created
  //    res.redirect('/');
  //    res.close();
});

exports.userCreateRoute = userCreateRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdXNlci91c2VyLWNyZWF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBaUJBOztBQUNBLElBQU0sa0JBQWtCLHNCQUF4QixDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGdCQUFnQixHQUFoQixDQUFvQixjQUFwQixFQUFvQyxVQUFDLEdBQUQsRUFBTSxHQUFOLEVBQWM7QUFDakQsTUFBSSxJQUFKLENBQVMscUNBQVQ7Ozs7QUFJQSxDQUxEOztRQU9RLGUsR0FBQSxlIiwiZmlsZSI6InVzZXItY3JlYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbi8vIHZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxuLy8gbW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4vLyAgICAgdmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG4vLyAgICAgcm91dGVyLnBvc3QoJy91c2VyL2NyZWF0ZScsIGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XHJcbi8vICAgICAgICAgcmVzLnNlbmQoJzxoMT5Vc2VyIHdhcyBwcm9iYWJseSBjcmVhdGVkLjwvaDE+Jyk7XHJcblxyXG4vLyAgICAgICAgIHJlcy5yZWRpcmVjdCgnLycpO1xyXG4vLyAgICAgICAgIHJlcy5jbG9zZSgpO1xyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgcmV0dXJuIHJvdXRlcjtcclxuLy8gfSkoKTtcclxuXHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdleHByZXNzJztcclxuY29uc3QgdXNlckNyZWF0ZVJvdXRlID0gUm91dGVyKCk7XHJcblxyXG51c2VyQ3JlYXRlUm91dGUuZ2V0KCcvdXNlci9jcmVhdGUnLCAocmVxLCByZXMpID0+IHtcclxuXHRyZXMuc2VuZCgnPGgxPlVzZXIgd2FzIHByb2JhYmx5IGNyZWF0ZWQuPC9oMT4nKTtcclxuXHQvLyAvLyBJZiB1c2VyIHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZFxyXG4gLy8gICAgcmVzLnJlZGlyZWN0KCcvJyk7XHJcbiAvLyAgICByZXMuY2xvc2UoKTtcclxufSk7XHJcblxyXG5leHBvcnQge3VzZXJDcmVhdGVSb3V0ZX07XHJcbiJdfQ==