'use strict';

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _person = require('./person');

var _person2 = _interopRequireDefault(_person);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _path = require('path');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('test!!!!!!!!!!=====!');


console.log((0, _util.square)(4));

console.log((0, _util.add)(2, 3));

console.log((0, _person.isAdult)(21));

console.log((0, _person.canDrink)(14));

console.log((0, _util2.default)(5, 2));

console.log((0, _person2.default)(66));

console.log(_validator2.default.isEmail('nirupam@gmail.com'));

var template = _react2.default.createElement('p', {}, 'testing 123');

_reactDom2.default.render(template, document.getElementById('app'));
