require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDb = require("./utils/db");

const bodyParser = require('body-parser');

const educationRoutes = require('./Routes/education');
const skillRoutes = require('./Routes/skill');
const projectRoutes = require('./Routes/project');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost:27017/portfolio');

// const db = mongoose.connection;
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// const personalInfoRouter = require('./routes/personalInfo');
// app.use('/api/personalInfo', personalInfoRouter);

app.use('/api/education', educationRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/projects', projectRoutes);


const PORT = 5000;
try {
    connectDb().then(()=>{
        app.listen(PORT,() => {
            console.log(`server is running at :${PORT}`);
        });
    });
} catch (error) {
    console.log("server",error);
}
