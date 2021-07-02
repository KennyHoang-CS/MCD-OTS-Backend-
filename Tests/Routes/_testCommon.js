const db = require('../../db.js');

async function commonBeforeAll() {

    // noinspection SqlWithoutWhere
    await db.query('DELETE FROM breakfast');
    await db.query('DELETE FROM breakfast2');
    await db.query('DELETE FROM lunch');
    await db.query('DELETE FROM lunch2');
    await db.query('DELETE FROM mcvalue');
    await db.query('DELETE FROM salads');
    await db.query('DELETE FROM dessert');
    await db.query('DELETE FROM dessert2');
    await db.query('DELETE FROM lsm');
    await db.query('DELETE FROM beverages');
    await db.query('DELETE FROM beverages2');
    await db.query('DELETE FROM mccafe');
    await db.query('DELETE FROM happy_meals');
    await db.query('DELETE FROM customers');
    await db.query('DELETE FROM leaderboard');
    await db.query('DELETE FROM condiments');

    // insert some data. 
    await db.query(`
        INSERT INTO breakfast (name, isComboItem, comboItemNumber, sizeable, type, notComboAble, imageSrc)
        VALUES ('Egg McMuffin', TRUE, '1', FALSE, 'Breakfast', FALSE,'/images/eggMcMuffin.jpg')
    `);
    await db.query(`
        INSERT INTO breakfast2 (name, isComboItem, comboItemNumber, sizeable, type, notComboAble, imageSrc)
        VALUES ('Saus Biscuit', TRUE, '999', FALSE, 'Breakfast', FALSE, '/images/sausBis.jpg'
        )
    `);
    await db.query(`
        INSERT INTO lunch (name, isComboItem, comboItemNumber, sizeable, type, notComboAble, imageSrc)
        VALUES ('Big Mac', TRUE, '1', FALSE, 'Lunch', FALSE, '/images/Big-Mac.jpg')
    `);
    await db.query(`
        INSERT INTO lunch2 (name, isComboItem, comboItemNumber, sizeable, type, notComboAble, imageSrc)
        VALUES ('4 Nuggets', FALSE, '999', FALSE, 'Lunch', TRUE, '/images/Chicken-McNuggets.jpg')
    `);
    await db.query(`
        INSERT INTO mcvalue (name, isComboItem, comboItemNumber, sizeable, type, notComboAble, imageSrc)
        VALUES ('McChicken', FALSE, '999', FALSE, 'Lunch', TRUE, '/images/McChicken.jpg')
    `);
    await db.query(`
        INSERT INTO salads (name, isComboItem, comboItemNumber, sizeable, type, notComboAble, imageSrc)
        VALUES ('Ranch Salad', FALSE, '999', FALSE, 'Lunch', TRUE, '/images/ranch-salad.jpg')
    `);
    await db.query(`
        INSERT INTO happy_meals (name, sizeable, imageSrc)
        VALUES ('HM Hambrg', FALSE, '/images/h-mcdonalds-Hamburger.jpg')
    `);
    await db.query(`
        INSERT INTO lsm (name, sizeable, imageSrc)
        VALUES ('Classic Pack Big Mac', FALSE, '/images/classic-pack-big-mac.jpg')
    `);
    await db.query(`
        INSERT INTO condiments (name, sizeable, imageSrc)
        VALUES ('BBQ', FALSE, '/images/bbq-sauce.jpg')
    `);
    await db.query(`
        INSERT INTO customers (customerImage, fakeOrder)
        VALUES('/people/user1.jpg', 'Can I get 2 small fries. A big mac, a fish filet, 1 McChicken, and 1 McDouble. Thank you.')
    `);
    await db.query(`
        INSERT INTO dessert (name, sizeable, imageSrc)
        VALUES ('Apple Pie', FALSE, '/images/apple-pie.jpg')
    `);
    await db.query(`
        INSERT INTO dessert2 (name, sizeable, imageSrc)
        VALUES ('Blubry Mfn', FALSE, '/images/blueberry-muffin.jpg')
    `);
    await db.query(`
        INSERT INTO beverages (name, sizeable, imageSrc) 
        VALUES ('Coke', TRUE, '/images/coke.png')
    `);
    await db.query(`
        INSERT INTO beverages2 (name, sizeable, imageSrc) 
        VALUES ('Milk', FALSE, '/images/Low-Fat-Milk-Jug.jpg')
    `);
    await db.query(`
        INSERT INTO mccafe (name, sizeable, imageSrc) 
        VALUES ('Crml Machi', TRUE, '/images/t-mcdonalds-caramel-macchiato.jpg')
    `);
    

}

async function commonBeforeEach() {
    await db.query("BEGIN");
}

async function commonAfterEach() {
    await db.query("ROLLBACK");
}

async function commonAfterAll() {
    await db.end();
}

module.exports = {
    commonBeforeAll,
    commonBeforeEach,
    commonAfterEach,
    commonAfterAll
};