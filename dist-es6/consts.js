'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uaParserJs = require('ua-parser-js');

var _uaParserJs2 = _interopRequireDefault(_uaParserJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UA = new _uaParserJs2.default();
var whatsappProtocol = UA.getDevice().type === undefined ? 'https://web.whatsapp.com/' : 'whatsapp://';

exports.default = {
  twitter: function twitter() {
    var link = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return 'https://twitter.com/intent/tweet/?text=' + encodeURIComponent(message) + '&url=' + encodeURIComponent(link);
  },
  facebook: function facebook(link) {
    return 'https://facebook.com/sharer/sharer.php?u=' + encodeURIComponent(link);
  },
  google: function google(link) {
    return 'https://plus.google.com/share?url=' + encodeURIComponent(link);
  },
  tumblr: function tumblr(link) {
    return 'http://tumblr.com/widgets/share/tool?canonicalUrl=' + encodeURIComponent(link);
  },
  reddit: function reddit(link) {
    return 'https://reddit.com/submit/?url=' + encodeURIComponent(link);
  },
  whatsapp: function whatsapp() {
    var link = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return whatsappProtocol + 'send?text=' + encodeURIComponent(message) + '%20' + encodeURIComponent(link);
  },
  telegram: function telegram() {
    var link = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return 'https://telegram.me/share/url?text=' + encodeURIComponent(message) + '&url=' + encodeURIComponent(link);
  },
  vk: function vk() {
    var link = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return 'http://vk.com/share.php?title=' + encodeURIComponent(message) + '&url=' + encodeURIComponent(link);
  },
  hacker: function hacker() {
    var link = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return 'https://news.ycombinator.com/submitlink?u=' + encodeURIComponent(link) + '&t=' + encodeURIComponent(message);
  },
  xing: function xing() {
    var link = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return 'https://www.xing.com/app/user?op=share;url=' + encodeURIComponent(link) + ';title=' + encodeURIComponent(message) + '.';
  },
  mail: function mail() {
    var link = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var subject = arguments[1];
    var body = arguments[2];
    return 'mailto:?subject=' + encodeURIComponent(subject || '') + '&body=' + encodeURIComponent(body && body + '\n\n' + link || link);
  },
  pinterest: function pinterest() {
    var link = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return 'https://pinterest.com/pin/create/button/?url=' + encodeURIComponent(link) + '&media=' + encodeURIComponent(link) + '&description=' + encodeURIComponent(message);
  },
  linkedin: function linkedin() {
    var link = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(link) + '&title=' + encodeURIComponent(message) + '&summary=' + encodeURIComponent(message) + '&source=' + encodeURIComponent(link);
  }
};