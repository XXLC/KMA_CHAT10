const a16_0x4354e0 = a16_0x1287;
(function (_0x438f2a, _0x1b58a7) {
    const _0x26fdb1 = a16_0x1287, _0x49eae2 = _0x438f2a();
    while (!![]) {
        try {
            const _0x603f15 = -parseInt(_0x26fdb1(0x1d2)) / 0x1 + parseInt(_0x26fdb1(0x226)) / 0x2 * (-parseInt(_0x26fdb1(0x20b)) / 0x3) + -parseInt(_0x26fdb1(0x219)) / 0x4 + -parseInt(_0x26fdb1(0x1fb)) / 0x5 + -parseInt(_0x26fdb1(0x1f0)) / 0x6 * (parseInt(_0x26fdb1(0x1e6)) / 0x7) + -parseInt(_0x26fdb1(0x224)) / 0x8 + parseInt(_0x26fdb1(0x1dc)) / 0x9 * (parseInt(_0x26fdb1(0x213)) / 0xa);
            if (_0x603f15 === _0x1b58a7)
                break;
            else
                _0x49eae2['push'](_0x49eae2['shift']());
        } catch (_0x1376ff) {
            _0x49eae2['push'](_0x49eae2['shift']());
        }
    }
}(a16_0x3699, 0x211b0));
function a16_0x1287(_0x276a23, _0x4ebc1d) {
    const _0x369940 = a16_0x3699();
    return a16_0x1287 = function (_0x128766, _0x32b3b4) {
        _0x128766 = _0x128766 - 0x1ca;
        let _0x3a6ff6 = _0x369940[_0x128766];
        return _0x3a6ff6;
    }, a16_0x1287(_0x276a23, _0x4ebc1d);
}
const vm = new Vue({
    'el': a16_0x4354e0(0x210),
    'components': { 'Toast': Toast },
    'beforeMount'() {
        const _0x59129e = a16_0x4354e0;
        this['$multiSettingService'][_0x59129e(0x1f4)](this);
    },
    'mounted'() {
        this['init']();
    },
    'data'() {
        const _0x27b464 = a16_0x4354e0;
        return {
            'popupTitle': window['purple'][_0x27b464(0x1ef)][_0x27b464(0x216)][_0x27b464(0x1f7)],
            'tooltip': {
                'show': ![],
                'msg': '',
                'link': '',
                'className': _0x27b464(0x22d)
            },
            'cursor': {
                'show': !![],
                'items': []
            },
            'directoryLocation': {
                'flagDisable': ![],
                'path': _0x27b464(0x214)
            },
            'recordOptions': {
                'value': _0x27b464(0x1db),
                'show': ![],
                'options': [
                    {
                        'value': _0x27b464(0x1db),
                        'text': this[_0x27b464(0x1e9)][_0x27b464(0x229)](_0x27b464(0x1f7), _0x27b464(0x1ff))
                    },
                    {
                        'value': _0x27b464(0x21c),
                        'text': this['$commonService'][_0x27b464(0x229)](_0x27b464(0x1f7), _0x27b464(0x1dd))
                    }
                ]
            },
            'clockOptions': {
                'value': 'on',
                'show': ![],
                'options': [
                    {
                        'value': 'on',
                        'text': this[_0x27b464(0x1e9)]['translate2']('multiSetting', 'on')
                    },
                    {
                        'value': _0x27b464(0x1f8),
                        'text': this[_0x27b464(0x1e9)]['translate2']('multiSetting', _0x27b464(0x1f8))
                    }
                ]
            },
            'urlParam': '',
            'cursorIcon': [
                {
                    'key': _