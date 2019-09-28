CREATE DATABASE burgersdb;
USE burgersdb;

CREATE TABLE burgers (
	id int AUTO_INCREMENT NOT NULL,
	burger_name varchar(50) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);