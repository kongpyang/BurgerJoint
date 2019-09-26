DROP DATABASE IF EXISTS burgersdb;
CREATE DATABASE burgersdb;

USE burgersdb;

-- Create the table tasks.
CREATE TABLE burgers(
  id AUTO_INCREMENT NOT NULL,
  burger_name varchar(50) NOT NULL,
  devoured BOOLEAN(50) NOT NULL,

PRIMARY KEY (id)
);


