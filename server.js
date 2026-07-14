const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Cấu hình Pug làm View Engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src', 'views'));

// Cấu hình thư mục chứa file tĩnh (CSS, JS, hình ảnh)
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Middleware xử lý dữ liệu từ form gửi lên và JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sử dụng các routes chính
const routes = require('./src/routes');
app.use('/', routes);

// Khởi chạy server cục bộ (khi chạy local bằng node/nodemon)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
  });
}

// Export app để Vercel Serverless Functions nhận diện và xử lý
module.exports = app;
