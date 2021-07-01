"use strict";

const db = require('../db');

/** Related functions for food items. */

class FoodMenu {

    /**
     * Get all breakfast items. 
     * 
     * Returns [{name, isComboItem, comboItemNumber, imageSrc}, ...]
     */

    static async getAll(menu) {
        
        // create the string query. 
        let stringToQuery = `SELECT name, 
                            isComboItem AS is_combo_item,
                            comboItemNumber AS combo_item_number,
                            sizeable,
                            type,
                            notComboAble AS not_combo_able,
                            imageSrc
                    FROM ${menu}
                    ORDER BY combo_item_number`;

        // make the query to db. 
        const foodItemsResult = await db.query(stringToQuery);

        // return query results. 
        return foodItemsResult.rows; 
    }
}

module.exports = FoodMenu; 