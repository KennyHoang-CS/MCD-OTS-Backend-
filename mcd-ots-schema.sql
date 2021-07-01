CREATE TABLE users (
    username VARCHAR(25) PRIMARY KEY,
    password TEXT NOT NULL
);

CREATE TABLE breakfast (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    isComboItem BOOLEAN DEFAULT FALSE,
    comboItemNumber VARCHAR(5), 
    sizeable BOOLEAN DEFAULT FALSE,
    type TEXT NOT NULL,
    notComboAble BOOLEAN DEFAULT TRUE, 
    imageSrc TEXT 
);

CREATE TABLE breakfast2 (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    isComboItem BOOLEAN DEFAULT FALSE,
    comboItemNumber VARCHAR(5), 
    sizeable BOOLEAN DEFAULT FALSE,
    type TEXT NOT NULL,
    notComboAble BOOLEAN DEFAULT TRUE, 
    imageSrc TEXT 
);

CREATE TABLE lunch (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    isComboItem BOOLEAN DEFAULT FALSE,
    comboItemNumber VARCHAR(5), 
    sizeable BOOLEAN DEFAULT FALSE,
    type TEXT NOT NULL,
    notComboAble BOOLEAN DEFAULT TRUE, 
    imageSrc TEXT 
);

CREATE TABLE lunch2 (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    isComboItem BOOLEAN DEFAULT FALSE,
    comboItemNumber VARCHAR(5), 
    sizeable BOOLEAN DEFAULT FALSE,
    type TEXT NOT NULL,
    notComboAble BOOLEAN DEFAULT TRUE, 
    imageSrc TEXT 
);

CREATE TABLE mcvalue (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    isComboItem BOOLEAN DEFAULT FALSE,
    comboItemNumber VARCHAR(5), 
    sizeable BOOLEAN DEFAULT FALSE,
    type TEXT NOT NULL,
    notComboAble BOOLEAN DEFAULT TRUE, 
    imageSrc TEXT 
);

CREATE TABLE salads (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    isComboItem BOOLEAN DEFAULT FALSE,
    comboItemNumber VARCHAR(5), 
    sizeable BOOLEAN DEFAULT FALSE,
    type TEXT NOT NULL,
    notComboAble BOOLEAN DEFAULT TRUE, 
    imageSrc TEXT 
);

CREATE TABLE dessert (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    sizeable BOOLEAN DEFAULT FALSE,
    imageSrc TEXT 
);

CREATE TABLE dessert2 (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    sizeable BOOLEAN DEFAULT FALSE,
    imageSrc TEXT 
);

CREATE TABLE LSM (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    sizeable BOOLEAN DEFAULT FALSE,
    imageSrc TEXT 
);

CREATE TABLE condiments (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    sizeable BOOLEAN DEFAULT FALSE,
    imageSrc TEXT 
);

CREATE TABLE beverages (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    sizeable BOOLEAN DEFAULT FALSE,
    imageSrc TEXT 
);

CREATE TABLE beverages2 (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    sizeable BOOLEAN DEFAULT FALSE,
    imageSrc TEXT 
);

CREATE TABLE mccafe (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    sizeable BOOLEAN DEFAULT FALSE,
    imageSrc TEXT 
);

CREATE TABLE happy_meals (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    sizeable BOOLEAN DEFAULT FALSE,
    imageSrc TEXT 
);

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    customerImage TEXT,
    fakeOrder TEXT
);

CREATE TABLE answers (
    id INTEGER 
        REFERENCES customers ON DELETE CASCADE,
    name TEXT, 
    count INTEGER, 
    drinkAlert TEXT    
);

CREATE TABLE leaderboard (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30),
    time INTEGER DEFAULT 0,
    formatted_time TEXT
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
