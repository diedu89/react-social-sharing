'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  background-color: #5f99cf;\n  border-color: #5f99cf;\n\n  &:hover,\n  &:active {\n    background-color: #3a80c1;\n    border-color: #3a80c1;\n  }\n'], ['\n  background-color: #5f99cf;\n  border-color: #5f99cf;\n\n  &:hover,\n  &:active {\n    background-color: #3a80c1;\n    border-color: #3a80c1;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _factory = require('./factory');

var _factory2 = _interopRequireDefault(_factory);

var _reddit = require('../svg/reddit.js');

var _common = require('../common');

var _consts = require('../consts');

var _consts2 = _interopRequireDefault(_consts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Reddit = (0, _styledComponents2.default)(_common.SharingButton)(_templateObject);

exports.default = function (_ref) {
  var link = _ref.link,
      props = _objectWithoutProperties(_ref, ['link']);

  return _react2.default.createElement(_factory2.default, _extends({}, props, {
    name: 'Reddit',
    href: _consts2.default.reddit(link),
    buttonComponent: Reddit,
    iconFill: _reddit.RedditIconFill,
    iconCircle: _reddit.RedditIconCircle,
    iconCircleSolid: _reddit.RedditIconCircleSolid
  }));
};