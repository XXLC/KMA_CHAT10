const a19_0x568071 = a19_0x13c1;
function a19_0xc0db() {
    const _0x2b0f6d = [
        'character_name',
        'menuInfo',
        'translate',
        '18DpsRdU',
        '421048yHoHCR',
        '2304140LCZytP',
        '22ayJXHj',
        '5sTZleq',
        '3UZsCiQ',
        'init',
        '455800tMXOsE',
        'price',
        '\x20|\x20',
        'setInstance',
        '_getUrlParams',
        '$priceService',
        'popupTitle',
        'updateL10n',
        'getMenu',
        'link',
        '#app',
        '666770xXQgsJ',
        '4604718yRHVZa',
        '71102OsRVZh',
        'menuName',
        '5157446cabGkA',
        '$commonService'
    ];
    a19_0xc0db = function () {
        return _0x2b0f6d;
    };
    return a19_0xc0db();
}
(function (_0x4b9560, _0x1703a5) {
    const _0x1826b8 = a19_0x13c1, _0x210a0a = _0x4b9560();
    while (!![]) {
        try {
            const _0x527113 = -parseInt(_0x1826b8(0x1dd)) / 0x1 + parseInt(_0x1826b8(0x1ea)) / 0x2 * (-parseInt(_0x1826b8(0x1db)) / 0x3) + parseInt(_0x1826b8(0x1d8)) / 0x4 * (-parseInt(_0x1826b8(0x1da)) / 0x5) + parseInt(_0x1826b8(0x1e9)) / 0x6 + parseInt(_0x1826b8(0x1ec)) / 0x7 + parseInt(_0x1826b8(0x1d7)) / 0x8 * (-parseInt(_0x1826b8(0x1d6)) / 0x9) + parseInt(_0x1826b8(0x1e8)) / 0xa * (parseInt(_0x1826b8(0x1d9)) / 0xb);
            if (_0x527113 === _0x1703a5)
                break;
            else
                _0x210a0a['push'](_0x210a0a['shift']());
        } catch (_0x16a1fb) {
            _0x210a0a['push'](_0x210a0a['shift']());
        }
    }
}(a19_0xc0db, 0x71829));
const vm = new Vue({
    'el': a19_0x568071(0x1e7),
    'beforeMount'() {
        const _0x37ceeb = a19_0x568071;
        this['$priceService'][_0x37ceeb(0x1e0)](this);
    },
    'mounted'() {
        const _0x28f57a = a19_0x568071;
        this[_0x28f57a(0x1dc)]();
    },
    'data'() {
        const _0xfe0ec1 = a19_0x568071;
        return {
            'menuName': 'price',
            'popupTitle': this['$commonService'][_0xfe0ec1(0x1d5)](_0xfe0ec1(0x1de)),
            'characterName': ''
        };
    },
    'methods': {
        'init'() {
            const _0x2f3833 = a19_0x568071;
            this['menuInfo'] = this['$commonService'][_0x2f3833(0x1e5)](this[_0x2f3833(0x1eb)]), this[_0x2f3833(0x1e2)][_0x2f3833(0x1dc)](this[_0x2f3833(0x1d4)]), this['SetCharacterName']();
        },
        'updateL10n'(_0x5d400b) {
            const _0x49c7f8 = a19_0x568071;
            this['$constValue'][_0x49c7f8(0x1e4)](_0x5d400b), this[_0x49c7f8(0x1e3)] = this[_0x49c7f8(0x1ed)][_0x49c7f8(0x1d5)](_0x49c7f8(0x1de));
        },
        'SetCharacterName'() {
            const _0x5138d8 = a19_0x568071, _0x209f2d = this[_0x5138d8(0x1e2)][_0x5138d8(0x1e1)]();
            _0x209f2d[_0x5138d8(0x1ee)] && (this['characterName'] = _0x5138d8(0x1df) + decodeURIComponent(_0x209f2d[_0x5138d8(0x1ee)]));
        },
        'close'() {
            const _0x36540e = a19_0x568071;
            this[_0x36540e(0x1e2)]['close']();
        },
        'link'() {
       