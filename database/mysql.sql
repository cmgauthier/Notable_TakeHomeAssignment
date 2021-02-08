DROP DATABASE IF EXISTS notable;

CREATE DATABASE notable;

USE notable;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    amount DECIMAL(10 , 2 ) NULL,
    PRIMARY KEY (id)
);

-- writing data to sql mannually
INSERT INTO users (name) VALUES ('XXXX');

-- // save data from csv or text file to database

LOAD DATA INFILE '/users.csv'
INTO TABLE users
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;