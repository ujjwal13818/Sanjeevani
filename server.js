const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const morgan = require("morgan");
const cors = require("cors");
const connectDb = require('./config/db');
const { connect } = require('http2');

const app = express();
const PORT = process.env.PORT;

const initialize = async() => {
 try {
    await connectDb();
    console.log(`Server is up on ${PORT}`);
    
    
 } catch (error) {
    console.log("Error at server.js");
 }
}

initialize();