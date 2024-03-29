interface Book {
  bookId: number;
  name: string;
  hash: string;
  content: Blob;
  last: number;
  total: number;
}

export interface BookMetada {
  bookId: number;
  name: string;
  hash: string;
  read: number;
  total: number;
  size: string;
  lastInteraction: number,
}

export default Book;