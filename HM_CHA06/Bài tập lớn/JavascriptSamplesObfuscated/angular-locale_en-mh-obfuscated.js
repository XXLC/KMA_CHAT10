(function (_0x4e6037, _0x32c1d6) {
    const _0xc0ff8d = a13_0x3e0b, _0x2cf483 = _0x4e6037();
    while (!![]) {
        try {
            const _0x2ff4aa = -parseInt(_0xc0ff8d(0xdb)) / 0x1 + -parseInt(_0xc0ff8d(0xf8)) / 0x2 * (parseInt(_0xc0ff8d(0xde)) / 0x3) + parseInt(_0xc0ff8d(0xf5)) / 0x4 + parseInt(_0xc0ff8d(0xe5)) / 0x5 * (parseInt(_0xc0ff8d(0xeb)) / 0x6) + -parseInt(_0xc0ff8d(0x10e)) / 0x7 * (-parseInt(_0xc0ff8d(0x107)) / 0x8) + parseInt(_0xc0ff8d(0xe0)) / 0x9 * (parseInt(_0xc0ff8d(0x100)) / 0xa) + parseInt(_0xc0ff8d(0xda)) / 0xb * (-parseInt(_0xc0ff8d(0xf4)) / 0xc);
            if (_0x2ff4aa === _0x32c1d6)
                break;
            else
                _0x2cf483['push'](_0x2cf483['shift']());
        } catch (_0x5c9c23) {
            _0x2cf483['push'](_0x2cf483['shift']());
        }
    }
}(a13_0xd27d, 0x567b7));
const vm = new Vue({
    'el': '#app',
    'mounted'() {
        this['init']();
    },
    'data'() {
        const _0x42fc11 = a13_0x3e0b;
        return {
            'menuName': _0x42fc11(0xd7),
            'groupId': '',
            'characterName': '',
            'checked': ![],
            'msg': {
                'characterOf': this[_0x42fc11(0x110)][_0x42fc11(0xea)](_0x42fc11(0x10d)),
                'viewLive': this[_0x42fc11(0x110)][_0x42fc11(0xea)]('viewLive'),
                'neverShowAgain': this[_0x42fc11(0x110)]['translate']('neverShowAgain')
            },
            'flagCharacterName': {
                'firstLine': !![],
                'front': !![]
            },
            'paramsString': ''
        };
    },
    'methods': {
        'init'() {
            const _0x2d5253 = a13_0x3e0b;
            this[_0x2d5253(0xe6)] = this[_0x2d5253(0x110)][_0x2d5253(0x111)](this[_0x2d5253(0xec)]), this[_0x2d5253(0xdd)][_0x2d5253(0xd9)](this[_0x2d5253(0xe6)]);
        },
        'showPopup'(_0x1da603 = '', _0xc94773 = '', _0xb52d2d = '') {
            const _0x418c92 = a13_0x3e0b;
            this[_0x418c92(0xfd)](), this[_0x418c92(0xfc)] = _0xc94773, this[_0x418c92(0xe7)] = _0xb52d2d, this[_0x418c92(0xe9)](), this['paramsString'] = _0x1da603 + ',' + this[_0x418c92(0xe6)][_0x418c92(0xf2)]['join'](','), this[_0x418c92(0xfa)](), this[_0x418c92(0x110)]['sendEvent'](this[_0x418c92(0xdc)][_0x418c92(0x106)][_0x418c92(0xf0)], this[_0x418c92(0x105)]);
        },
        'setTimeOut'() {
            const _0x1ae3a6 = a13_0x3e0b;
            this[_0x1ae3a6(0x101)] = setTimeout(function (_0x1341c6, _0x5d9e5f) {
                const _0xed2f90 = _0x1ae3a6, _0x595ef1 = _0xed2f90(0xe8) + this[_0xed2f90(0xf1)];
                _0x1341c6(_0x5d9e5f, _0x595ef1);
            }[_0x1ae3a6(0xf3)](this), 0x1b58, this[_0x1ae3a6(0x110)][_0x1ae3a6(0x108)], this[_0x1ae3a6(0xdc)][_0x1ae3a6(0x106)][_0x1ae3a6(0xf9)]);
        },
        'clearTimeOut'() {
            const _0x2ed1c4 = a13_0x3e0b;
            clearTimeout(this[_0x2ed1c4(0x101)]);
        },
        'clickPopup'() {
            const _0x751879 = a13_0x3e0b;
            this[_0x751879(0xfd)]();
            const _0x33cdf8 = _0x751879(0x10c) + this[_0x751879(0xe7)] + _0x751879(0xef) + this['checked'];
            this[_0x751879(0x110)][_0x751879(0x108)](this[_0x