# browser-extensions

A collection of simple browser extensions for learning purposes.

## Extensions

Each browser extension is defined in its own sub-directory. They include:

### `manifest-v3-chrome/`

This is a simple web extension for Chrome using the Manifest v3 API.

See the README in [manifest-v3-chrome/](manifest-v3-chrome/).

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
