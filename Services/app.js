import express from "express";
import bookRoutes from './routes/bookRoutes.js';
import bookRoutes from './routes/ ./routes/ studentRoutes.js';


const app = express();


app.use('/books', bookRoutes);
app.use('/students', studentRoutes);

try {
    const port = 3000;
    app.listen(port, () => {
        console.log(listening to port ${port}...);
    });
} catch (e) {
    console.log(e);
}