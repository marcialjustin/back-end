import * as bookService from '../Services/bookService.js';


export const fetchAllBooks = async (req, res) => {

const books = await bookService.fetchAllBooks();
res.status(200).json(books);

}

export const createBook = async (req, res) => {
    try {
        const title = req.body?.title ?? req.body?.name;
        const author = req.body?.author;

        if (typeof title !== 'string' || !title.trim() || typeof author !== 'string' || !author.trim()) {
            return res.status(400).json({
                success: false,
                error: 'title (or name) and author are required'
            });
        }

        const book = { title: title.trim(), author: author.trim() };
        const bookId = await bookService.createBook(book);

        res.status(200).json({
            success: true,
            message: bookId
        });
    } catch (e) {
        console.error(e);

        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

export const editBook = async (req, res) => {
    const { title, author } = req.body;
    const { id } = req.params;
    const book = { id: parseInt(id, 10), title, author };

    try{
        const updatedBook = await bookService.updateBook(book);
        res.status(200).json({
            success: true,
            message: updatedBook
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

export const deleteBook = async (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isSafeInteger(id) || id <= 0) {
        return res.status(400).json({ success: false, error: 'A valid book ID is required' });
    }

    try {
        const deletedRows = await bookService.deleteBook(id);
        if (deletedRows === 0) {
            return res.status(404).json({ success: false, error: 'Book not found' });
        }

        return res.status(204).end();
    } catch (e) {
        console.error(e);
        return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};