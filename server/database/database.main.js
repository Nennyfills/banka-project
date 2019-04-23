const evn = require("dotenv");
const pg = require("pg");


evn.config();

const config = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: process.env.DBCONECTION,
};

const pool = new pg.Pool(config);

pool.on("connect", () => {
  console.log("connected to the db");
});


/**
 * Create Tables
 */

const createTableUser = () => {
  const UserTable = `CREATE TABLE IF NOT EXISTS
   users(
        id SERIAL PRIMARY KEY,
        permission VARCHAR(10) NOT NULL,
        firstName VARCHAR(20) NOT NULL,
        surname VARCHAR(20) NOT NULL,
        phonenumber VARCHAR(15) NOT NULL UNIQUE,
        email VARCHAR(20) NOT NULL UNIQUE,
        password VARCHAR(300) NOT NULL,
        isAdmin BOOLEAN NOT NULL
         )`;
  pool.query(UserTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};


const createTableAccount = () => {
  const accountTable = `CREATE TABLE IF NOT EXISTS
     account(
        id SERIAL PRIMARY KEY,
        ownerId INTEGER NOT NULL REFERENCES users(id)  ON DELETE CASCADE,
        accountNumber NUMERIC(10,0) NOT NULL UNIQUE,
        email VARCHAR(20) NOT NULL,
        balance FLOAT NOT NULL,
        type VARCHAR(10) NOT NULL,
        status VARCHAR(10) NOT NULL,
        createdAt TIMESTAMPTZ
         )`;
  pool.query(accountTable)
    .then((res) => { 
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

const createTableTransaction = () => {
  const transactionTable = `CREATE TABLE IF NOT EXISTS
     transaction(
        id SERIAL PRIMARY KEY,
        accountNumber NUMERIC(10,0) REFERENCES account(accountNumber) ON DELETE CASCADE,
        amount FLOAT NOT NULL,
        cashier INTEGER  NOT NULL REFERENCES  users(id) ON DELETE CASCADE,
        depositor VARCHAR(10) NOT NULL,
        type VARCHAR(10) NOT NULL,
        oldBalance FLOAT,
        newBalance FLOAT,
        createdAt TIMESTAMPTZ
)`;
  pool.query(transactionTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};


/**
 * Drop Tables
 */
const dropTables = () => {
  const queryText = "DROP TABLE IF EXISTS";
  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

pool.on("remove", () => {
  console.log("client removed");
  process.exit(0);
});

module.exports = {
  createTableUser,
  createTableAccount,
  createTableTransaction,
  dropTables,
};
require("make-runnable");