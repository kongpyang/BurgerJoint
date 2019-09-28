CREATE DATABASE burgersdb;
USE burgersdb;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);