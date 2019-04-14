import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import env from "dotenv";
import DbControllers from "../dbControllers";

env.config();
exports.userLogin = (data, callbck) => {
  const requiredField = ["email", "password"];
  const requiredError = requiredField.filter(key => data[key] === undefined).map(value => `${value} is required`);
  if (requiredError.length !== 0) {
    callbck(requiredError, null);
    return;
  }
  const alluser = DbControllers.getAllUsers();
  const allAdmin = DbControllers.getAllAdmin();
  const allStaff = DbControllers.getAllStaff();

  const users = alluser.find(user => user.email === data.email);
  const admin = allAdmin.find(user => user.email === data.email);
  const staff = allStaff.find(user => user.email === data.email);
  const currentUser = users || admin || staff;

  
  if (!currentUser) {
    callbck("Auth Fail email", null);
    return;
  }
  // eslint-disable-next-line consistent-return
  bcrypt.compare(data.password, currentUser.password, (err, res) => {
    if (!res) {
      return callbck("Invalid email and password", null);
    }
    const token = jwt.sign(
      {
        email: currentUser.email,
        userId: currentUser.id,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      },
    );
    callbck(null, token);
  });

};
