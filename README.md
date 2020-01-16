Browser mobile checker
========

Mobile checker for browsers. This library allows to detect android and ios mobile devices.
Also, this tool allows to identify if the mobile browser supports html media capture instructions. 
 

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


const isMobile = mobileChecker.isMobileDevice();
const supportedMediaCapture = mobileChecker.supportsHtmlCapture();
console.log(isMobile);
console.log(supportedMediaCapture);

```

**Typescript**:
```typescript

declare var require: any;
const mobileChecker = require('browser-mobile-checker');


const isMobile = mobileChecker.isMobileDevice();
const supportedMediaCapture = mobileChecker.supportsHtmlCapture();
console.log(isMobile);
console.log(supportedMediaCapture);

```



Dependency
----------

No dependency.  browser-mobile-checker just needs standard JavaScript environment.

Environment
-----------

Client-side. Standard browsers (Tested on Chrome, Safari, and IE).

Issues
------

Give us details. Environment, code, input, output. We can do nothing with abstract.

License
-------

This software is released under the MIT License, see LICENSE.txt.
