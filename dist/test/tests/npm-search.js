"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Durzo on 5/28/2016.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _should = require("should");

var _should2 = _interopRequireDefault(_should);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NPMSearchTests = function () {
    function NPMSearchTests() {
        _classCallCheck(this, NPMSearchTests);
    }

    _createClass(NPMSearchTests, null, [{
        key: "executeTests",
        value: function executeTests(opts, callback) {

            describe("GitStarted: NPM-Search", function () {

                this.timeout(10000);

                after(function () {
                    callback();
                });

                it("NPM-Search: Basic Search", function (done) {

                    opts.agent.get(opts.API_ROOT + "/npmsearch/express").send().end(function (err, res) {
                        res.should.have.property("status").eql(200);
                        res.body[0].should.have.property("name");
                        done();
                    });
                });
            });
        }
    }]);

    return NPMSearchTests;
}();

module.exports = NPMSearchTests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3QvdGVzdHMvbnBtLXNlYXJjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQTs7Ozs7Ozs7SUFFTSxjOzs7Ozs7O3FDQUNrQixJLEVBQU0sUSxFQUFVOztBQUVoQyxxQkFBUyx3QkFBVCxFQUFtQyxZQUFXOztBQUUxQyxxQkFBSyxPQUFMLENBQWEsS0FBYjs7QUFFQSxzQkFBTSxZQUFNO0FBQ1I7QUFDSCxpQkFGRDs7QUFJQSxtQkFBRywwQkFBSCxFQUErQixVQUFDLElBQUQsRUFBVTs7QUFFckMseUJBQUssS0FBTCxDQUNLLEdBREwsQ0FDWSxLQUFLLFFBRGpCLHlCQUVLLElBRkwsR0FHSyxHQUhMLENBR1MsVUFBQyxHQUFELEVBQU0sR0FBTixFQUFjO0FBQ2YsNEJBQUksTUFBSixDQUFXLElBQVgsQ0FBZ0IsUUFBaEIsQ0FBeUIsUUFBekIsRUFBbUMsR0FBbkMsQ0FBdUMsR0FBdkM7QUFDQSw0QkFBSSxJQUFKLENBQVMsQ0FBVCxFQUFZLE1BQVosQ0FBbUIsSUFBbkIsQ0FBd0IsUUFBeEIsQ0FBaUMsTUFBakM7QUFDQTtBQUNILHFCQVBMO0FBUUgsaUJBVkQ7QUFZSCxhQXBCRDtBQXNCSDs7Ozs7O0FBR0wsT0FBTyxPQUFQLEdBQWlCLGNBQWpCIiwiZmlsZSI6Im5wbS1zZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBEdXJ6byBvbiA1LzI4LzIwMTYuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHNob3VsZCBmcm9tICdzaG91bGQnO1xyXG5cclxuY2xhc3MgTlBNU2VhcmNoVGVzdHMge1xyXG4gICAgc3RhdGljIGV4ZWN1dGVUZXN0cyhvcHRzLCBjYWxsYmFjaykge1xyXG5cclxuICAgICAgICBkZXNjcmliZShcIkdpdFN0YXJ0ZWQ6IE5QTS1TZWFyY2hcIiwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQoMTAwMDApO1xyXG5cclxuICAgICAgICAgICAgYWZ0ZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpdChcIk5QTS1TZWFyY2g6IEJhc2ljIFNlYXJjaFwiLCAoZG9uZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIG9wdHMuYWdlbnRcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0KGAke29wdHMuQVBJX1JPT1R9L25wbXNlYXJjaC9leHByZXNzYClcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNob3VsZC5oYXZlLnByb3BlcnR5KFwic3RhdHVzXCIpLmVxbCgyMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuYm9keVswXS5zaG91bGQuaGF2ZS5wcm9wZXJ0eShcIm5hbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBOUE1TZWFyY2hUZXN0czsiXX0=