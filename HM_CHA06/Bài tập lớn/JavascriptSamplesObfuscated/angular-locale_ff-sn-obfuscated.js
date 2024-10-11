function a45_0x35be() {
    const _0x413014 = [
        'timer',
        'height=184',
        'sec',
        '$commonService',
        '310736rPOCNh',
        'push',
        'split',
        'stringify',
        '6smIUoi',
        'title',
        'log',
        'location',
        '$constValue',
        'sendEvent',
        '35BvpYQA',
        '4cyllBL',
        'setTimer\x20:\x20',
        'multiSetting',
        'width=452',
        'padStart',
        'join',
        '40kKhMtz',
        'timezoneTitle',
        'translate2',
        'eventName',
        '19928vSvmcw',
        '708285UmxuXh',
        'region',
        'min',
        '378639COpcrT',
        '415892FgHuWi',
        '6847115zPnZxD',
        '278525gdqyXy',
        'time',
        'search',
        'replace'
    ];
    a45_0x35be = function () {
        return _0x413014;
    };
    return a45_0x35be();
}
(function (_0x2556f1, _0x1b399f) {
    const _0x5493e6 = a45_0x572c, _0x14a6ac = _0x2556f1();
    while (!![]) {
        try {
            const _0x128064 = parseInt(_0x5493e6(0x109)) / 0x1 + -parseInt(_0x5493e6(0x10e)) / 0x2 + -parseInt(_0x5493e6(0x10a)) / 0x3 * (parseInt(_0x5493e6(0x123)) / 0x4) + -parseInt(_0x5493e6(0x110)) / 0x5 * (-parseInt(_0x5493e6(0x11c)) / 0x6) + parseInt(_0x5493e6(0x122)) / 0x7 * (-parseInt(_0x5493e6(0x118)) / 0x8) + -parseInt(_0x5493e6(0x10d)) / 0x9 * (-parseInt(_0x5493e6(0x129)) / 0xa) + parseInt(_0x5493e6(0x10f)) / 0xb;
            if (_0x128064 === _0x1b399f)
                break;
            else
                _0x14a6ac['push'](_0x14a6ac['shift']());
        } catch (_0x3803f7) {
            _0x14a6ac['push'](_0x14a6ac['shift']());
        }
    }
}(a45_0x35be, 0x37b23));
const vm = new Vue({
    'el': '#app',
    'mounted'() {
        this['init']();
    },
    'data'() {
        return {
            'title': '',
            'timeZone': '',
            'hour': '',
            'min': '',
            'sec': ''
        };
    },
    'computed': {
        'isAllRed': function () {
            const _0x3d3918 = a45_0x572c;
            return Number(this[_0x3d3918(0x116)]) === 0x0 && Number(this[_0x3d3918(0x10c)]) === 0x0;
        },
        'isSecRed': function () {
            const _0x55da93 = a45_0x572c;
            return Number(this['min']) == 0x3b && Number(this[_0x55da93(0x116)]) >= 0x32;
        }
    },
    'methods': {
        'init'() {
            const _0xa9e955 = a45_0x572c;
            let _0x3b35e8 = [];
            window[_0xa9e955(0x11f)][_0xa9e955(0x112)][_0xa9e955(0x113)](/[?&]+([^=&]+)=([^&]*)/gi, function (_0x25172d, _0x30f545, _0x1497bc) {
                _0x3b35e8['push'](_0x30f545 + '=' + _0x1497bc);
            }), _0x3b35e8[_0xa9e955(0x119)](_0xa9e955(0x126)), _0x3b35e8['push'](_0xa9e955(0x115)), _0x3b35e8 = _0x3b35e8[_0xa9e955(0x128)](','), window[_0xa9e955(0x121)]('popup/onload', _0x3b35e8);
        },
        'close'() {
            const _0xa06063 = a45_0x572c;
            this[_0xa06063(0x117)]['sendEvent'](this[_0xa06063(0x120)][_0xa06063(0x108)]['close']);
        },
        'openMultiSetting'() {
            const _0x2bf6e7 = a45_0x572c;
            this[_0x2bf6e7(0x117)][_0x2bf6e7(0x121)](this[_0x2bf6e7(0x1