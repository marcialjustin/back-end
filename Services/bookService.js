import * as bookModel from '../Models/bookModels.js';



export const fetchAllBooks = async () => {

const books = await bookModel.fetch();
return books;

}


    export const createBook = async (book) => {
        const bookId = await bookModel.insert(book);
        return bookId;
    }

export const updateBook = async (book) => {
    return bookModel.update(book);
};

export const deleteBook = async (id) => {
    return bookModel.remove(id);
};