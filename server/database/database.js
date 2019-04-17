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
      password: "$2a$10$EfwMJnjkSIV7HXhCZ3SPR.COcbPGLf7WA4Xu0OSV8XAuW.z.6Qqm2",
      isadmin: false,
    },
    {
      type: "USER",
      id: 1000002,
      firstname: "Mark",
      surname: "Hibs",
      email: "mark@hotmail.com",
      phoneNumber: "09078754450",
      password: "$2b$10$peUVM0nFUfGxIoOO55mdW.5bFkadvs8wIDIrikywodrnzvnsXqe52",
      isadmin: false,
    }
  ],
  ACCOUNT: [
    {
      id: 1000001,
      accountNumber: 3008989879,
      ownerId: 1000001,
      phoneNumber: "09098765438",
      accountBalance: 31000.09,
      type: "current",
      status: "active",
      createdAt: "2019 - 04 - 04T18: 23: 05.602Z",
    },
    {
      id: 1000001,
      accountNumber: 4008989879,
      ownerId: 1000001,
      phoneNumber: "09098765438",
      accountBalance: 31000.09,
      type: "current",
      status: "dormant",
      createdAt: "2019 - 04 - 04T18: 23: 05.602Z",
    },
    {
      id: 1000006,
      accountNumber: 3008989876,
      phoneNumber: "09080678989",
      ownerId: 1000002,
      accountBalance: 31000.09,
      type: "current",
      status: "active",
      createdAt: "2019 - 04 - 04T18: 23: 05.602Z",
    },
  ],
  TRANSACTION: [
    {
      key: "TRANSACTION",
      accountNumber: 3008989879,
      transactionsId: 1000001,
      amount: 3000,
      casher: 1000001,
      type: "credit",
      oldBalance: 31000.09,
      newBalance: 34000.09,
      createdAt: "2019 - 04 - 04T18: 23: 05.602Z",
    },
    {
      key: "TRANSACTION",
      accountNumber: 3008989879,
      transactionsId: 1000002,
      amount: 3000,
      casher: 1000001,
      type: "debit",
      oldBalance: 7000.09,
      newBalance: 4000.09,
      createdAt: "2019 - 04 - 04T18: 23: 07.151Z",
    },
  ],
};
const database = DATABASE;
const userdb = [...DATABASE.USER];
const admindb = [...DATABASE.ADMIN];
const staff = [...DATABASE.STAFF];
const accountdb = [...DATABASE.ACCOUNT];
const transactionsdb = [...DATABASE.TRANSACTION];

module.exports = {
  database, userdb, admindb, staff, accountdb, transactionsdb,
};