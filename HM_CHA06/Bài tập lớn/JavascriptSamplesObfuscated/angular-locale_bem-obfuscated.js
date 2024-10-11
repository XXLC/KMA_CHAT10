function a22_0x5151() {
    const _0x16b553 = [
        '15057320DOwNwT',
        '$constValue',
        'getMenu',
        'StartRecord',
        'leavePopup',
        '8148cUzadW',
        '974XxKuXB',
        '362202DhRjNb',
        'topBar',
        'menuInfo',
        'svg',
        '$recordTopService',
        '456OVzdtt',
        '#app',
        'showPopup',
        'hidePopup',
        '98egJgNv',
        'enterPopup',
        'setInstance',
        '3018884qqmqBN',
        'topBarDateCal',
        'interval',
        'stopwatch',
        '$commonService',
        '169890qbnHzC',
        'resizePopup',
        'flagRecording',
        'movePopup',
        '5OMjVED',
        'init',
        '919424mfprbi',
        'flagMouseDown',
        'time',
        'topBarClose',
        'menuName',
        '70191GepLzw'
    ];
    a22_0x5151 = function () {
        return _0x16b553;
    };
    return a22_0x5151();
}
const a22_0x5ed045 = a22_0x54ff;
(function (_0x21e240, _0x2fc7f7) {
    const _0x34500f = a22_0x54ff, _0x2959dd = _0x21e240();
    while (!![]) {
        try {
            const _0x229d01 = parseInt(_0x34500f(0x128)) / 0x1 + -parseInt(_0x34500f(0x13a)) / 0x2 * (parseInt(_0x34500f(0x139)) / 0x3) + parseInt(_0x34500f(0x123)) / 0x4 * (-parseInt(_0x34500f(0x12c)) / 0x5) + -parseInt(_0x34500f(0x13b)) / 0x6 * (-parseInt(_0x34500f(0x120)) / 0x7) + parseInt(_0x34500f(0x11c)) / 0x8 * (parseInt(_0x34500f(0x133)) / 0x9) + parseInt(_0x34500f(0x134)) / 0xa + -parseInt(_0x34500f(0x12e)) / 0xb;
            if (_0x229d01 === _0x2fc7f7)
                break;
            else
                _0x2959dd['push'](_0x2959dd['shift']());
        } catch (_0x3a1280) {
            _0x2959dd['push'](_0x2959dd['shift']());
        }
    }
}(a22_0x5151, 0xc45d2));
const vm = new Vue({
    'el': a22_0x5ed045(0x11d),
    'beforeMount'() {
        const _0x3269e8 = a22_0x5ed045;
        this[_0x3269e8(0x11b)][_0x3269e8(0x122)](this);
    },
    'mounted'() {
        this['init']();
    },
    'data'() {
        const _0x539d7b = a22_0x5ed045;
        return {
            'menuName': 'recordTop',
            'svg': this[_0x539d7b(0x135)][_0x539d7b(0x11a)],
            'topBar': {
                'time': 0x0,
                'text': '-',
                'interval': null
            },
            'flagRecording': ![],
            'flagMouseDown': ![]
        };
    },
    'watch': {
        'flagRecording'(_0x54362f = ![]) {
            const _0x55d299 = a22_0x5ed045;
            this[_0x55d299(0x124)](_0x54362f);
        }
    },
    'methods': {
        'init'() {
            const _0x80356c = a22_0x5ed045;
            this[_0x80356c(0x13d)] = this[_0x80356c(0x127)][_0x80356c(0x136)](this[_0x80356c(0x132)]), this[_0x80356c(0x11b)][_0x80356c(0x12d)](this['menuInfo']);
        },
        'loadSettings'() {
        },
        'topBarClose'() {
            const _0x5cd384 = a22_0x5ed045;
            this[_0x5cd384(0x11b)]['StopRecord']();
        },
        'startRecording'() {
            const _0x517a1d = a22_0x5ed045;
            this['topBar']['time'] = 0x0, this[_0x517a1d(0x13c)]['text'] = this['$commonService'][_0x517a1d(0x126)](this[_0x517a1d(0x13c)][_0x517a1d(0x130)]), this['flagRecording'] = !![], this[_0x517a1