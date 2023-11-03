const axios = require('axios');
require('dotenv').config();

const userKey = process.env.USER_KEY;
const baseUrl = process.env.BASE_URL;

async function fetchWalletInfo(req, res) {
  try {
    const response = await axios.get(
      `${baseUrl}/api/v1/wallet`, {
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
      `${baseUrl}/api/v1/payments`, {
        out: false,
        amount: 1
      }, {
        headers: {
          'X-Api-Key': journalistKey
        }
      });
      const data = response.data;
      const paymentHash = response.data.payment_hash;
      console.log(response.data);

      // Verificar se a fatura foi paga
      async function checkPaymentStatus() {
        try {
          const paymentResponse = await axios.get(`${baseUrl}/api/v1/payments/${paymentHash}`, {
            headers: {
              'X-Api-Key': userKey
            }
          });
          if (paymentResponse.data.paid) {
            console.log('Pago!');
            res.status(200).json(data);
          } else {
            console.log('Ainda não foi pago...');
            setTimeout(checkPaymentStatus, 1000); // Verificar novamente após 1 segundo
          }
        } catch (error) {
         console.error(error);
         res.status(500).json({ message: error.message });
        }
      }

      checkPaymentStatus();
      res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function payInvoice(req, res) {
  try {
    const { payment_request } = req.body;
    const response = await axios.post(
      `${baseUrl}/api/v1/payments`, {
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