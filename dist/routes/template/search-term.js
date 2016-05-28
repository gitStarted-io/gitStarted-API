'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.searchTemplatesRoute = undefined;

var _express = require('express');

var _templateInfo = require('./../../sample_data/template-info.js');

var searchTemplatesRoute = (0, _express.Router)();

var notFound = { message: 'This search produced no results.' };

searchTemplatesRoute.get('/template/search/:terms', function (req, res) {
    var pointsPruned = [];
    var pointsSorted = [];
    var searchTerms = req.params.terms.split(' ');

    // Increase efficiency
    var points = _templateInfo.templates.map(function (template) {
        for (var i in searchTerms) {
            var regex = new RegExp(searchTerms[i]);
            var matchArray = template.templateName.match(regex);
            var matchPoints = 0;
            if (matchArray) {
                if (matchArray[0] === template.templateName)
                    // check if perfect macth with templateName +100
                    return { score: 100, name: template.templateName };else {
                    // check if imperfect match with templateName +expression
                    matchPoints += Math.round(100 * matchArray[0].length / template.templateName.length);
                }
            }
            for (var j in template.tags) {
                matchArray = null;
                matchArray = template.tags[j].match(regex);
                // check if match with any tags +15 each
                if (matchArray) matchPoints += 15;
            }
            if (matchPoints !== 0) {
                return matchPoints > 100 ? {
                    score: 100,
                    name: template.templateName
                } : {
                    score: matchPoints,
                    template: {
                        templateName: template.templateName,
                        author: template.author,
                        tags: template.tags
                    }
                };
            } else return '';
        }
    });

    points.forEach(function (pointObject) {
        if (pointObject !== '') pointsPruned.push(pointObject);
    });

    pointsPruned.sort(function (a, b) {
        return b.score - a.score;
    });

    res.json({ searchResults: pointsPruned });
});

exports.searchTemplatesRoute = searchTemplatesRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdGVtcGxhdGUvc2VhcmNoLXRlcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUZBLElBQU0sdUJBQXVCLHNCQUE3Qjs7QUFJQSxJQUFNLFdBQVcsRUFBQyxTQUFTLGtDQUFWLEVBQWpCOztBQUVBLHFCQUFxQixHQUFyQixDQUF5Qix5QkFBekIsRUFBb0QsVUFBQyxHQUFELEVBQU0sR0FBTixFQUFjO0FBQzlELFFBQUksZUFBZSxFQUFuQjtBQUNBLFFBQUksZUFBZSxFQUFuQjtBQUNBLFFBQUksY0FBYyxJQUFJLE1BQUosQ0FBVyxLQUFYLENBQWlCLEtBQWpCLENBQXVCLEdBQXZCLENBQWxCOzs7QUFHQyxRQUFJLFNBQVMsd0JBQVUsR0FBVixDQUFjLFVBQUMsUUFBRCxFQUFjO0FBQ3JDLGFBQUksSUFBSSxDQUFSLElBQWEsV0FBYixFQUEwQjtBQUN0QixnQkFBSSxRQUFRLElBQUksTUFBSixDQUFXLFlBQVksQ0FBWixDQUFYLENBQVo7QUFDQSxnQkFBSSxhQUFhLFNBQVMsWUFBVCxDQUFzQixLQUF0QixDQUE0QixLQUE1QixDQUFqQjtBQUNBLGdCQUFJLGNBQWMsQ0FBbEI7QUFDQSxnQkFBRyxVQUFILEVBQWU7QUFDWCxvQkFBRyxXQUFXLENBQVgsTUFBa0IsU0FBUyxZQUE5Qjs7QUFFSSwyQkFBTyxFQUFDLE9BQU8sR0FBUixFQUFhLE1BQU0sU0FBUyxZQUE1QixFQUFQLENBRkosS0FHSzs7QUFFRCxtQ0FBZSxLQUFLLEtBQUwsQ0FBVyxNQUFNLFdBQVcsQ0FBWCxFQUFjLE1BQXBCLEdBQTZCLFNBQVMsWUFBVCxDQUFzQixNQUE5RCxDQUFmO0FBQ0g7QUFDSjtBQUNELGlCQUFJLElBQUksQ0FBUixJQUFhLFNBQVMsSUFBdEIsRUFBNEI7QUFDeEIsNkJBQWEsSUFBYjtBQUNBLDZCQUFhLFNBQVMsSUFBVCxDQUFjLENBQWQsRUFBaUIsS0FBakIsQ0FBdUIsS0FBdkIsQ0FBYjs7QUFFQSxvQkFBRyxVQUFILEVBQ0ksZUFBZSxFQUFmO0FBQ1A7QUFDRixnQkFBRyxnQkFBZ0IsQ0FBbkIsRUFBc0I7QUFDbEIsdUJBQU8sY0FBYyxHQUFkLEdBQ0Q7QUFDRSwyQkFBTyxHQURUO0FBRUUsMEJBQU0sU0FBUztBQUZqQixpQkFEQyxHQUlDO0FBQ0EsMkJBQU8sV0FEUDtBQUVBLDhCQUFVO0FBQ04sc0NBQWMsU0FBUyxZQURqQjtBQUVOLGdDQUFRLFNBQVMsTUFGWDtBQUdOLDhCQUFNLFNBQVM7QUFIVDtBQUZWLGlCQUpSO0FBWUgsYUFiRCxNQWVJLE9BQU8sRUFBUDtBQUNOO0FBQ0osS0F0Q1ksQ0FBYjs7QUF3Q0QsV0FBTyxPQUFQLENBQWUsVUFBQyxXQUFELEVBQWlCO0FBQzVCLFlBQUcsZ0JBQWdCLEVBQW5CLEVBQ0ksYUFBYSxJQUFiLENBQWtCLFdBQWxCO0FBQ1AsS0FIRDs7QUFLQSxpQkFBYSxJQUFiLENBQWtCLFVBQUMsQ0FBRCxFQUFJLENBQUosRUFBVTtBQUN4QixlQUFPLEVBQUUsS0FBRixHQUFVLEVBQUUsS0FBbkI7QUFDSCxLQUZEOztBQUlBLFFBQUksSUFBSixDQUFTLEVBQUMsZUFBZSxZQUFoQixFQUFUO0FBQ0gsQ0F4REQ7O1FBMERRLG9CLEdBQUEsb0IiLCJmaWxlIjoic2VhcmNoLXRlcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlcn0gZnJvbSAnZXhwcmVzcyc7XHJcbmNvbnN0IHNlYXJjaFRlbXBsYXRlc1JvdXRlID0gUm91dGVyKCk7XHJcblxyXG5pbXBvcnQge3RlbXBsYXRlc30gZnJvbSAnLi8uLi8uLi9zYW1wbGVfZGF0YS90ZW1wbGF0ZS1pbmZvLmpzJztcclxuXHJcbmNvbnN0IG5vdEZvdW5kID0ge21lc3NhZ2U6ICdUaGlzIHNlYXJjaCBwcm9kdWNlZCBubyByZXN1bHRzLid9O1xyXG5cclxuc2VhcmNoVGVtcGxhdGVzUm91dGUuZ2V0KCcvdGVtcGxhdGUvc2VhcmNoLzp0ZXJtcycsIChyZXEsIHJlcykgPT4ge1xyXG4gICAgbGV0IHBvaW50c1BydW5lZCA9IFtdO1xyXG4gICAgbGV0IHBvaW50c1NvcnRlZCA9IFtdO1xyXG4gICAgbGV0IHNlYXJjaFRlcm1zID0gcmVxLnBhcmFtcy50ZXJtcy5zcGxpdCgnICcpO1xyXG4gICAgICAgIFxyXG4gICAgIC8vIEluY3JlYXNlIGVmZmljaWVuY3lcclxuICAgICBsZXQgcG9pbnRzID0gdGVtcGxhdGVzLm1hcCgodGVtcGxhdGUpID0+IHtcclxuICAgICAgICAgZm9yKGxldCBpIGluIHNlYXJjaFRlcm1zKSB7XHJcbiAgICAgICAgICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHNlYXJjaFRlcm1zW2ldKTtcclxuICAgICAgICAgICAgIGxldCBtYXRjaEFycmF5ID0gdGVtcGxhdGUudGVtcGxhdGVOYW1lLm1hdGNoKHJlZ2V4KTtcclxuICAgICAgICAgICAgIGxldCBtYXRjaFBvaW50cyA9IDA7XHJcbiAgICAgICAgICAgICBpZihtYXRjaEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgaWYobWF0Y2hBcnJheVswXSA9PT0gdGVtcGxhdGUudGVtcGxhdGVOYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBwZXJmZWN0IG1hY3RoIHdpdGggdGVtcGxhdGVOYW1lICsxMDBcclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtzY29yZTogMTAwLCBuYW1lOiB0ZW1wbGF0ZS50ZW1wbGF0ZU5hbWV9O1xyXG4gICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBpbXBlcmZlY3QgbWF0Y2ggd2l0aCB0ZW1wbGF0ZU5hbWUgK2V4cHJlc3Npb25cclxuICAgICAgICAgICAgICAgICAgICAgbWF0Y2hQb2ludHMgKz0gTWF0aC5yb3VuZCgxMDAgKiBtYXRjaEFycmF5WzBdLmxlbmd0aCAvIHRlbXBsYXRlLnRlbXBsYXRlTmFtZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGZvcihsZXQgaiBpbiB0ZW1wbGF0ZS50YWdzKSB7XHJcbiAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheSA9IHRlbXBsYXRlLnRhZ3Nbal0ubWF0Y2gocmVnZXgpO1xyXG4gICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIG1hdGNoIHdpdGggYW55IHRhZ3MgKzE1IGVhY2hcclxuICAgICAgICAgICAgICAgICBpZihtYXRjaEFycmF5KVxyXG4gICAgICAgICAgICAgICAgICAgICBtYXRjaFBvaW50cyArPSAxNTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYobWF0Y2hQb2ludHMgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaFBvaW50cyA+IDEwMCBcclxuICAgICAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGVtcGxhdGUudGVtcGxhdGVOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU6IG1hdGNoUG9pbnRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVOYW1lOiB0ZW1wbGF0ZS50ZW1wbGF0ZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I6IHRlbXBsYXRlLmF1dGhvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M6IHRlbXBsYXRlLnRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICB9ICAgICAgICAgICBcclxuICAgICB9KTtcclxuXHJcbiAgICBwb2ludHMuZm9yRWFjaCgocG9pbnRPYmplY3QpID0+IHtcclxuICAgICAgICBpZihwb2ludE9iamVjdCAhPT0gJycpXHJcbiAgICAgICAgICAgIHBvaW50c1BydW5lZC5wdXNoKHBvaW50T2JqZWN0KTtcclxuICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgcG9pbnRzUHJ1bmVkLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICByZXR1cm4gYi5zY29yZSAtIGEuc2NvcmU7XHJcbiAgICB9KTtcclxuICAgICAgICBcclxuICAgIHJlcy5qc29uKHtzZWFyY2hSZXN1bHRzOiBwb2ludHNQcnVuZWR9KTtcclxufSk7XHJcblxyXG5leHBvcnQge3NlYXJjaFRlbXBsYXRlc1JvdXRlfTsiXX0=