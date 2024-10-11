le': this[_0x2ab6b3(0xb9)]['translate'](_0x2ab6b3(0x90)),
                'flagChanged': ![],
                'resolutions': [],
                'currentResolution': ''
            };
        },
        'computed': {
            'saveButtonClass'() {
                const _0x221939 = a23_0x587d0e, _0x42baee = [
                        'common',
                        _0x221939(0xab)
                    ];
                return !this[_0x221939(0xb7)] && _0x42baee[_0x221939(0x9d)]('disable'), _0x42baee;
            }
        },
        'methods': {
            'init'() {
                const _0x14e750 = a23_0x587d0e;
                this['menuInfo'] = this[_0x14e750(0xb9)][_0x14e750(0x82)](this[_0x14e750(0x81)]), this[_0x14e750(0xb5)][_0x14e750(0x9c)](this['menuInfo']);
            },
            'getClass'(_0x398e0e) {
                const _0x182379 = a23_0x587d0e, _0xfc7a59 = ['resolution-item'];
                return _0x398e0e['selected'] && _0xfc7a59[_0x182379(0x9d)](_0x182379(0xa6)), _0x398e0e['disabled'] && _0xfc7a59['push']('disabled'), _0xfc7a59;
            },
            'selected'(_0x4d75bf = {}) {
                const _0x27c994 = a23_0x587d0e, {
                        resolution: _0x47c64d,
                        disabled: _0xff8dc1
                    } = _0x4d75bf;
                if (_0xff8dc1)
                    return;
                this[_0x27c994(0xad)][_0x27c994(0xae)](_0x17cf9d => _0x17cf9d[_0x27c994(0xa6)] = ![]), _0x4d75bf[_0x27c994(0xa6)] = !![], this[_0x27c994(0x8f)] = _0x47c64d, this[_0x27c994(0xb7)] = !![], this['$resolutionService']['selected'](_0x4d75bf);
            },
            'close'() {
                const _0x2c5cc9 = a23_0x587d0e;
                this[_0x2c5cc9(0xb5)]['close']();
            },
            'cancel'() {
                const _0x2b70c0 = a23_0x587d0e;
                this[_0x2b70c0(0xb5)][_0x2b70c0(0x93)]();
            },
            'save'() {
                const _0x14a92c = a23_0x587d0e, _0x2b1c18 = this[_0x14a92c(0xad)][_0x14a92c(0x84)](_0x2e42c4 => _0x2e42c4[_0x14a92c(0xa6)] == !![])[0x0];
                this[_0x14a92c(0xb7)] = ![], this[_0x14a92c(0xb5)][_0x14a92c(0xab)](this[_0x14a92c(0x81)], this[_0x14a92c(0x8f)], _0x2b1c18);
            },
            'tooltipMouseOver'(_0x27b7e1 = '', _0x9d8410 = {}) {
                const _0x42bbcf = a23_0x587d0e;
                _0x9d8410[_0x42bbcf(0x94)] = this[_0x42bbcf(0xb9)][_0x42bbcf(0x87)](_0x27b7e1, { '{gameTitle}': purple['gameTitle'] });
            },
            'tooltipMouseLeave'(_0x4f1f4a = {}) {
                const _0x5c9787 = a23_0x587d0e;
                _0x4f1f4a[_0x5c9787(0x94)] = '';
            },
            'callback'(_0x132446 = '', _0xa2745a = {}) {
                const _0x36437a = a23_0x587d0e;
                this[_0x36437a(0xb5)][_0x36437a(0xa7)](_0x132446, _