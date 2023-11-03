const axios = require('axios');

const apiKey = '5028692a8de54807b74eab1781a826bd';
const baseUrl = 'https://legend.lnbits.com';
const paymentRequest = 'lnbc20n1pj5gt7gsp5qs6xlr55klefcwzxc9t6dp494nsx0n0kqdy02qcn3uc5q4xs6gcspp5cypwmckwrdldz5anartn67ay3rdlyh7evuwzrwd3exjaaqj7naksdq2f38xy6t5wvxqzjccqpjrzjqvqgcn3kd2g6f574a3y7pz2gq2nkjjj30y5tpfqxswky69mqlyn8kzuv75qq35sqqqqqqq86qqqqqqgq9q9qxpqysgqm29s6xptr5cu2rmxw4n8snuueyk0dhcwe3m0z9r95fme4wn0gsxryjmc4ajpqkahyc9xxlth7shsd7tpugte7dfjpxvulvlahrg9fzspmdnpzx'

async function fetchWalletInfo(req, res) {
  try {
    const response = await axios.get(
      `${baseUrl}/api/v1/wallet`, {
        headers: {
          'X-Api-Key': apiKey
        }
      });
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function fetchInvoice(req, res) {
  try {
    const response = await axios.post(
      `${baseUrl}/api/v1/payments`, {
        out: false,
        amount: 50
      }, {
        headers: {
          'X-Api-Key': apiKey
        }
      });
      const data = response.data;
      const bolt11 = response.data.payment_request;
      const paymentHash = response.data.payment_hash;
      console.log(response.data);

      // Verificar se a fatura foi paga
      async function checkPaymentStatus() {
        try {
          const paymentResponse = await axios.get(`${baseUrl}/api/v1/payments/${paymentHash}`, {
            headers: {
              'X-Api-Key': apiKey
            }
          });

          if (paymentResponse.data.paid) {
            console.log('Pago!');
          } else {
            console.log('Ainda não foi pago...');
            setTimeout(checkPaymentStatus, 1000); // Verificar novamente após 1 segundo
          }
        } catch (error) {
         console.error(error); 
        }
      }

      checkPaymentStatus();
      res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function payInvoice(apiKey, baseUrl, paymentRequest) {
  try {
    const response = await axios.post(
      `${baseUrl}/api/v1/payments`, {
        out: true,
        bolt11: paymentRequest
      }, {
        headers: {
          'X-Api-Key': apiKey
        }
      });
      const data = response.data;
      res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { fetchWalletInfo, fetchInvoice, payInvoice };