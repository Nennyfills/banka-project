/* eslint-disable radix */
import Transaction from "../database/models/transactions";


/**
*
* @param {object} req.query get startDate, endDate, from req.query to aid serach transaction by date;
* @param {object} req.params get accountnumber from req.params to get all transaction on one account;
* @param {object} res reponspond with an error message on failure status code or return data on success;
*/

class TransactionsController {
  static transactionByAccountnumber(req, res) {
    const { startDate, endDate } = req.query;
    const accountNumber = Number(req.params.accountnumber);
    Transaction.findTransactionByAccountnumber({ accountNumber, startDate, endDate }, (err, data) => {
      if (err) {
        res.status(404).json({
          status: 404,
          message: err.message,
        });
        return;
      }
      res.status(200).json({
        status: 200,
        message: "Request was successfully",
        data,
      });
    });
  }

  /**
*
* @param {object} req.params get transaction Id from req.params to get specify transaction by id;
* @param {object} res reponspond with an error message on failure status code or return data on success;
*/

  static transactionById(req, res) {
    const transactionId = parseInt(req.params.transactionId);
    Transaction.findTransactionById({ transactionId, req }, (err, data) => {
      if (err) {
        res.status(404).json({
          status: 404,
          message: err.message,
        });
        return;
      }
      res.status(200).json({
        status: 200,
        message: "Request was successfully",
        data,
      });
    });
  }
}

export default TransactionsController;
