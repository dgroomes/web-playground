// This is the code to execute the extension functionality on the web page

let executeButton = document.getElementById("execute");

// When the "execute" button is clicked, invoke the changeHeaderText function inside the current page.
executeButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: changeHeaderText,
    });
});

// This will actually get executed on the normal web page! I don't understand how we have access to the "chrome" object
// while we are actually in the page though. This is different than Electron, which favors message passing instead of
// exposing APIs to the client side.
function changeHeaderText() {
    // let promise = getHeaderText() // Unfortunately this doesn't work. It will error with 'Uncaught ReferenceError: getHeaderText is not defined'
    let promise = new Promise(resolve => {
        chrome.storage.sync.get("headerText", data => {
            resolve(data.headerText)
        })
    })

    promise.then(headerText => {
        let headers = document.querySelectorAll("h1")
        for (let header of headers) {
            header.innerText = headerText
        }
    })
}
