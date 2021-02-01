const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const cors = require('cors');
const mongoose = require('mongoose');

const postRoutes =require('./routes/posts.js');

require('dotenv').config();

// Server
const app = express();
const port = process.env.PORT || 5000;

// Database
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Database connected")
});

// Middleware
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use('/posts', postRoutes);

// Import mongoose models
const { Post } = require("./models/post");

// Use client
app.use(express.static(path.join(__dirname, "/client/build")));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    // send index.html
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

// Start server
app.listen(port, () => {
    console.log('Server is running on port ', port);
});