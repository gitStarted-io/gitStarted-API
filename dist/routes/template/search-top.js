'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.searchTopRoute = undefined;

var _express = require('express');

var _templateInfo = require('./../../sample_data/template-info.js');

var searchTopRoute = (0, _express.Router)(); // /**
//  * Created by Jake Alsemgeest on 2016-05-14.
//  */
// var path = require('path');
// var express = require('express');
// var router = express.Router();

// // Sample data
// var topTemplates = require(path.resolve(__dirname, '../../sample_data/template-info.js')).templates;

// module.exports = (function() {

//     var router = express.Router();

//     router.get('/template/get/top', function(req, res, next) {
//     	// get templates in order of popularity from db
//     	// sort templates
//     	if(topTemplates)
//         	res.send(topTemplates);
//         else
//         	res.status(500).json({message: "Database error - unable to retrieve top templates"});
//     });

//     return router;
// })();

searchTopRoute.get('/template/get/top', function (req, res) {
    // get templates in order of popularity from db
    // sort templates
    if (_templateInfo.templates) res.send(_templateInfo.templates);else res.status(500).json({ message: "Database error - unable to retrieve top templates" });
});

exports.searchTopRoute = searchTopRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdGVtcGxhdGUvc2VhcmNoLXRvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBMEJBOztBQUdBOztBQUZBLElBQU0saUJBQWlCLHNCQUF2QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLGVBQWUsR0FBZixDQUFtQixtQkFBbkIsRUFBd0MsVUFBQyxHQUFELEVBQU0sR0FBTixFQUFjOzs7QUFHOUMsaUNBQ0ksSUFBSSxJQUFKLDBCQURKLEtBR0ksSUFBSSxNQUFKLENBQVcsR0FBWCxFQUFnQixJQUFoQixDQUFxQixFQUFDLFNBQVMsbURBQVYsRUFBckI7QUFDWCxDQVBEOztRQVNRLGMsR0FBQSxjIiwiZmlsZSI6InNlYXJjaC10b3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvKipcclxuLy8gICogQ3JlYXRlZCBieSBKYWtlIEFsc2VtZ2Vlc3Qgb24gMjAxNi0wNS0xNC5cclxuLy8gICovXHJcbi8vIHZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG4vLyB2YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxuLy8gdmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG4vLyAvLyBTYW1wbGUgZGF0YVxyXG4vLyB2YXIgdG9wVGVtcGxhdGVzID0gcmVxdWlyZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vc2FtcGxlX2RhdGEvdGVtcGxhdGUtaW5mby5qcycpKS50ZW1wbGF0ZXM7XHJcblxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcclxuXHJcbi8vICAgICB2YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbi8vICAgICByb3V0ZXIuZ2V0KCcvdGVtcGxhdGUvZ2V0L3RvcCcsIGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XHJcbi8vICAgICBcdC8vIGdldCB0ZW1wbGF0ZXMgaW4gb3JkZXIgb2YgcG9wdWxhcml0eSBmcm9tIGRiXHJcbi8vICAgICBcdC8vIHNvcnQgdGVtcGxhdGVzXHJcbi8vICAgICBcdGlmKHRvcFRlbXBsYXRlcylcclxuLy8gICAgICAgICBcdHJlcy5zZW5kKHRvcFRlbXBsYXRlcyk7XHJcbi8vICAgICAgICAgZWxzZVxyXG4vLyAgICAgICAgIFx0cmVzLnN0YXR1cyg1MDApLmpzb24oe21lc3NhZ2U6IFwiRGF0YWJhc2UgZXJyb3IgLSB1bmFibGUgdG8gcmV0cmlldmUgdG9wIHRlbXBsYXRlc1wifSk7XHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICByZXR1cm4gcm91dGVyO1xyXG4vLyB9KSgpO1xyXG5cclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2V4cHJlc3MnO1xyXG5jb25zdCBzZWFyY2hUb3BSb3V0ZSA9IFJvdXRlcigpO1xyXG5cclxuaW1wb3J0IHt0ZW1wbGF0ZXMgYXMgdG9wVGVtcGxhdGVzfSBmcm9tICcuLy4uLy4uL3NhbXBsZV9kYXRhL3RlbXBsYXRlLWluZm8uanMnO1xyXG5cclxuc2VhcmNoVG9wUm91dGUuZ2V0KCcvdGVtcGxhdGUvZ2V0L3RvcCcsIChyZXEsIHJlcykgPT4ge1xyXG4gICAgLy8gZ2V0IHRlbXBsYXRlcyBpbiBvcmRlciBvZiBwb3B1bGFyaXR5IGZyb20gZGJcclxuICAgICAgICAvLyBzb3J0IHRlbXBsYXRlc1xyXG4gICAgICAgIGlmKHRvcFRlbXBsYXRlcylcclxuICAgICAgICAgICAgcmVzLnNlbmQodG9wVGVtcGxhdGVzKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHttZXNzYWdlOiBcIkRhdGFiYXNlIGVycm9yIC0gdW5hYmxlIHRvIHJldHJpZXZlIHRvcCB0ZW1wbGF0ZXNcIn0pO1xyXG59KTtcclxuXHJcbmV4cG9ydCB7c2VhcmNoVG9wUm91dGV9OyJdfQ==