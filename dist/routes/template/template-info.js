'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.templateInfoRoute = undefined;

var _express = require('express');

var _templateInfo = require('./../../sample_data/template-info');

var templateInfoRoute = (0, _express.Router)(); /**
                                                 * Created by Jake Alsemgeest on 2016-05-14.
                                                 */
// var path = require('path');
// var express = require('express');
// var router = express.Router();

// // Sample data
// var templates = require(path.resolve(__dirname, '../../sample_data/template-info.js')).templates;

// var notFound = {message: "Not Found"};

// module.exports = (function() {

//     var router = express.Router();

//     router.get('/template/:template', function(req, res, next) {
//         // query database
//         console.log(templates.length);
//         for(var i in templates) {
//         	if(req.params.template === templates[i].templateName) {
// 	        	// If parameter is valid, send template info
// 	        	res.json(templates[i]);
// 	        }
//         }
//         res.status(404).json(notFound);

//     });

//     return router;
// })();

var templateToSend = void 0;
var notFound = { message: "Not Found" };

templateInfoRoute.get('/template/:templateId', function (req, res) {
    _templateInfo.templates.forEach(function (template) {
        if (template.templateId === parseInt(req.params.templateId)) templateToSend = template;
    });

    if (templateToSend) res.send(templateToSend);else res.status(404).json(notFound);
});

exports.templateInfoRoute = templateInfoRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdGVtcGxhdGUvdGVtcGxhdGUtaW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBZ0NBOztBQUdBOztBQUZBLElBQU0sb0JBQW9CLHNCQUExQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLElBQUksdUJBQUo7QUFDQSxJQUFJLFdBQVcsRUFBQyxTQUFTLFdBQVYsRUFBZjs7QUFFQSxrQkFBa0IsR0FBbEIsQ0FBc0IsdUJBQXRCLEVBQStDLFVBQUMsR0FBRCxFQUFNLEdBQU4sRUFBYztBQUN6RCw0QkFBVSxPQUFWLENBQWtCLFVBQUMsUUFBRCxFQUFjO0FBQzVCLFlBQUcsU0FBUyxVQUFULEtBQXdCLFNBQVMsSUFBSSxNQUFKLENBQVcsVUFBcEIsQ0FBM0IsRUFDSSxpQkFBaUIsUUFBakI7QUFDUCxLQUhEOztBQUtBLFFBQUcsY0FBSCxFQUNJLElBQUksSUFBSixDQUFTLGNBQVQsRUFESixLQUdJLElBQUksTUFBSixDQUFXLEdBQVgsRUFBZ0IsSUFBaEIsQ0FBcUIsUUFBckI7QUFDUCxDQVZEOztRQVlRLGlCLEdBQUEsaUIiLCJmaWxlIjoidGVtcGxhdGUtaW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEpha2UgQWxzZW1nZWVzdCBvbiAyMDE2LTA1LTE0LlxyXG4gKi9cclxuLy8gdmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcbi8vIHZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xyXG4vLyB2YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbi8vIC8vIFNhbXBsZSBkYXRhXHJcbi8vIHZhciB0ZW1wbGF0ZXMgPSByZXF1aXJlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9zYW1wbGVfZGF0YS90ZW1wbGF0ZS1pbmZvLmpzJykpLnRlbXBsYXRlcztcclxuXHJcbi8vIHZhciBub3RGb3VuZCA9IHttZXNzYWdlOiBcIk5vdCBGb3VuZFwifTtcclxuXHJcbi8vIG1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuLy8gICAgIHZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxuLy8gICAgIHJvdXRlci5nZXQoJy90ZW1wbGF0ZS86dGVtcGxhdGUnLCBmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xyXG4vLyAgICAgICAgIC8vIHF1ZXJ5IGRhdGFiYXNlXHJcbi8vICAgICAgICAgY29uc29sZS5sb2codGVtcGxhdGVzLmxlbmd0aCk7XHJcbi8vICAgICAgICAgZm9yKHZhciBpIGluIHRlbXBsYXRlcykge1xyXG4vLyAgICAgICAgIFx0aWYocmVxLnBhcmFtcy50ZW1wbGF0ZSA9PT0gdGVtcGxhdGVzW2ldLnRlbXBsYXRlTmFtZSkge1xyXG4vLyBcdCAgICAgICAgXHQvLyBJZiBwYXJhbWV0ZXIgaXMgdmFsaWQsIHNlbmQgdGVtcGxhdGUgaW5mb1xyXG4vLyBcdCAgICAgICAgXHRyZXMuanNvbih0ZW1wbGF0ZXNbaV0pO1xyXG4vLyBcdCAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbihub3RGb3VuZCk7XHJcbiAgICAgICAgXHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICByZXR1cm4gcm91dGVyO1xyXG4vLyB9KSgpO1xyXG5cclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2V4cHJlc3MnO1xyXG5jb25zdCB0ZW1wbGF0ZUluZm9Sb3V0ZSA9IFJvdXRlcigpO1xyXG5cclxuaW1wb3J0IHt0ZW1wbGF0ZXN9IGZyb20gJy4vLi4vLi4vc2FtcGxlX2RhdGEvdGVtcGxhdGUtaW5mbyc7XHJcblxyXG5sZXQgdGVtcGxhdGVUb1NlbmQ7XHJcbmxldCBub3RGb3VuZCA9IHttZXNzYWdlOiBcIk5vdCBGb3VuZFwifTtcclxuXHJcbnRlbXBsYXRlSW5mb1JvdXRlLmdldCgnL3RlbXBsYXRlLzp0ZW1wbGF0ZUlkJywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICB0ZW1wbGF0ZXMuZm9yRWFjaCgodGVtcGxhdGUpID0+IHtcclxuICAgICAgICBpZih0ZW1wbGF0ZS50ZW1wbGF0ZUlkID09PSBwYXJzZUludChyZXEucGFyYW1zLnRlbXBsYXRlSWQpKVxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVRvU2VuZCA9IHRlbXBsYXRlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYodGVtcGxhdGVUb1NlbmQpXHJcbiAgICAgICAgcmVzLnNlbmQodGVtcGxhdGVUb1NlbmQpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKG5vdEZvdW5kKTtcclxufSk7XHJcblxyXG5leHBvcnQge3RlbXBsYXRlSW5mb1JvdXRlfTsiXX0=