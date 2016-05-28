"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Durzo on 5/28/2016.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _should = require("should");

var _should2 = _interopRequireDefault(_should);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserTests = function () {
    function UserTests() {
        _classCallCheck(this, UserTests);
    }

    _createClass(UserTests, null, [{
        key: "executeTests",
        value: function executeTests(opts, callback) {

            describe("GitStarted: User Tests", function () {

                this.timeout(10000);

                after(function () {
                    callback();
                });

                // '/user/:user'
                it("User Tests: Basic Search with Valid User", function (done) {

                    opts.agent.get(opts.API_ROOT + "/user/jalsemgeest").send().end(function (err, res) {
                        res.should.have.property("status").eql(200);
                        res.body.should.have.property("id");
                        res.body.should.have.property("username");
                        res.body.should.have.property("thumbnail");
                        res.body.should.have.property("templates");
                        done();
                    });
                });

                it("User Tests: Basic Search with invalid user", function (done) {
                    opts.agent.get(opts.API_ROOT + "/user/1").send().end(function (err, res) {
                        res.should.have.property("status").eql(404);
                        res.body.should.have.property("message").eql("User 1 not found.");
                        done();
                    });
                });
            });
        }
    }]);

    return UserTests;
}();

module.exports = UserTests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3QvdGVzdHMvdXNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQTs7Ozs7Ozs7SUFFTSxTOzs7Ozs7O3FDQUNrQixJLEVBQU0sUSxFQUFVOztBQUVoQyxxQkFBUyx3QkFBVCxFQUFtQyxZQUFXOztBQUUxQyxxQkFBSyxPQUFMLENBQWEsS0FBYjs7QUFFQSxzQkFBTSxZQUFNO0FBQ1I7QUFDSCxpQkFGRDs7O0FBS0EsbUJBQUcsMENBQUgsRUFBK0MsVUFBQyxJQUFELEVBQVU7O0FBRXJELHlCQUFLLEtBQUwsQ0FDSyxHQURMLENBQ1ksS0FBSyxRQURqQix3QkFFSyxJQUZMLEdBR0ssR0FITCxDQUdTLFVBQUMsR0FBRCxFQUFNLEdBQU4sRUFBYztBQUNmLDRCQUFJLE1BQUosQ0FBVyxJQUFYLENBQWdCLFFBQWhCLENBQXlCLFFBQXpCLEVBQW1DLEdBQW5DLENBQXVDLEdBQXZDO0FBQ0EsNEJBQUksSUFBSixDQUFTLE1BQVQsQ0FBZ0IsSUFBaEIsQ0FBcUIsUUFBckIsQ0FBOEIsSUFBOUI7QUFDQSw0QkFBSSxJQUFKLENBQVMsTUFBVCxDQUFnQixJQUFoQixDQUFxQixRQUFyQixDQUE4QixVQUE5QjtBQUNBLDRCQUFJLElBQUosQ0FBUyxNQUFULENBQWdCLElBQWhCLENBQXFCLFFBQXJCLENBQThCLFdBQTlCO0FBQ0EsNEJBQUksSUFBSixDQUFTLE1BQVQsQ0FBZ0IsSUFBaEIsQ0FBcUIsUUFBckIsQ0FBOEIsV0FBOUI7QUFDQTtBQUNILHFCQVZMO0FBV0gsaUJBYkQ7O0FBZUEsbUJBQUcsNENBQUgsRUFBaUQsVUFBQyxJQUFELEVBQVU7QUFDdkQseUJBQUssS0FBTCxDQUNLLEdBREwsQ0FDWSxLQUFLLFFBRGpCLGNBRUssSUFGTCxHQUdLLEdBSEwsQ0FHUyxVQUFDLEdBQUQsRUFBTSxHQUFOLEVBQWM7QUFDZiw0QkFBSSxNQUFKLENBQVcsSUFBWCxDQUFnQixRQUFoQixDQUF5QixRQUF6QixFQUFtQyxHQUFuQyxDQUF1QyxHQUF2QztBQUNBLDRCQUFJLElBQUosQ0FBUyxNQUFULENBQWdCLElBQWhCLENBQXFCLFFBQXJCLENBQThCLFNBQTlCLEVBQXlDLEdBQXpDLENBQTZDLG1CQUE3QztBQUNBO0FBQ0gscUJBUEw7QUFRSCxpQkFURDtBQVdILGFBbkNEO0FBcUNIOzs7Ozs7QUFHTCxPQUFPLE9BQVAsR0FBaUIsU0FBakIiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IER1cnpvIG9uIDUvMjgvMjAxNi5cclxuICovXHJcblxyXG5pbXBvcnQgc2hvdWxkIGZyb20gJ3Nob3VsZCc7XHJcblxyXG5jbGFzcyBVc2VyVGVzdHMge1xyXG4gICAgc3RhdGljIGV4ZWN1dGVUZXN0cyhvcHRzLCBjYWxsYmFjaykge1xyXG5cclxuICAgICAgICBkZXNjcmliZShcIkdpdFN0YXJ0ZWQ6IFVzZXIgVGVzdHNcIiwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQoMTAwMDApO1xyXG5cclxuICAgICAgICAgICAgYWZ0ZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAnL3VzZXIvOnVzZXInXHJcbiAgICAgICAgICAgIGl0KFwiVXNlciBUZXN0czogQmFzaWMgU2VhcmNoIHdpdGggVmFsaWQgVXNlclwiLCAoZG9uZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIG9wdHMuYWdlbnRcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0KGAke29wdHMuQVBJX1JPT1R9L3VzZXIvamFsc2VtZ2Vlc3RgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKClcclxuICAgICAgICAgICAgICAgICAgICAuZW5kKChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuc2hvdWxkLmhhdmUucHJvcGVydHkoXCJzdGF0dXNcIikuZXFsKDIwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5ib2R5LnNob3VsZC5oYXZlLnByb3BlcnR5KFwiaWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5ib2R5LnNob3VsZC5oYXZlLnByb3BlcnR5KFwidXNlcm5hbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5ib2R5LnNob3VsZC5oYXZlLnByb3BlcnR5KFwidGh1bWJuYWlsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuYm9keS5zaG91bGQuaGF2ZS5wcm9wZXJ0eShcInRlbXBsYXRlc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGl0KFwiVXNlciBUZXN0czogQmFzaWMgU2VhcmNoIHdpdGggaW52YWxpZCB1c2VyXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvcHRzLmFnZW50XHJcbiAgICAgICAgICAgICAgICAgICAgLmdldChgJHtvcHRzLkFQSV9ST09UfS91c2VyLzFgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKClcclxuICAgICAgICAgICAgICAgICAgICAuZW5kKChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuc2hvdWxkLmhhdmUucHJvcGVydHkoXCJzdGF0dXNcIikuZXFsKDQwNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5ib2R5LnNob3VsZC5oYXZlLnByb3BlcnR5KFwibWVzc2FnZVwiKS5lcWwoXCJVc2VyIDEgbm90IGZvdW5kLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJUZXN0czsiXX0=