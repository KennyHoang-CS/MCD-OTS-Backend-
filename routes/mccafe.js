"use strict";

const express = require('express');
const router = new express.Router(); 

const Drinks = require('../models/Drinks');

/** Routes for McCafe Drinks. */


/** GET / => 
 *  { Drinks: [ { name, imageSrc }, ...]}
 * 
 * 
 *  Authorization required: none 
 * 
*/

router.get('/', async function (req, res, next) {
    try {
        const items = await Drinks.getAll('mccafe');
        return res.json({ items });
    } catch (err) {
        return next(err); 
    }
});

module.exports = router; 