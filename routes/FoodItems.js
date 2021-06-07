"use strict";

const express = require('express');
const router = new express.Router(); 

const FoodItems = require('../models/FoodItems');

/** Routes for Food Items. */


/** GET / => 
 *  { foodItems: [ { name, isComboItem, comboItemNumber, imageSrc }, ...]}
 * 
 * 
 *  Authorization required: none 
 * 
*/

router.get('/', async function (req, res, next) {
    try {
        const foodItems = await FoodItems.getAll();
        return res.json({ foodItems });
    } catch (err) {
        return next(err); 
    }
});

module.exports = router; 