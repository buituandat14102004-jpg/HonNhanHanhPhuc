const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/admin/dashboardController');

// Trang tổng quan dashboard của admin
router.get('/', dashboardController.getDashboard);

module.exports = router;
