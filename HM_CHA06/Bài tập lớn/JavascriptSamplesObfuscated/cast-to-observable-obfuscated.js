var _0x19f9=['isPromise','fromPromise','isObservable'];(function(_0x230789,_0x246dde){var _0x11c10c=function(_0x288fab){while(--_0x288fab){_0x230789['push'](_0x230789['shift']());}};_0x11c10c(++_0x246dde);}(_0x19f9,0x77));var _0x1dc5=function(_0xb67384,_0x27295a){_0xb67384=_0xb67384-0x0;var _0x156d7c=_0x19f9[_0xb67384];return _0x156d7c;};import{Observable,helpers}from'rx';export default function castToObservable(_0x383f02){if(Observable[_0x1dc5('0x0')](_0x383f02)){return _0x383f02;}if(helpers[_0x1dc5('0x1')](_0x383f02)){return Observable[_0x1dc5('0x2')](_0x383f02);}return Observable['of'](_0x383f02);}