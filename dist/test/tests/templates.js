"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Durzo on 5/28/2016.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _should = require("should");

var _should2 = _interopRequireDefault(_should);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TemplateTests = function () {
    function TemplateTests() {
        _classCallCheck(this, TemplateTests);
    }

    _createClass(TemplateTests, null, [{
        key: "executeTests",
        value: function executeTests(opts, callback) {

            describe("GitStarted: Templates", function () {

                this.timeout(10000);

                after(function () {
                    callback();
                });

                // '/template/comment/
                it("Templates: Get Comments for Template", function (done) {

                    opts.agent.get(opts.API_ROOT + "/template/comment/1").send().end(function (err, res) {
                        res.should.have.property("status").eql(200);
                        res.body.should.have.property("templateId").eql(1);
                        res.body.should.have.property("numberOfCommments");
                        res.body.comments.forEach(function (comment) {
                            comment.should.have.property("templateId");
                            comment.should.have.property("comment");
                            comment.should.have.property("id");
                            comment.should.have.property("userId");
                            comment.should.have.property("username");
                            comment.should.have.property("time");
                        });
                        done();
                    });
                });

                // '/template/search/:term'
                it("Templates: Search Term", function (done) {

                    opts.agent.get(opts.API_ROOT + "/template/search/gitstarted").send().end(function (err, res) {
                        res.should.have.property("status").eql(200);
                        res.body.should.have.property("searchResults");
                        res.body.searchResults.forEach(function (result) {
                            result.should.have.property("score");
                            result.should.have.property("name");
                        });
                        done();
                    });
                });

                // '/template/get/top'
                it("Templates: Get Top Templates", function (done) {
                    opts.agent.get(opts.API_ROOT + "/template/get/top").send().end(function (err, res) {
                        res.should.have.property("status").eql(200);
                        res.body.forEach(function (result) {
                            result.should.have.property("templateId");
                            result.should.have.property("templateName");
                            result.should.have.property("description");
                            result.should.have.property("tags");
                            result.should.have.property("version");
                            result.should.have.property("upvotes");
                            result.should.have.property("downvotes");
                            result.should.have.property("author");
                        });
                        done();
                    });
                });

                // '/template/:template/download'
                it("Templates: Download Template", function (done) {

                    opts.agent.get(opts.API_ROOT + "/template/gitstarted/download").send().end(function (err, res) {
                        res.should.have.property("status").eql(200);

                        done();
                    });
                });

                // '/template/:templateId'
                it("Templates: Search Template By Id", function (done) {

                    opts.agent.get(opts.API_ROOT + "/template/1").send().end(function (err, res) {
                        res.should.have.property("status").eql(200);
                        res.body.should.have.property("templateId");
                        res.body.should.have.property("templateName");
                        res.body.should.have.property("description");
                        res.body.should.have.property("tags");
                        res.body.should.have.property("version");
                        res.body.should.have.property("upvotes");
                        res.body.should.have.property("downvotes");
                        res.body.should.have.property("author");
                        done();
                    });
                });
            });
        }
    }]);

    return TemplateTests;
}();

module.exports = TemplateTests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3QvdGVzdHMvdGVtcGxhdGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBOzs7Ozs7OztJQUVNLGE7Ozs7Ozs7cUNBQ2tCLEksRUFBTSxRLEVBQVU7O0FBRWhDLHFCQUFTLHVCQUFULEVBQWtDLFlBQVc7O0FBRXpDLHFCQUFLLE9BQUwsQ0FBYSxLQUFiOztBQUVBLHNCQUFNLFlBQU07QUFDUjtBQUNILGlCQUZEOzs7QUFLQSxtQkFBRyxzQ0FBSCxFQUEyQyxVQUFDLElBQUQsRUFBVTs7QUFFakQseUJBQUssS0FBTCxDQUNLLEdBREwsQ0FDWSxLQUFLLFFBRGpCLDBCQUVLLElBRkwsR0FHSyxHQUhMLENBR1MsVUFBQyxHQUFELEVBQU0sR0FBTixFQUFjO0FBQ2YsNEJBQUksTUFBSixDQUFXLElBQVgsQ0FBZ0IsUUFBaEIsQ0FBeUIsUUFBekIsRUFBbUMsR0FBbkMsQ0FBdUMsR0FBdkM7QUFDQSw0QkFBSSxJQUFKLENBQVMsTUFBVCxDQUFnQixJQUFoQixDQUFxQixRQUFyQixDQUE4QixZQUE5QixFQUE0QyxHQUE1QyxDQUFnRCxDQUFoRDtBQUNBLDRCQUFJLElBQUosQ0FBUyxNQUFULENBQWdCLElBQWhCLENBQXFCLFFBQXJCLENBQThCLG1CQUE5QjtBQUNBLDRCQUFJLElBQUosQ0FBUyxRQUFULENBQWtCLE9BQWxCLENBQTBCLFVBQUMsT0FBRCxFQUFhO0FBQ25DLG9DQUFRLE1BQVIsQ0FBZSxJQUFmLENBQW9CLFFBQXBCLENBQTZCLFlBQTdCO0FBQ0Esb0NBQVEsTUFBUixDQUFlLElBQWYsQ0FBb0IsUUFBcEIsQ0FBNkIsU0FBN0I7QUFDQSxvQ0FBUSxNQUFSLENBQWUsSUFBZixDQUFvQixRQUFwQixDQUE2QixJQUE3QjtBQUNBLG9DQUFRLE1BQVIsQ0FBZSxJQUFmLENBQW9CLFFBQXBCLENBQTZCLFFBQTdCO0FBQ0Esb0NBQVEsTUFBUixDQUFlLElBQWYsQ0FBb0IsUUFBcEIsQ0FBNkIsVUFBN0I7QUFDQSxv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Q0FBcUIsUUFBckIsQ0FBOEIsY0FBOUI7QUFDQSw0QkFBSSxJQUFKLENBQVMsTUFBVCxDQUFnQixJQUFoQixDQUFxQixRQUFyQixDQUE4QixhQUE5QjtBQUNBLDRCQUFJLElBQUosQ0FBUyxNQUFULENBQWdCLElBQWhCLENBQXFCLFFBQXJCLENBQThCLE1BQTlCO0FBQ0EsNEJBQUksSUFBSixDQUFTLE1BQVQsQ0FBZ0IsSUFBaEIsQ0FBcUIsUUFBckIsQ0FBOEIsU0FBOUI7QUFDQSw0QkFBSSxJQUFKLENBQVMsTUFBVCxDQUFnQixJQUFoQixDQUFxQixRQUFyQixDQUE4QixTQUE5QjtBQUNBLDRCQUFJLElBQUosQ0FBUyxNQUFULENBQWdCLElBQWhCLENBQXFCLFFBQXJCLENBQThCLFdBQTlCO0FBQ0EsNEJBQUksSUFBSixDQUFTLE1BQVQsQ0FBZ0IsSUFBaEIsQ0FBcUIsUUFBckIsQ0FBOEIsUUFBOUI7QUFDQTtBQUNILHFCQWRMO0FBZUgsaUJBakJEO0FBa0JILGFBckdEO0FBdUdIOzs7Ozs7QUFHTCxPQUFPLE9BQVAsR0FBaUIsYUFBakIiLCJmaWxlIjoidGVtcGxhdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRHVyem8gb24gNS8yOC8yMDE2LlxyXG4gKi9cclxuXHJcbmltcG9ydCBzaG91bGQgZnJvbSAnc2hvdWxkJztcclxuXHJcbmNsYXNzIFRlbXBsYXRlVGVzdHMge1xyXG4gICAgc3RhdGljIGV4ZWN1dGVUZXN0cyhvcHRzLCBjYWxsYmFjaykge1xyXG5cclxuICAgICAgICBkZXNjcmliZShcIkdpdFN0YXJ0ZWQ6IFRlbXBsYXRlc1wiLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGltZW91dCgxMDAwMCk7XHJcblxyXG4gICAgICAgICAgICBhZnRlcigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vICcvdGVtcGxhdGUvY29tbWVudC9cclxuICAgICAgICAgICAgaXQoXCJUZW1wbGF0ZXM6IEdldCBDb21tZW50cyBmb3IgVGVtcGxhdGVcIiwgKGRvbmUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBvcHRzLmFnZW50XHJcbiAgICAgICAgICAgICAgICAgICAgLmdldChgJHtvcHRzLkFQSV9ST09UfS90ZW1wbGF0ZS9jb21tZW50LzFgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKClcclxuICAgICAgICAgICAgICAgICAgICAuZW5kKChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuc2hvdWxkLmhhdmUucHJvcGVydHkoXCJzdGF0dXNcIikuZXFsKDIwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5ib2R5LnNob3VsZC5oYXZlLnByb3BlcnR5KFwidGVtcGxhdGVJZFwiKS5lcWwoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5ib2R5LnNob3VsZC5oYXZlLnByb3BlcnR5KFwibnVtYmVyT2ZDb21tbWVudHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5ib2R5LmNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQuc2hvdWxkLmhhdmUucHJvcGVydHkoXCJ0ZW1wbGF0ZUlkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudC5zaG91bGQuaGF2ZS5wcm9wZXJ0eShcImNvbW1lbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LnNob3VsZC5oYXZlLnByb3BlcnR5KFwiaWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50LnNob3VsZC5oYXZlLnByb3BlcnR5KFwidXNlcklkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudC5zaG91bGQuaGF2ZS5wcm9wZXJ0eShcInVzZXJuYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudC5zaG91bGQuaGF2ZS5wcm9wZXJ0eShcInRpbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gJy90ZW1wbGF0ZS9zZWFyY2gvOnRlcm0nXHJcbiAgICAgICAgICAgIGl0KFwiVGVtcGxhdGVzOiBTZWFyY2ggVGVybVwiLCAoZG9uZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIG9wdHMuYWdlbnRcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0KGAke29wdHMuQVBJX1JPT1R9L3RlbXBsYXRlL3NlYXJjaC9naXRzdGFydGVkYClcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNob3VsZC5oYXZlLnByb3BlcnR5KFwic3RhdHVzXCIpLmVxbCgyMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuYm9keS5zaG91bGQuaGF2ZS5wcm9wZXJ0eShcInNlYXJjaFJlc3VsdHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5ib2R5LnNlYXJjaFJlc3VsdHMuZm9yRWFjaCgocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc2hvdWxkLmhhdmUucHJvcGVydHkoXCJzY29yZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zaG91bGQuaGF2ZS5wcm9wZXJ0eShcIm5hbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vICcvdGVtcGxhdGUvZ2V0L3RvcCdcclxuICAgICAgICAgICAgaXQoXCJUZW1wbGF0ZXM6IEdldCBUb3AgVGVtcGxhdGVzXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvcHRzLmFnZW50XHJcbiAgICAgICAgICAgICAgICAgICAgLmdldChgJHtvcHRzLkFQSV9ST09UfS90ZW1wbGF0ZS9nZXQvdG9wYClcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNob3VsZC5oYXZlLnByb3BlcnR5KFwic3RhdHVzXCIpLmVxbCgyMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuYm9keS5mb3JFYWNoKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zaG91bGQuaGF2ZS5wcm9wZXJ0eShcInRlbXBsYXRlSWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc2hvdWxkLmhhdmUucHJvcGVydHkoXCJ0ZW1wbGF0ZU5hbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc2hvdWxkLmhhdmUucHJvcGVydHkoXCJkZXNjcmlwdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zaG91bGQuaGF2ZS5wcm9wZXJ0eShcInRhZ3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc2hvdWxkLmhhdmUucHJvcGVydHkoXCJ2ZXJzaW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnNob3VsZC5oYXZlLnByb3BlcnR5KFwidXB2b3Rlc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zaG91bGQuaGF2ZS5wcm9wZXJ0eShcImRvd252b3Rlc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zaG91bGQuaGF2ZS5wcm9wZXJ0eShcImF1dGhvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAnL3RlbXBsYXRlLzp0ZW1wbGF0ZS9kb3dubG9hZCdcclxuICAgICAgICAgICAgaXQoXCJUZW1wbGF0ZXM6IERvd25sb2FkIFRlbXBsYXRlXCIsIChkb25lKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgb3B0cy5hZ2VudFxyXG4gICAgICAgICAgICAgICAgICAgIC5nZXQoYCR7b3B0cy5BUElfUk9PVH0vdGVtcGxhdGUvZ2l0c3RhcnRlZC9kb3dubG9hZGApXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5lbmQoKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zaG91bGQuaGF2ZS5wcm9wZXJ0eShcInN0YXR1c1wiKS5lcWwoMjAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAnL3RlbXBsYXRlLzp0ZW1wbGF0ZUlkJ1xyXG4gICAgICAgICAgICBpdChcIlRlbXBsYXRlczogU2VhcmNoIFRlbXBsYXRlIEJ5IElkXCIsIChkb25lKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgb3B0cy5hZ2VudFxyXG4gICAgICAgICAgICAgICAgICAgIC5nZXQoYCR7b3B0cy5BUElfUk9PVH0vdGVtcGxhdGUvMWApXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5lbmQoKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zaG91bGQuaGF2ZS5wcm9wZXJ0eShcInN0YXR1c1wiKS5lcWwoMjAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmJvZHkuc2hvdWxkLmhhdmUucHJvcGVydHkoXCJ0ZW1wbGF0ZUlkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuYm9keS5zaG91bGQuaGF2ZS5wcm9wZXJ0eShcInRlbXBsYXRlTmFtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmJvZHkuc2hvdWxkLmhhdmUucHJvcGVydHkoXCJkZXNjcmlwdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmJvZHkuc2hvdWxkLmhhdmUucHJvcGVydHkoXCJ0YWdzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuYm9keS5zaG91bGQuaGF2ZS5wcm9wZXJ0eShcInZlcnNpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5ib2R5LnNob3VsZC5oYXZlLnByb3BlcnR5KFwidXB2b3Rlc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmJvZHkuc2hvdWxkLmhhdmUucHJvcGVydHkoXCJkb3dudm90ZXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5ib2R5LnNob3VsZC5oYXZlLnByb3BlcnR5KFwiYXV0aG9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUZW1wbGF0ZVRlc3RzOyJdfQ==