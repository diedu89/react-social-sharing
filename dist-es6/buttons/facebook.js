'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  background-color: #3b5998;\n  border-color: #3b5998;\n\n  ', ';\n\n  &:hover,\n  &:active {\n    background-color: #2d4373;\n    border-color: #2d4373;\n  }\n'], ['\n  background-color: #3b5998;\n  border-color: #3b5998;\n\n  ', ';\n\n  &:hover,\n  &:active {\n    background-color: #2d4373;\n    border-color: #2d4373;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    svg path { fill: #3b5998 };\n  '], ['\n    svg path { fill: #3b5998 };\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

var _factory = require('./factory');

var _factory2 = _interopRequireDefault(_factory);

var _facebook = require('../svg/facebook.js');

var _common = require('../common');

var _consts = require('../consts');

var _consts2 = _interopRequireDefault(_consts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Facebook = (0, _styledComponents2.default)(_common.SharingButton)(_templateObject, (0, _styledIs2.default)('solidcircle')(_templateObject2));

exports.default = function (_ref) {
  var link = _ref.link,
      props = _objectWithoutProperties(_ref, ['link']);

  return _react2.default.createElement(_factory2.default, _extends({}, props, {
    name: 'Facebook',
    href: _consts2.default.facebook(link),
    buttonComponent: Facebook,
    iconFill: _facebook.FacebookIconFill,
    iconCircle: _facebook.FacebookIconCircle,
    iconCircleSolid: _facebook.FacebookIconCircle
  }));
};