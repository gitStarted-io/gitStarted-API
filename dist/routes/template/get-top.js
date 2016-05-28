'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTopTemplatesRoute = undefined;

var _express = require('express');

var _templateInfo = require('./../../sample_data/template-info.js');

var getTopTemplatesRoute = (0, _express.Router)(); // /**
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

getTopTemplatesRoute.get('/template/get/top', function (req, res) {
    // get templates in order of popularity from db
    // sort templates
    if (_templateInfo.templates) res.send(_templateInfo.templates.sort(function (a, b) {
        return b.upvotes - a.upvotes;
    }));else res.status(500).json({ message: "Database error - unable to retrieve top templates" });
});

exports.getTopTemplatesRoute = getTopTemplatesRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdGVtcGxhdGUvZ2V0LXRvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBMEJBOztBQUdBOztBQUZBLElBQU0sdUJBQXVCLHNCQUE3QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLHFCQUFxQixHQUFyQixDQUF5QixtQkFBekIsRUFBOEMsVUFBQyxHQUFELEVBQU0sR0FBTixFQUFjOzs7QUFHcEQsaUNBQ0ksSUFBSSxJQUFKLENBQVMsd0JBQWEsSUFBYixDQUFrQixVQUFDLENBQUQsRUFBSSxDQUFKLEVBQVU7QUFDcEMsZUFBTyxFQUFFLE9BQUYsR0FBWSxFQUFFLE9BQXJCO0FBQ0EsS0FGUSxDQUFULEVBREosS0FLSSxJQUFJLE1BQUosQ0FBVyxHQUFYLEVBQWdCLElBQWhCLENBQXFCLEVBQUMsU0FBUyxtREFBVixFQUFyQjtBQUNYLENBVEQ7O1FBV1Esb0IsR0FBQSxvQiIsImZpbGUiOiJnZXQtdG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLyoqXHJcbi8vICAqIENyZWF0ZWQgYnkgSmFrZSBBbHNlbWdlZXN0IG9uIDIwMTYtMDUtMTQuXHJcbi8vICAqL1xyXG4vLyB2YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuLy8gdmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbi8vIHZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxuLy8gLy8gU2FtcGxlIGRhdGFcclxuLy8gdmFyIHRvcFRlbXBsYXRlcyA9IHJlcXVpcmUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uL3NhbXBsZV9kYXRhL3RlbXBsYXRlLWluZm8uanMnKSkudGVtcGxhdGVzO1xyXG5cclxuLy8gbW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4vLyAgICAgdmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG4vLyAgICAgcm91dGVyLmdldCgnL3RlbXBsYXRlL2dldC90b3AnLCBmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xyXG4vLyAgICAgXHQvLyBnZXQgdGVtcGxhdGVzIGluIG9yZGVyIG9mIHBvcHVsYXJpdHkgZnJvbSBkYlxyXG4vLyAgICAgXHQvLyBzb3J0IHRlbXBsYXRlc1xyXG4vLyAgICAgXHRpZih0b3BUZW1wbGF0ZXMpXHJcbi8vICAgICAgICAgXHRyZXMuc2VuZCh0b3BUZW1wbGF0ZXMpO1xyXG4vLyAgICAgICAgIGVsc2VcclxuLy8gICAgICAgICBcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHttZXNzYWdlOiBcIkRhdGFiYXNlIGVycm9yIC0gdW5hYmxlIHRvIHJldHJpZXZlIHRvcCB0ZW1wbGF0ZXNcIn0pO1xyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgcmV0dXJuIHJvdXRlcjtcclxuLy8gfSkoKTtcclxuXHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdleHByZXNzJztcclxuY29uc3QgZ2V0VG9wVGVtcGxhdGVzUm91dGUgPSBSb3V0ZXIoKTtcclxuXHJcbmltcG9ydCB7dGVtcGxhdGVzIGFzIHRvcFRlbXBsYXRlc30gZnJvbSAnLi8uLi8uLi9zYW1wbGVfZGF0YS90ZW1wbGF0ZS1pbmZvLmpzJztcclxuXHJcbmdldFRvcFRlbXBsYXRlc1JvdXRlLmdldCgnL3RlbXBsYXRlL2dldC90b3AnLCAocmVxLCByZXMpID0+IHtcclxuICAgIC8vIGdldCB0ZW1wbGF0ZXMgaW4gb3JkZXIgb2YgcG9wdWxhcml0eSBmcm9tIGRiXHJcbiAgICAgICAgLy8gc29ydCB0ZW1wbGF0ZXNcclxuICAgICAgICBpZih0b3BUZW1wbGF0ZXMpXHJcbiAgICAgICAgICAgIHJlcy5zZW5kKHRvcFRlbXBsYXRlcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIFx0cmV0dXJuIGIudXB2b3RlcyAtIGEudXB2b3RlcztcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe21lc3NhZ2U6IFwiRGF0YWJhc2UgZXJyb3IgLSB1bmFibGUgdG8gcmV0cmlldmUgdG9wIHRlbXBsYXRlc1wifSk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IHtnZXRUb3BUZW1wbGF0ZXNSb3V0ZX07Il19