(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(25);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(7);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(8);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(13);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(9);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(10);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(14);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(19);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(20);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(15);

// CONCATENATED MODULE: ./src/pages/Result.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var pages_Result = ({"loading":"_1WNOeHAqSQUMUmNldfgFL_","box":"_2rqa50Rss8OzhZYpg8g9ts","main_box":"_3p_XcgnhIhB4-GonbxOVJV","scores":"yvpsxm3RKHD61ND0gXwGv","name":"_3uBbbpqMNob68e0fjUvkX","icon_box":"_3eq0iuLaPMLiSQmu210gy","tobattle":"_17y-tQkrkAmZ1Q0aYCyrHl","error":"_1Ti-_wQFMSsoADen10E25D"});
// CONCATENATED MODULE: ./src/pages/Result.js










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var Result_Result = /*#__PURE__*/function (_Component) {
  inherits_default()(Result, _Component);

  var _super = _createSuper(Result);

  function Result(props) {
    var _this;

    classCallCheck_default()(this, Result);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "componentWillUnmount", function () {
      _this.setState = function () {};
    });

    _this.state = {
      data: [],
      err: ''
    };
    return _this;
  }

  createClass_default()(Result, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var _this2 = this;

        var url, s, p1, p2, res, arr, s1, s2;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = this.props.location.search;
                console.log("url", url);
                s = new URLSearchParams(url);
                p1 = s.get('player1');
                p2 = s.get('player2');

                if (p1 === null || p2 === null) {
                  this.props.history.push('/battle');
                }

                _context.next = 8;
                return axios_default.a.all([axios_default.a.get("https://api.github.com/users/".concat(p1)), axios_default.a.get("https://api.github.com/users/".concat(p2))])["catch"](function (err) {
                  var status = err.response.status;
                  var message = err.response.data.message;

                  if (status === 404) {
                    _this2.setState({
                      err: message
                    }, function () {
                      setTimeout(function () {
                        _this2.props.history.push('/battle');
                      }, 1000);
                    });
                  } else if (status === 403) {
                    _this2.setState({
                      err: message
                    });
                  }
                });

              case 8:
                res = _context.sent;
                arr = [];
                res.forEach(function (item) {
                  var obj = {
                    name: item.data.name,
                    pos: item.data.location,
                    login: item.data.login,
                    url: item.data.avatar_url,
                    scores: item.data.public_repos,
                    following: item.data.following,
                    followers: item.data.followers
                  };
                  arr.push(obj);
                });
                s1 = arr[0];
                s2 = arr[1];

                if (s1.scores > s2.scores) {
                  s1.result = "Winner";
                  s2.result = "Loser";
                } else if (s1.scores === s2.scores) {
                  s1.result = "Draw";
                  s2.result = "Draw";
                } else {
                  s1.result = "Loser";
                  s2.result = "Winner";
                }

                this.setState({
                  data: arr
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          data = _this$state.data,
          err = _this$state.err;

      if (err !== "") {
        return /*#__PURE__*/react_default.a.createElement("p", {
          className: pages_Result.error
        }, "\u6570\u636E\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5\uFF01", /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("br", null), err);
      }

      if (data.length === 0) {
        return /*#__PURE__*/react_default.a.createElement("div", {
          className: pages_Result.loading
        }, /*#__PURE__*/react_default.a.createElement("h4", null, /*#__PURE__*/react_default.a.createElement("i", {
          className: "fa fa-spinner fa-spin"
        }), " Loading ..."));
      }

      return /*#__PURE__*/react_default.a.createElement("div", {
        className: pages_Result.box
      }, /*#__PURE__*/react_default.a.createElement("ul", {
        className: pages_Result.main_box
      }, data.map(function (item) {
        return /*#__PURE__*/react_default.a.createElement("li", {
          key: item.login
        }, /*#__PURE__*/react_default.a.createElement("h2", null, item.result), /*#__PURE__*/react_default.a.createElement("img", {
          src: item.url,
          alt: ""
        }), /*#__PURE__*/react_default.a.createElement("h4", {
          className: pages_Result.scores
        }, "Scores:", item.scores), /*#__PURE__*/react_default.a.createElement("h4", {
          className: pages_Result.name
        }, item.name == null ? item.login : item.name), /*#__PURE__*/react_default.a.createElement("p", {
          className: pages_Result.icon_box
        }, /*#__PURE__*/react_default.a.createElement("i", {
          className: "fa fa-location-arrow"
        }, " ", item.pos)), /*#__PURE__*/react_default.a.createElement("p", {
          className: pages_Result.icon_box
        }, /*#__PURE__*/react_default.a.createElement("i", {
          className: "fa fa-group"
        }, " ", item.followers)), /*#__PURE__*/react_default.a.createElement("p", {
          className: pages_Result.icon_box
        }, /*#__PURE__*/react_default.a.createElement("i", {
          className: "fa fa-user-plus"
        }, " ", item.following)), /*#__PURE__*/react_default.a.createElement("p", {
          className: pages_Result.icon_box
        }, /*#__PURE__*/react_default.a.createElement("i", {
          className: "fa fa-code"
        }, " ", item.scores)));
      })), /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* NavLink */], {
        to: "/battle",
        className: pages_Result.tobattle
      }, /*#__PURE__*/react_default.a.createElement("button", {
        type: "button"
      }, "Reset")));
    }
  }]);

  return Result;
}(react["Component"]);

/* harmony default export */ var src_pages_Result = __webpack_exports__["default"] = (Result_Result);

/***/ })

}]);
//# sourceMappingURL=3.918feba0.js.map