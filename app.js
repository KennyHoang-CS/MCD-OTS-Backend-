"use strict"; 

/** Express app for MCD-OTS */

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

/** Import the routes */
const breakfastRoutes = require('./routes/breakfast');
const breakfast2Routes = require('./routes/breakfast2');
const lunchRoutes = require('./routes/lunch');
const lunch2Routes = require('./routes/lunch2');
const mcvalueRoutes = require('./routes/mcvalue');
const saladRoutes = require('./routes/salads');
const drinksRoutes = require('./routes/drinks');
const specialDrinkRoutes = require('./routes/drinks2');
const mccafeRoutes = require('./routes/mccafe');
const dessertRoutes = require('./routes/dessert');
const dessert2Routes = require('./routes/dessert2');
const happyMealRoutes = require('./routes/happy-meal');
const lsmRoutes = require('./routes/lsm');
const condiments = require('./routes/condiments');

const customerRoutes = require('./routes/customers');
const leaderboardRoutes = require('./routes/leaderboard');


const app = express(); 

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use('/breakfast', breakfastRoutes);
app.use('/breakfast-2', breakfast2Routes);
app.use('/lunch', lunchRoutes);
app.use('/lunch-2', lunch2Routes);
app.use('/mcvalue', mcvalueRoutes);
app.use('/salad', saladRoutes);
app.use('/drinks', drinksRoutes);
app.use('/drinks-2', specialDrinkRoutes);
app.use('/mccafe', mccafeRoutes);
app.use('/dessert', dessertRoutes);
app.use('/dessert-2', dessert2Routes);
app.use('/happy-meal', happyMealRoutes);
app.use('/lsm', lsmRoutes);
app.use('/condiments', condiments);

app.use('/customers', customerRoutes);
app.use('/leaderboard', leaderboardRoutes);

module.exports = app; 