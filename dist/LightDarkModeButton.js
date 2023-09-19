"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject; // import React, { useState } from 'react';
// import styled from 'styled-components';
// const Button = styled.button`
//   background-color: ${props => (props.isDarkMode ? 'black' : 'white')};
//   color: ${props => (props.isDarkMode ? 'white' : 'black')};
//   border: 2px solid ${props => (props.isDarkMode ? 'white' : 'black')};
//   border-radius: 4px;
//   padding: 10px 20px;
//   cursor: pointer;
//   transition: background-color 0.3s, color 0.3s;
//   &:hover {
//     background-color: ${props => (props.isDarkMode ? 'white' : 'black')};
//     color: ${props => (props.isDarkMode ? 'black' : 'white')};
//   }
// `;
// function LightDarkModeButton() {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const toggleMode = () => {
//     setIsDarkMode(!isDarkMode);
//     // You can add logic to toggle your app's theme here
//   };
//   return (
//     <Button onClick={toggleMode} isDarkMode={isDarkMode}>
//       {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//     </Button>
//   );
// }
// export default LightDarkModeButton;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Button = _styledComponents["default"].button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  border: 2px solid ", ";\n  border-radius: 4px;\n  padding: 10px 20px;\n  cursor: pointer;\n  transition: background-color 0.3s, color 0.3s;\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n"])), function (props) {
  return props.isDarkMode ? "black" : "white";
}, function (props) {
  return props.isDarkMode ? "white" : "black";
}, function (props) {
  return props.isDarkMode ? "white" : "black";
}, function (props) {
  return props.isDarkMode ? "white" : "black";
}, function (props) {
  return props.isDarkMode ? "black" : "white";
});
function LightDarkModeButton() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDarkMode = _useState2[0],
    setIsDarkMode = _useState2[1];
  (0, _react.useEffect)(function () {
    var savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setIsDarkMode(savedMode === "dark");
    }
  }, []);
  var toggleMode = function toggleMode() {
    var newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");

    // You can add logic to toggle your app's theme here
  };

  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: toggleMode
  }, isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode");
}
var _default = LightDarkModeButton;
exports["default"] = _default;