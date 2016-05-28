'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Durzo on 5/28/2016.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _userInfo = require('../sample_data/user-info.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
    function User() {
        _classCallCheck(this, User);
    }

    _createClass(User, null, [{
        key: 'getCurrentUser',

        // GET: '/currentUserInfoRoute'
        value: function getCurrentUser(req, res, next) {
            res.send('<h1>This is the currentUserRoute screen</h1>');
        }

        // POST: '/user/create'

    }, {
        key: 'createUser',
        value: function createUser(req, res, next) {
            res.send('<h1>User was probably created.</h1>');
        }

        // GET: '/user/:user'

    }, {
        key: 'getUserInfo',
        value: function getUserInfo(req, res, next) {
            var userFound = false;
            _userInfo.users.forEach(function (user) {
                if (req.params.user == user.username) {
                    res.json(user);
                    userFound = true;
                }
            });
            if (!userFound) {
                res.status(404).json({ message: 'User ' + req.params.user + ' not found.' });
            }
        }
    }]);

    return User;
}();

module.exports = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy91c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBOzs7O0lBRU0sSTs7Ozs7Ozs7O3VDQUVvQixHLEVBQUssRyxFQUFLLEksRUFBTTtBQUNsQyxnQkFBSSxJQUFKLENBQVMsOENBQVQ7QUFDSDs7Ozs7O21DQUdpQixHLEVBQUssRyxFQUFLLEksRUFBTTtBQUM5QixnQkFBSSxJQUFKLENBQVMscUNBQVQ7QUFDSDs7Ozs7O29DQUdrQixHLEVBQUssRyxFQUFLLEksRUFBTTtBQUMvQixnQkFBSSxZQUFZLEtBQWhCO0FBQ0EsNEJBQU0sT0FBTixDQUFjLFVBQUMsSUFBRCxFQUFVO0FBQ3BCLG9CQUFHLElBQUksTUFBSixDQUFXLElBQVgsSUFBbUIsS0FBSyxRQUEzQixFQUFvQztBQUNoQyx3QkFBSSxJQUFKLENBQVMsSUFBVDtBQUNBLGdDQUFZLElBQVo7QUFDSDtBQUNKLGFBTEQ7QUFNQSxnQkFBRyxDQUFDLFNBQUosRUFBZTtBQUNYLG9CQUFJLE1BQUosQ0FBVyxHQUFYLEVBQWdCLElBQWhCLENBQXFCLEVBQUMsbUJBQWlCLElBQUksTUFBSixDQUFXLElBQTVCLGdCQUFELEVBQXJCO0FBQ0g7QUFDSjs7Ozs7O0FBR0wsT0FBTyxPQUFQLEdBQWlCLElBQWpCIiwiZmlsZSI6InVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBEdXJ6byBvbiA1LzI4LzIwMTYuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHt1c2Vyc30gZnJvbSAnLi4vc2FtcGxlX2RhdGEvdXNlci1pbmZvLmpzJztcclxuXHJcbmNsYXNzIFVzZXIge1xyXG4gICAgLy8gR0VUOiAnL2N1cnJlbnRVc2VySW5mb1JvdXRlJ1xyXG4gICAgc3RhdGljIGdldEN1cnJlbnRVc2VyKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICAgICAgcmVzLnNlbmQoJzxoMT5UaGlzIGlzIHRoZSBjdXJyZW50VXNlclJvdXRlIHNjcmVlbjwvaDE+Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUE9TVDogJy91c2VyL2NyZWF0ZSdcclxuICAgIHN0YXRpYyBjcmVhdGVVc2VyKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICAgICAgcmVzLnNlbmQoJzxoMT5Vc2VyIHdhcyBwcm9iYWJseSBjcmVhdGVkLjwvaDE+Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAnL3VzZXIvOnVzZXInXHJcbiAgICBzdGF0aWMgZ2V0VXNlckluZm8ocmVxLCByZXMsIG5leHQpIHtcclxuICAgICAgICB2YXIgdXNlckZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgdXNlcnMuZm9yRWFjaCgodXNlcikgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXEucGFyYW1zLnVzZXIgPT0gdXNlci51c2VybmFtZSl7XHJcbiAgICAgICAgICAgICAgICByZXMuanNvbih1c2VyKTtcclxuICAgICAgICAgICAgICAgIHVzZXJGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZighdXNlckZvdW5kKSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHttZXNzYWdlOiBgVXNlciAke3JlcS5wYXJhbXMudXNlcn0gbm90IGZvdW5kLmB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVXNlcjsiXX0=