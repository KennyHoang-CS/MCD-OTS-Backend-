"use strict"

/** Shared config for application; can be required at many places */

require ('dotenv').config(); 
require ('colors');

// Set up secret key.
const SECRET_KEY = process.env.SECRET_KEY || 'secret-dev';

// Set up port.
const PORT = +process.env.PORT || 3001; 

// Set up database. 
function getDatabaseURL() {
    return (process.env.NODE_ENV === "test")
        ? 'mcd_ots_test'
        : process.env.DATABASE_URL || 'mcd_ots';
}

// Speed up bcrypt during tests, since algo. safety isn't being tested. 
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === 'test' ? 1 : 12; 

console.log('MCD-OTS Config:'.green); 
console.log('SECRET KEY:'.yellow, SECRET_KEY);
console.log('PORT:'.yellow, PORT.toString());
console.log('BCRYPT_WORK_FACTOR'.yellow, BCRYPT_WORK_FACTOR);
console.log('DATABASE_URL:'.yellow, getDatabaseURL());
console.log('-------');

module.exports = {
    SECRET_KEY,
    PORT,
    BCRYPT_WORK_FACTOR,
    getDatabaseURL
}
