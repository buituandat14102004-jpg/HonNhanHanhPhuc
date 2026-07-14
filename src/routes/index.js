const express = require('express');
const router = express.Router();

const clientRoutes = require('./clientRoutes');
const adminRoutes = require('./adminRoutes');

// Định tuyến cho Client (Landing Page)
router.use('/', clientRoutes);

// Định tuyến cho Admin (Trang quản trị sau này)
router.use('/admin', adminRoutes);

module.exports = router;
