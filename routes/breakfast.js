"use strict";

const express = require('express');
const router = new express.Router(); 

const FoodMenu = require('../models/FoodMenu');

/** Routes for Breakfast Items. */


/** GET / => 
 *  { items: [{name, isComboItem, comboItemNumber, sizeable, type, not_combo_able, imageSrc}, ...] }
 * 
 * 
 *  Authorization required: none 
 * 
*/

router.get('/', async function (req, res, next) {
    try {
        const items = await FoodMenu.getAll('breakfast');
        return res.json({ items });
    } catch (err) {
        return next(err); 
    }
});

module.exports = router; 