# browser-extensions

A simple Chrome browser extension for learning purposes.

## Design

This sub-project contains the source code for a simple Chrome browser extension named "Change Header Text".

The extension will change the text of an `<h1>` tag on any page. This is not a useful feature, it's just a toy example!

## Instructions

Follow these instructions to install and use the browser extension in Chrome:

1. Open Chrome's extension settings page
    * Open Chrome to the URL: `chrome://extensions`
1. Enable developer mode
    * Enable the *Developer mode* toggle control in the upper right corner of the page
1. Install the extension
    * Click the *Load unpacked* button
    * In the file finder window that opens, find this directory and click *Select*
    * It's installed!
1. Try it out!
    * Navigate to a page.
    * Click the blue puzzle icon in the top right of the window
    * Click "Change Header Text" extension entry
    * Wait for half a second (not sure why it's so slow)
    * Click the "Change header text" button
    * And the header text of the page should have changed!

## Notes

The web is awesome. Web browsers are extremely powerful, and Web APIs are mostly brilliantly documented by
the [MDN Web Docs](https://developer.mozilla.org/en-US/). As such, web extensions are a great way to continue to harness
the power of the web and do so by mostly re-using web APIs. Unfortunately, there are quite a bit of vendor-specific API
differences in browser extensions.

Compare and contrast the browser extension API differences by reading the docs:

* [Chrome developer docs: *Extensions: Getting started*](https://developer.chrome.com/docs/extensions/mv3/getstarted/)
* [MDN Web Docs: *Browser Extensions*](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
* [Safari developer docs: *Safari Web
  Extensions*](https://developer.apple.com/documentation/safariservices/safari_web_extensions)
* [Microsoft Edge documentation: *Extension concepts and
  architecture*](https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/getting-started/)

Note that there is a brighter future for standardized cross-browser extension development. Read this MDN Web Docs
article about
it:[Building a cross-browser extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension)
.

## Wish List

General clean ups, TODOs and things I wish to implement for this project:

* DONE How can we include the JavaScript source code to avoid `Uncaught ReferenceError: getHeaderText is not defined`?
* Look into "browser actions" instead of what I'm doing, which is a custom popup HTML document.
* Add message passing. I think message passing is a pretty important tool in extension design.

## Reference

Materials that I referenced and found useful while developing this project:

* [Chrome developer docs: extensions *API Reference*](https://developer.chrome.com/docs/extensions/reference/)
    * [*Content scripts*](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)
    * [*chrome.scripting*](https://developer.chrome.com/docs/extensions/reference/scripting/)
    * [*Message Passing*](https://developer.chrome.com/docs/extensions/mv3/messaging/)
        * Notably, there are three ways paths for message passing:
          1. From extension to content script
          1. From extension to another extension
          1. From extension to web page
