const express = require('express');

const router = express.Router();
const { fetchWalletInfo, createInvoice, payInvoice, fetchWalletInfoAlby, createInvoiceAlby, payInvoiceAlby } = require('../controllers/apiController');

router.get('/wallet-info', fetchWalletInfo);
router.get('/wallet-info-alby', fetchWalletInfo);

router.post('/invoice', createInvoice);
router.post('/invoice-alby', createInvoiceAlby);

router.post('/pay-invoice', payInvoice);
router.post('/pay-invoice-alby', payInvoiceAlby);

module.exports = router;