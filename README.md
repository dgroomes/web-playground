# web-playground

📚 Learning and experimenting with various web technologies.

---
**NOTE**:

This was developed on macOS and for my own personal use.

---

## Description

I'd like to learn web technologies like Shadow DOM, IndexedDB, and FlexBox. This repository is a vehicle for doing so.
It contains my source code, instructions, notes and plans.

## Instructions

* Run a local web server
  * `python3 -m http.server --directory src/`
* Open the browser
  * Open the browser and navigate to <http://localhost:8000>

# Wish List

General clean ups, TODOs and things I wish to implement for this project:

* DONE Implement a Shadow DOM example
* Implement an IndexedDB example

## Reference Materials

Materials that I referenced and found useful while developing this project:

* [MDN Web Docs: *How do you set up a local testing server?*](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server)
* [MDN Web Docs: *Using templates and slots*](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)
  * This particular point jumped out at me as particularly obscure but useful to know:
    > Note: An unnamed \<slot> will be filled with all of the custom element's top-level child nodes that do not have the slot attribute. This includes text nodes.
* [Python docs: *`http.server` -- HTTP servers*](https://docs.python.org/3/library/http.server.html)
* [Chrome Developers: *New in Chrome 90*](https://developer.chrome.com/blog/new-in-chrome-90/#declarative)
* [Web.dev: *Declarative Shadow DOM*](https://web.dev/declarative-shadow-dom/)
