import * as studentController from '../controllers/bookController.js';

import express from 'express';

const studentRoutes = express.Router();

studentRoutes.get('/', studentController.fetchAllStudents);

export default studentRoutes;
import * as bookController from '../controllers/bookController.js';
import express from "express";



const bookRoutes = express.Router();

bookRoutes.get('/all', bookController.fetchAllBooks);
bookRoutes.post('/', bookController.createBook);


export default bookRoutes;