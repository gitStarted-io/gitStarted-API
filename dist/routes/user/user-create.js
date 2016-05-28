'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var userCreateRoute = Router();

userCreateRoute.get('/user/create', function (req, res) {
  res.send('<h1>User was probably created.</h1>');
  // // If user was successfully created
  //    res.redirect('/');
  //    res.close();
});

exports.userCreateRoute = userCreateRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdXNlci91c2VyLWNyZWF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU0sa0JBQWtCLFFBQXhCOztBQUVBLGdCQUFnQixHQUFoQixDQUFvQixjQUFwQixFQUFvQyxVQUFDLEdBQUQsRUFBTSxHQUFOLEVBQWM7QUFDakQsTUFBSSxJQUFKLENBQVMscUNBQVQ7Ozs7QUFJQSxDQUxEOztRQU9RLGUsR0FBQSxlIiwiZmlsZSI6InVzZXItY3JlYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdXNlckNyZWF0ZVJvdXRlID0gUm91dGVyKCk7XHJcblxyXG51c2VyQ3JlYXRlUm91dGUuZ2V0KCcvdXNlci9jcmVhdGUnLCAocmVxLCByZXMpID0+IHtcclxuXHRyZXMuc2VuZCgnPGgxPlVzZXIgd2FzIHByb2JhYmx5IGNyZWF0ZWQuPC9oMT4nKTtcclxuXHQvLyAvLyBJZiB1c2VyIHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZFxyXG4gLy8gICAgcmVzLnJlZGlyZWN0KCcvJyk7XHJcbiAvLyAgICByZXMuY2xvc2UoKTtcclxufSk7XHJcblxyXG5leHBvcnQge3VzZXJDcmVhdGVSb3V0ZX07XHJcbiJdfQ==