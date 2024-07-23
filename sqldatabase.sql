CREATE DATABASE bus_booking;

USE bus_booking;

CREATE TABLE bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  origin VARCHAR(255),
  destination VARCHAR(255),
  date DATE,
  tickets INT,
  busType VARCHAR(255),
  paymentMethod VARCHAR(255),
  totalCost INT
);
