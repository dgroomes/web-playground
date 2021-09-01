// This script initializes some data when the extension is first installed. I think this runs in a service worker (I've
// never used service workers before).

importScripts('/persistence.js')

chrome.runtime.onInstalled.addListener(() => {
    console.log(`Hello from the 'init.js' script. This is a 'console.log' statement.
  To find the console, go to the 'chrome://extensions' page and fine the 'Inspect view service worker' line text and click 'service worker'. A dev tools window will show up.`);
    saveHeaderText("Hello from web-playground! Find more info in the README.")
});
