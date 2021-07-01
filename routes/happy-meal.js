"use strict";

const express = require('express');
const router = new express.Router(); 

// Happy Meals could have its own model, but for now use the Dessert model. 
const Desserts = require('../models/Desserts');

/** Routes for happy meal items. */


/** GET / => 
 *  { items: [ { name, imageSrc }, ...]}
 * 
 * 
 *  Authorization required: none 
 * 
*/

router.get('/', async function (req, res, next) {
    try {
        const items = await Desserts.getAll('happy_meals');
        return res.json({ items });
    } catch (err) {
        return next(err); 
    }
});

module.exports = router; 