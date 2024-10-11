x20\x20\x20<slot\x20name=\x22row3\x22\x20:item=\x22item\x22\x20:toggle=\x22toggle\x22\x20:save=\x22save\x22\x20:className=\x22className\x22></slot>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</transition>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<!--\x20Error\x20-->\x0a\x20\x20\x20\x20\x20\x20<div\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20v-if=\x27item.error\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20:class=\x22item.errorClass\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20:style=\x22item.errorStyle\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20@click=\x22toggle(item,\x20\x27error\x27,\x20false)\x22\x0a\x20\x20\x20\x20\x20\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20v-html=\x22item.error\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<!--\x20VirtualKey\x20Change\x20Notify\x20-->\x0a\x20\x20\x20\x20\x20\x20<div\x0a\x20\x20\x20\x20\x20\x20\x20\x20v-if=\x27item.flagExpand\x20&&\x20item.flagUpdateVersion\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20class=\x22common-toast\x20right2\x22\x0a\x20\x20\x20\x20\x20\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20v-html=\x22virtualKeyChangeNotifyTitle\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20@click=\x22closeNotify(item)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20v-html=\x22$constValue.svg.topToastCloseBtn\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</transition-group>\x0a\x20\x20\x0a\x20\x20<!--\x20footer\x20-->\x0a\x20\x20<div\x20v-if=\x27exportMng.show\x27\x20class=\x22footer2\x22>\x0a\x20\x20\x20\x20<!--\x20Border\x20-->\x0a\x20\x20\x20\x20<div\x20class=\x22border\x22><div></div></div>\x0a\x20\x20\x0a\x20\x20\x20\x20<label\x20class=\x22check-box-container\x22>\x0a\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20v-model=\x22exportMng.flagAll\x22\x20@change=\x22exportAll\x22>\x0a\x20\x20\x20\x20\x20\x20<span\x20class=\x22check-mark\x22></span>\x0a\x20\x20\x20\x20\x20\x20<div\x20v-html=\x22selectAllTitle\x22></div>\x0a\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20<div\x20name=\x22button\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x0a\x20\x20\x20\x20\x20\x20\x20\x20v-html=\x22cancelTitle\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20@click=\x22exportOff\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20class=\x22common\x20cancel\x22\x0a\x20\x20\x20\x20\x20\x20></button>\x0a\x20\x20\x20\x20\x20\x20<button\x0a\x20\x20\x20\x20\x20\x20\x20\x20v-html=\x22exportTitle\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20@click=\x22exportItems\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20class=\x27common\x20save\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20:class=\x22exportClass\x22\x0a\x20\x20\x20\x20\x20\x20></button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x20\x20\x0a\x20\x20<slot\x20v-else-if=\x22!isMacroType\x22\x20name=\x22footer\x22></slot>\x0a</div>\x0a',
    'props': {
        'type': '',
        'limit': {
            'type': Number,
            'default': 0x32
        },
        'flagRecording': {
            'type': Boolean,
            'default': ![]
        },
        'items': {
            'type': Array,
            'default': []
        },
        'cacheKey': ''
    },
    'data'() {
        const _0xc3b153 = a5_0x321f;
        return {
            'svg': this[_0xc3b153(0x172)][_0xc3b153(0x105)],
            'exportMng': this['$exportService']['exportMng'],
            'addTitle': this[_0xc3b153(0x129)][_0xc3b153(0x14b)]('add'),
            'importTitle': this['$commonService'][_0xc3b153(0x14b)](this[_0xc3b153(0x132)] ? this[_0xc3b153(0x172)]['msg'][_0xc3b153(0x135)] : this[_0xc3b153(0x172)]['msg'][_0xc3b153(0xee)]),
            'importTitle2': this['$commonService'][_0xc3b153(0x14b)](_0xc3b153(0x119)),
            'exportTitle': this[_0xc3b153(0x129)][_0xc3b153(0x14b)](_0xc3b153(0x116)),
            'favoriteEmpty2': this['$commonService'][_0xc3b153(0x14b)]('favoriteEmpty2'),
            'flagActiveTitle': this[_0xc3b153(0x129)][_0xc3b153(0x14b)](this[_0xc3b153(0x132)] ? _0xc3b153(0xf0) : this[_0xc3b153(0x172)][_0xc3b153(0x120)][_0xc3b153(0x106)]),
            'selectAllTitle': this[_0xc3b153(0x129)][_0xc3b153(0x14b)](_0xc3b153(0x146)),
            'cancelTitle': this[_0xc3b153(0x129)]['translate'](_0xc3b153(0x159)),
            'exportTitle': this[_0xc3b153(0x129)][_0xc3b153(0x14b)](_0xc3b153(0x116)),
            'virtualKeyChangeNotifyTitle': this[_0xc3b153(0x129)][_0xc3b153(0x14b)]('virtualKeyChangeNotify'),
            'errorItem': {
                'error': ![],
                'errorStyle': {}
            }
        };
    },
    'computed': {
        'getItems'() {
            const _0x3d3fd7 = a5_0x321f;
            let _0x67eec9 = this[_0x3d3fd7(0x129)][_0x3d3fd7(0x122)](this[_0x3d3fd7(0x15f)]);
            return _0x67eec9 = this[_0x3d3fd7(0x129)][_0x3d3fd7(0xda)](_0x67eec9, _0x3d3fd7(0xed)), _0x67eec9 = this['$commonService'][_0x3d3fd7(0xda)](_0x67eec9, _0x3d3fd7(0xf7)), _0x67eec9 = this['$commonService'][_0x3d3fd7(0x122)](_0x67eec9, 'createdAtFavorite'), _0x67eec9;
      