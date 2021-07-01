"use strict";

const express = require('express');
const router = new express.Router(); 

const Leaderboard = require('../models/Leaderboard');

/** Routes for leaderboard. */


/** GET / => 
 *  { items: [ { username, time }, ...]}
 * 
 * 
 *  Authorization required: none 
 * 
*/

router.get('/', async function (req, res, next) {
    try {
        const items = await Leaderboard.getAll();
        return res.json({ items });
    } catch (err) {
        return next(err); 
    }
});

router.post('/new', async function (req, res, next) {
    try {
        
        //console.log(JSON.stringify(req.body));
        //console.log(`username: `, req.body.data.username)
    
        const { username, time, formattedTime } = req.body.data; 

        console.log('user: ', username)
        console.log('time: ', time);
        await Leaderboard.create(username, time, formattedTime);
        
        return res.json({ message: 'Posted to leaderboards.' });
    } catch (err) {
        return next(err); 
    }
});


module.exports = router; 