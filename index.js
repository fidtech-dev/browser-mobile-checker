(function () {
    "use strict";
    var that = {};
    that.version = "1.0.0";
    that.supportsHtmlCapture = () => {
        const i = document.createElement('input');
        i.setAttribute('capture',  'environment');
        return !!i['capture'];
    }

    that.isMobileDevice = () => {
        if (isMobileBrowser()) {
            if (isArchFamilyArchitecture() || isIosArchitecture()) {
                return true;
            } else {
                if (isNotMobileArchitecture()) {
                    return false;
                } else {
                    return true;
                }
            }
        } else {
            return false;
        }
    }
    that.isIAB = () => { // Is in app borwser
        const rules = [
            'WebView',
            '(iPhone|iPod|iPad)(?!.*Safari\/)',
            'Android.*(wv|\.0\.0\.0)',
        ];
        const regex = new RegExp(`(${rules.join('|')})`, 'ig');
        return Boolean(navigator.userAgent.match(regex));
    }
    that.isFacebookIAB = () => {
        return navigator.userAgent.match(/(FB_IAB)/i);
    }
    that.isInstagramIAB = () => {
        return navigator.userAgent.match(/(Instagram)/i);
    }
    that.isAndroid  = () => {
        return /Android/.test(navigator.userAgent);
    }
    that.isCordova  = () => {
        return !!(window).cordova;
    }
    that.isEdge  = () => {
        return /Edge/.test(navigator.userAgent);
    }
    that.isFirefox  = () => {
        return /Firefox/.test(navigator.userAgent);
    }
    that.isChrome  = () => {
        return  /Google Inc/.test(navigator.vendor);
    }
    that.isOriginalChrome  = () => {
        return /Mobile Safari/.test(navigator.userAgent);
    }
    that.isChromeIOS  = () => {
        return /CriOS/.test(navigator.userAgent);
    }
    that.isChromiumBased = () => {
       return  !!(window).chrome && !/Edge/.test(navigator.userAgent)
    }
    that.isIE = () => {
        return /Trident/.test(navigator.userAgent);
    }
    that.isIOS = () => {
        return /(iPhone|iPad|iPod)/.test(navigator.platform);
    }
    that.isOpera = () => {
        return /OPR/.test(navigator.userAgent);
    }
    that.isSafari = () => {
        return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    }
    that.isDuckDuckGo = () => {
        return /DuckDuckGo/.test(navigator.userAgent);
    }

    // Internal functions

    function isArchFamilyArchitecture() {
        return navigator.platform.match(/arch/i);
    }

    function isIosArchitecture() {
        return navigator.platform.match(/iphone/i);
    }

    function isMobileBrowser() {
        return (navigator.userAgent.match(/(android|ip(hone|ad|od))/i) && (!navigator.platform || !navigator.platform.match(/(win|mac)/i))) ||
            navigator.userAgent.match(/(windows phone|iemobile|wpdesktop|blackberry)/i);
    }

    function isNotMobileArchitecture() {
        return navigator.platform.match(/Macintosh|MacIntel|MacPPC|Mac68K|Pike|FreeBSD|i686|MSM8960|ppc64|x86_64|Pocket|Win|Nintendo/i);
    }
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = that;
        }
        exports.mobile_checker = that;
    } else {
        window.mobile_checker = that;
    }
})();
