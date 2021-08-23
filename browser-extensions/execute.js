// This is the code to execute the extension functionality on the web page

let executeButton = document.getElementById("execute");

// When the "execute" button is clicked, invoke the changeHeaderText function inside the current page.
executeButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    // Load JavaScript files into the execution context. Unfortunately, this must be done once for each file because
    // the "files" field, which appears to take more than one file, only supports one file at a time. See the docs at
    // https://developer.chrome.com/docs/extensions/reference/scripting/#type-ScriptInjection
    //
    // In this case, we are only loading "persistence.js", but for a more complex case we might need to load many JavaScript
    // files.
    await chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ["persistence.js"]
    })

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: changeHeaderText,
    });
});

// This function gets serialized and then deserialized for injection. This reminds me of Apache Spark. You have to change
// your mental model here and know that the implementation of this function can't depend on things like local variables or
// other functions defined in this file.
//
// Ultimately, this function will get executed on the normal web page! I don't understand how we have access to the "chrome"
// object while we are actually in the page though. This is different than Electron, which favors message passing instead of
// exposing APIs to the client side.
function changeHeaderText() {
    let promise = getHeaderText()

    promise.then(headerText => {
        let headers = document.querySelectorAll("h1")
        for (let header of headers) {
            header.innerText = headerText
        }
    })
}
