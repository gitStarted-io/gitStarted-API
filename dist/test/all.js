'use strict';

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _testconfig = require('./testconfig');

var _testconfig2 = _interopRequireDefault(_testconfig);

var _app = require('../app.js');

var _app2 = _interopRequireDefault(_app);

var _npmSearch = require('./tests/npm-search');

var _npmSearch2 = _interopRequireDefault(_npmSearch);

var _templates = require('./tests/templates');

var _templates2 = _interopRequireDefault(_templates);

var _user = require('./tests/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("gitStarted API", function () {
    this.timeout(20000);

    var agent = _superagent2.default.agent();
    var opts = {};

    opts.API_ROOT = _testconfig2.default.apiRoot;
    opts.agent = agent;

    _npmSearch2.default.executeTests(opts, function () {});
    _templates2.default.executeTests(opts, function () {});
    _user2.default.executeTests(opts, function () {});
}); /**
     * Created by Durzo on 5/28/2016.
     */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3QvYWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVMsZ0JBQVQsRUFBMkIsWUFBVztBQUNsQyxTQUFLLE9BQUwsQ0FBYSxLQUFiOztBQUVBLFFBQU0sUUFBUSxxQkFBVyxLQUFYLEVBQWQ7QUFDQSxRQUFNLE9BQU8sRUFBYjs7QUFFQSxTQUFLLFFBQUwsR0FBZ0IscUJBQU8sT0FBdkI7QUFDQSxTQUFLLEtBQUwsR0FBYSxLQUFiOztBQUVBLHdCQUFlLFlBQWYsQ0FBNEIsSUFBNUIsRUFBa0MsWUFBTSxDQUFFLENBQTFDO0FBQ0Esd0JBQWMsWUFBZCxDQUEyQixJQUEzQixFQUFpQyxZQUFNLENBQUUsQ0FBekM7QUFDQSxtQkFBVSxZQUFWLENBQXVCLElBQXZCLEVBQTZCLFlBQU0sQ0FBRSxDQUFyQztBQUVILENBYkQsRSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBEdXJ6byBvbiA1LzI4LzIwMTYuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHNob3VsZCBmcm9tICdzaG91bGQnO1xyXG5pbXBvcnQgc3VwZXJhZ2VudCBmcm9tICdzdXBlcmFnZW50JztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL3Rlc3Rjb25maWcnO1xyXG5cclxuaW1wb3J0IHNlcnZlciBmcm9tICcuLi9hcHAuanMnO1xyXG5cclxuaW1wb3J0IE5QTVNlYXJjaFRlc3RzIGZyb20gJy4vdGVzdHMvbnBtLXNlYXJjaCc7XHJcbmltcG9ydCBUZW1wbGF0ZVRlc3RzIGZyb20gJy4vdGVzdHMvdGVtcGxhdGVzJztcclxuaW1wb3J0IFVzZXJUZXN0cyBmcm9tICcuL3Rlc3RzL3VzZXInO1xyXG5cclxuZGVzY3JpYmUoXCJnaXRTdGFydGVkIEFQSVwiLCBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMudGltZW91dCgyMDAwMCk7XHJcblxyXG4gICAgY29uc3QgYWdlbnQgPSBzdXBlcmFnZW50LmFnZW50KCk7XHJcbiAgICBjb25zdCBvcHRzID0ge307XHJcblxyXG4gICAgb3B0cy5BUElfUk9PVCA9IGNvbmZpZy5hcGlSb290O1xyXG4gICAgb3B0cy5hZ2VudCA9IGFnZW50O1xyXG5cclxuICAgIE5QTVNlYXJjaFRlc3RzLmV4ZWN1dGVUZXN0cyhvcHRzLCAoKSA9PiB7fSk7XHJcbiAgICBUZW1wbGF0ZVRlc3RzLmV4ZWN1dGVUZXN0cyhvcHRzLCAoKSA9PiB7fSk7XHJcbiAgICBVc2VyVGVzdHMuZXhlY3V0ZVRlc3RzKG9wdHMsICgpID0+IHt9KTtcclxuXHJcbn0pOyJdfQ==