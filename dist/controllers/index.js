'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Durzo on 5/28/2016.
 */

var Index = function () {
    function Index() {
        _classCallCheck(this, Index);
    }

    _createClass(Index, null, [{
        key: 'showWorking',
        value: function showWorking(req, res, next) {
            res.send('<h1>Dis works doe!</h1>');
        }
    }]);

    return Index;
}();

module.exports = Index;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBSU0sSzs7Ozs7OztvQ0FDaUIsRyxFQUFLLEcsRUFBSyxJLEVBQU07QUFDL0IsZ0JBQUksSUFBSixDQUFTLHlCQUFUO0FBQ0g7Ozs7OztBQUdMLE9BQU8sT0FBUCxHQUFpQixLQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IER1cnpvIG9uIDUvMjgvMjAxNi5cclxuICovXHJcblxyXG5jbGFzcyBJbmRleCB7XHJcbiAgICBzdGF0aWMgc2hvd1dvcmtpbmcocmVxLCByZXMsIG5leHQpIHtcclxuICAgICAgICByZXMuc2VuZCgnPGgxPkRpcyB3b3JrcyBkb2UhPC9oMT4nKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBJbmRleDsiXX0=