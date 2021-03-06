import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import "@babel/polyfill";
import jwt from "jsonwebtoken";
import app from "../app";

chai.use(chaiHttp);


describe("Transaction", () => {
  let token;
  beforeEach(() => {
    token = `Bearer ${jwt.sign({
      type: "ADMIN",
      email: "admin01@gmail.com",
    },
    process.env.SECRET_KEY,
    { expiresIn: "7d" })}`;
  });

  it("should not view a user transaction with wrong acount number", (done) => {
    chai.request(app)
      .get(`/api/v1/${30898976}/transactions`)
      .set("Authorization", token)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  let userToken;
  beforeEach(() => {
    userToken = `Bearer ${jwt.sign({
      type: "USER",
      email: "canny@gmail.com",
      id: 4,
    },
    process.env.SECRET_KEY,
    { expiresIn: "7d" })}`;
  });
  it("should view a user transaction with right id", (done) => {
    chai.request(app)
      .get(`/api/v1/transactions/${4}`)
      .set("Authorization", userToken)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal("Request was successfully");
        done();
      });
  });

  it("should not view a user transaction with wrong id", (done) => {
    chai.request(app)
      .get(`/api/v1/transactions/${100000190}`)
      .set("Authorization", userToken)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal("Request was successfully");
        expect(res.body).to.have.property("data");
        done();
      });
  });
  it("User can get transaction by date if accurate date is given", (done) => {
    chai.request(app)
      .get("/api/v1/3001219111/transactions?startDate=2019-05-02&endDate=2019-05-02")
      .set("Authorization", userToken)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it("User can't get transaction by date if date not found", (done) => {
    chai.request(app)
      .get("/api/v1/transactions?startDate=2019-02-02&endDate=2019-03-02")
      .set("Authorization", userToken)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.message).to.equal("Page not found");
        done();
      });
  });
});
