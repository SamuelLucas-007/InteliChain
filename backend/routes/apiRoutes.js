const express = require('express');

const router = express.Router();
const { fetchWalletInfo, fetchInvoice, payInvoice } = require('../controllers/apiController');

router.get('/wallet-info', fetchWalletInfo);

router.post('/invoice', fetchInvoice);

router.post('/pay-invoice', payInvoice);

module.exports = router;