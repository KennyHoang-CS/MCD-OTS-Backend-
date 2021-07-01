"use strict";

const db = require('../db');

/** Related functions for drink items. */

class Drinks {

    /**
     * Get all drinks. 
     * 
     * Returns [{name, imageSrc}, ...]
     */

    static async getAll(menu) {

        let stringToQuery = `SELECT name, 
            sizeable,
            imageSrc
            FROM ${menu}`;
    
        // make the query to db. 
        const drinksResult = await db.query(stringToQuery);

        // return query results. 
        return drinksResult.rows; 
    }
}

module.exports = Drinks; 