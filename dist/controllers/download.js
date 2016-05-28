'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Durzo on 5/28/2016.
 */

var Download = function () {
    function Download() {
        _classCallCheck(this, Download);
    }

    _createClass(Download, null, [{
        key: 'download',

        // GET: '/download'
        value: function download(req, res, next) {
            res.send('<h1>downloadRoute GitStarted</h1>');
        }
    }]);

    return Download;
}();

module.exports = Download;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9kb3dubG9hZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBSU0sUTs7Ozs7Ozs7O2lDQUVjLEcsRUFBSyxHLEVBQUssSSxFQUFNO0FBQzVCLGdCQUFJLElBQUosQ0FBUyxtQ0FBVDtBQUNIOzs7Ozs7QUFHTCxPQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoiZG93bmxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBEdXJ6byBvbiA1LzI4LzIwMTYuXHJcbiAqL1xyXG5cclxuY2xhc3MgRG93bmxvYWQge1xyXG4gICAgLy8gR0VUOiAnL2Rvd25sb2FkJ1xyXG4gICAgc3RhdGljIGRvd25sb2FkKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICAgICAgcmVzLnNlbmQoJzxoMT5kb3dubG9hZFJvdXRlIEdpdFN0YXJ0ZWQ8L2gxPicpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERvd25sb2FkOyJdfQ==