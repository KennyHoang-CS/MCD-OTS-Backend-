"use strict";

const db = require('../db');

/** Related functions for dessert items. */

class Desserts {

    /**
     * Get all desserts. 
     * 
     * Returns [{name, imageSrc}, ...]
     */

    static async getAll(menu) {
        
        // create the string query. 
        let stringToQuery = `SELECT name, 
                            imageSrc
                    FROM ${menu}`;

        // make the query to db. 
        const dessertsResult = await db.query(stringToQuery);

        // return query results. 
        return dessertsResult.rows; 
    }
}

module.exports = Desserts; 