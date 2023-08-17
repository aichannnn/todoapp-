CREATE DATABASE todooapp;

CREATE TABLE todoo(
    id SERIAL PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(30),
    progress VARCHAR(50) CHECK(progress IN ('in progress', 'hold', 'completed', 'other'))
);


CREATE TABLE users(
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);