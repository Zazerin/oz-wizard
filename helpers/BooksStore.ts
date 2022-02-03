import fs from 'fs';
import { v1 as uuidv1 } from 'uuid';

export type BookDto = {
  id: string;
  dateCreated: string;
  title: string;
  author: string;
  pages: number;
  description: string;
}

let store: BookDto[] = require('data/books.json');

function create(book: Omit<BookDto, 'id' | 'dateCreated'>) {
  const newBook = {
    ...book,
    id: uuidv1(),
    dateCreated: new Date().toISOString()
  }

  store.push(newBook);
  saveData();
  
  return newBook;
}

function _delete(id: string) {
  store.filter(b => b.id !== id);
  saveData();

  return true;
}

export const booksStore = {
    getAll: () => store,
    getById: (id: string) => store.find(b => b.id === id),
    create,
    delete: _delete
};

function saveData() {
  fs.writeFileSync('data/books.json', JSON.stringify(store, null, 2));
}

export default booksStore;