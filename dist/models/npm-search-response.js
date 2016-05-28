"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Durzo on 5/26/2016.
 */

var NPMSearchResponse = function () {
    function NPMSearchResponse(response) {
        _classCallCheck(this, NPMSearchResponse);

        this.results = response.results.map(function (result) {
            return {
                name: result.name[0],
                description: result.description[0],
                version: result.version[0]
            };
        });
    }

    _createClass(NPMSearchResponse, [{
        key: "getResponse",
        value: function getResponse() {
            return this.results;
        }
    }]);

    return NPMSearchResponse;
}();

module.exports = NPMSearchResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvbnBtLXNlYXJjaC1yZXNwb25zZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBSU0saUI7QUFDRiwrQkFBWSxRQUFaLEVBQXNCO0FBQUE7O0FBQ2xCLGFBQUssT0FBTCxHQUFlLFNBQVMsT0FBVCxDQUFpQixHQUFqQixDQUFxQixVQUFDLE1BQUQsRUFBWTtBQUM1QyxtQkFBTztBQUNILHNCQUFNLE9BQU8sSUFBUCxDQUFZLENBQVosQ0FESDtBQUVILDZCQUFhLE9BQU8sV0FBUCxDQUFtQixDQUFuQixDQUZWO0FBR0gseUJBQVMsT0FBTyxPQUFQLENBQWUsQ0FBZjtBQUhOLGFBQVA7QUFLSCxTQU5jLENBQWY7QUFPSDs7OztzQ0FFYTtBQUNWLG1CQUFPLEtBQUssT0FBWjtBQUNIOzs7Ozs7QUFHTCxPQUFPLE9BQVAsR0FBaUIsaUJBQWpCIiwiZmlsZSI6Im5wbS1zZWFyY2gtcmVzcG9uc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBEdXJ6byBvbiA1LzI2LzIwMTYuXHJcbiAqL1xyXG5cclxuY2xhc3MgTlBNU2VhcmNoUmVzcG9uc2Uge1xyXG4gICAgY29uc3RydWN0b3IocmVzcG9uc2UpIHtcclxuICAgICAgICB0aGlzLnJlc3VsdHMgPSByZXNwb25zZS5yZXN1bHRzLm1hcCgocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiByZXN1bHQubmFtZVswXSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZXN1bHQuZGVzY3JpcHRpb25bMF0sXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiByZXN1bHQudmVyc2lvblswXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlc3BvbnNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdHM7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTlBNU2VhcmNoUmVzcG9uc2U7Il19