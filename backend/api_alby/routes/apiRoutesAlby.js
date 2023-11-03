const express = require('express');

const router = express.Router();
const { fetchWalletInfoAlby, createInvoiceAlby, payInvoiceAlby } = require('../controllers/apiControllerAlby');
const { sendToNetwork, getFromNetwork } = require('../controllers/relayController');

router.get('/get-posts-relays', getFromNetwork);

router.post('/send-posts-relays', sendToNetwork);

router.get('/wallet-info', fetchWalletInfoAlby);

router.post('/invoice', createInvoiceAlby);

router.post('/pay-invoice', payInvoiceAlby);

module.exports = router;