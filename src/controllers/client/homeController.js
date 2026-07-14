exports.getHome = (req, res) => {
  res.render('client/index', {
    title: 'Hôn Nhân Hạnh Phúc - Cùng Bạn Xây Dựng Tổ Ấm',
    description: 'Chương trình tư vấn và kết nối giúp bạn kiến tạo cuộc sống gia đình bền vững, tràn đầy yêu thương.'
  });
};

exports.postContact = (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log('Nhận đăng ký tư vấn:', { name, email, phone, message });
  
  // Ở đây sau này sẽ gọi Model để lưu vào Database
  
  res.json({
    status: 'success',
    message: 'Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ lại sớm nhất.'
  });
};
