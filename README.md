Browser mobile checker
========

Mobile checker for browsers. This library allows you to detect browsers running on android and ios mobile devices.
Also, this tool allows you to identify if the mobile browser supports html media capture instructions (also can be used as a good practical way to know if it's not a mobile device). 
 

How to install
-------------------

Install browser-mobile-checker through NPM:

```
npm install @fidtech-sa/browser-mobile-checker
```
 


How to Use
----------

**Javascript**:
```javascript

const mobileChecker = require('browser-mobile-checker');


// Mobile browser checking, it detects if browsers devtools emulator is used
const isMobile = mobileChecker.isMobileDevice();
// Check if browsers supports html media capture
const supportedMediaCapture = mobileChecker.supportsHtmlCapture();
// Check if the broweser an in app browser 
const isIAB = mobileChecker.isIAB();
// Check if the broweser is the isntagram IAB
const isInstagramIAB = mobileChecker.isInstagramIAB();
// Check if the broweser is the Facebook IAB
const isFacebookIAB = mobileChecker.isFacebookIAB();
// Check if the broweser in running on an android device
const isAndroid = mobileChecker.isAndroid();
// Check if the broweser supports cordova
const isCordova = mobileChecker.isCordova();
// Check if the broweser is Edge
const isEdge = mobileChecker.isEdge();
// Check if the broweser is Firefox
const isFirefox = mobileChecker.isFirefox();
// Check if the broweser is Chrome based
const isChrome = mobileChecker.isChrome();
// Check if the broweser is the original version of Chrome
const isOriginalChrome = mobileChecker.isOriginalChrome();
// Check if the broweser is chrome of IOS
const isChromeIOS = mobileChecker.isChromeIOS();
// Check if the broweser is based on chromium
const isChromiumBased = mobileChecker.isChromiumBased();
// Check if the broweser is Internet Explorer
const isIE = mobileChecker.isIE();
// Check if the broweser is running on a IOS device
const isIOS = mobileChecker.isIOS();
// Check if the broweser is Opera
const isOpera = mobileChecker.isOpera();
// Check if the broweser is Safari
const isSafari = mobileChecker.isSafari();
// Check if the broweser is DuckDuckGo
const isDuckDuckGo = mobileChecker.isDuckDuckGo();

```

**Typescript**:
```typescript

declare var require: any;
const mobileChecker = require('browser-mobile-checker');

// Mobile browser checking, it detects if browsers devtools emulator is used
const isMobile = mobileChecker.isMobileDevice();
// Check if browsers supports html media capture
const supportedMediaCapture = mobileChecker.supportsHtmlCapture();
// Check if the broweser an in app browser 
const isIAB = mobileChecker.isIAB();
// Check if the broweser is the isntagram IAB
const isInstagramIAB = mobileChecker.isInstagramIAB();
// Check if the broweser is the Facebook IAB
const isFacebookIAB = mobileChecker.isFacebookIAB();
// Check if the broweser in running on an android device
const isAndroid = mobileChecker.isAndroid();
// Check if the broweser supports cordova
const isCordova = mobileChecker.isCordova();
// Check if the broweser is Edge
const isEdge = mobileChecker.isEdge();
// Check if the broweser is Firefox
const isFirefox = mobileChecker.isFirefox();
// Check if the broweser is Chrome based
const isChrome = mobileChecker.isChrome();
// Check if the broweser is the original version of Chrome
const isOriginalChrome = mobileChecker.isOriginalChrome();
// Check if the broweser is chrome of IOS
const isChromeIOS = mobileChecker.isChromeIOS();
// Check if the broweser is based on chromium
const isChromiumBased = mobileChecker.isChromiumBased();
// Check if the broweser is Internet Explorer
const isIE = mobileChecker.isIE();
// Check if the broweser is running on a IOS device
const isIOS = mobileChecker.isIOS();
// Check if the broweser is Opera
const isOpera = mobileChecker.isOpera();
// Check if the broweser is Safari
const isSafari = mobileChecker.isSafari();
// Check if the broweser is DuckDuckGo
const isDuckDuckGo = mobileChecker.isDuckDuckGo();



```


Dependencies
----------

No dependencies, browser-mobile-checker just needs standard JavaScript environment.

Environment
-----------

Client-side. Standard browsers (Tested on Chrome, Safari, Edge, Opera, IE, several chromium based browsers, DuckDuckGo and more).

Issues
------

Just give us the details. Environment, code, input, output, etc. 

License
-------

This software is released under the MIT License, see LICENSE.txt.
