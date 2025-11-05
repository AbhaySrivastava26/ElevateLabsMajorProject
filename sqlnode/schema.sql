
-- USE college;
CREATE TABLE users (
    id  VARCHAR(550)  PRIMARY KEY, 
    
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100),
    password VARCHAR(255) NOT NULL
);
