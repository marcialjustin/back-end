import pool from '../config/db.js';

//Retrieve
export const fetch = async () => {

const [rows] = await pool.query ("SELECT * FROM book");
return rows;

}

export const insert = async (book) => {
    const [result] = await pool.query(
        "INSERT INTO book (name, author) VALUES (?, ?)",
        [book.name, book.author]
    );

    return result.insertId;
};