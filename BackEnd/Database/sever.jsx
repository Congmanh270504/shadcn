const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

// Kết nối tới MongoDB
mongoose.connect('mongodb://localhost:27017/Pratice1', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => {
    console.error('Error connecting to MongoDB:', error);
});
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Định nghĩa một schema và model
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    major: String
});
const carSchema = new mongoose.Schema({
    name: String,
    year: String,
    agency: String
});
const dbStudents = mongoose.model('students', studentSchema);
const dbCar = mongoose.model('cars', carSchema);

// Route để lấy tất cả items từ collection Students
app.get('/students', async (req, res) => {
    try {
        const items = await dbStudents.find();
        console.log('Items fetched successfully:', items);
        res.json(items);
    } catch (err) {
        console.error('Error fetching items:', err);
        res.status(500).send(err);
    }
});
app.get('/car', async (req, res) => {
    try {
        const items = await dbCar.find();
        console.log('Items fetched successfully:', items);
        res.json(items);
    } catch (err) {
        console.error('Error fetching items:', err);
        res.status(500).send(err);
    }
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});