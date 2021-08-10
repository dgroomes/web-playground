# web-playground

📚 Learning and experimenting with various web technologies.

---
**NOTE**:

This was developed on macOS and for my own personal use.

---

## Description

I'd like to learn web technologies like Shadow DOM, IndexedDB, and FlexBox. This repository is a vehicle for doing so.
It contains my source code, instructions, notes and plans.

## Standalone sub-projects

This repository illustrates different concepts, patterns and examples via standalone sub-projects. Each sub-project is
completely independent of the others and do not depend on the root project. This _standalone sub-project constraint_
forces the sub-projects to be complete and maximizes the reader's chances of successfully running, understanding, and
re-using the code.

The sub-projects include:

### `shadow-dom/`

A Shadow DOM example.

See the README in [shadow-dom/](shadow-dom/).

### `indexed-db/`

An IndexedDB example.

See the README in [indexed-db/](indexed-db/).

### `data-urls/`

A *Data URLs* example which shows how to download client side content as a file.

See the README in [data-urls/](data-urls/).

## Wish List

General clean ups, TODOs and things I wish to implement for this project:

* DONE Implement a Shadow DOM example
* DONE Implement an IndexedDB example
* Stop the browser from caching the index.html that might be cached in the browser. When you switch between projects,
  this happens.
