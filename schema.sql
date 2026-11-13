CREATE DATABASE IF NOT EXISTS annapurna_db;
USE annapurna_db;

CREATE TABLE IF NOT EXISTS donations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    donor_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    message VARCHAR(500),
    status VARCHAR(30) NOT NULL DEFAULT 'Pledge received',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
