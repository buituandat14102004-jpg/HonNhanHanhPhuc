const express = require('express');
const router = express.Router();
const homeController = require('../controllers/client/homeController');

// Trang chủ Landing Page
router.get('/', homeController.getHome);

// Nhận thông tin đăng ký liên hệ từ Landing Page
router.post('/contact', homeController.postContact);

module.exports = router;
