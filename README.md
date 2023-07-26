# web-playground

📚 Learning and experimenting with various web technologies.

**NOTE**: This project was developed on macOS. It is for my own personal use.


## Description

I'd like to learn web technologies like Shadow DOM, IndexedDB, and FlexBox. This repository is a vehicle for doing so.
It contains my source code, instructions, notes and plans.


## Standalone subprojects

This repository illustrates different concepts, patterns and examples via standalone subprojects. Each subproject is
completely independent of the others and do not depend on the root project. This _standalone subproject constraint_
forces the subprojects to be complete and maximizes the reader's chances of successfully running, understanding, and
re-using the code.

The subprojects include:

### `shadow-dom/`

A Shadow DOM example.

See the README in [shadow-dom/](shadow-dom/).

### `indexed-db/`

An IndexedDB example.

See the README in [indexed-db/](indexed-db/).

### `data-urls/`

A *Data URLs* example which shows how to download client side content as a file.

See the README in [data-urls/](data-urls/).

### `css/`

Learning CSS snippet-by-snippet and hopefully committing some of it to memory.

See the README in [css/](css/).

### `browser-extensions/`

A simple Chrome browser extension for learning purposes.

See the README in [browser-extensions/](browser-extensions/).


## Wish List

General clean-ups, TODOs and things I wish to implement for this project:

* [x] DONE Implement a Shadow DOM example
* [x] DONE Implement an IndexedDB example
* [ ] Stop the browser from caching the index.html that might be cached in the browser. When you switch between projects,
  this happens.
