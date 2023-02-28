"use strict";

import { utilService } from "./util.service.js";
import { storageService } from "./async-storage.service.js";
import gBooks from "../assets/books.json" assert { type: "json" };

const BOOK_KEY = "bookDB";

_createBooks();

export const bookService = {
  query,
  get,
  remove,
  save,
  getEmptyBook,
};

function query(filterBy = {}) {
  return storageService.query(BOOK_KEY).then((books) => {
    if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, "i");
      books = books.filter((book) => regex.test(book.vendor));
    }
    if (filterBy.minSpeed) {
      books = books.filter((book) => book.maxSpeed >= filterBy.minSpeed);
    }
    return books;
  });
}

function get(bookId) {
  return storageService.get(BOOK_KEY, bookId);
}

function remove(bookId) {
  return storageService.remove(BOOK_KEY, bookId);
}

function save(book) {
  if (book.id) {
    return storageService.put(BOOK_KEY, book);
  } else {
    return storageService.post(BOOK_KEY, book);
  }
}

function getEmptyBook(title = "", amount = 0) {
  return { id: "", title, amount };
}

function _createBooks() {
  let books = utilService.loadFromStorage(BOOK_KEY);
  if (!books || !books.length) {
    utilService.saveToStorage(BOOK_KEY, gBooks);
  }
}

function _createbook(name, price = 250) {
  const book = getEmptyBook(name, price);
  book.id = utilService.makeId();
  return book;
}
