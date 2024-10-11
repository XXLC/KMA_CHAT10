function a11_0x2f92(_0x2d234e, _0x155457) {
    var _0x2d52ee = a11_0x2d52();
    return a11_0x2f92 = function (_0x2f923e, _0x132b6a) {
        _0x2f923e = _0x2f923e - 0x1b0;
        var _0x514187 = _0x2d52ee[_0x2f923e];
        return _0x514187;
    }, a11_0x2f92(_0x2d234e, _0x155457);
}
var a11_0xa3da14 = a11_0x2f92;
function a11_0x2d52() {
    var _0x2f8c12 = [
        'js/components/MacroConfig.js',
        'config',
        '750103TBcBAX',
        'js/service/CommonService.js',
        'js/service/ChatBubbleService.js',
        'js/service/RecordTopService.js',
        'js/components/MultiInventory.js',
        'js/service/MacroService.js',
        'js/service/SidebarService.js',
        '33NrQhUU',
        '14783041yZGTzh',
        '441692qzkfvd',
        'constValueService',
        'js/service/PriceService.js',
        'js/service/l10n.js',
        '80GVuMyC',
        'js/service/AlbumService.js',
        'js/service/ShortcutService.js',
        'js/service/svg.js',
        '117wifqcu',
        '24mjlTKe',
        'js/components/HighlightModal.js',
        'js/service/VirtualkeyService.js',
        'js/service/HighlightService.js',
        '2FIjvuM',
        '34602ByzPCm',
        'js/service/MultiSettingService.js',
        'serviceMain',
        '3340270KfBwBh',
        '9448WdnEfJ',
        '574auezya',
        'js/service/CommonModalService.js',
        'js/service/VolumeService.js',
        'js/components/Toast.js',
        '580821iFAlsy',
        'js/service/TurnOffService.js'
    ];
    a11_0x2d52 = function () {
        return _0x2f8c12;
    };
    return a11_0x2d52();
}
(function (_0x15efd4, _0x5557ab) {
    var _0x567cbb = a11_0x2f92, _0x21bf0a = _0x15efd4();
    while (!![]) {
        try {
            var _0x29db0e = parseInt(_0x567cbb(0x1c0)) / 0x1 + parseInt(_0x567cbb(0x1b2)) / 0x2 * (parseInt(_0x567cbb(0x1bc)) / 0x3) + -parseInt(_0x567cbb(0x1c9)) / 0x4 * (parseInt(_0x567cbb(0x1cd)) / 0x5) + parseInt(_0x567cbb(0x1b3)) / 0x6 * (parseInt(_0x567cbb(0x1b8)) / 0x7) + -parseInt(_0x567cbb(0x1b7)) / 0x8 * (-parseInt(_0x567cbb(0x1d1)) / 0x9) + -parseInt(_0x567cbb(0x1b6)) / 0xa * (parseInt(_0x567cbb(0x1c7)) / 0xb) + parseInt(_0x567cbb(0x1d2)) / 0xc * (parseInt(_0x567cbb(0x1c8)) / 0xd);
            if (_0x29db0e === _0x5557ab)
                break;
            else
                _0x21bf0a['push'](_0x21bf0a['shift']());
        } catch (_0x1c3e65) {
            _0x21bf0a['push'](_0x21bf0a['shift']());
        }
    }
}(a11_0x2d52, 0xe4dce), requirejs[a11_0xa3da14(0x1bf)]({
    'baseUrl': 'js',
    'paths': { 'serviceMain': 'service/main' },
    'shim': {
        'serviceMain': {
            'deps': [
                a11_0xa3da14(0x1cc),
                a11_0xa3da14(0x1d0),
                'js/service/ConstValueService.js',
                a11_0xa3da14(0x1c1)
            ]
        },
        'constValueService': {
            'deps': [
                'js/service/l10n.js',
                a11_0xa3da14(0x1d0)
            ]
        },
        'commonService': { 'deps': [a11_0xa3da14(0x1ca)] },
        'top': { 'deps': [a11_0xa3da14(0x1b5)] },
        'top_toast': {