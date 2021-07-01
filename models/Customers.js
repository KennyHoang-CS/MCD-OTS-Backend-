"use strict";

const db = require('../db');

/** Related functions for customers. */

class Customers {

    /**
     * Get all customers. 
     * 
     * Returns [{ customerImage, fakeOrder }, ...]
     */

    static async getAll() {
        
        // create the query string. 
        let stringToQuery = `SELECT 
                            id,
                            customerImage, 
                            fakeOrder
                    FROM customers`;

        // make the query to db. 
        const customersResult = await db.query(stringToQuery);

        // return query results. 
        return customersResult.rows; 
    }

}

module.exports = Customers; 