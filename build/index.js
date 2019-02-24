"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _globby = require("globby");

var _globby2 = _interopRequireDefault(_globby);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //Route controller

exports.default = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(routesPath) {
        var routesPathResolve, router;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        routesPathResolve = _path2.default.join(process.cwd(), routesPath);
                        router = _express2.default.Router();
                        _context.next = 4;
                        return (0, _globby2.default)([routesPathResolve + "/*.js", routesPathResolve + "/**/*.js"]).then(function (paths) {
                            paths.forEach(function (routePath) {
                                var routeRequest = require(_path2.default.resolve(routePath));

                                if (typeof routeRequest == "function") routeRequest(router);else if (typeof routeRequest.default == "function") routeRequest.default(router);
                            });

                            return true;
                        });

                    case 4:
                        return _context.abrupt("return", router);

                    case 5:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();
//# sourceMappingURL=index.js.map