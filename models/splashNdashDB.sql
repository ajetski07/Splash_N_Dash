DROP DATABASE IF EXISTS splash_n_dashDB;

CREATE DATABASE splash_n_dashDB;

USE splash_n_dashDB;

-- CREATE TABLE hosts (
--   id INT NOT NULL AUTO_INCREMENT,
--   host VARCHAR(100) NULL,
--   address VARCHAR(100) NULL,
--   price DECIMAL(10,2) NULL,
--   quantity INT NULL,
--   amenities VARCHAR(100) NULL,
--   PRIMARY KEY (id)
-- );

INSERT INTO hosts (host, address, amenities,createdAt,updatedAt)
VALUES ("Adam Jeske", "1848 2nd Avenue, Sacramento, CA, 95818", 5.00, 1, "Toilet, Bidet, Hand Sanitizer, Deodorant, Body Spray",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

INSERT INTO hosts (host, address, price, quantity, amenities)
VALUES ("Edgar Ramos", "2320 D Street, Sacramento, CA, 95816", 8.00, 2, "Toilet, Bidet, Shower, Soap, Hand Sanitizer, Deodorant, Body Spray");

INSERT INTO hosts (host, address, price, quantity, amenities)
VALUES ("Simon Lamoureux", "2400 F Street, Sacramento, CA, 95816", 4.50, 1, "Toilet, Soap, Hand Sanitizer, Deodorant, Body Spray");

INSERT INTO hosts (host, address, price, quantity, amenities)
VALUES ("Walter Sobcheck", "924 Summer Wind Way, Sacramento, CA, 95831", 6.50, 2, "Toilet, Shower, Hot Towel, Soap, Hand Sanitizer, Deodorant, Body Spray, Breath Mints");

INSERT INTO hosts (host, address, price, quantity, amenities)
VALUES ("Jeffery Lebowski", "1901 G Street, Sacramento, CA, 95816", 2.75, 2, "Toilet, Bathtub, Soap, Papertowels");

INSERT INTO hosts (host, address, price, quantity, amenities)
VALUES ("Jesse Pinkman", "1731 T Street, Sacramento, CA, 95811", 1.75, 1, "Out House, Hand Sanitizer, Papertowels");
