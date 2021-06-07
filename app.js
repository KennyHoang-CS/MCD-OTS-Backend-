"use strict"; 

/** Express app for MCD-OTS */

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

/** Import the routes */
const foodItemsRoutes = require('./routes/FoodItems');


const app = express(); 

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use('/fooditems', foodItemsRoutes);

module.exports = app; 