import * as studentModel from '../models/bookModel.js';



export const fetchAllStudents = async () => {

const students = await studentModel.fetch();
return students;

}