# manifest-v3-chrome

This is a simple web extension for Chrome using the Manifest v3 API.


## Design

This subproject contains the source code for a simple Chrome browser extension named "Change Header Text".

The extension will change the text of an `<h1>` tag on any page. This is not a useful feature, it's just a toy example!


## Instructions

Follow these instructions to install and use the browser extension in Chrome:

1. Open Chrome's extension settings page
    * Open Chrome to the URL: `chrome://extensions`
2. Enable developer mode
    * Enable the *Developer mode* toggle control in the upper right corner of the page
3. Install the extension
    * Click the *Load unpacked* button
    * In the file finder window that opens, find this directory and click *Select*
    * It's installed!
4. Try it out!
    * Navigate to a page.
    * Click the puzzle icon in the top right of the window
    * Click "Change Header Text" extension entry
    * Wait for half a second (not sure why it's so slow)
    * Click the "Change header text" button
    * And the header text of the page should have changed!
