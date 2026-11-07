import * as studentController from '../Controllers/studentController.js';

import express from 'express';

const studentRoutes = express.Router();

studentRoutes.get('/', studentController.fetchAllStudents);
studentRoutes.delete('/:id', studentController.deleteStudent);

export default studentRoutes;
