require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDb = require("./utils/db");
const bodyParser = require('body-parser');
const url = require('url');
const educationRoutes = require('./Routes/education');
const skillRoutes = require('./Routes/skill');
const projectRoutes = require('./Routes/project');


const BASE_URL = process.env.BASE_URL;
const parsedUrl = url.parse(BASE_URL);
const basePath = parsedUrl.path;

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use('${basePath}/education', educationRoutes);
app.use('${basePath}/skills', skillRoutes);
app.use('${basePath}/projects', projectRoutes);


const PORT = 5000;
try {
    connectDb().then(()=>{
        app.listen(PORT,() => {
            console.log(`server is running at :${PORT} `);
        });
    });
} catch (error) {
    console.log("server",error);
}
