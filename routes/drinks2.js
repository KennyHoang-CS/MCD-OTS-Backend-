"use strict";

const express = require('express');
const router = new express.Router(); 

const Drinks = require('../models/Drinks');

/** Routes for drinks 2. */


/** GET / => 
 *  { Drinks: [ { name, sizeable, imageSrc }, ...]}
 * 
 * 
 *  Authorization required: none 
 * 
*/

router.get('/', async function (req, res, next) {
    try {
        const items = await Drinks.getAll('beverages2');
        return res.json({ items });
    } catch (err) {
        return next(err); 
    }
});

module.exports = router; 