# Schema
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(30) NOT NULL,
	consumed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
SELECT * FROM burgers;
SELECT * FROM burgers WHERE consumed = 1;

UPDATE burgers SET consumed = 1 WHERE id = 2;
UPDATE burgers SET consumed = 1 WHERE id = 1;
UPDATE burgers SET consumed = 1 WHERE id = 4;

DELETE FROM burgers WHERE id = 15;


