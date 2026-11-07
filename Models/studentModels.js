import pool from '../Config/db.js';

//Retrieve
export const fetch = async () => {

const [rows] = await pool.query ("SELECT * FROM student");
return rows;

}

export const remove = async (id) => {
	const [result] = await pool.query(
		"DELETE FROM student WHERE ID = ?",
		[id]
	);
	return result.affectedRows;
};