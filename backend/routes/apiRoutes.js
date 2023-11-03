const express = require('express');

const router = express.Router();
const { fetchWalletInfo, createInvoice, payInvoice } = require('../controllers/apiController');

router.get('/wallet-info', fetchWalletInfo);

router.post('/invoice', createInvoice);

router.post('/pay-invoice', payInvoice);

module.exports = router;