import pool from '../Config/db.js';

//Retrieve
export const fetch = async () => {

const [rows] = await pool.query ("SELECT * FROM book");
return rows;

}

export const insert = async (book) => {
    const [result] = await pool.query(
        "INSERT INTO book (title, author) VALUES (?, ?)",
        [book.title, book.author]
    );

    return result.insertId;
};

//update
export const update = async (book) => {
    const [result] = await pool.query(
        "UPDATE book SET title = ?, author = ? WHERE ID = ?",
        [book.title, book.author, book.id]
    );
    return result.affectedRows;
};

export const remove = async (id) => {
    const [result] = await pool.query(
        "DELETE FROM book WHERE ID = ?",
        [id]
    );
    return result.affectedRows;
};