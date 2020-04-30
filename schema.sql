DROP DATABASE IF EXISTS air_bnb;

CREATE DATABASE air_bnb;

\c air_bnb;

CREATE TABLE homes (
  houseID SERIAL PRIMARY KEY,
  price INT,
  rating REAL,
  reviews INT,
  guest_limit INT,
  cleaning_fee INT,
  service_fee INT,
  tax INT
);

-- CREATE TABLE reservations (
--   ID PRIMARY KEY,
--   houseID REFERENCES homes(houseID),
--   start_day DATE,
--   end_day Date
-- );
     -- home,price,rating,reviews,guest,clean,serv,tax
INSERT INTO homes VALUES (1, 10, 1, 1, 1, 1, 1, 1);
INSERT INTO homes VALUES (2, 20, 2, 2, 2, 2, 2, 2);
INSERT INTO homes VALUES (3, 30, 3, 3, 3, 3, 3, 3);
INSERT INTO homes VALUES (4, 40, 4, 4, 4, 4, 4, 4);
INSERT INTO homes VALUES (5, 50, 5, 5, 5, 5, 5, 5);


