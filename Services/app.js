import express from "express";
import bookRoutes from '../Routes/bookRoutes.js';
import studentRoutes from '../Routes/studentRoutes.js';

const app = express();

app.use(express.json());

app.use('/books', bookRoutes);
app.use('/book', bookRoutes);
app.use('/students', studentRoutes);

const port = 3000;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

server.on('error', (error) => {
    console.error(`Failed to listen on port ${port}: ${error.message}`);
    process.exitCode = 1;
});