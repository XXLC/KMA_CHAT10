) {
            const _0x3e79b4 = a46_0x5a2c;
            this[_0x3e79b4(0x152)]['length'] ? this[_0x3e79b4(0x14c)] = this['$constValue'][_0x3e79b4(0x17d)][_0x3e79b4(0x179)](_0x180403 => {
                const _0x44c932 = _0x3e79b4;
                return this[_0x44c932(0x152)]['find'](_0x2b72da => _0x2b72da == _0x180403[_0x44c932(0x140)] || _0x180403[_0x44c932(0x140)] == 'divider');
            }) : this['menuList'] = this['$constValue']['topMenuList'], purple['tencentGame'] && (this[_0x3e79b4(0x14c)] = this[_0x3e79b4(0x14c)][_0x3e79b4(0x179)](_0x26bb6b => _0x26bb6b[_0x3e79b4(0x140)] != _0x3e79b4(0x160)));
        },
        'loadSettings'(_0x37138e = '') {
            const _0x35e135 = a46_0x5a2c;
            _0x37138e !== '' && (this[_0x35e135(0x152)] = _0x37138e[_0x35e135(0x15e)](','));
            const _0x59f984 = window[_0x35e135(0x167)][_0x35e135(0x155)](this[_0x35e135(0x13a)]);
            this[_0x35e135(0x171)] = _0x59f984 == _0x35e135(0x130), this['setMenuList']();
        },
        'callback'(_0x4ebf95 = '', _0x44b9e7 = {}) {
        },
        'getTextWidth'(_0x5866c3 = '', _0x195807 = '') {
            const _0x37a0e0 = a46_0x5a2c;
            return Math[_0x37a0e0(0x158)](Number(this[_0x37a0e0(0x172)][_0x37a0e0(0x165)](_0x5866c3, _0x195807)));
        },
        'fixWidthOffset'() {
            const _0x5cfdc9 = a46_0x5a2c;
            return Math['round'](Number((this[_0x5cfdc9(0x14f)] - this[_0x5cfdc9(0x181)]) * this[_0x5cfdc9(0x157)][_0x5cfdc9(0x182)]));
        },
        'checkNewFlag'(_0x1eea0e) {
            const _0x2a4998 = a46_0x5a2c;
            _0x1eea0e['flagNew'] && (_0x1eea0e[_0x2a4998(0x132)] = ![], this[_0x2a4998(0x172)][_0x2a4998(0x17c)](this[_0x2a4998(0x157)]['eventName'][_0x2a4998(0x16d)], 'name=' + _0x1eea0e['key']));
        },
        'SetNewBadgeList'(_0x37ed61) {
            const _0x14cc19 = a46_0x5a2c;
            let _0x472858 = _0x37ed61[_0x14cc19(0x15e)](',');
            this[_0x14cc19(0x14c)]['forEach'](_0x39a7a6 => {
                const _0x4e0a9b = _0x14cc19;
                _0x39a7a6['flagNew'] = ![], _0x472858[_0x4e0a9b(0x16a)](_0x1af601 => {
                    const _0x17b9cd = _0x4e0a9b;
                    if (_0x39a7a6[_0x17b9cd(0x140)] == _0x1af601)
                        return _0x39a7a6[_0x17b9cd(0x132)] = !![], !![];
                });
            });
        },
        'changeWindowFix'() {
            const _0xd91bf3 = a46_0x5a2c, _0x5cc6b1 = _0xd91bf3(0x156) + this[_0xd91bf3(0x171)];
            this[_0xd91bf3(0x172)][_0xd91bf3(0x17c)](this[_0xd91bf3(0x157)][_0xd91bf3(0x12e)][_0xd91bf3(0x180)][_0xd91bf3(0x14d)], _0x5cc6b1);
        },
        'SetWindowFix'(_0x5bb3c8) {
            const _0x134d5e = a46_0x5a2c;
            this[_0x134d5e(0x171)] = _0x5bb3c8, window[_0x134d5e(0x167)][_0x134d5e(0x16b)](this['cacheKey'], this['flagWindowFix'][_0x134d5e(0x15f)]());
        },
        'updateL10n'(_0x34d999) {
            const _0x4a2ae0 = a46_0x5a2c;
            this[_0x4a2ae0(0x157)]['updateL10n'](_0x34d999), this[_0x4a2ae0(0x13d)](), this[_0x4a2ae0(0x13e)] = this[_0x4a2ae0(0x172)][_0x4a2ae0(0x184)]('topMenu', 'on'), this[_0x4a2ae0(0x187)] = this[_0x4a2ae0(0x172)][_0x4a2ae0(0x184)](_0x4a2ae0(0x139), _0x4a2ae0(0x141));
            const _0x33533f = _0x2a5185 => new Promise(_0x59ae9e => setTimeout(_0x59ae9e, _0x2a5185)), _0x2e42fd = async () => {
                    const _0x52fcff = _0x4a2ae0;
                    let _0x54f58b = 0x0;
                    while (!![]) {
                        try {
                            await _0x33533f(0x64);
                            let _0x2fba5d = parseInt(getComputedStyle(document[_0x52fcff(0x137)]('#app\x20.menu'), null)[_0x52fcff(0x183)]) + document[_0x52fcff(0x137)]('#app\x20.menu\x20svg')['clientWidth'] + parseInt(getComputedStyle(document[_0x52fcff(0x137)](_0x52fcff(0x12f)), null)[_0x52fcff(0x15b)]) + parseInt(getComputedStyle(document[_0x52fcff(0x137)](_0x52fcff(0x151)), null)['marginRight']) + parseInt(getComputedStyle(document['querySelector'](_0x52fcff(0x134)), null)[_0x52fcff(0x154)]) + 0x2, _0x115848 = document['querySelectorAll']('#app\x20.menu'), _0xae927c = 0x0;
                            _0x115848['forEach'](_0x5d3699 => {
                                const _0x25e2dd = _0x52fcff;
                                let _0x522f9b = _0x5d3699[_0x25e2dd(0x137)]('span.name'), _0x4cb957 = _0x2fba5d + _0x522f9b[_0x25e2dd(0x162)];
                                _0x5d3699[_0x25e2dd(0x137)](_0x25e2dd(0x161)) && (_0x4cb957 += _0x5d3699[_0x25e2dd(0x137)](_0x25e2dd(0x161))[_0x25e2dd(0x16e)]), _0xae927c < _0x4cb957 && (_0xae927c = _0x4cb957);
                            });
                            if (_0xae927c > 0x104)
                                _0xae927c = 0x104;
                            else
                                _0xae927c < 0xb4 && (_0xae927c = 0xb4);
                            _0x115848[_0x52fcff(0x14b)] < 0x7 && (this[_0x52fcff(0x17b)] -= (0x7 - _0x115848[_0x52fcff(0x14b)]) * 0x28);
                            let _0x3f603e = this[_0x52fcff(0x17b)];
                            document[_0x52fcff(0x137)](_0x52fcff(0x17a))[_0x52fcff(0x148)][_0x52fcff(0x153)] = _0xae927c + 'px', _0x115848[_0x52fcff(0x13c)](_0x1e86e6 => {
                                const _0x261fbe = _0x52fcff;
                                let _0x33254b = _0x1e86e6[_0x261fbe(0x137)](_0x261fbe(0x15d));
                                _0x33254b[_0x261fbe(0x136)] != _0x33254b[_0x261fbe(0x16f)] ? (_0x1e86e6[_0x261fbe(0x148)][_0x261fbe(0x17f)] = _0x261fbe(0x147), _0x3f603e += 0x14) : _0x1e86e6[_0x261fbe(0x148)][_0x261fbe(0x17f)] = _0x261fbe(0x12c);
                            }), document['querySelector'](_0x52fcff(0x17a))[_0x52fcff(0x148)][_0x52fcff(0x17f)] = _0x3f603e + 'px';
                            let _0xfcac89 = [];
                            _0xfcac89['push'](_0x52fcff(0x13f) + _0xae927c), _0xfcac89[_0x52fcff(0x176)](_0x52fcff(0x170) + _0x3f603e), this[_0x52fcff(0x172)]['sendEvent'](this[_0x52fcff(0x157)][_0x52fcff(0x12e)][_0x52fcff(0x14e)], _0xfcac89);
                            break;
                        } catch (_0x8692d9) {
                            if (++_0x54f58b > 0x3)
                                break;
                        }
                    }
                };
            _0x2e42fd();
        }
    }
});
window['vm'] = vm;
function a46_0x5a2c(_0x41fc06, _0x3977cf) {
    const _0x4632a1 = a46_0x4632();
    return a46_0x5a2c = function (_0x5a2c61, _0x2d8830) {
        _0x5a2c61 = _0x5a2c61 - 0x12c;
        let _0x4d0779 = _0x4632a1[_0x5a2c61];
        return _0x4d0779;
    }, a46_0x5a2c(_0x41fc06, _0x3977cf);
}
function a46_0x4632() {
    const _0x27eb70 = [
        'offsetWidth',
        '17285070ieJtrr',
        '236wIVwih',
        'getTextWidth',
        'font',
        'localStorage',
        'getMenu',
        '811174NMrURA',
        'some',
        'setItem',
        '1827396tWsTuz',
        'newbadge',
        'scrollWidth',
        'offsetHeight',
        'height=',
        'flagWindowFix',
        '$commonService',
        'replace',
        'makeCacheKey',
        'close',
        'push',
        'topMenuFixOff',
        'windowArgs',
        'filter',
        '#app',
        'defaultHeight',
        'sendEvent',
        'topMenuList',
        'menuInfo',
        'height',
        'topBar',
        'fixWidth',
        'transConstant',
        'paddingLeft',
        'translate2',
        'OFF',
        'name',
        'offTitle',
        '40px',
        '28521IBHwbe',
        'eventName',
        '#app\x20.menu\x20.icon',
        'true',
        'top_fixed',
        'flagNew',
        '6215960PKzGjU',
        '#app\x20.menu',
        '16yudALa',
        'scrollHeight',
        'querySelector',
        'openWindow',
        'topMenu',
        'cacheKey',
        '260px',
        'forEach',
        'setMenuList',
        'onTitle',
        'width=',
        'key',
        'off',
        '19309KYXMbk',
        '66OkHyYF',
        'initLanguageByUrl',
        '5HUTnDX',
        '12kYNSSL',
        '60px',
        'style',
        'fixWidthOffset',
        '1070586shNXFK',
        'length',
        'menuList',
        'fix',
        'resize',
        'newFixWidth',
        'menu/fixedwindow',
        '#app\x20.menu\x20.name',
        'menuNameList',
        'width',
        'paddingRight',
        'getItem',
        'fixed=',
        '$constValue',
        'round',
        'svg',
        'topMenuFixOn',
        'marginRight',
        'menuName',
        'span.name',
        'split',
        'toString',
        'openSourceLicense',
        'article.window-fix'
    ];
    a46_0x4632 = function () {
        return _0x27eb70;
    };
    return a46_0x4632();
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                        