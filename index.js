(function () {
    "use strict";
    var that = {};
    that.version = "1.0.0";
    that.supportsHtmlCapture = function() {
        const i = document.createElement('input');
        i.setAttribute('capture',  'environment');
        return !!i['capture'];
    }

    that.isMobileDevice = function() {
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

