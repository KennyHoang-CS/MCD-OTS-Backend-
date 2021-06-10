CREATE TABLE users (
    username VARCHAR(25) PRIMARY KEY,
    password TEXT NOT NULL
);

CREATE TABLE foodItems (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    type TEXT NOT NULL,
    isComboItem BOOLEAN DEFAULT FALSE,
    comboItemNumber VARCHAR(5), 
    imageSrc TEXT 
);

CREATE TABLE price (
    id SERIAL PRIMARY KEY,
    food_item_id INTEGER 
        REFERENCES foodItems ON DELETE CASCADE, 
    price INTEGER NOT NULL 
);

CREATE TABLE scores (
    id SERIAL PRIMARY KEY,
    username VARCHAR(25)
        REFERENCES users ON DELETE CASCADE,
    highestScore INTEGER,
    lowestScore INTEGER,
    averageScore FLOAT,
    accuracy FLOAT,
    ordersCount INTEGER 
);
