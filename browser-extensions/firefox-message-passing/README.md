# firefox-message-passing

This is a Firefox web extension that illustrates message passing.


## Description

This extension will pass messages between all three layers: the web page, a content script, and a background script.

A special web page must be served from a local web server and this web page is used to exercise the extension.

This example is adapted from the official–and excellent–[MDN web extension examples](https://github.com/mdn/webextensions-examples/tree/master/page-to-extension-messaging).  


## Instructions

Follow these instructions to install and run the extension in FireFox:

1. Open FireFox to the debug page
    * Open FireFox
    * Paste and go to this URL: <about:debugging#/runtime/this-firefox>
2. Load the plugin
    * Click the button with the words *Load Temporary Add-on…*
    * In the file finder window that opens, find the file `extension/manifest.json` and click *Open*
    * It's installed!
3. Run a local web server:
    * ```shell
      python3 -m http.server --directory web/
      ```
4. Open the browser
    * Open the browser and navigate to <http://localhost:8000>
5. Pass some messages!
    * Follow the instructions on the page to send messages between the three layers.
    * Open the console to see the results


## Reference

* [MDN Web Docs: *Sharing objects with page scripts*](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts)
  * This tripped me up. I had assumed that the barrier between the web page's JavaScript execution environment and a
    content script's JavaScript execution environment to be complete. Because of security. But this is not the case for
    Firefox.
* [MDN Web Docs: *Window.postMessage()*](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
  * The data should be serialized using the *structured clone algorithm* although I'm noticing that the object is in a
    memory space that's shared between the page and the content-script because the event listener callback that gets
    invoked by the page actually side-effects the message object, and when the event listener callback of the content-script
    script gets invoked for the same message, the side-effected message appears instead of the original message! I'm not
    explaining this well, but still. I'm working around this by copying objects as needed instead of side effecting the
    object.
* [MDN Web Docs: *The structured clone algorithm*](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
* [MDN Web Docs: *runtime.sendMessage()*](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage)
   * Notice how the third argument to this function is an "options" object:
     ```
     var sending = browser.runtime.sendMessage(
       extensionId,             // optional string
       message,                 // any
       options                  // optional object
     )
     ```
     So how is it possible that my example extension passes a callback function as the third function, and it actually
     works? UPDATE: I've changed the call site to actually pass the callback function as the *fourth* argument and the
     extension continues to work. No fourth parameter is even documented! I believe Firefox is supporting this
     fourth parameter for compatibility with Chrome's implementation of [runtime.sendMessage()](https://developer.chrome.com/docs/extensions/reference/runtime/#method-sendMessage).
* [MDN Web Docs: *runtime.onMessage*](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)
  > Use this event to listen for messages from another part of your extension.
