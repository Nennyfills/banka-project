const DATABASE = {
  ADMIN: [
    {
      type: "ADMIM",
      id: 1000001,
      firstname: "Admin1",
      surname: "Admin1",
      email: "admin@FileList.com",
      phoneNumber: "09080870892",
      password: "$2b$10$peUVM0nFUfGxIoOO55mdW.5bFkadvs8wIDIrikywodrnzvnsXqe52",
      registered: "12/3/2019",
      isadmin: true,
    },
  ],
  STAFF: [
    {
      type: "STAFF",
      id: 1000001,
      firstname: "Staff1",
      surname: "Staff1",
      email: "staff@FileList.com",
      phoneNumber: "09087670892",
      password: "$2b$10$peUVM0nFUfGxIoOO55mdW.5bFkadvs8wIDIrikywodrnzvnsXqe52",
      registered: "12/3/2019",
      isadmin: true,
    },
  ],
  USER: [
    {
      type: "USER",
      id: 1000001,
      firstname: "Joy",
      surname: "Fills",
      email: "joy@westlife.com",
      phoneNumber: "09078754434",
      password: "$2b$10$peUVM0nFUfGxIoOO55mdW.5bFkadvs8wIDIrikywodrnzvnsXqe52",
      registered: "12/3/2019",
      isadmin: true,
    },
    {
      type: "USER",
      id: 1000002,
      firstname: "Mark",
      surname: "Hibs",
      email: "mark@hotmail.com",
      phoneNumber: "09078754450",
      password: "$2b$10$peUVM0nFUfGxIoOO55mdW.5bFkadvs8wIDIrikywodrnzvnsXqe52",
      registered: "12/3/2019",

      isadmin: true,
    },
    {
      type: "USER",
      id: 1000003,
      firstname: "Jones",
      surname: "Bricks",
      email: "jones@yahoo.com",
      phoneNumber: "09097786540",
      password: "$2b$10$peUVM0nFUfGxIoOO55mdW.5bFkadvs8wIDIrikywodrnzvnsXqe52",
      registered: "12/3/2019",
      isadmin: true,
    },
    {
      type: "USER",
      id: 1000004,
      firstname: "Grace",
      surname: "Prince",
      email: "grace@gmail.com",
      phoneNumber: "09087678989",
      password: "$2b$10$peUVM0nFUfGxIoOO55mdW.5bFkadvs8wIDIrikywodrnzvnsXqe52",
      registered: "12/3/2019",
      isadmin: true,
    },
    {
      type: "USER",
      id: 1000005,
      firstname: "Amaka",
      surname: "Disappoint",
      email: "amaka@dills.ng",
      phoneNumber: "09098765438",
      password: "$2b$10$peUVM0nFUfGxIoOO55mdW.5bFkadvs8wIDIrikywodrnzvnsXqe52",
      registered: "12/3/2019",
      isadmin: false,
    },
    {
      type: "USER",
      id: 1000006,
      phoneNumber: "09080678989",
      email: "yes@gmail.com",
      firstname: "Yes",
      surname: "Pite",
      password: "$2b$10$peUVM0nFUfGxIoOO55mdW.5bFkadvs8wIDIrikywodrnzvnsXqe52",
      registered: "12/3/2019",
      isadmin: false,
    },
  ],
  ACCOUNT: [
    {
      id: 1000005,
      accountNumber: 3008989879,
      firstName: "Amaka",
      surName: "Disappoint",
      email: "amaka@dills.ng",
      phoneNumber: "09098765438",
      accountBalance: 31000.09,
      type: "current",
      dob: "04 / 02 / 1991",
      gender: "female",
      active: true,
    },
    {
      id: 1000006,
      accountNumber: 3008989876,
      phoneNumber: "09080678989",
      email: "yes@gmail.com",
      firstname: "Yes",
      surname: "Pite",
      accountBalance: 31000.09,
      type: "current",
      dob: "04 / 02 / 1991",
      gender: "male",
      active: true,
    },
  ],
  TRANSACTION: [
    {
      type: "TRANSACTION",
      transactionsId: 1000001,
      accountNumber: 3008989879,
      amount: 3000,
      casher: 1000001,
      transactionsType: "credit",
      accountBalance: 34000.09,
      createdAt: "2019 - 04 - 04T18: 23: 05.602Z",
    },
    {
      type: "TRANSACTION",
      transactionsId: 1000002,
      accountNumber: 3008989879,
      amount: 3000,
      casher: 1000001,
      transactionsType: "credit",
      accountBalance: 37000.09,
      createdAt: "2019 - 04 - 04T18: 23: 07.151Z",
    },
    {
      type: "TRANSACTION",
      transactionsId: 1000003,
      accountNumber: 3008989879,
      amount: 3000,
      casher: 1000001,
      transactionsType: "credit",
      accountBalance: 40000.09,
      createdAt: "2019 - 04 - 04T18: 23: 09.092Z",
    },
    {
      type: "TRANSACTION",
      transactionsId: 1000004,
      accountNumber: 3008989879,
      amount: 3000,
      casher: 1000001,
      transactionsType: "credit",
      accountBalance: 43000.09,
      createdAt: "2019 - 04 - 04T18: 23: 26.775Z",
    },
    {
      type: "TRANSACTION",
      transactionsId: 1000005,
      accountNumber: 3008989879,
      amount: 3000,
      casher: 1000001,
      transactionsType: "debit",
      accountBalance: 40000.09,
      createdAt: "2019 - 04 - 04T18: 23: 46.935Z",
    },
    {
      type: "TRANSACTION",
      transactionsId: 1000006,
      accountNumber: 3008989879,
      amount: 3000,
      casher: 1000001,
      transactionsType: "debit",
      accountBalance: 37000.09,
      createdAt: "2019 - 04 - 04T18: 23: 51.733Z",
    },
  ],
};
const database = DATABASE;
const userdb = [...DATABASE.USER];
const admindb = [...DATABASE.ADMIN];
const staff = [...DATABASE.STAFF];
const accountdb = [...DATABASE.ACCOUNT];
const transactionsId = [...DATABASE.TRANSACTION];

module.exports = {
  database, userdb, admindb, staff, accountdb, transactionsId,
};