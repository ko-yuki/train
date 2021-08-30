(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 83:
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

// CONCATENATED MODULE: ./src/pages/Battle.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var pages_Battle = ({"battle_box":"_2oei-2YOc-1wk8eBoE4vxM","ins":"_2q0N21pNPwtFAxM6H8Y44G","main":"_1d7T73OV7Vnwjy5oMNars","players_title":"_1FvAebSJ7RwX5vH53Swwz7","players":"_3STnNUIAzf4TG2f1Kc9vCW","players_btn":"_3WgYOGwghwTqcKnzqZD4sk","players_ok":"_1y0McyfKY9krZIBY0qs5ar","img_box":"_2t47ZTDZ29CZhwHSZOUfpy","close_btn":"_2bak_VkfhBzdTp_aumDk1m","ok_btn":"_1ulfl2W-rKs148ggYB55WC","error":"BcX5BF_0FLra867PieYXe"});
// CONCATENATED MODULE: ./src/pages/Battle.js










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var Battle_Battle = /*#__PURE__*/function (_Component) {
  inherits_default()(Battle, _Component);

  var _super = _createSuper(Battle);

  function Battle(props) {
    var _this;

    classCallCheck_default()(this, Battle);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "inputName", function (e, index) {
      e.persist();

      if (index === 0) {
        _this.setState({
          errOne: ''
        });
      } else {
        _this.setState({
          errOne: ''
        });
      }

      _this.setState(defineProperty_default()({}, e.target.name, e.target.value));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getName", /*#__PURE__*/function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(index) {
        var _this$state, nameOne, nameTwo, loadingOne, loadingTwo, res, _res;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$state = _this.state, nameOne = _this$state.nameOne, nameTwo = _this$state.nameTwo, loadingOne = _this$state.loadingOne, loadingTwo = _this$state.loadingTwo;

                if (!(nameOne === "" && nameTwo === "")) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                if (!(loadingOne || loadingTwo)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                if (!(index === 0)) {
                  _context.next = 13;
                  break;
                }

                _this.setState({
                  loadingOne: true
                });

                _context.next = 9;
                return axios_default()("https://api.github.com/users/".concat(nameOne, "?size=200"))["catch"](function (err) {
                  _this.setState({
                    errOne: err.response.data,
                    loadingOne: false
                  });
                });

              case 9:
                res = _context.sent;

                _this.setState({
                  urlOne: res.data.avatar_url,
                  flagOne: true,
                  loadingOne: false
                });

                _context.next = 18;
                break;

              case 13:
                _this.setState({
                  loadingTwo: true
                });

                _context.next = 16;
                return axios_default()("https://api.github.com/users/".concat(nameTwo, "?size=200"))["catch"](function (err) {
                  _this.setState({
                    errTwo: err.response.data,
                    loadingTwo: false
                  });
                });

              case 16:
                _res = _context.sent;

                _this.setState({
                  urlTwo: _res.data.avatar_url,
                  flagTwo: true,
                  loadingTwo: false
                });

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    defineProperty_default()(assertThisInitialized_default()(_this), "enterName", function (e, index) {
      e.persist();

      if (e.keyCode === 13) {
        _this.getName(index);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "close", function (index) {
      if (index === 0) {
        _this.setState({
          nameOne: "",
          urlOne: "",
          flagOne: false
        });
      } else {
        _this.setState({
          nameTwo: "",
          urlTwo: "",
          flagTwo: false
        });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "battle", function () {
      var _this$state2 = _this.state,
          nameOne = _this$state2.nameOne,
          nameTwo = _this$state2.nameTwo;

      _this.props.history.push({
        pathname: "/battle/result",
        search: "?player1=".concat(nameOne, "&player2=").concat(nameTwo)
      });
    });

    _this.state = {
      roles: [{
        title: "Enter two Github:",
        icon: "fa fa-users fa-5x",
        color: "rgb(255, 191, 116)"
      }, {
        title: "Battle",
        icon: "fa fa-fighter-jet fa-5x",
        color: "gray"
      }, {
        title: "See the winner",
        icon: "fa fa-trophy fa-5x",
        color: "rgb(244, 234, 42)"
      }],
      nameOne: "",
      nameTwo: "",
      urlOne: "",
      urlTwo: "",
      flagOne: false,
      flagTwo: false,
      loadingOne: false,
      loadingTwo: false,
      errOne: '',
      errTwo: ''
    };
    return _this;
  }

  createClass_default()(Battle, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state3 = this.state,
          roles = _this$state3.roles,
          nameOne = _this$state3.nameOne,
          nameTwo = _this$state3.nameTwo,
          urlOne = _this$state3.urlOne,
          urlTwo = _this$state3.urlTwo,
          flagOne = _this$state3.flagOne,
          flagTwo = _this$state3.flagTwo,
          loadingOne = _this$state3.loadingOne,
          loadingTwo = _this$state3.loadingTwo,
          errOne = _this$state3.errOne,
          errTwo = _this$state3.errTwo;
      return /*#__PURE__*/react_default.a.createElement("div", {
        id: "test",
        className: "container ".concat(pages_Battle.battle_box)
      }, /*#__PURE__*/react_default.a.createElement("h3", {
        className: pages_Battle.ins
      }, "Instructions"), /*#__PURE__*/react_default.a.createElement("ul", {
        className: "row ".concat(pages_Battle.main)
      }, roles.map(function (role) {
        return /*#__PURE__*/react_default.a.createElement("li", {
          key: role.icon,
          className: "col-7 col-lg-3"
        }, /*#__PURE__*/react_default.a.createElement("h4", null, role.title), /*#__PURE__*/react_default.a.createElement("i", {
          className: role.icon,
          style: {
            color: role.color
          }
        }));
      })), /*#__PURE__*/react_default.a.createElement("h3", {
        className: pages_Battle.players_title
      }, "Players"), /*#__PURE__*/react_default.a.createElement("ul", {
        className: "row"
      }, /*#__PURE__*/react_default.a.createElement("li", {
        className: "col-7 col-md-6"
      }, /*#__PURE__*/react_default.a.createElement("h5", null, "Player One"), /*#__PURE__*/react_default.a.createElement("div", {
        style: {
          display: flagOne ? "none" : "block"
        }
      }, /*#__PURE__*/react_default.a.createElement("input", {
        type: "text",
        className: pages_Battle.players,
        placeholder: "github username",
        style: {
          textIndent: "5%",
          width: "68%",
          padding: "1% 0"
        },
        name: "nameOne",
        value: nameOne,
        onChange: function onChange(e) {
          return _this2.inputName(e, 0);
        },
        onKeyDown: function onKeyDown(e) {
          return _this2.enterName(e, 0);
        }
      }), /*#__PURE__*/react_default.a.createElement("button", {
        className: pages_Battle.players_btn,
        style: {
          opacity: loadingOne ? '0.6' : '1',
          color: loadingOne ? '#000' : '',
          cursor: loadingOne ? 'not-allowed' : 'pointer'
        },
        type: "button",
        disabled: !nameOne.length,
        onClick: function onClick() {
          return _this2.getName(0);
        }
      }, loadingOne ? /*#__PURE__*/react_default.a.createElement("p", {
        style: {
          margin: 0
        }
      }, /*#__PURE__*/react_default.a.createElement("i", {
        className: "fa fa-spinner fa-spin"
      }), "loading...") : 'Submit'), /*#__PURE__*/react_default.a.createElement("p", {
        style: {
          display: errOne === '' ? 'none' : 'block'
        },
        className: pages_Battle.error
      }, "\u8F93\u5165\u7684\u7528\u6237\u4E0D\u5B58\u5728\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\uFF01")), /*#__PURE__*/react_default.a.createElement("div", {
        className: pages_Battle.players_ok,
        style: {
          display: flagOne ? "flex" : "none"
        }
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: pages_Battle.img_box,
        style: {
          width: "100%"
        }
      }, /*#__PURE__*/react_default.a.createElement("img", {
        src: urlOne,
        alt: ""
      }), /*#__PURE__*/react_default.a.createElement("span", null, nameOne)), /*#__PURE__*/react_default.a.createElement("button", {
        className: pages_Battle.close_btn,
        type: "button",
        onClick: function onClick() {
          return _this2.close(0);
        }
      }, /*#__PURE__*/react_default.a.createElement("i", {
        className: "fa fa-times-circle fa-3x"
      })))), /*#__PURE__*/react_default.a.createElement("li", {
        className: "col-7 col-md-6"
      }, /*#__PURE__*/react_default.a.createElement("h5", null, "Player Two"), /*#__PURE__*/react_default.a.createElement("div", {
        style: {
          display: flagTwo ? "none" : "block"
        }
      }, /*#__PURE__*/react_default.a.createElement("input", {
        type: "text",
        className: pages_Battle.players,
        placeholder: "github username",
        name: "nameTwo",
        value: nameTwo,
        onChange: function onChange(e) {
          return _this2.inputName(e, 1);
        },
        onKeyDown: function onKeyDown(e) {
          return _this2.enterName(e, 1);
        }
      }), /*#__PURE__*/react_default.a.createElement("button", {
        className: pages_Battle.players_btn,
        style: {
          opacity: loadingTwo ? '0.6' : '1',
          color: loadingTwo ? '#000' : '',
          cursor: loadingTwo ? 'not-allowed' : 'pointer'
        },
        type: "button",
        disabled: !nameTwo.length,
        onClick: function onClick() {
          return _this2.getName(1);
        }
      }, loadingTwo ? /*#__PURE__*/react_default.a.createElement("p", {
        style: {
          margin: 0
        }
      }, /*#__PURE__*/react_default.a.createElement("i", {
        className: "fa fa-spinner fa-spin"
      }), "loading...") : 'Submit'), /*#__PURE__*/react_default.a.createElement("p", {
        style: {
          display: errTwo === '' ? 'none' : 'block'
        },
        className: pages_Battle.error
      }, "\u8F93\u5165\u7684\u7528\u6237\u4E0D\u5B58\u5728\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\uFF01")), /*#__PURE__*/react_default.a.createElement("div", {
        className: pages_Battle.players_ok,
        style: {
          display: flagTwo ? "flex" : "none"
        }
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: pages_Battle.img_box
      }, /*#__PURE__*/react_default.a.createElement("img", {
        src: urlTwo,
        alt: ""
      }), /*#__PURE__*/react_default.a.createElement("span", null, nameTwo)), /*#__PURE__*/react_default.a.createElement("button", {
        className: pages_Battle.close_btn,
        type: "button",
        onClick: function onClick() {
          return _this2.close(1);
        }
      }, /*#__PURE__*/react_default.a.createElement("i", {
        className: "fa fa-times-circle fa-3x"
      }))))), /*#__PURE__*/react_default.a.createElement("button", {
        type: "button",
        className: pages_Battle.ok_btn,
        style: {
          display: flagOne && flagTwo ? "block" : "none"
        },
        onClick: this.battle
      }, "Battle"));
    }
  }]);

  return Battle;
}(react["Component"]);

/* harmony default export */ var src_pages_Battle = __webpack_exports__["default"] = (Battle_Battle);

/***/ })

}]);
//# sourceMappingURL=2.1e1d7b5a.js.map