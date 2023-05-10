CREATE DATABASE user_database;
USE user_database;

CREATE TABLE users (
  id integer PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO users (username, password)
VALUES 
('saurabh.ranjan', 'test_password1'),
('ranjan.saurabh', 'test_password2');