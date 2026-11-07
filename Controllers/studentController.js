import * as studentService from '../Services/studentService.js';


export const fetchAllStudents = async (req, res) => {

const students = await studentService.fetchAllStudents();
res.status(200).json(students);

}

export const deleteStudent = async (req, res) => {
	const id = Number(req.params.id);
	if (!Number.isSafeInteger(id) || id <= 0) {
		return res.status(400).json({ success: false, error: 'A valid student ID is required' });
	}

	try {
		const deletedRows = await studentService.deleteStudent(id);
		if (deletedRows === 0) {
			return res.status(404).json({ success: false, error: 'Student not found' });
		}

		return res.status(204).end();
	} catch (e) {
		console.error(e);
		return res.status(500).json({ success: false, error: 'Internal Server Error' });
	}
};