'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  background-color: #25d366;\n  border-color: #25d366;\n\n  &:hover,\n  &:active {\n    background-color: #1da851;\n    border-color: #1da851;\n  }\n'], ['\n  background-color: #25d366;\n  border-color: #25d366;\n\n  &:hover,\n  &:active {\n    background-color: #1da851;\n    border-color: #1da851;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _factory = require('./factory');

var _factory2 = _interopRequireDefault(_factory);

var _whatsapp = require('../svg/whatsapp.js');

var _common = require('../common');

var _consts = require('../consts');

var _consts2 = _interopRequireDefault(_consts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Whatsapp = (0, _styledComponents2.default)(_common.SharingButton)(_templateObject);

exports.default = function (_ref) {
  var link = _ref.link,
      message = _ref.message,
      props = _objectWithoutProperties(_ref, ['link', 'message']);

  return _react2.default.createElement(_factory2.default, _extends({}, props, {
    name: 'WhatsApp',
    href: _consts2.default.whatsapp(link, message),
    buttonComponent: Whatsapp,
    iconFill: _whatsapp.WhatsappIconFill,
    iconCircle: _whatsapp.WhatsappIconCircle,
    iconCircleSolid: _whatsapp.WhatsappIconCircleSolid
  }));
};