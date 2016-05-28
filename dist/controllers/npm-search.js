"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Durzo on 5/26/2016.
 */

var path = require("path");
var request = require("request");
var NPMResults = require("../models/npm-search-response");

var ENDPOINTS = {
    NPM_SEARCH: "http://npmsearch.com/query"
};

var NPMSearch = function () {
    function NPMSearch() {
        _classCallCheck(this, NPMSearch);
    }

    _createClass(NPMSearch, null, [{
        key: "getResults",
        value: function getResults(req, res, next) {

            if (!req.params.term) {
                res.status(400).send("Invalid request.");
                return;
            } else {

                var url = ENDPOINTS.NPM_SEARCH + "?q=" + generateQuery(req.params.term) + "&fields=name,version,description";

                var options = {
                    url: url,
                    json: true
                };

                request.get(options, function (err, response, body) {
                    if (err) {
                        res.status(response.statusCode).send(err);
                        return;
                    } else {
                        if (response.statusCode === 200) {
                            var results = new NPMResults(body);
                            res.send(results.getResponse());
                            return;
                        } else {
                            res.status(response.statusCode).send("Npm Search invalid.");
                            return;
                        }
                    }
                });
            }
        }
    }]);

    return NPMSearch;
}();

function generateQuery(str) {
    return str.split(" ").join(",");
}

module.exports = NPMSearch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9ucG0tc2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSxJQUFNLE9BQU8sUUFBUSxNQUFSLENBQWI7QUFDQSxJQUFNLFVBQVUsUUFBUSxTQUFSLENBQWhCO0FBQ0EsSUFBTSxhQUFhLFFBQVEsK0JBQVIsQ0FBbkI7O0FBRUEsSUFBTSxZQUFZO0FBQ2QsZ0JBQVk7QUFERSxDQUFsQjs7SUFJTSxTOzs7Ozs7O21DQUVnQixHLEVBQUssRyxFQUFLLEksRUFBTTs7QUFFOUIsZ0JBQUksQ0FBQyxJQUFJLE1BQUosQ0FBVyxJQUFoQixFQUFzQjtBQUNsQixvQkFBSSxNQUFKLENBQVcsR0FBWCxFQUFnQixJQUFoQixDQUFxQixrQkFBckI7QUFDQTtBQUNILGFBSEQsTUFHTzs7QUFFSCxvQkFBTSxNQUFTLFVBQVUsVUFBbkIsV0FBbUMsY0FBYyxJQUFJLE1BQUosQ0FBVyxJQUF6QixDQUFuQyxxQ0FBTjs7QUFFQSxvQkFBSSxVQUFVO0FBQ1YseUJBQUssR0FESztBQUVWLDBCQUFLO0FBRkssaUJBQWQ7O0FBS0Esd0JBQVEsR0FBUixDQUFZLE9BQVosRUFBcUIsVUFBQyxHQUFELEVBQU0sUUFBTixFQUFnQixJQUFoQixFQUF5QjtBQUMxQyx3QkFBSSxHQUFKLEVBQVM7QUFDTCw0QkFBSSxNQUFKLENBQVcsU0FBUyxVQUFwQixFQUFnQyxJQUFoQyxDQUFxQyxHQUFyQztBQUNBO0FBQ0gscUJBSEQsTUFHTztBQUNILDRCQUFJLFNBQVMsVUFBVCxLQUF3QixHQUE1QixFQUFpQztBQUM3QixnQ0FBSSxVQUFVLElBQUksVUFBSixDQUFlLElBQWYsQ0FBZDtBQUNBLGdDQUFJLElBQUosQ0FBUyxRQUFRLFdBQVIsRUFBVDtBQUNBO0FBQ0gseUJBSkQsTUFJTztBQUNILGdDQUFJLE1BQUosQ0FBVyxTQUFTLFVBQXBCLEVBQWdDLElBQWhDLENBQXFDLHFCQUFyQztBQUNBO0FBQ0g7QUFDSjtBQUNKLGlCQWREO0FBZUg7QUFDSjs7Ozs7O0FBR0wsU0FBUyxhQUFULENBQXVCLEdBQXZCLEVBQTRCO0FBQ3hCLFdBQU8sSUFBSSxLQUFKLENBQVUsR0FBVixFQUFlLElBQWYsQ0FBb0IsR0FBcEIsQ0FBUDtBQUNIOztBQUVELE9BQU8sT0FBUCxHQUFpQixTQUFqQiIsImZpbGUiOiJucG0tc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRHVyem8gb24gNS8yNi8yMDE2LlxyXG4gKi9cclxuXHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcclxuY29uc3QgcmVxdWVzdCA9IHJlcXVpcmUoXCJyZXF1ZXN0XCIpO1xyXG5jb25zdCBOUE1SZXN1bHRzID0gcmVxdWlyZShcIi4uL21vZGVscy9ucG0tc2VhcmNoLXJlc3BvbnNlXCIpO1xyXG5cclxuY29uc3QgRU5EUE9JTlRTID0ge1xyXG4gICAgTlBNX1NFQVJDSDogXCJodHRwOi8vbnBtc2VhcmNoLmNvbS9xdWVyeVwiXHJcbn07XHJcblxyXG5jbGFzcyBOUE1TZWFyY2gge1xyXG5cclxuICAgIHN0YXRpYyBnZXRSZXN1bHRzKHJlcSwgcmVzLCBuZXh0KSB7XHJcblxyXG4gICAgICAgIGlmICghcmVxLnBhcmFtcy50ZXJtKSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKFwiSW52YWxpZCByZXF1ZXN0LlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHtFTkRQT0lOVFMuTlBNX1NFQVJDSH0/cT0ke2dlbmVyYXRlUXVlcnkocmVxLnBhcmFtcy50ZXJtKX0mZmllbGRzPW5hbWUsdmVyc2lvbixkZXNjcmlwdGlvbmA7XHJcblxyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAganNvbjp0cnVlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0LmdldChvcHRpb25zLCAoZXJyLCByZXNwb25zZSwgYm9keSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzQ29kZSkuc2VuZChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0cyA9IG5ldyBOUE1SZXN1bHRzKGJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuc2VuZChyZXN1bHRzLmdldFJlc3BvbnNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXNDb2RlKS5zZW5kKFwiTnBtIFNlYXJjaCBpbnZhbGlkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVF1ZXJ5KHN0cikge1xyXG4gICAgcmV0dXJuIHN0ci5zcGxpdChcIiBcIikuam9pbihcIixcIik7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTlBNU2VhcmNoOyJdfQ==