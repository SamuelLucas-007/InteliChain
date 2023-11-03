const axios = require('axios');
require('dotenv').config();

const userKey = process.env.WALLET_HASH;
baseUrlAlby = process.env.BASE_URL_ALBY;

async function fetchWalletInfoAlby(req, res) {
  try {
    const response = await axios.get(
      `${baseUrlAlby}/balance`, {
        headers: {
          'Authorization': `Bearer ${userKey}`
        }
      });
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createInvoiceAlby(req, res) {
  try {
    const { journalistKey } = req.body;
    const response = await axios.post(
      `${baseUrlAlby}/invoices`, {
        amount: 1
      }, {
        headers: {
          'Authorization': `Bearer ${journalistKey}`
        }
      });
      const data = response.data;
      const paymentHash = response.data.payment_request;
      console.log(response.data);

    
      res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function payInvoiceAlby(req, res) {
  try {
    const { invoice } = req.body;

    const response = await axios.post(
      `${baseUrlAlby}/payments/bolt11`, {
        invoice,
      }, {
        headers: {
          'Authorization': `Bearer ${userKey}`
        }
      });
      const data = response.data;
      console.log(response.data)
      res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { fetchWalletInfoAlby, createInvoiceAlby, payInvoiceAlby };