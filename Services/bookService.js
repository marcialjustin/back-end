import * as bookModels from '../Models/bookModels.js';

export const fetchAllBooks = async() => {
    const books = await bookModels.fetch();
    return books;
}


const doesbookExist = async(book) => {
    let existing;
    if(Object.hasOwn(book, "id")){
        existing = await bookModels.findBookById(book.id);
    }else{
        existing = await bookModels.findBookByNameAndAuthor(book.name, book.author);
    }

    if(existing.length > 0) {
        return true;
    }
    
    return false;
}

export const createBook = async(book) =>{
    if(!book.name || !book.author){
        throw new Error ('Name and Author is required');       
    }

    const existing = await doesbookExist(book);

    if(existing){
        throw new Error ('Book already exist!');
    }
    const bookId = await bookModels.insert(book);
    return bookId;
}

//upsdate
export const updateBook = async(book) =>{
     if(!book.name || !book.author){
        throw new Error ('Name and Author is required');       
    }

    const existing = await doesbookExist(book);

    if(!existing){
        throw new Error ('Book does not exist!');
    }

    const updatedBook = await bookModels.update(book);
    return updatedBook;
}

//DELET
export const deleteBook = async(id) =>{
    const book = {id};

    const existing = await doesbookExist(book);

      if(!existing){
        throw new Error ('Book does not exist!');
    }
    
    const deletedBook = await bookModels.remove(id);
    return deletedBook;
}