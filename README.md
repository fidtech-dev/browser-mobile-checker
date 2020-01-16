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


Dependencies
----------

No dependencies, browser-mobile-checker just needs standard JavaScript environment.

Environment
-----------

Client-side. Standard browsers (Tested on Chrome, Safari, and Edge).

Issues
------

Just give us the details. Environment, code, input, output, etc. 

License
-------

This software is released under the MIT License, see LICENSE.txt.
