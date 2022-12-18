interface Book {
    bookId: number,
    name: string,
    hash: string,
    content: Blob,
    last: number,
    total: number
}

export default Book;