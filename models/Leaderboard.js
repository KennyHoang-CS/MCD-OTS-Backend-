"use strict";

const db = require('../db');

/** Related functions for Leaderboard. */

class Leaderboard {

    /**
     * Get all users from leaderboard. 
     * 
     * Returns [{ username, time }, ...]
     */

    static async getAll() {
        
        // create the query string. 
        let stringToQuery = `SELECT 
                            id,
                            username,
                            formatted_time
                    FROM leaderboard
                    ORDER BY time`;

        // make the query to db. 
        const leaderboardResult = await db.query(stringToQuery);

        // return query results. 
        return leaderboardResult.rows; 
    }

    static async create(username, time, formattedTime) {
        
        console.log('FROM CREATE: ', username, time, formattedTime);

        // create the query string. 
        let stringToQuery = `INSERT INTO leaderboard (username, time, formatted_time)
                            VALUES ($1, $2, $3)
                            RETURNING username, formatted_time`;

        // make the query to db. 
        const leaderboardResult = await db.query(stringToQuery, [username, time, formattedTime]);

        // return query results. 
        return leaderboardResult.rows[0]; 
    }
}

module.exports = Leaderboard; 