"use strict";

const express = require('express');
const router = new express.Router(); 

const Dessert = require('../models/Desserts');

/** Routes for dessert items. */


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