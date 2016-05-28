'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.templateCommmentsRoute = undefined;

var _express = require('express');

var _templateComments = require('./../../sample_data/template-comments');

var templateCommmentsRoute = (0, _express.Router)();

var notFoundMessage = { message: "No comments found for template or there exists no template with that id." };

templateCommmentsRoute.get('/template/comment/:templateId', function (req, res) {
    var templateId = parseInt(req.params.templateId);
    var numberOfCommments = 0;
    var commentsToSend = [];

    _templateComments.comments.forEach(function (comment) {
        if (comment.templateId === templateId) {
            numberOfCommments += 1;
            commentsToSend.push(comment);
        }
    });

    if (commentsToSend.length !== 0) {
        res.json({
            templateId: templateId,
            numberOfCommments: numberOfCommments,
            comments: commentsToSend
        });
    } else res.status(404).json(notFoundMessage);
});

exports.templateCommmentsRoute = templateCommmentsRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdGVtcGxhdGUvdGVtcGxhdGUtY29tbWVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUZBLElBQU0seUJBQXlCLHNCQUEvQjs7QUFJQSxJQUFNLGtCQUFrQixFQUFDLFNBQVMsMEVBQVYsRUFBeEI7O0FBRUEsdUJBQXVCLEdBQXZCLENBQTJCLCtCQUEzQixFQUE0RCxVQUFDLEdBQUQsRUFBTSxHQUFOLEVBQWM7QUFDdEUsUUFBTSxhQUFhLFNBQVMsSUFBSSxNQUFKLENBQVcsVUFBcEIsQ0FBbkI7QUFDQSxRQUFJLG9CQUFvQixDQUF4QjtBQUNBLFFBQUksaUJBQWlCLEVBQXJCOztBQUVBLCtCQUFTLE9BQVQsQ0FBaUIsVUFBQyxPQUFELEVBQWE7QUFDMUIsWUFBRyxRQUFRLFVBQVIsS0FBdUIsVUFBMUIsRUFBc0M7QUFDbEMsaUNBQXFCLENBQXJCO0FBQ0EsMkJBQWUsSUFBZixDQUFvQixPQUFwQjtBQUNIO0FBQ0osS0FMRDs7QUFPQSxRQUFHLGVBQWUsTUFBZixLQUEwQixDQUE3QixFQUFnQztBQUM1QixZQUFJLElBQUosQ0FBUztBQUNMLHdCQUFZLFVBRFA7QUFFTCwrQkFBbUIsaUJBRmQ7QUFHTCxzQkFBVTtBQUhMLFNBQVQ7QUFLSCxLQU5ELE1BT0ksSUFBSSxNQUFKLENBQVcsR0FBWCxFQUFnQixJQUFoQixDQUFxQixlQUFyQjtBQUNQLENBcEJEOztRQXNCUSxzQixHQUFBLHNCIiwiZmlsZSI6InRlbXBsYXRlLWNvbW1lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2V4cHJlc3MnO1xyXG5jb25zdCB0ZW1wbGF0ZUNvbW1tZW50c1JvdXRlID0gUm91dGVyKCk7XHJcblxyXG5pbXBvcnQge2NvbW1lbnRzfSBmcm9tICcuLy4uLy4uL3NhbXBsZV9kYXRhL3RlbXBsYXRlLWNvbW1lbnRzJztcclxuXHJcbmNvbnN0IG5vdEZvdW5kTWVzc2FnZSA9IHttZXNzYWdlOiBcIk5vIGNvbW1lbnRzIGZvdW5kIGZvciB0ZW1wbGF0ZSBvciB0aGVyZSBleGlzdHMgbm8gdGVtcGxhdGUgd2l0aCB0aGF0IGlkLlwifTtcclxuXHJcbnRlbXBsYXRlQ29tbW1lbnRzUm91dGUuZ2V0KCcvdGVtcGxhdGUvY29tbWVudC86dGVtcGxhdGVJZCcsIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgdGVtcGxhdGVJZCA9IHBhcnNlSW50KHJlcS5wYXJhbXMudGVtcGxhdGVJZCk7XHJcbiAgICBsZXQgbnVtYmVyT2ZDb21tbWVudHMgPSAwO1xyXG4gICAgbGV0IGNvbW1lbnRzVG9TZW5kID0gW107XHJcblxyXG4gICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgICAgIGlmKGNvbW1lbnQudGVtcGxhdGVJZCA9PT0gdGVtcGxhdGVJZCkge1xyXG4gICAgICAgICAgICBudW1iZXJPZkNvbW1tZW50cyArPSAxO1xyXG4gICAgICAgICAgICBjb21tZW50c1RvU2VuZC5wdXNoKGNvbW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmKGNvbW1lbnRzVG9TZW5kLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgdGVtcGxhdGVJZDogdGVtcGxhdGVJZCxcclxuICAgICAgICAgICAgbnVtYmVyT2ZDb21tbWVudHM6IG51bWJlck9mQ29tbW1lbnRzLFxyXG4gICAgICAgICAgICBjb21tZW50czogY29tbWVudHNUb1NlbmRcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbihub3RGb3VuZE1lc3NhZ2UpXHJcbn0pO1xyXG5cclxuZXhwb3J0IHt0ZW1wbGF0ZUNvbW1tZW50c1JvdXRlfTsiXX0=