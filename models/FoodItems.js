"use strict";

const db = require('../db');

/** Related functions for food items. */

class FoodItems {

    /**
     * Get all food items. 
     * 
     * Returns [{name, isComboItem, comboItemNumber, imageSrc}, ...]
     */

    static async getAll() {
        
        // create the string query. 
        let stringToQuery = `SELECT name, 
                            isComboItem AS is_combo_item,
                            comboItemNumber AS combo_item_number,
                            imageSrc
                    FROM foodItems
                    ORDER BY name`;

        // make the query to db. 
        const foodItemsResult = await db.query(stringToQuery);

        // return query results. 
        return foodItemsResult.rows; 
    }
}

module.exports = FoodItems; 