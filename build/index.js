// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
// This is a specialised implementation of a System module loader.
"use strict"; // @ts-nocheck

/* eslint-disable */

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOT_IMPLEMENTED = exports.INTERNAL_SERVER_ERROR = exports.CONFLICT = exports.NOT_FOUND = exports.FORBIDDEN = exports.UNAUTHORIZED = exports.BAD_REQUEST = exports.MOVED_PERMANENTLY = exports.NO_CONTENT = exports.CREATED = exports.OK = exports.filterResponse = exports.filterBody = exports.filterStatus = exports.post = exports.del = exports.patch = exports.put = exports.get = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var System, _instantiate;

(function () {
  var r = new Map();
  System = {
    register: function register(id, d, f) {
      r.set(id, {
        d: d,
        f: f,
        exp: {}
      });
    }
  };

  function dI(_x, _x2) {
    return _dI.apply(this, arguments);
  }

  function _dI() {
    _dI = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(mid, src) {
      var id, _id$split$reverse, _id$split$reverse2, o, ia, _src$split$reverse, _src$split$reverse2, sa, oa, s, i;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = mid.replace(/\.\w+$/i, "");

              if (!id.includes("./")) {
                _context.next = 18;
                break;
              }

              _id$split$reverse = id.split("/").reverse(), _id$split$reverse2 = (0, _toArray2["default"])(_id$split$reverse), o = _id$split$reverse2[0], ia = _id$split$reverse2.slice(1), _src$split$reverse = src.split("/").reverse(), _src$split$reverse2 = (0, _toArray2["default"])(_src$split$reverse), sa = _src$split$reverse2.slice(1), oa = [o];
              s = 0;

            case 4:
              if (!(i = ia.shift())) {
                _context.next = 16;
                break;
              }

              if (!(i === "..")) {
                _context.next = 9;
                break;
              }

              s++;
              _context.next = 14;
              break;

            case 9:
              if (!(i === ".")) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("break", 16);

            case 13:
              oa.push(i);

            case 14:
              _context.next = 4;
              break;

            case 16:
              if (s < sa.length) oa.push.apply(oa, (0, _toConsumableArray2["default"])(sa.slice(s)));
              id = oa.reverse().join("/");

            case 18:
              return _context.abrupt("return", r.has(id) ? gExpA(id) : Promise.resolve("".concat(mid)).then(function (s) {
                return (0, _interopRequireWildcard2["default"])(require(s));
              }));

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _dI.apply(this, arguments);
  }

  function gC(id, main) {
    return {
      id: id,
      "import": function _import(m) {
        return dI(m, id);
      },
      meta: {
        url: id,
        main: main
      }
    };
  }

  function gE(exp) {
    return function (id, v) {
      v = typeof id === "string" ? (0, _defineProperty2["default"])({}, id, v) : id;

      for (var _i = 0, _Object$entries = Object.entries(v); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
            _id = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        Object.defineProperty(exp, _id, {
          value: value,
          writable: true,
          enumerable: true
        });
      }
    };
  }

  function rF(main) {
    var _iterator = _createForOfIteratorHelper(r.entries()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = (0, _slicedToArray2["default"])(_step.value, 2),
            id = _step$value[0],
            m = _step$value[1];

        var f = m.f,
            exp = m.exp;

        var _f = f(gE(exp), gC(id, id === main)),
            e = _f.execute,
            s = _f.setters;

        delete m.f;
        m.e = e;
        m.s = s;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  function gExpA(_x3) {
    return _gExpA.apply(this, arguments);
  }

  function _gExpA() {
    _gExpA = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
      var m, d, e, s, i, _r;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (r.has(id)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              m = r.get(id);

              if (!m.s) {
                _context2.next = 22;
                break;
              }

              d = m.d, e = m.e, s = m.s;
              delete m.s;
              delete m.e;
              i = 0;

            case 8:
              if (!(i < s.length)) {
                _context2.next = 18;
                break;
              }

              _context2.t0 = s;
              _context2.t1 = i;
              _context2.next = 13;
              return gExpA(d[i]);

            case 13:
              _context2.t2 = _context2.sent;

              _context2.t0[_context2.t1].call(_context2.t0, _context2.t2);

            case 15:
              i++;
              _context2.next = 8;
              break;

            case 18:
              _r = e();

              if (!_r) {
                _context2.next = 22;
                break;
              }

              _context2.next = 22;
              return _r;

            case 22:
              return _context2.abrupt("return", m.exp);

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _gExpA.apply(this, arguments);
  }

  function gExp(id) {
    if (!r.has(id)) return;
    var m = r.get(id);

    if (m.s) {
      var d = m.d,
          e = m.e,
          s = m.s;
      delete m.s;
      delete m.e;

      for (var i = 0; i < s.length; i++) {
        s[i](gExp(d[i]));
      }

      e();
    }

    return m.exp;
  }

  _instantiate = function __instantiate(m, a) {
    System = _instantiate = undefined;
    rF(m);
    return a ? gExpA(m) : gExp(m);
  };
})();

System.register("source/support", [], function (exports_1, context_1) {
  "use strict";

  var applicationTypeIsJson, performRequest;

  var __moduleName = context_1 && context_1.id;

  return {
    setters: [],
    execute: function execute() {
      applicationTypeIsJson = function applicationTypeIsJson(headers) {
        var _headers$get, _headers$get2;

        return ((_headers$get = headers.get("content-type")) === null || _headers$get === void 0 ? void 0 : _headers$get.toLowerCase().includes("application/json")) || ((_headers$get2 = headers.get("Content-Type")) === null || _headers$get2 === void 0 ? void 0 : _headers$get2.toLowerCase().includes("application/json"));
      };

      exports_1("performRequest", performRequest = /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(method, url, requestBody, requestInit) {
          var response, parsedBody;
          return _regenerator["default"].wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return fetch(url, _objectSpread({
                    method: method,
                    body: requestBody ? JSON.stringify(requestBody) : null,
                    headers: _objectSpread({
                      "Content-Type": "application/json"
                    }, requestInit.headers)
                  }, requestInit));

                case 2:
                  response = _context3.sent;

                  if (!applicationTypeIsJson(response.headers)) {
                    _context3.next = 9;
                    break;
                  }

                  _context3.next = 6;
                  return response.json();

                case 6:
                  _context3.t0 = _context3.sent;
                  _context3.next = 10;
                  break;

                case 9:
                  _context3.t0 = null;

                case 10:
                  parsedBody = _context3.t0;
                  return _context3.abrupt("return", [response.status, parsedBody, response]);

                case 12:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function performRequest(_x4, _x5, _x6, _x7) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  };
});
System.register("source/methods", ["source/support"], function (exports_2, context_2) {
  "use strict";

  var support_ts_1, patch, del, put, post, get;

  var __moduleName = context_2 && context_2.id;

  return {
    setters: [function (support_ts_1_1) {
      support_ts_1 = support_ts_1_1;
    }],
    execute: function execute() {
      exports_2("patch", patch = /*#__PURE__*/function () {
        var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(url, payload) {
          var init,
              _args4 = arguments;
          return _regenerator["default"].wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  init = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
                  return _context4.abrupt("return", support_ts_1.performRequest("PATCH", url, payload, init));

                case 2:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function patch(_x8, _x9) {
          return _ref3.apply(this, arguments);
        };
      }());
      exports_2("del", del = /*#__PURE__*/function () {
        var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(url) {
          var init,
              _args5 = arguments;
          return _regenerator["default"].wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  init = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
                  return _context5.abrupt("return", support_ts_1.performRequest("DELETE", url, null, init));

                case 2:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function del(_x10) {
          return _ref4.apply(this, arguments);
        };
      }());
      exports_2("put", put = /*#__PURE__*/function () {
        var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(url, payload) {
          var init,
              _args6 = arguments;
          return _regenerator["default"].wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  init = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : {};
                  return _context6.abrupt("return", support_ts_1.performRequest("PUT", url, payload, init));

                case 2:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function put(_x11, _x12) {
          return _ref5.apply(this, arguments);
        };
      }());
      exports_2("post", post = /*#__PURE__*/function () {
        var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(url, payload) {
          var init,
              _args7 = arguments;
          return _regenerator["default"].wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  init = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : {};
                  return _context7.abrupt("return", support_ts_1.performRequest("POST", url, payload, init));

                case 2:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function post(_x13, _x14) {
          return _ref6.apply(this, arguments);
        };
      }());
      exports_2("get", get = /*#__PURE__*/function () {
        var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(url) {
          var init,
              _args8 = arguments;
          return _regenerator["default"].wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  init = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};
                  return _context8.abrupt("return", support_ts_1.performRequest("GET", url, null, init));

                case 2:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        return function get(_x15) {
          return _ref7.apply(this, arguments);
        };
      }());
    }
  };
});
System.register("source/filters", [], function (exports_3, context_3) {
  "use strict";

  var filterStatus, filterBody, filterResponse;

  var __moduleName = context_3 && context_3.id;

  return {
    setters: [],
    execute: function execute() {
      exports_3("filterStatus", filterStatus = /*#__PURE__*/function () {
        var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(result) {
          var _yield$result, _yield$result2, status;

          return _regenerator["default"].wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return result;

                case 2:
                  _yield$result = _context9.sent;
                  _yield$result2 = (0, _slicedToArray2["default"])(_yield$result, 1);
                  status = _yield$result2[0];
                  return _context9.abrupt("return", status);

                case 6:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function filterStatus(_x16) {
          return _ref8.apply(this, arguments);
        };
      }());
      exports_3("filterBody", filterBody = /*#__PURE__*/function () {
        var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(result) {
          var _yield$result3, _yield$result4, _, body;

          return _regenerator["default"].wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return result;

                case 2:
                  _yield$result3 = _context10.sent;
                  _yield$result4 = (0, _slicedToArray2["default"])(_yield$result3, 2);
                  _ = _yield$result4[0];
                  body = _yield$result4[1];
                  return _context10.abrupt("return", body);

                case 7:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        return function filterBody(_x17) {
          return _ref9.apply(this, arguments);
        };
      }());
      exports_3("filterResponse", filterResponse = /*#__PURE__*/function () {
        var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(result) {
          var _yield$result5, _yield$result6, _s, _b, response;

          return _regenerator["default"].wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return result;

                case 2:
                  _yield$result5 = _context11.sent;
                  _yield$result6 = (0, _slicedToArray2["default"])(_yield$result5, 3);
                  _s = _yield$result6[0];
                  _b = _yield$result6[1];
                  response = _yield$result6[2];
                  return _context11.abrupt("return", response);

                case 8:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));

        return function filterResponse(_x18) {
          return _ref10.apply(this, arguments);
        };
      }());
    }
  };
});
System.register("source/codes", [], function (exports_4, context_4) {
  "use strict";

  var OK, CREATED, NO_CONTENT, MOVED_PERMANENTLY, BAD_REQUEST, UNAUTHORIZED, FORBIDDEN, NOT_FOUND, CONFLICT, INTERNAL_SERVER_ERROR, NOT_IMPLEMENTED;

  var __moduleName = context_4 && context_4.id;

  return {
    setters: [],
    execute: function execute() {
      exports_4("OK", OK = 200);
      exports_4("CREATED", CREATED = 201);
      exports_4("NO_CONTENT", NO_CONTENT = 204);
      exports_4("MOVED_PERMANENTLY", MOVED_PERMANENTLY = 301);
      exports_4("BAD_REQUEST", BAD_REQUEST = 400);
      exports_4("UNAUTHORIZED", UNAUTHORIZED = 401);
      exports_4("FORBIDDEN", FORBIDDEN = 403);
      exports_4("NOT_FOUND", NOT_FOUND = 404);
      exports_4("CONFLICT", CONFLICT = 409);
      exports_4("INTERNAL_SERVER_ERROR", INTERNAL_SERVER_ERROR = 500);
      exports_4("NOT_IMPLEMENTED", NOT_IMPLEMENTED = 501);
    }
  };
});
System.register("mod", ["source/methods", "source/filters", "source/codes"], function (exports_5, context_5) {
  "use strict";

  var __moduleName = context_5 && context_5.id;

  return {
    setters: [function (methods_ts_1_1) {
      exports_5({
        "get": methods_ts_1_1["get"],
        "put": methods_ts_1_1["put"],
        "patch": methods_ts_1_1["patch"],
        "del": methods_ts_1_1["del"],
        "post": methods_ts_1_1["post"]
      });
    }, function (filters_ts_1_1) {
      exports_5({
        "filterStatus": filters_ts_1_1["filterStatus"],
        "filterBody": filters_ts_1_1["filterBody"],
        "filterResponse": filters_ts_1_1["filterResponse"]
      });
    }, function (codes_ts_1_1) {
      exports_5({
        "OK": codes_ts_1_1["OK"],
        "CREATED": codes_ts_1_1["CREATED"],
        "NO_CONTENT": codes_ts_1_1["NO_CONTENT"],
        "MOVED_PERMANENTLY": codes_ts_1_1["MOVED_PERMANENTLY"],
        "BAD_REQUEST": codes_ts_1_1["BAD_REQUEST"],
        "UNAUTHORIZED": codes_ts_1_1["UNAUTHORIZED"],
        "FORBIDDEN": codes_ts_1_1["FORBIDDEN"],
        "NOT_FOUND": codes_ts_1_1["NOT_FOUND"],
        "CONFLICT": codes_ts_1_1["CONFLICT"],
        "INTERNAL_SERVER_ERROR": codes_ts_1_1["INTERNAL_SERVER_ERROR"],
        "NOT_IMPLEMENTED": codes_ts_1_1["NOT_IMPLEMENTED"]
      });
    }],
    execute: function execute() {}
  };
});

var __exp = _instantiate("mod", false);

var get = __exp["get"];
exports.get = get;
var put = __exp["put"];
exports.put = put;
var patch = __exp["patch"];
exports.patch = patch;
var del = __exp["del"];
exports.del = del;
var post = __exp["post"];
exports.post = post;
var filterStatus = __exp["filterStatus"];
exports.filterStatus = filterStatus;
var filterBody = __exp["filterBody"];
exports.filterBody = filterBody;
var filterResponse = __exp["filterResponse"];
exports.filterResponse = filterResponse;
var OK = __exp["OK"];
exports.OK = OK;
var CREATED = __exp["CREATED"];
exports.CREATED = CREATED;
var NO_CONTENT = __exp["NO_CONTENT"];
exports.NO_CONTENT = NO_CONTENT;
var MOVED_PERMANENTLY = __exp["MOVED_PERMANENTLY"];
exports.MOVED_PERMANENTLY = MOVED_PERMANENTLY;
var BAD_REQUEST = __exp["BAD_REQUEST"];
exports.BAD_REQUEST = BAD_REQUEST;
var UNAUTHORIZED = __exp["UNAUTHORIZED"];
exports.UNAUTHORIZED = UNAUTHORIZED;
var FORBIDDEN = __exp["FORBIDDEN"];
exports.FORBIDDEN = FORBIDDEN;
var NOT_FOUND = __exp["NOT_FOUND"];
exports.NOT_FOUND = NOT_FOUND;
var CONFLICT = __exp["CONFLICT"];
exports.CONFLICT = CONFLICT;
var INTERNAL_SERVER_ERROR = __exp["INTERNAL_SERVER_ERROR"];
exports.INTERNAL_SERVER_ERROR = INTERNAL_SERVER_ERROR;
var NOT_IMPLEMENTED = __exp["NOT_IMPLEMENTED"];
exports.NOT_IMPLEMENTED = NOT_IMPLEMENTED;
