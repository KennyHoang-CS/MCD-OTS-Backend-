"use strict";

const express = require('express');
const router = new express.Router(); 

// LSM could have its own model, but for now use Dessert model. 
const Dessert = require('../models/Desserts');

/** Routes for LSM items. */


/** GET / => 
 *  { items: [ { name, imageSrc }, ...]}
 * 
 * 
 *  Authorization required: none 
 * 
*/

router.get('/', async function (req, res, next) {
    try {
        const items = await Dessert.getAll('lsm');
        return res.json({ items });
    } catch (err) {
        return next(err); 
    }
});

module.exports = router; 