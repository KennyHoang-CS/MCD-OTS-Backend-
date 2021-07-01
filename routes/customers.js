"use strict";

const express = require('express');
const router = new express.Router(); 

const Customers = require('../models/Customers');

/** Routes for Customers. */


/** GET / => 
 *  { items: [ { customerImage, fakeOrder }, ...]}
 * 
 * 
 *  Authorization required: none 
 * 
*/

router.get('/', async function (req, res, next) {
    try {
        const items = await Customers.getAll();
        return res.json({ items });
    } catch (err) {
        return next(err); 
    }
});

module.exports = router; 