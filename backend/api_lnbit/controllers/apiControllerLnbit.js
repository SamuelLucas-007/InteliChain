const axios = require('axios');
require('dotenv').config();

const userKey = process.env.WALLET_HASH;
const baseUrl = process.env.BASE_URL;

userKeyAlby = process.env.USER_KEY_ALBY;
journalistKeyAlby = process.env.JOURNALIST_KEY_ALBY;
baseUrlAlby = process.env.BASE_URL_ALBY;

async function fetchWalletInfo(req, res) {
  try {
    console.log(userKey)
    const response = await axios.get(
      `${baseUrl}/wallet`, {
        headers: {
          'X-Api-Key': userKey
        }
      });
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createInvoice(req, res) {
  try {
    const { journalistKey } = req.body;
    const response = await axios.post(
      `${baseUrl}/payments`, {
        out: false,
        amount: 1
      }, {
        headers: {
          'X-Api-Key': journalistKey // deve vir do frontend
        }
      });
      const data = response.data;
      const paymentHash = response.data.payment_hash;
      console.log(response.data);
      res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function payInvoice(req, res) {
  try {
    const { payment_request } = req.body;
    const response = await axios.post(
      `${baseUrl}/payments`, {
        out: true,
        bolt11: payment_request
      }, {
        headers: {
          'X-Api-Key': userKey
        }
      });
      const data = response.data;
      res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { fetchWalletInfo, createInvoice, payInvoice };