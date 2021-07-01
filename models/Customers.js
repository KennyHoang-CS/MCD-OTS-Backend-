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

    /**
     * Get answers for all fake customer orders.  
     */

    static async getAnswers() {
        
        // create the query string. 
        let stringQuery = `SELECT 
                            id,
                            name, 
                            count, 
                            drinkalert AS drink_alert
                            FROM answers`;

        // make query to db.
        const answerResults = await db.query(stringQuery);

        // return query results. 
        return answerResults.rows; 
    }
}

module.exports = Customers; 