xf0)]), this[_0x590673(0xdb)][_0x590673(0x10f)](this['menuInfo']);
    },
    'data'() {
        const _0xf1c39 = a14_0x1c2b6c;
        return {
            'menuName': _0xf1c39(0xe4),
            'menuInfo': this[_0xf1c39(0xe5)]['getMenu']('macro'),
            'macroTitle2': this[_0xf1c39(0xe5)][_0xf1c39(0x10a)](_0xf1c39(0x114)),
            'recordTitle': this[_0xf1c39(0xe5)][_0xf1c39(0x10a)](this[_0xf1c39(0x134)] ? _0xf1c39(0x137) : _0xf1c39(0x113)),
            'timeout': ![],
            'flagRecording': ![],
            'flagPlaying': ![],
            'flagRunningStop': ![],
            'flagEnter': ![],
            'enterTimestamp': new Date()['getTime'](),
            'playingMacroKey': ![],
            'favoriteLimit': 0x5,
            'newNameIdx': 0x1,
            'cacheKey': _0xf1c39(0x107),
            'newMacroKeys': [],
            'svg': this['$constValue']['svg'],
            'items': [],
            'favoriteItems': [],
            'macroData': {},
            'limit': 0x32,
            'toast': this[_0xf1c39(0xf7)][_0xf1c39(0x133)][_0xf1c39(0xe6)],
            'limitMouseDown': new Date()[_0xf1c39(0xf6)](),
            'position': 'right',
            'topBar': {
                'interval': null,
                'toast': ![],
                'time': 0x0,
                'text': '-',
                'item': {
                    'name': '',
                    'repeat': {
                        'flagLoading': ![],
                        'type': 'repeat',
                        'count': 0x0,
                        'period': {
                            'hour': 0x0,
                            'minute': 0x0,
                            'second': 0x0
                        },
                        'interval': {
                            'hour': 0x0,
                            'minute': 0x0,
                            'second': 0x0
                        }
                    }
                }
            }
        };
    },
    'computed': {
        'getFavoriteItems'() {
            const _0x4515da = a14_0x1c2b6c;
            let _0x1e28ab = this['items']['filter'](_0x4cf0aa => _0x4cf0aa[_0x4515da(0xf2)]);
            return _0x1e28ab = this[_0x4515da(0xe5)][_0x4515da(0x11d)](_0x1e28ab, _0x4515da(0xd7)), _0x1e28ab['slice'](0x0, this[_0x4515da(0x135)]);
        },
        'headerClass'() {
            const _0x42d7cc = a14_0x1c2b6c, _0x40c830 = [
                    _0x42d7cc(0x106),
                    _0x42d7cc(0xdd)
                ];
            return this[_0x42d7cc(0x134)] && _0x40c830[_0x42d7cc(0x108)]('recording'), _0x40c830;
        },
        'topBarToast'() {
            const _0x2a6191 = a14_0x1c2b6c, _0x40d849 = this[_0x2a6191(0x134)] ? _0x2a6191(0xe2) : _0x2a6191(0xfe);
            return this[_0x2a6191(0xe5)][_0x2a6191(0x10a)](_0x40d849);
        }
    },
    'watch': {
        'flagPlaying'(_0x5b987a = ![]) {
            const _0x145b3c = a14_0x1c2b6c;
            this[_0x145b3c(0xf9)](!_0x5b987a);
        },
        'flagRecording'(_0x1032de = ![]) {
            this['topBarDateCal'](!_0x1032de);
        }
    },
    'methods': {
        'setMenuName'() {
            const _0x4e50e0 = a14_0x1c2b6c, _0x24068a = [
                    {
                        'key': _0x4e50e0(0x10b),
                        'name': _0x4e50e0(0xe4)
                    },
                    {
                        'key': _0x4e50e0(0x131),
                        'name': _0x4e50e0(0x123)
                    },
                    {
                        'key': _0x4e50e0(0xdf),
                        'name': _0x4e50e0(0x11e)
                    }
                ];
            _0x24068a[_0x4e50e0(0x102)](({
                key: _0x530c3d,
                name: _0x133399
            }) => {
                const _0x30597b = _0x4e50e0;
                if (document[_0x30597b(0x115)](_0x530c3d)[_0x30597b(0xdc)])
                    return this[_0x30597b(0xf0)] = _0x133399, !![];
            });
        },
        'close'() {
            const _0x105d05 = a14_0x1c2b6c;
            this[_0x105d05(0x126)][_0x105d05(0x130)](this[_0x105d05(0xf0)], this[_0x105d05(0x11f)]), this[_0x105d05(0xdb)][_0x105d05(0x101)]();
        },
        'onmousedown'() {
        },
        'topBarDateCal'(_0x3191d9 = !![]) {
            const _0x47257b = a14_0x1c2b6c, _0x46b64d = this[_0x47257b(0x117)];
            if (_0x3191d9) {
                clearInterval(_0x46b64d[_0x47257b(0x128)]);
                return;
            }
            _0x46b64d[_0x47257b(0x128)] = setInterval(() => {
                const _0x4ee532 = _0x47257b, {repeat: _0x258f5b} = _0x46b64d[_0x4ee532(0xfa)];
                switch (_0x258f5b[_0x4ee532(0x12e)]) {
                case _0x4ee532(0xfb):
                    break;
                case 'time':
                    _0x46b64d[_0x4ee532(0xf4)] = this[_0x4ee532(0xe5)][_0x4ee532(0x121)](_0x46b64d[_0x4ee532(0x11b)]++);
                    break;
                case _0x4ee532(0xe3):
                    break;
                }
            }, 0x3e8);
        },
        'topBarClose'(_0x12e817, _0x35267f = !![]) {
            const _0x25da8c = a14_0x1c2b6c;
            this[_0x25da8c(0x117)][_0x25da8c(0xe6)] = ![], this[_0x25da8c(0xdb)]['topBarClose'](_0x35267f);
        },
        'importClick'() {
            const _0x2d5871 = a14_0x1c2b6c;
            this[_0x2d5871(0xdb)][_0x2d5871(0x116)]();
        },
        'resetItem'() {
        },
        'deleteItem'(_0x484522 = {}) {
            const _0x56052e = a14_0x1c2b6c;
            this[_0x56052e(0xdb)][_0x56052e(0x12d)](_0x484522);
        },
        'saveItems'() {
            const _0x3d1b73 = a14_0x1c2b6c;
            this['$macroService'][_0x3d1b73(0xe0)]();
        },
        'callbackDeleteItem'(_0x565145) {
            const _0x515eb9 = a14_0x1c2b6c;
            let _0x47e867 = this['items'][_0x565145];
            if (typeof _0x47e867[_0x515eb9(0xd8)] === _0x515eb9(0x12a))
                return;
            delete this[_0x515eb9(0xe1)][_0x515eb9(0xfc)][_0x47e867[_0x515eb9(0xd8)]], _0x47e867['flagFavorite'] = !_0x47e867[_0x515eb9(0xf2)];
            if (!_0x47e867['flagFavorite'])
                this['$macroService'][_0x515eb9(0x122)](_0x47e867);
            this[_0x515eb9(0x11f)][_0x515eb9(0x11a)](_0x565145, 0x1), this[_0x515eb9(0xe0)]();
        },
        'copyItem'() {
        },
        'saveData'(_0x4ce55d = {}) {
            const _0x5b3b32 = a14_0x1c2b6c;
            this[_0x5b3b32(0xdb)][_0x5b3b32(0xf8)](_0x4ce55d);
        },
        'topMacroPlayToggle'() {
        },
        'setFlagPlaying'(_0x3a158d) {
            const _0x3167cc = a14_0x1c2b6c;
            _0x3a158d && (this['topBar'][_0x3167cc(0xe6)] = ![], this['flagRecording'] = ![]), this[_0x3167cc(0x117)][_0x3167cc(0xd9)] = new Date(), this[_0x3167cc(0x132)] = _0x3a158d;
        },
        'stopAllItems'() {
            const _0x175b69 = a14_0x1c2b6c;
            if (typeof this['items'] === _0x175b69(0x12a))
                return;
            this['items'][_0x175b69(0x111)](_0x1c6722 => _0x1c6722[_0x175b69(0x105)] = ![]);
        },
        'playMacro'(_0x29daf6 = {}) {
            const _0xab8d0c = a14_0x1c2b6c;
            if (this[_0xab8d0c(0x134)])
                return;
            this[_0xab8d0c(0x129)](), _0x29daf6[_0xab8d0c(0x105)] = !![], this[_0xab8d0c(0xdb)]['playMacro'](_0x29daf6);
        },
        'stopMacro'() {
            const _0x5d7f04 = a14_0x1c2b6c;
            this[_0x5d7f04(0x129)](), this[_0x5d7f04(0xdb)]['stopMacro']();
        },
        'renameItem'(_0x11f864 = {}) {
            const _0x5802d8 = a14_0x1c2b6c;
            this[_0x5802d8(0xf8)](_0x11f864);
        },
        'recordingStart'() {
            const _0x4826ac = a14_0x1c2b6c;
            this[_0x4826ac(0x129)](), this[_0x4826ac(0x117)][_0x4826ac(0x11b)] = 0x0, this['topBar'][_0x4826ac(0xd9)] = new Date(), this[_0x4826ac(0x117)][_0x4826ac(0xe6)] = ![], this[_0x4826ac(0x134)] = !![], this[_0x4826ac(0x132)] = ![], this['newMacroKeys'] = [];
        },
        'recordingStop'() {
            const _0x310b0f = a14_0x1c2b6c;
            this[_0x310b0f(0x134)] = ![];
        },
        'recordClick'() {
            const _0x47bc23 = a14_0x1c2b6c;
            if (this[_0x47bc23(0x134)])
                return;
            const _0x4c4fe6 = this[_0x47bc23(0xf1)];
            if (this['items'][_0x47bc23(0xdc)] >= _0x4c4fe6) {
                this['toastShow'](_0x47bc23(0xf5), { 'limit': _0x4c4fe6 });
                return;
            }
            this[_0x47bc23(0xe7)](), this[_0x47bc23(0xdb)][_0x47bc23(0x118)](this[_0x47bc23(0xf0)]);
        },
        'stopClick'() {
            const _0x34d30a = a14_0x1c2b6c;
            if (!this[_0x34d30a(0x134)])
                return;
            this[_0x34d30a(0xeb)](), this[_0x34d30a(0xdb)][_0x34d30a(0x10c)]();
        },
        'src'(_0x10414b = '', _0x943c10 = {}) {
            const _0x310190 = a14_0x1c2b6c;
            let _0x27c8ee = '';
            switch (_0x10414b) {
            case _0x310190(0x11c):
                _0x27c8ee = this[_0x310190(0x134)] ? this[_0x310190(0x119)][_0x310190(0x100)] : this[_0x310190(0x119)][_0x310190(0x120)];
                break;
            }
            return _0x27c8ee;
        },
        'className'(_0xf7695c = '', _0x2c29ff = {}) {
            const _0x5ade10 = a14_0x1c2b6c, _0x9b2d04 = [];
            switch (_0xf7695c) {
            case _0x5ade10(0xfa):
                if (_0x2c29ff[_0x5ade10(0x105)])
                    _0x9b2d04[_0x5ade10(0x108)](_0x5ade10(0xef));
                break;
            case _0x5ade10(0x117):
                _0x9b2d04[_0x5ade10(0x108)](_0x5ade10(0xdf)), _0x9b2d04[_0x5ade10(0x108)](this[_0x5ade10(0x134)] ? _0x5ade10(0xe8) : 'playing');
                break;
            }
            return _0x9b2d04;
        },
        'showPopup'(_0x58bf99 = '') {
            const _0x263420 = a14_0x1c2b6c;
            this['flagEnter'] = ![], this[_0x263420(0x117)]['toast'] = ![], this[_0x263420(0xdb)][_0x263420(0x104)](_0x58bf99);
        },
        'hidePopup'(_