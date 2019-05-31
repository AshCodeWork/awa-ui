"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.version = exports.install = void 0;

/* eslint-disable */
// This file is auto gererated by build/build-entry.js
var version = '1.0.0';
exports.version = version;
var components = [_actionsheet["default"], _addressEdit["default"], _addressList["default"], _area["default"], _badge["default"], _badgeGroup["default"], _button["default"], _card["default"], _cell["default"], _cellGroup["default"], _checkbox["default"], _checkboxGroup["default"], _circle["default"], _col["default"], _collapse["default"], _collapseItem["default"], _contactCard["default"], _contactEdit["default"], _contactList["default"], _coupon["default"], _couponCell["default"], _couponList["default"], _datetimePicker["default"], _dialog["default"], _field["default"], _goodsAction["default"], _goodsActionBigBtn["default"], _goodsActionMiniBtn["default"], _icon["default"], _imagePreview["default"], _info["default"], _list["default"], _loading["default"], _navBar["default"], _noticeBar["default"], _notify["default"], _numberKeyboard["default"], _overlay["default"], _pagination["default"], _panel["default"], _passwordInput["default"], _picker["default"], _popup["default"], _progress["default"], _pullRefresh["default"], _radio["default"], _radioGroup["default"], _rate["default"], _row["default"], _search["default"], _sku["default"], _slider["default"], _step["default"], _stepper["default"], _steps["default"], _submitBar["default"], _swipe["default"], _swipeCell["default"], _swipeItem["default"], _switch["default"], _switchCell["default"], _tab["default"], _tabbar["default"], _tabbarItem["default"], _tabs["default"], _tag["default"], _toast["default"], _treeSelect["default"], _uploader["default"]];

var install = function install(Vue) {
  components.forEach(function (Component) {
    Vue.use(Component);
  });
};
/* istanbul ignore if */


exports.install = install;

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var _default = {
  install: install,
  version: version
};
exports["default"] = _default;