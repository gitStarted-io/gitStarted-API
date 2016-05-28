'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./routes/index');

Object.keys(_index).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index[key];
    }
  });
});

var _searchTerm = require('./routes/template/search-term');

Object.keys(_searchTerm).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _searchTerm[key];
    }
  });
});

var _getTop = require('./routes/template/get-top');

Object.keys(_getTop).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getTop[key];
    }
  });
});

var _templateComments = require('./routes/template/template-comments');

Object.keys(_templateComments).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _templateComments[key];
    }
  });
});

var _templateDownload = require('./routes/template/template-download');

Object.keys(_templateDownload).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _templateDownload[key];
    }
  });
});

var _templateInfo = require('./routes/template/template-info');

Object.keys(_templateInfo).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _templateInfo[key];
    }
  });
});

var _user = require('./routes/user/user');

Object.keys(_user).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _user[key];
    }
  });
});

var _userCreate = require('./routes/user/user-create');

Object.keys(_userCreate).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _userCreate[key];
    }
  });
});

var _userInfo = require('./routes/user/user-info');

Object.keys(_userInfo).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _userInfo[key];
    }
  });
});

var _download = require('./routes/download');

Object.keys(_download).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _download[key];
    }
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3V0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUF1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG4vLyBpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuLy8gY29uc3Qgcm91dGVzID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3JvdXRlcycpO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm91dGVNYW5hZ2VyKGFwcCkge1xyXG5cclxuLy8gXHQvLyBKdXN0IHRvIGNoZWNrIGlmIGl0J3MgYWxpdmUuXHJcbi8vIFx0YXBwLmdldCgnLycsIHJlcXVpcmUocm91dGVzICsgJy9pbmRleC5qcycpKTtcclxuXHJcbi8vIFx0Ly8gR0VUIFJFUVVFU1RTXHJcbi8vIFx0YXBwLmdldCgnL3RlbXBsYXRlL2NvbW1lbnQvOnRlbXBsYXRlSWQnLCByZXF1aXJlKHJvdXRlcyArICcvdGVtcGxhdGUvdGVtcGxhdGUtY29tbWVudHMuanMnKSk7XHJcbi8vIFx0YXBwLmdldCgnL3RlbXBsYXRlL3NlYXJjaC86dGVybScsIHJlcXVpcmUocm91dGVzICsgJy90ZW1wbGF0ZS9zZWFyY2gtdGVybS5qcycpKTtcclxuLy8gXHRhcHAuZ2V0KCcvdGVtcGxhdGUvZ2V0L3RvcCcsIHJlcXVpcmUocm91dGVzICsgJy90ZW1wbGF0ZS9zZWFyY2gtdG9wLmpzJykpO1xyXG4vLyBcdGFwcC5nZXQoJy90ZW1wbGF0ZS86dGVtcGxhdGUvZG93bmxvYWQnLCByZXF1aXJlKHJvdXRlcyArICcvdGVtcGxhdGUvdGVtcGxhdGUtZG93bmxvYWQuanMnKSk7XHJcbi8vIFx0YXBwLmdldCgnL3RlbXBsYXRlLzp0ZW1wbGF0ZScsIHJlcXVpcmUocm91dGVzICsgJy90ZW1wbGF0ZS90ZW1wbGF0ZS1pbmZvLmpzJykpO1xyXG4vLyBcdGFwcC5nZXQoJy9kb3dubG9hZCcsIHJlcXVpcmUocm91dGVzICsgJy9kb3dubG9hZC5qcycpKTtcclxuLy8gXHRhcHAuZ2V0KCcvdXNlci86dXNlcicsIHJlcXVpcmUocm91dGVzICsnL3VzZXIvdXNlci1pbmZvLmpzJykpO1xyXG5cclxuLy8gXHQvLyBQT1NUIFJFUVVFU1RTXHJcbi8vIFx0YXBwLnBvc3QoJy91c2VyL2NyZWF0ZScsIHJlcXVpcmUocm91dGVzICsgJy91c2VyL3VzZXItY3JlYXRlLmpzJykpO1xyXG5cclxuLy8gfTtcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vcm91dGVzL2luZGV4J1xyXG5leHBvcnQgKiBmcm9tICcuL3JvdXRlcy90ZW1wbGF0ZS9zZWFyY2gtdGVybSdcclxuZXhwb3J0ICogZnJvbSAnLi9yb3V0ZXMvdGVtcGxhdGUvZ2V0LXRvcCdcclxuZXhwb3J0ICogZnJvbSAnLi9yb3V0ZXMvdGVtcGxhdGUvdGVtcGxhdGUtY29tbWVudHMnXHJcbmV4cG9ydCAqIGZyb20gJy4vcm91dGVzL3RlbXBsYXRlL3RlbXBsYXRlLWRvd25sb2FkJ1xyXG5leHBvcnQgKiBmcm9tICcuL3JvdXRlcy90ZW1wbGF0ZS90ZW1wbGF0ZS1pbmZvJ1xyXG5leHBvcnQgKiBmcm9tICcuL3JvdXRlcy91c2VyL3VzZXInXHJcbmV4cG9ydCAqIGZyb20gJy4vcm91dGVzL3VzZXIvdXNlci1jcmVhdGUnXHJcbmV4cG9ydCAqIGZyb20gJy4vcm91dGVzL3VzZXIvdXNlci1pbmZvJ1xyXG5leHBvcnQgKiBmcm9tICcuL3JvdXRlcy9kb3dubG9hZCdcclxuIl19