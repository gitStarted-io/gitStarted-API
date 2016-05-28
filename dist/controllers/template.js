'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Durzo on 5/28/2016.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _templateInfo = require('../sample_data/template-info');

var _templateComments = require('../sample_data/template-comments');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MESSAGES = {
    TEMPLATE_COMMENTS_NOT_FOUND: { message: "No comments found for template or there exists no template with that id." },
    TEMPLATE_NOT_FOUND: { message: "Not Found" }
};

var Template = function () {
    function Template() {
        _classCallCheck(this, Template);
    }

    _createClass(Template, null, [{
        key: 'getTop',

        // GET: '/template/get/top'
        value: function getTop(req, res, next) {
            // sort templates
            if (_templateInfo.templates) res.status(200).send(_templateInfo.templates.sort(function (a, b) {
                return b.upvotes - a.upvotes;
            }));else {
                res.status(500).json({ message: "Database error - unable to retrieve top templates" });
            }
        }

        // GET: '/template/search/:term'

    }, {
        key: 'searchTerm',
        value: function searchTerm(req, res, next) {
            var pointsPruned = [];
            var pointsSorted = [];
            var searchTerms = req.params.term.split(' ');

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

            res.status(200).json({ searchResults: pointsPruned });
        }

        // GET: '/template/comment/:templateId'

    }, {
        key: 'templateComments',
        value: function templateComments(req, res, next) {
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
                res.status(200).json({
                    templateId: templateId,
                    numberOfCommments: numberOfCommments,
                    comments: commentsToSend
                });
            } else {
                res.status(404).json(MESSAGES.TEMPLATE_COMMENTS_NOT_FOUND);
            }
        }

        // GET: '/template/:template/download'

    }, {
        key: 'templateDownload',
        value: function templateDownload(req, res, next) {
            res.status(200).send(_templateInfo.templates[0]);
        }

        // GET: '/template/:templateId'

    }, {
        key: 'templateInfo',
        value: function templateInfo(req, res, next) {
            var templateToSend = null;

            _templateInfo.templates.forEach(function (template) {
                if (template.templateId === parseInt(req.params.templateId)) templateToSend = template;
            });

            if (templateToSend) res.status(200).send(templateToSend);else res.status(404).json(MESSAGES.TEMPLATE_NOT_FOUND);
        }
    }]);

    return Template;
}();

module.exports = Template;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQTs7QUFDQTs7OztBQUVBLElBQU0sV0FBVztBQUNiLGlDQUE2QixFQUFDLFNBQVMsMEVBQVYsRUFEaEI7QUFFYix3QkFBb0IsRUFBQyxTQUFTLFdBQVY7QUFGUCxDQUFqQjs7SUFLTSxROzs7Ozs7Ozs7K0JBRVksRyxFQUFLLEcsRUFBSyxJLEVBQU07O0FBRTFCLHlDQUNJLElBQUksTUFBSixDQUFXLEdBQVgsRUFBZ0IsSUFBaEIsQ0FBcUIsd0JBQWEsSUFBYixDQUFrQixVQUFDLENBQUQsRUFBSSxDQUFKLEVBQVU7QUFDN0MsdUJBQU8sRUFBRSxPQUFGLEdBQVksRUFBRSxPQUFyQjtBQUNILGFBRm9CLENBQXJCLEVBREosS0FJSztBQUNELG9CQUFJLE1BQUosQ0FBVyxHQUFYLEVBQWdCLElBQWhCLENBQXFCLEVBQUMsU0FBUyxtREFBVixFQUFyQjtBQUNIO0FBQ0o7Ozs7OzttQ0FHaUIsRyxFQUFLLEcsRUFBSyxJLEVBQU07QUFDOUIsZ0JBQUksZUFBZSxFQUFuQjtBQUNBLGdCQUFJLGVBQWUsRUFBbkI7QUFDQSxnQkFBSSxjQUFjLElBQUksTUFBSixDQUFXLElBQVgsQ0FBZ0IsS0FBaEIsQ0FBc0IsR0FBdEIsQ0FBbEI7OztBQUdBLGdCQUFJLFNBQVMsd0JBQWEsR0FBYixDQUFpQixVQUFDLFFBQUQsRUFBYztBQUN4QyxxQkFBSSxJQUFJLENBQVIsSUFBYSxXQUFiLEVBQTBCO0FBQ3RCLHdCQUFJLFFBQVEsSUFBSSxNQUFKLENBQVcsWUFBWSxDQUFaLENBQVgsQ0FBWjtBQUNBLHdCQUFJLGFBQWEsU0FBUyxZQUFULENBQXNCLEtBQXRCLENBQTRCLEtBQTVCLENBQWpCO0FBQ0Esd0JBQUksY0FBYyxDQUFsQjtBQUNBLHdCQUFHLFVBQUgsRUFBZTtBQUNYLDRCQUFHLFdBQVcsQ0FBWCxNQUFrQixTQUFTLFlBQTlCOztBQUVJLG1DQUFP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c0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRHVyem8gb24gNS8yOC8yMDE2LlxyXG4gKi9cclxuXHJcbmltcG9ydCB7dGVtcGxhdGVzIGFzIHRvcFRlbXBsYXRlc30gZnJvbSAnLi4vc2FtcGxlX2RhdGEvdGVtcGxhdGUtaW5mbyc7XHJcbmltcG9ydCB7Y29tbWVudHN9IGZyb20gJy4uL3NhbXBsZV9kYXRhL3RlbXBsYXRlLWNvbW1lbnRzJztcclxuXHJcbmNvbnN0IE1FU1NBR0VTID0ge1xyXG4gICAgVEVNUExBVEVfQ09NTUVOVFNfTk9UX0ZPVU5EOiB7bWVzc2FnZTogXCJObyBjb21tZW50cyBmb3VuZCBmb3IgdGVtcGxhdGUgb3IgdGhlcmUgZXhpc3RzIG5vIHRlbXBsYXRlIHdpdGggdGhhdCBpZC5cIn0sXHJcbiAgICBURU1QTEFURV9OT1RfRk9VTkQ6IHttZXNzYWdlOiBcIk5vdCBGb3VuZFwifVxyXG59XHJcblxyXG5jbGFzcyBUZW1wbGF0ZSB7XHJcbiAgICAvLyBHRVQ6ICcvdGVtcGxhdGUvZ2V0L3RvcCdcclxuICAgIHN0YXRpYyBnZXRUb3AocmVxLCByZXMsIG5leHQpIHtcclxuICAgICAgICAvLyBzb3J0IHRlbXBsYXRlc1xyXG4gICAgICAgIGlmKHRvcFRlbXBsYXRlcylcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQodG9wVGVtcGxhdGVzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiLnVwdm90ZXMgLSBhLnVwdm90ZXM7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe21lc3NhZ2U6IFwiRGF0YWJhc2UgZXJyb3IgLSB1bmFibGUgdG8gcmV0cmlldmUgdG9wIHRlbXBsYXRlc1wifSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVDogJy90ZW1wbGF0ZS9zZWFyY2gvOnRlcm0nXHJcbiAgICBzdGF0aWMgc2VhcmNoVGVybShyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIGxldCBwb2ludHNQcnVuZWQgPSBbXTtcclxuICAgICAgICBsZXQgcG9pbnRzU29ydGVkID0gW107XHJcbiAgICAgICAgbGV0IHNlYXJjaFRlcm1zID0gcmVxLnBhcmFtcy50ZXJtLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgICAgIC8vIEluY3JlYXNlIGVmZmljaWVuY3lcclxuICAgICAgICBsZXQgcG9pbnRzID0gdG9wVGVtcGxhdGVzLm1hcCgodGVtcGxhdGUpID0+IHtcclxuICAgICAgICAgICAgZm9yKGxldCBpIGluIHNlYXJjaFRlcm1zKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHNlYXJjaFRlcm1zW2ldKTtcclxuICAgICAgICAgICAgICAgIGxldCBtYXRjaEFycmF5ID0gdGVtcGxhdGUudGVtcGxhdGVOYW1lLm1hdGNoKHJlZ2V4KTtcclxuICAgICAgICAgICAgICAgIGxldCBtYXRjaFBvaW50cyA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZihtYXRjaEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWF0Y2hBcnJheVswXSA9PT0gdGVtcGxhdGUudGVtcGxhdGVOYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHBlcmZlY3QgbWFjdGggd2l0aCB0ZW1wbGF0ZU5hbWUgKzEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge3Njb3JlOiAxMDAsIG5hbWU6IHRlbXBsYXRlLnRlbXBsYXRlTmFtZX07XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGltcGVyZmVjdCBtYXRjaCB3aXRoIHRlbXBsYXRlTmFtZSArZXhwcmVzc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFBvaW50cyArPSBNYXRoLnJvdW5kKDEwMCAqIG1hdGNoQXJyYXlbMF0ubGVuZ3RoIC8gdGVtcGxhdGUudGVtcGxhdGVOYW1lLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqIGluIHRlbXBsYXRlLnRhZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5ID0gdGVtcGxhdGUudGFnc1tqXS5tYXRjaChyZWdleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgbWF0Y2ggd2l0aCBhbnkgdGFncyArMTUgZWFjaFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoQXJyYXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoUG9pbnRzICs9IDE1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYobWF0Y2hQb2ludHMgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hQb2ludHMgPiAxMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBsYXRlLnRlbXBsYXRlTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0gOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlOiBtYXRjaFBvaW50cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlTmFtZTogdGVtcGxhdGUudGVtcGxhdGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiB0ZW1wbGF0ZS5hdXRob3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiB0ZW1wbGF0ZS50YWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwb2ludHMuZm9yRWFjaCgocG9pbnRPYmplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYocG9pbnRPYmplY3QgIT09ICcnKVxyXG4gICAgICAgICAgICAgICAgcG9pbnRzUHJ1bmVkLnB1c2gocG9pbnRPYmplY3QpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwb2ludHNQcnVuZWQuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYi5zY29yZSAtIGEuc2NvcmU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtzZWFyY2hSZXN1bHRzOiBwb2ludHNQcnVuZWR9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRVQ6ICcvdGVtcGxhdGUvY29tbWVudC86dGVtcGxhdGVJZCdcclxuICAgIHN0YXRpYyB0ZW1wbGF0ZUNvbW1lbnRzKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGVJZCA9IHBhcnNlSW50KHJlcS5wYXJhbXMudGVtcGxhdGVJZCk7XHJcbiAgICAgICAgbGV0IG51bWJlck9mQ29tbW1lbnRzID0gMDtcclxuICAgICAgICBsZXQgY29tbWVudHNUb1NlbmQgPSBbXTtcclxuXHJcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZihjb21tZW50LnRlbXBsYXRlSWQgPT09IHRlbXBsYXRlSWQpIHtcclxuICAgICAgICAgICAgICAgIG51bWJlck9mQ29tbW1lbnRzICs9IDE7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50c1RvU2VuZC5wdXNoKGNvbW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKGNvbW1lbnRzVG9TZW5kLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUlkOiB0ZW1wbGF0ZUlkLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZDb21tbWVudHM6IG51bWJlck9mQ29tbW1lbnRzLFxyXG4gICAgICAgICAgICAgICAgY29tbWVudHM6IGNvbW1lbnRzVG9TZW5kXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKE1FU1NBR0VTLlRFTVBMQVRFX0NPTU1FTlRTX05PVF9GT1VORCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFVDogJy90ZW1wbGF0ZS86dGVtcGxhdGUvZG93bmxvYWQnXHJcbiAgICBzdGF0aWMgdGVtcGxhdGVEb3dubG9hZChyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHRvcFRlbXBsYXRlc1swXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VUOiAnL3RlbXBsYXRlLzp0ZW1wbGF0ZUlkJ1xyXG4gICAgc3RhdGljIHRlbXBsYXRlSW5mbyhyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZVRvU2VuZCA9IG51bGw7XHJcblxyXG4gICAgICAgIHRvcFRlbXBsYXRlcy5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZih0ZW1wbGF0ZS50ZW1wbGF0ZUlkID09PSBwYXJzZUludChyZXEucGFyYW1zLnRlbXBsYXRlSWQpKVxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVUb1NlbmQgPSB0ZW1wbGF0ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYodGVtcGxhdGVUb1NlbmQpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHRlbXBsYXRlVG9TZW5kKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKE1FU1NBR0VTLlRFTVBMQVRFX05PVF9GT1VORCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVGVtcGxhdGU7Il19