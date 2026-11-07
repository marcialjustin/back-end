import * as studentModel from '../Models/studentModels.js';



export const fetchAllStudents = async () => {

const students = await studentModel.fetch();
return students;

}

export const deleteStudent = async (id) => {
	return studentModel.remove(id);
};